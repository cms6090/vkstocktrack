# 라이브러리 불러오기
import requests
import yfinance as yf
import pandas as pd
from yahooquery import Ticker
import numpy as np
import cloudscraper
from pycaret.time_series import *
from datetime import datetime, timedelta
import os


def convert(value):  # 끝이 M, K일때 숫자로 변환
    if isinstance(value, str):  # 입력값이 문자열인 경우만 처리
        if "K" in value:
            return float(value.replace("K", "")) * 1000
        if "M" in value:
            return float(value.replace("M", "")) * 1000000
    return value


def update_data(ticker_name):
    if ticker_name == "^VNINDEX.VN":
        scraper = cloudscraper.create_scraper()
        html = scraper.get(
            "https://www.investing.com/indices/vn-historical-data"
        ).content
        dfs = pd.read_html(html)

        if len(dfs) > 0:
            df = dfs[0]
        else:
            print("데이터를 찾을 수 없습니다.")
            return None

        df = df.drop(columns=["Change %"])
        df = df.fillna(0)
        df = df.rename(columns={"Vol.": "Volume", "Price": "Close"})
        df["Volume"] = df["Volume"].apply(convert)
        df["Date"] = pd.to_datetime(df["Date"], format="%m/%d/%Y")
        df.set_index("Date", inplace=True)

        data = pd.read_csv(ticker_name + ".csv", index_col="Date")
        data.index = pd.to_datetime(data.index)
        data = data.fillna(0)
        merged_data = pd.concat([data, df])

        for col in ["Open", "High", "Close", "Low"]:
            merged_data[col] = pd.to_numeric(
                merged_data[col].astype(str).str.replace(",", ""), errors="coerce"
            )

        # Remove duplicates if any.
        merged_data = merged_data.loc[~merged_data.index.duplicated(keep="first")]

        # Sort the dataframe based on date.
        merged_data.sort_index(inplace=True)
        merged_data.index = merged_data.index.astype(str)
        merged_data = merged_data.fillna(0)
        # Save to csv.
        merged_data.to_csv(ticker_name + ".csv", index=True)
        return merged_data
    else:
        data = yf.download(ticker_name)
        data = data.sort_values(by="Date", ascending=True)
        data = data.drop(columns=["Adj Close"])
        data.to_csv(ticker_name + ".csv", encoding="utf-8-sig")
        data.index = data.index.astype(str)
        return data


def output_data(ticker_name):
    data = pd.read_csv(ticker_name + ".csv")
    data = data.set_index("Date")
    if data["Open"].iloc[-1] == 0:
        data = data[:-1]
    return data


def country_output(ticker_name):
    data = pd.read_csv(ticker_name + ".csv").dropna()
    if data["Open"].iloc[-1] == 0:
        data = data[:-1]
    data.index = pd.to_datetime(data["Date"])

    output = {}

    output["previous_close"] = "{:,.2f}".format(data.iloc[-1]["Close"])
    output["today_open"] = "{:,.2f}".format(data.iloc[-1]["Open"])
    output["today_volume"] = "{:,.2f}".format(data.iloc[-1]["Volume"])

    recent_data = data[-50:]
    recent_data["Volume"].mean()
    output["avg_volume"] = "{:,.0f}".format(recent_data["Volume"].mean())

    last_row = data.iloc[-1]
    today_range = (
        "{:,.2f}".format(last_row["Low"]) + " - " + "{:,.2f}".format(last_row["High"])
    )
    output["range_days"] = today_range

    last_year_data = data.last("52W")
    year_range = (
        "{:,.2f}".format(last_year_data["Low"].min())
        + " - "
        + "{:,.2f}".format(last_year_data["High"].max())
    )
    output["range_52"] = year_range

    output["MA_50"] = round(data["Close"].rolling(window=50).mean().iloc[-1], 1)
    output["MA_200"] = round(data["Close"].rolling(window=200).mean().iloc[-1], 1)

    return output


