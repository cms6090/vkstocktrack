'use client';

import React, { useEffect, useState } from 'react';

import * as S from './Main';
import StockDayPrice from '../StockDayPrice/page';
import { usePathname } from 'next/navigation';
import { symbols } from '@/app/models/data/stocks';
import DetailsSymbols from '../detailsSymbols/Main/page';

const StocksDetails = ({ t }: { t: any }) => {
  const pathname = usePathname();
  const [data, setData] = useState<any>();

  const symbol = symbols.find(
    (symbol) => symbol?.slug === pathname.split('/').pop(),
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:5000/output/api/country_output?ticker=${symbol?.ticker}`,
        );
        const data = await res.json();

        setData(data?.country_output);
      } catch (err) {
        //
      }
    };

    fetchData();
  }, [pathname, symbol?.ticker]);

  return (
    <S.WrapStocksPage>
      <S.WrapChart>
        <DetailsSymbols t={t} />
      </S.WrapChart>
      <StockDayPrice t={t} data={data} symbol={symbol} />
    </S.WrapStocksPage>
  );
};

export default StocksDetails;
