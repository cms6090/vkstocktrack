import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Line } from '@ant-design/plots';
import { usePathname } from 'next/navigation';
import { Select, Tabs, TabsProps } from 'antd';
import {
  DataChartCompareInterface,
  convertDataChartCompare,
  convertDataDayCompare,
} from '@/app/helpers/logic/compare';

import { endPointChart } from '@/app/services/endpoints/enpoints';

import * as S from './Compare';
import { LIST_OPTION_COMPARE } from '@/app/models/data/compare';
import { SymbolsInterface, symbols } from '@/app/models/data/stocks';
import { Country, Symbols } from '@/app/models/enum/symbols';
import dayjs from 'dayjs';

export const CompareDetail = ({ t }: { t: any }) => {
  const pathname = usePathname();

  const [dataSymbol, setDataSymbol] = useState<DataChartCompareInterface[]>([]);
  const [dataDaySymbolCompare, setDataDaySymbolCompare] = useState<any>();
  const [dataDayCurrentSymbol, setDataDayCurrentSymbol] = useState<any>();
  const [dataSymbolCompare, setDataSymbolCompare] = useState<
    DataChartCompareInterface[]
  >([]);
  const [currentSymbol, setCurrentSymbol] = useState<SymbolsInterface | null>(
    null,
  );
  const [compareSymbol, setCompareSymbol] = useState<SymbolsInterface | null>(
    null,
  );
  const [time, setTime] = useState<number>(7);

  const endPointList = useMemo(
    () => [
      endPointChart.DAY,
      endPointChart.WEEK,
      endPointChart.ONE_MONTH,
      endPointChart.THREE_MONTH,
      endPointChart.SIX_MONTH,
      endPointChart.YEAR,
      endPointChart.FINE_YEAR,
      endPointChart.ALL,
    ],
    [], // Dependency array is empty, meaning the memoized value won't change unless the component is re-mounted
  );

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '1D',
    },
    {
      key: '2',
      label: '1W',
    },
    {
      key: '3',
      label: '1M',
    },
    {
      key: '4',
      label: '3M',
    },
    {
      key: '5',
      label: '6M',
    },
    {
      key: '6',
      label: '1Y',
    },
    {
      key: '7',
      label: '5Y',
    },
    {
      key: '8',
      label: 'All',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:5000/output/api/country_output?ticker=${compareSymbol?.ticker}`,
        );
        const data = await res.json();

        const resCurrent = await fetch(
          `http://127.0.0.1:5000/output/api/country_output?ticker=${currentSymbol?.ticker}`,
        );
        const dataCurrent = await resCurrent.json();

        setDataDaySymbolCompare(
          convertDataDayCompare(
            data?.country_output,
            pathname?.split('/')?.[1],
            compareSymbol?.country || Country.VietNam,
            currentSymbol?.ticker !== Symbols.VnIndex &&
              currentSymbol?.ticker !== Symbols?.KoSpi,
          ),
        );
        setDataDayCurrentSymbol(
          convertDataDayCompare(
            dataCurrent?.country_output,
            pathname?.split('/')?.[1],
            currentSymbol?.country || Country.VietNam,
            currentSymbol?.ticker !== Symbols.VnIndex &&
              currentSymbol?.ticker !== Symbols?.KoSpi,
          ),
        );
      } catch (err) {
        //
      }
    };

    if (compareSymbol) {
      fetchData();
    }
  }, [compareSymbol, currentSymbol?.country, currentSymbol?.ticker, pathname]);

  useEffect(() => {
    const symbol = symbols.find(
      (symbol) => symbol?.slug === pathname.split('/').pop(),
    );
    setCurrentSymbol(symbol || null);
  }, [pathname]);

  const listOptionCompare = useMemo(
    () =>
      LIST_OPTION_COMPARE?.filter(
        (item) => item?.value !== currentSymbol?.slug,
      ) || [],
    [currentSymbol],
  );

  const fetchData = useCallback(
    async (symbol: any, setDataFunction: any) => {
      try {
        if (symbol) {
          const res = await fetch(
            endPointList?.[time].replace(':id', symbol?.investing),
          );
          const data = await res.json();

          const dataConvert = convertDataChartCompare(
            data?.data,
            symbol?.name,
            pathname.split('/')?.[1],
            symbol?.country || Country.VietNam,
            symbol?.ticker !== Symbols.VnIndex &&
              symbol?.ticker !== Symbols?.KoSpi,
          );

          setDataFunction(dataConvert);
        }
      } catch (err) {
        // Handle errors
      }
    },
    [endPointList, pathname, time],
  );

  useEffect(() => {
    fetchData(currentSymbol, setDataSymbol);
  }, [currentSymbol, fetchData]);

  useEffect(() => {
    fetchData(compareSymbol, setDataSymbolCompare);
  }, [compareSymbol, fetchData]);

  const handelChangeCompare = useCallback((value: string) => {
    const symbol = symbols.find((symbol) => symbol?.slug === value);

    if (symbol) {
      setCompareSymbol(symbol);
    }
  }, []);

  const COLOR_PLATE_2 = ['#3861fb', '#ff775f'];

  const config = {
    data:
      [...dataSymbol, ...dataSymbolCompare].sort((a, b) => a.time - b.time) ||
      [],
    xField: 'time',
    yField: 'price',
    seriesField: 'name',

    color: COLOR_PLATE_2,
    xAxis: {
      label: {
        style: {
          fontSize: 14,
          fontFamily: 'Nunito',
        },
        offsetY: 0,
        formatter: (text: number) => {
          if (time === 0) {
            return dayjs(Number(text)).format('HH:mm');
          } else if (time === 1) {
            return dayjs(Number(text)).format('HH:mm-DD/MM');
          } else if (time === 2 || time === 3) {
            return dayjs(Number(text)).format('DD/MM/YYYY');
          } else if (time === 4 || time === 5 || time === 6) {
            return dayjs(Number(text)).format('MM/YYYY');
          }
          return dayjs(Number(text)).format('YYYY');
        },
        tickLineInterval: 10,
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
      title: (data: any) => {
        if (time === 0) {
          return dayjs(Number(data)).format('HH:mm');
        } else if (time === 1) {
          return dayjs(Number(data)).format('HH:mm-DD/MM');
        } else if (time === 2 || time === 3) {
          return dayjs(Number(data)).format('DD/MM/YYYY');
        } else if (time === 4 || time === 5 || time === 6) {
          return dayjs(Number(data)).format('MM/YYYY');
        }
        return dayjs(Number(data)).format('YYYY');
      },
    },

    animation: {
      appear: {
        animation: 'path-in',
        duration: 3000,
      },
    },
  };

  const filterOption = useCallback(
    (input: string, option?: { label: string; value: string }) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
    [],
  );

  if (dataSymbol && dataSymbol.length > 0) {
    return (
      <S.ChartWrap>
        <h5 className="title">
          {`${t('compare.title')}`}
          <span className="name"> {currentSymbol?.name}</span>
          <span className="symbol">{currentSymbol?.symbol}</span>
        </h5>
        <p className="description">{t('compare.subTitle')}</p>
        <S.Options>
          <Select
            showSearch
            placeholder="Select a stock"
            optionFilterProp="children"
            onChange={handelChangeCompare}
            filterOption={filterOption}
            options={listOptionCompare}
          />
          <Tabs
            onChange={(tab) => {
              setTime(Number(tab) - 1);
            }}
            moreIcon={null}
            defaultActiveKey="8"
            items={items}
            className="tab-time"
          />
        </S.Options>
        <Line {...(config as any)} />
        {dataDaySymbolCompare && (
          <S.Table>
            <S.HeaderTable>
              <div>Price details</div>
              <div>{currentSymbol?.name}</div>
              <div>{compareSymbol?.name}</div>
            </S.HeaderTable>
            <S.TableContent>
              {dataDayCurrentSymbol?.map((item: any, index: number) => (
                <div key={item?.id} className="list-item">
                  <div>{item?.name}</div>
                  <div>{item?.value}</div>
                  <div>{dataDaySymbolCompare?.[index]?.value}</div>
                </div>
              ))}
            </S.TableContent>
          </S.Table>
        )}
      </S.ChartWrap>
    );
  }

  return null;
};