def group_output(ticker_name):
    data = pd.read_csv(ticker_name + ".csv").dropna()
    if data["Open"].iloc[-1] == 0:
        data = data[:-1]
    data.index = pd.to_datetime(data["Date"])

    output = {}

    output["previous_close"] = "{:,.2f}".format(data.iloc[-1]["Close"])
    output["today_open"] = "{:,.2f}".format(data.iloc[-1]["Open"])
    output["today_volume"] = "{:,.2f}".format(data.iloc[-1]["Volume"])

    recent_data = data[-50:]
    recent_data["Volume"].mean()
    output["avg_volume"] = "{:,.0f}".format(recent_data["Volume"].mean())
    last_row = data.iloc[-1]
    today_range = (
        "{:,.2f}".format(last_row["Low"]) + " - " + "{:,.2f}".format(last_row["High"])
    )
    output["range_days"] = today_range

    last_year_data = data.last("52W")
    year_range = (
        "{:,.2f}".format(last_year_data["Low"].min())
        + " - "
        + "{:,.2f}".format(last_year_data["High"].max())
    )
    output["range_52"] = year_range

    output["MA_50"] = round(data["Close"].rolling(window=50).mean().iloc[-1], 1)
    output["MA_200"] = round(data["Close"].rolling(window=200).mean().iloc[-1], 1)

    tick = yf.Ticker(ticker_name)

    output["Beta"] = tick.info["beta"]

    num = tick.info["enterpriseValue"]
    if num >= 10**12:  # 천억 이상
        output["enterprise"] = str(round(num / 10**12, 2)) + "T"
    elif num >= 10**8:  # 백만 이상
        output["enterprise"] = str(round(num / 10**8, 2)) + "M"
    else:
        output["enterprise"] = str(num)

    output["Buy"] = tick.info["bid"]
    output["Sell"] = tick.info["ask"]

    return output


def output_news():
    data = pd.read_excel("market.xlsx")
    data = data.set_index("Date")
    return data


def output_learn():
    data = pd.read_excel("learn.xlsx")
    data = data.set_index("Indicators")
    return data


def create_save_model(file_name):
    # 데이터 불러오기 및 전처리
    stock_data = pd.read_csv(file_name + ".csv")
    stock_data = stock_data["Close"]
    stock_data = stock_data[:-1]
    stock_data = stock_data.dropna()

    # 설정 변수
    FH = 14

    # 실험 설정
    exp_auto = TSForecastingExperiment()
    exp_auto.setup(data=stock_data, fh=FH, session_id=123)

    # ARIMA
    best = exp_auto.create_model("arima")

    # 모델 플롯 및 저장
    final_auto_model = exp_auto.finalize_model(best)

    if not os.path.exists("model_data"):
        os.makedirs("model_data")

    model_path = os.path.join("model_data", f"{file_name}_total")
    _ = exp_auto.save_model(final_auto_model, model_path)


def predict_future(file_name):
    # 데이터 불러오기 및 전처리
    stock_data = pd.read_csv(file_name + ".csv")
    stock_data = stock_data["Close"]
    stock_data = stock_data[:-1]
    stock_data = stock_data.dropna()

    # 설정 변수
    FH = 14

    # 실험 설정
    exp_auto = TSForecastingExperiment()
    exp_auto.setup(data=stock_data, fh=FH, session_id=123)

    # 저장된 모델 불러오기
    model_path = os.path.join("model_data", f"{file_name}_total")
    final_auto_model = exp_auto.load_model(model_path)

    # 최종 미래 예측
    future_preds = exp_auto.predict_model(final_auto_model)

    # 내일 날짜를 기준으로
    stock = pd.read_csv(file_name + ".csv")
    stock.index = pd.DatetimeIndex(stock["Date"])
    stock.drop(["Date", "Open", "High", "Low", "Volume"], axis=1, inplace=True)

    start_date = stock.index[-1] + timedelta(days=1)
    dates = pd.bdate_range(start_date, periods=14)

    future_preds = future_preds.rename(columns={"y_pred": "Close"})
    future_preds.index = dates

    future = pd.concat([stock, future_preds], axis=0)
    return future
