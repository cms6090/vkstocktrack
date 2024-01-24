'use client';

import { SymbolsInterface, symbols } from '@/app/models/data/stocks';
import * as S from './Main';
import StockItem from '../StockItem/page';
import { useMemo } from 'react';
import { Tooltip } from 'antd';
import Image from 'next/image';
import infoIcon from '@/public/icons/common/info.svg';

export default function HomePage({ t }: any) {
  const listInfoSymbol = useMemo(
    () => [
      {
        id: 0,
        name: t('priceDetail.name'),
      },
      {
        id: 1,
        name: t('priceDetail.previousClose'),

        tooltip: t('tooltip.previousClose'),
      },
      {
        id: 2,
        name: t('priceDetail.todayOpen'),

        tooltip: t('tooltip.todayOpen'),
      },
      {
        id: 3,
        name: t('priceDetail.todayVolume'),
        tooltip: t('tooltip.todayVolume'),
      },
      {
        id: 4,
        name: t('priceDetail.avgVolume'),
        tooltip: t('tooltip.avgVolume'),
      },
      {
        id: 5,
        name: t('priceDetail.rangeDays'),

        tooltip: t('tooltip.rangeDays'),
      },
      {
        id: 6,
        name: t('priceDetail.range52'),

        tooltip: t('tooltip.range52'),
      },
      {
        id: 7,
        name: 'MA_200',

        tooltip: t('tooltip.MA200'),
      },
      {
        id: 8,
        name: 'MA_50',
        tooltip: t('tooltip.MA50'),
      },
    ],
    [t],
  );

  return (
    <S.WrapHomePage>
      <S.HomeTop>
        <h3>{t('home.stockTrackTool')}</h3>
        <p>{t('home.subStockTrackTool')}</p>
      </S.HomeTop>
      <S.HomeStocks>
        <h4>{t('home.todayPrice')}</h4>
        <div className="list-name">
          {listInfoSymbol?.map((item: any) => (
            <div key={item?.id} className="item">
              <Tooltip title={item?.tooltip}>
                <Image src={infoIcon} width={16} height={16} alt="" />
              </Tooltip>
              <p>{item?.name}</p>
            </div>
          ))}
        </div>
        {symbols?.map((symbol: SymbolsInterface) => (
          <StockItem key={symbol?.id} symbol={symbol} />
        ))}
      </S.HomeStocks>
    </S.WrapHomePage>
  );
}
