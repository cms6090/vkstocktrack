import { Country, Symbols } from '../enum/symbols';

import koreanFlag from '@/public/icons/common/korea.svg';
import vietnamFlag from '@/public/icons/common/vietnam.svg';
import vcbIcon from '@/public/images/symbols/vcb.png';
import shinhanFinancialGroupIcon from '@/public/images/symbols/shinhan-financial-group.png';

export interface SymbolsInterface {
  id: number;
  name: string;
  slug: string;
  symbol: string;
  icon: any;
  ticker: Symbols;
  country: string;
  investing: string;
}

export const symbols: SymbolsInterface[] = [
  {
    id: 4,
    name: 'VNINDEX',
    slug: 'vnindex',
    symbol: 'VNINDEX',
    icon: vietnamFlag,
    ticker: Symbols.VnIndex,
    country: Country.VietNam,
    investing: '41063',
  },
  {
    id: 1,
    name: 'KOSPI',
    slug: 'kospi',
    icon: koreanFlag,
    symbol: 'KS11',
    ticker: Symbols.KoSpi,
    country: Country.Korean,
    investing: '37426',
  },
  {
    id: 2,
    name: 'Vietcombank',
    slug: 'vcb',
    symbol: 'VCB',
    icon: vcbIcon,
    ticker: Symbols.Vietcombank,
    country: Country.VietNam,
    investing: '958731',
  },
  {
    id: 3,
    name: 'Shinhan Financial Group',
    slug: 'shinhan-financial-group',
    symbol: '055550',
    icon: shinhanFinancialGroupIcon,
    ticker: Symbols.ShinhanFinancialGroup,
    country: Country.Korean,
    investing: '43453',
  },
];

export const TooltipDayInfoSymbolDetail = {
  previous_close: 'The stock price at the end of the previous trading day.',
  today_open: 'The stock price at the start of the days trading.',
  today_volume: 'The total number of shares traded that day.',
  avg_volume: 'The average number of shares traded over a certain period.',
  range_days:
    'The difference between the highest and lowest prices of the day.',
  range_52:
    'The difference between the highest and lowest prices over the past 52 weeks (1 year).',
  MA_200: 'The average stock price over the most recent 200 days. ',
  MA_50: 'The average stock price over the most recent 50 days.    ',
};
