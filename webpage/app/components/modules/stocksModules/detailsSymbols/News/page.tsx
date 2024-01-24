import React, { useState, useEffect, useMemo } from 'react';
import { Area } from '@ant-design/plots';

import * as S from './Compare';
import {
  DataChartNewsStockInterface,
  convertDataChartNewsStock,
  convertDataNews,
} from '@/app/helpers/logic/news';
import { symbols } from '@/app/models/data/stocks';
import { usePathname } from 'next/navigation';
import dayjs from 'dayjs';
import { Country, Symbols } from '@/app/models/enum/symbols';

export const NewsDetail = ({ t }: { t: any }) => {
  const pathname = usePathname();
  const [data, setData] = useState<DataChartNewsStockInterface[]>([]);
  const [dataNews, setDataNews] = useState<any[]>([]);

  const symbol = symbols.find(
    (symbol) => symbol?.slug === pathname.split('/').pop(),
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:5000/output/api/get_data?ticker=${symbol?.ticker}`,
        );
        const data = await res.json();

        const dataConvert = convertDataChartNewsStock({
          rawdata: data?.data,
          lang: pathname?.split('/')?.[1],
          country: symbol?.country || Country?.VietNam,
          rate:
            symbol?.ticker !== Symbols.VnIndex &&
            symbol?.ticker !== Symbols?.KoSpi,
        });

        const resNews = await fetch(
          `http://127.0.0.1:5000/output/api/get_news?ticker=${symbol?.ticker}`,
        );
        const dataNews = await resNews.json();

        const dataNewsConvert = convertDataNews(
          dataNews?.news_data,
          pathname?.split('/')?.[1],
        );

        setData(dataConvert);
        setDataNews(dataNewsConvert);
      } catch (err) {
        //
      }
    };

    if (symbol) {
      fetchData();
    }
  }, [pathname, symbol, symbol?.ticker]);

  const dateDataNewsChart = useMemo(() => {
    return dataNews.map((item) => item?.date);
  }, [dataNews]);

  const dataNewsConvert = () => {
    const dataInit: any = [];

    data?.forEach((item, index: number) => {
      if (
        dateDataNewsChart?.includes(item?.date) ||
        index === 0 ||
        index === data?.length - 1 ||
        index % 10 === 0
      ) {
        dataInit?.push(item);
      }
    });

    return dataInit;
  };

  // const formatTimestampToDate = (time: number, day?: boolean) => {
  //   const date = dayjs.unix(Number(time));

  //   if (day) {
  //     return `${date.day()}/${Number(date.month()) + 1}/${date.year()}`;
  //   }
  //   return `${date.month() + 1}/${date.year()}`;
  // };

  const config = {
    data: dataNewsConvert() || [],
    xField: 'date',
    yField: 'price',
    point: {
      size: 3,
      shape: (item: any) => {
        if (dateDataNewsChart?.includes(item?.date)) {
          return 'circle';
        }

        return 'line';
      },
      style: (item: any) => {
        if (dateDataNewsChart?.includes(item?.date)) {
          return { fill: '#ea3943', stroke: '#ffffff', lineWidth: 2 };
        }
        return { fill: 'white', stroke: '#5B8FF9', lineWidth: 0 };
      },
    },

    pattern: { lineWidth: 3, stroke: '#124389' },

    color: '#16c784',
    xAxis: {
      // type: 'time',
      label: {
        style: {
          fontSize: 14,
          fontFamily: 'Nunito',
        },
        offsetY: 10,

        formatter: (text: any) => {
          return dayjs(text)?.format('MM/YYYY');
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
      flipPage: false,
      offsetY: 10,
    },

    custom: true,
    smooth: false,

    tooltip: {
      customContent: (data: any) => {
        const newsItem = dataNews?.find((item) => item?.date === data);

        if (newsItem)
          return `<div class="news-tooltip">
          <b>${data}</b>
          <p>${newsItem?.description}</p>
          </div>`;
      },
    },

    areaStyle: {
      fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
    },

    // animation: {
    //   appear: {
    //     animation: 'path-in',
    //     duration: 3000,
    //   },
    // },
  };

  return (
    <S.ChartWrap>
      <h5 className="title">
        {`${t('newsPage.title')}`}
        <span className="name"> {symbol?.name}</span>
        <span className="symbol">{symbol?.symbol}</span>
      </h5>
      <p className="description">{t('newsPage.subTitle')}</p>
      <Area {...(config as any)} />
    </S.ChartWrap>
  );
};
