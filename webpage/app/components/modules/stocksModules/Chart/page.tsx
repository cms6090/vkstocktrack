'use client';
import React, { useEffect, useState } from 'react';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import {
  DataChartStockInterface,
  convertDataChartStock,
} from '@/app/helpers/logic/stocks';
import { symbols } from '@/app/models/data/stocks';
import { usePathname } from 'next/navigation';
import { Country, Symbols } from '@/app/models/enum/symbols';
import * as S from './Chart';

IgrFinancialChartModule.register();

const HistoryChart = ({ t }: { t: any }) => {
  const pathname = usePathname();
  const [data, setData] = useState<DataChartStockInterface[]>([]);

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

        const dataConvert = convertDataChartStock({
          rawdata: data?.data,
          lang: pathname?.split('/')?.[1],
          country: symbol?.country || Country.VietNam,
          rate:
            symbol?.ticker !== Symbols.VnIndex &&
            symbol?.ticker !== Symbols?.KoSpi,
        });

        setData(dataConvert);
      } catch (err) {
        //
      }
    };
    if (symbol) {
      fetchData();
    }
  }, [pathname, symbol, symbol?.country, symbol?.ticker]);

  if (symbol && typeof window !== 'undefined') {
    return (
      <S.ChartWrap className="container sample">
        <h5 className="title">
          {`${t('history.title')}`}
          <span className="name"> {symbol?.name}</span>
          <span className="symbol">{symbol?.symbol}</span>
        </h5>
        <p className="description">{t('history.subTitle')}</p>
        <div className="container">
          <IgrFinancialChart
            width="100%"
            height="600px"
            chartType="Candle"
            zoomSliderType="Candle"
            volumeType="Area"
            overlayBrushes="rgba(5, 138, 0, 0.17)"
            overlayOutlines="rgba(5, 138, 0, 0.4)"
            overlayThickness={1}
            dataSource={data || []}
          />
        </div>
      </S.ChartWrap>
    );
  }
  return null;
};

export default HistoryChart;
