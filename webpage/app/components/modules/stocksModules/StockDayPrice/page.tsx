import Image from 'next/image';
import * as S from './StockDayPrice';
import { SymbolsInterface } from '@/app/models/data/stocks';
import { usePathname } from 'next/navigation';
import { CurrencyConverterByLanguages } from '@/app/utils/convert-price';
import { useMemo } from 'react';

import infoIcon from '@/public/icons/common/info.svg';
import { Tooltip } from 'antd';
import { Country, Symbols } from '@/app/models/enum/symbols';

interface InfoSymbolType {
  id: string | number;
  name: string;
  value: string | number;
  tooltip: string;
}
export default function StockDayPrice({
  data,
  symbol,
  t,
}: {
  data: any;
  symbol?: SymbolsInterface;
  t: any;
}) {
  const pathname = usePathname();

  const listInfoSymbol: InfoSymbolType[] = useMemo(
    () =>
      pathname
        ? [
            {
              id: 1,
              name: t('priceDetail.previousClose'),
              value: CurrencyConverterByLanguages(
                data?.previous_close,
                pathname?.split('/')?.[1] || '',
                symbol?.country || Country?.VietNam,
                symbol?.ticker !== Symbols.VnIndex &&
                  symbol?.ticker !== Symbols?.KoSpi,
              ),
              tooltip: t('tooltip.previousClose'),
            },
            {
              id: 2,
              name: t('priceDetail.todayOpen'),
              value: CurrencyConverterByLanguages(
                data?.today_open,
                pathname?.split('/')?.[1] || '',
                symbol?.country || Country?.VietNam,
                symbol?.ticker !== Symbols.VnIndex &&
                  symbol?.ticker !== Symbols?.KoSpi,
              ),
              tooltip: t('tooltip.todayOpen'),
            },
            {
              id: 3,
              name: t('priceDetail.todayVolume'),
              value: data?.today_volume,
              tooltip: t('tooltip.todayVolume'),
            },
            {
              id: 4,
              name: t('priceDetail.avgVolume'),
              value: data?.avg_volume,
              tooltip: t('tooltip.avgVolume'),
            },
            {
              id: 5,
              name: t('priceDetail.rangeDays'),
              value: `${CurrencyConverterByLanguages(
                data?.range_days?.split('-')?.[0],
                pathname?.split('/')?.[1] || '',
                symbol?.country || Country?.VietNam,
                symbol?.ticker !== Symbols.VnIndex &&
                  symbol?.ticker !== Symbols?.KoSpi,
              )} - ${CurrencyConverterByLanguages(
                data?.range_days?.split('-')?.[1],
                pathname?.split('/')?.[1] || '',
                symbol?.country || Country?.VietNam,
                symbol?.ticker !== Symbols.VnIndex &&
                  symbol?.ticker !== Symbols?.KoSpi,
              )}`,
              tooltip: t('tooltip.rangeDays'),
            },
            {
              id: 6,
              name: t('priceDetail.range52'),
              value: `${CurrencyConverterByLanguages(
                data?.range_52?.split('-')?.[0],
                pathname?.split('/')?.[1] || '',
                symbol?.country || Country?.VietNam,
                symbol?.ticker !== Symbols.VnIndex &&
                  symbol?.ticker !== Symbols?.KoSpi,
              )} - ${CurrencyConverterByLanguages(
                data?.range_52?.split('-')?.[1],
                pathname?.split('/')?.[1] || '',
                symbol?.country || Country?.VietNam,
                symbol?.ticker !== Symbols.VnIndex &&
                  symbol?.ticker !== Symbols?.KoSpi,
              )}`,
              tooltip: t('tooltip.range52'),
            },
            {
              id: 7,
              name: 'MA_200',
              value: CurrencyConverterByLanguages(
                data?.MA_200,
                pathname?.split('/')?.[1] || '',
                symbol?.country || Country?.VietNam,
                symbol?.ticker !== Symbols.VnIndex &&
                  symbol?.ticker !== Symbols?.KoSpi,
              ),
              tooltip: t('tooltip.MA200'),
            },
            {
              id: 8,
              name: 'MA_50',
              value: CurrencyConverterByLanguages(
                data?.MA_50,
                pathname?.split('/')?.[1] || '',
                symbol?.country || Country?.VietNam,
                symbol?.ticker !== Symbols.VnIndex &&
                  symbol?.ticker !== Symbols?.KoSpi,
              ),
              tooltip: t('tooltip.MA50'),
            },
          ]
        : [],
    [
      data?.MA_200,
      data?.MA_50,
      data?.avg_volume,
      data?.previous_close,
      data?.range_52,
      data?.range_days,
      data?.today_open,
      data?.today_volume,
      pathname,
      symbol?.country,
      symbol?.ticker,
      t,
    ],
  );

  return (
    <S.WrapDayPrice>
      <S.DayPriceTop>
        <div className="name">
          <Image src={symbol?.icon} width={32} alt="" />
          <p>
            {symbol?.name}
            <span> ({symbol?.symbol})</span>
          </p>
        </div>
        <h3>
          {CurrencyConverterByLanguages(
            data?.today_open,
            pathname?.split('/')?.[1] || '',
            symbol?.country || Country?.VietNam,
            symbol?.ticker !== Symbols.VnIndex &&
              symbol?.ticker !== Symbols?.KoSpi,
          )?.toFixed(2)}
        </h3>
      </S.DayPriceTop>
      <S.DayPriceBody>
        {listInfoSymbol?.map((item) => (
          <div key={item?.id} className="info-item">
            <div className="info-left">
              <p>{item?.name}</p>
              <Tooltip title={item?.tooltip}>
                <Image src={infoIcon} width={18} height={18} alt="" />
              </Tooltip>
            </div>
            <div className="info-right">{item?.value}</div>
          </div>
        ))}
      </S.DayPriceBody>
    </S.WrapDayPrice>
  );
}
