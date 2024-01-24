'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { Area } from '@ant-design/plots';

import * as S from './Compare';

import { symbols } from '@/app/models/data/stocks';
import { usePathname } from 'next/navigation';
import dayjs from 'dayjs';
import { Country, Symbols } from '@/app/models/enum/symbols';
import { Tabs, TabsProps } from 'antd';
import { convertDataPredict } from '@/app/helpers/logic/predict';
import LoadingProgressScreen from '@/app/components/core/common/LoadingPredict/page';

export const PredictDetail = ({ t }: { t: any }) => {
  const pathname = usePathname();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [time, setTime] = useState<number>(4);

  const symbol = symbols?.find(
    (symbol) => symbol?.slug === pathname?.split('/')?.pop(),
  );

  const timeStep = useMemo(() => [25, 80, 180, 250, 300 * 5], []);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '1M',
    },
    {
      key: '2',
      label: '3M',
    },
    {
      key: '3',
      label: '6M',
    },
    {
      key: '4',
      label: '1Y',
    },
    {
      key: '5',
      label: '5Y',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // First API call
        await fetch(
          `http://127.0.0.1:5000/predict/api/create_save_model?ticker=${symbol?.ticker}`,
        );

        // Second API call only if the first one is successful
        const res = await fetch(
          `http://127.0.0.1:5000/predict/api/predict_future?ticker=${symbol?.ticker}`,
        );
        const data = await res.json();
        const dataConvert = convertDataPredict(
          data?.future,
          pathname?.split('/')?.[1],
          symbol?.country || Country?.VietNam,
          symbol?.ticker !== Symbols.VnIndex &&
            symbol?.ticker !== Symbols?.KoSpi,
        );

        setData(dataConvert);
      } catch (err) {
        // Handle the error if needed
      } finally {
        setLoading(false);
      }
    };

    if (symbol) {
      fetchData();
    }
  }, [pathname, symbol, symbol?.ticker]);

  const dataPredict = useMemo(() => {
    return data
      ?.slice(data?.length - timeStep?.[time])
      ?.map((item) =>
        dayjs(item?.date).isBefore(dayjs())
          ? { ...item, name: 'past' }
          : { ...item, name: 'predict' },
      );
  }, [data, time, timeStep]);

  const config = {
    data: dataPredict || [],
    xField: 'date',
    yField: 'price',
    seriesField: 'name',

    color: ['#16c784', '#ea3943'],
    xAxis: {
      label: {
        style: {
          fontSize: 14,
          fontFamily: 'Nunito',
        },
        offsetY: 0,
        formatter: (text: any) => {
          return dayjs(text)?.format('DD/MM/YYYY');
        },
        tickInterval: 1,
      },
    },
    yAxis: {
      label: {
        style: {
          fontSize: 14,
          fontFamily: 'Nunito',
        },
        offsetX: -10,
      },
      tickLineInterval: 20,
    },
    legend: {
      position: 'bottom',
      marker: {
        symbol: 'circle',
      },
      itemName: false,
      itemValue: {
        style: {
          fontSize: 14,
          fontFamily: 'Nunito',
        },
      },

      itemHeight: 20,
      maxRow: 3,
      offsetY: 10,
    },

    custom: true,
    smooth: false,
  };

  if (!symbol) return null;

  return (
    <S.ChartWrap>
      {loading ? (
        <LoadingProgressScreen />
      ) : (
        <>
          <h5 className="title">
            {`${t('predict.title')}`}
            <span className="name"> {symbol?.name}</span>
            <span className="symbol">{symbol?.symbol}</span>
          </h5>
          <p className="description">{t('predict.subTitle')}</p>
          <Tabs
            onChange={(tab) => {
              setTime(Number(tab) - 1);
            }}
            moreIcon={null}
            defaultActiveKey="5"
            items={items}
            className="tab-time"
          />

          <Area {...(config as any)} />
        </>
      )}
    </S.ChartWrap>
  );
};
