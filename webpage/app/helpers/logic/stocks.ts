import { CurrencyConverterByLanguages } from '@/app/utils/convert-price';
import dayjs from 'dayjs';

export interface DataChartStockInterface {
  date: any;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
}

function convertDateFormat(inputDate: any) {
  const formattedDate = dayjs(inputDate).toDate();
  return formattedDate;
}

export const convertDataChartStock = ({
  rawdata,
  lang,
  country,
  rate,
}: {
  rawdata: any;
  lang: string;
  country: string;
  rate: boolean;
}): DataChartStockInterface[] => {
  const date = Object.keys(rawdata?.Open);

  const data = date?.map((item: any) => ({
    date: convertDateFormat(item),
    open: CurrencyConverterByLanguages(
      rawdata?.Open?.[item],
      lang,
      country,
      rate,
    ),
    close: CurrencyConverterByLanguages(
      rawdata?.Close?.[item],
      lang,
      country,
      rate,
    ),
    high: CurrencyConverterByLanguages(
      rawdata?.High?.[item],
      lang,
      country,
      rate,
    ),
    low: CurrencyConverterByLanguages(
      rawdata?.Low?.[item],
      lang,
      country,
      rate,
    ),
    volume: CurrencyConverterByLanguages(
      rawdata?.Volume?.[item],
      lang,
      country,
      rate,
    ),
  }));

  return data;
};
