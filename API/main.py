from flask import Flask, jsonify
from flask_cors import CORS
from flask_restx import Api, Resource, reqparse, Namespace
from module import (
    convert,
    update_data,
    country_output,
    group_output,
    create_save_model,
    predict_future,
    output_data,
    output_news,
    output_learn,
)

app = Flask(__name__)
CORS(app)

api = Api(app, version="1.1", title="VKSTOCKTRACK")

crawling_ns = api.namespace("crawling", description="Crawling operations")
output_ns = api.namespace("output", description="Output operations")
predict_ns = api.namespace("predict", description="Predict operations")

ticker_parser = reqparse.RequestParser()
ticker_parser.add_argument("ticker", required=True, type=str)


@crawling_ns.route("/api/update_data")
@crawling_ns.doc(
    description="Crawl data and save as a CSV file with the ticker name. \nTicker_name : ^KS11, 055550.KS, ^VNINDEX.VN, VCB.VN"
)
class GetDataResource(Resource):
    @api.expect(ticker_parser)
    def get(self):
        args = ticker_parser.parse_args()
        ticker_name = args["ticker"]
        result = update_data(ticker_name)
        return {"update_data": result.to_dict()}


@output_ns.route("/api/get_data")
@output_ns.doc(
    description="Retrieve data from a CSV file\nTicker_name : ^KS11, 055550.KS, ^VNINDEX.VN, VCB.VN"
)
class GetDataFromCSVResource(Resource):
    @api.expect(ticker_parser)
    def get(self):
        args = ticker_parser.parse_args()
        ticker_name = args["ticker"]
        result = output_data(ticker_name)
        return {"data": result.to_dict()}


@output_ns.route("/api/country_output")
@output_ns.doc(
    description="Multiple outputs including previous close, today's open, today's volume, average volume, range of days, range of 52 weeks, MA 50, and MA 200.\nTicker Name : ^KS11, ^VNINDEX.VN"
)
class CountryOutputResource(Resource):
    @api.expect(ticker_parser)
    def get(self):
        args = ticker_parser.parse_args()
        ticker = args["ticker"]
        result = country_output(ticker)
        return {"country_output": result}


@output_ns.route("/api/group_output")
@output_ns.doc(
    description="Multiple outputs including previous close, today's open, today's volume, average volume, range of days, range of 52 weeks, MA 50, MA 200, Beta, enterprise value, Buy and Sell.\nTicker Name : 055550.KS, VCB.VN"
)
class GroupOutputResource(Resource):
    @api.expect(ticker_parser)
    def get(self):
        args = ticker_parser.parse_args()
        ticker = args["ticker"]
        result = group_output(ticker)
        return {"group_output": result}


@output_ns.route("/api/get_news")
@output_ns.doc(description="Retrieve news data")
class GetNewsFromExcelResource(Resource):
    def get(self):
        result = output_news()
        return {"news_data": result.to_dict()}


@output_ns.route("/api/get_learn")
@output_ns.doc(description="Retrieve learn data")
class GetLearnFromExcelResource(Resource):
    def get(self):
        result = output_learn()
        return {"learn_data": result.to_dict()}


@predict_ns.route("/api/create_save_model")
@predict_ns.doc(
    description="Create and save the model\nTicker Name : ^KS11, 055550.KS, ^VNINDEX.VN, VCB.VN"
)
class CreateSaveModelResource(Resource):
    @api.expect(ticker_parser)
    def get(self):
        args = ticker_parser.parse_args()
        file_name = args["ticker"]
        create_save_model(file_name)
        return {"message": "Model creation and saving successful."}


@predict_ns.route("/api/predict_future")
@predict_ns.doc(
    description="Predict the future stock price.\nTicker Name : ^KS11, 055550.KS, ^VNINDEX.VN, VCB.VN"
)
class PredictFutureResource(Resource):
    @api.expect(ticker_parser)
    def get(self):
        args = ticker_parser.parse_args()
        file_name = args["ticker"]
        future = predict_future(file_name)
        return {"future": future.to_dict()}


if __name__ == "__main__":
    app.run(debug=False)
