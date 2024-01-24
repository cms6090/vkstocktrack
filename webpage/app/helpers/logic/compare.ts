import { CurrencyConverterByLanguages } from '@/app/utils/convert-price';

export interface DataChartCompareInterface {
  name: string;
  time: any;
  price: number;
}

export const convertDataChartCompare = (
  rawdata: any,
  name: string,
  lang: string,
  country: string,
  rate: boolean,
): DataChartCompareInterface[] => {
  const data = rawdata?.map((item: any) => ({
    name: name,
    time: item?.[0] || 0,
    price: CurrencyConverterByLanguages(item?.[4], lang, country, rate) || 0,
  }));

  return data;
};

export const convertDataDayCompare = (
  rawdata: any,
  lang: string,
  country: string,
  rate: boolean,
) => {
  const dataConvert = [
    {
      id: 1,
      name: 'Previous close',
      value: CurrencyConverterByLanguages(
        rawdata?.previous_close,
        lang,
        country,
        rate,
      ),
    },
    {
      id: 2,
      name: 'Today open',
      value: CurrencyConverterByLanguages(
        rawdata?.today_open,
        lang,
        country,
        rate,
      ),
    },
    {
      id: 3,
      name: 'Today volume',
      value: rawdata?.today_volume,
    },
    {
      id: 4,
      name: 'Avg volume',
      value: rawdata?.avg_volume,
    },
    {
      id: 5,
      name: 'Range days',
      value: `${CurrencyConverterByLanguages(
        rawdata?.range_days?.split('-')?.[0],
        lang,
        country,
        rate,
      )} - ${CurrencyConverterByLanguages(
        rawdata?.range_days?.split('-')?.[1],
        lang,
        country,
        rate,
      )}`,
    },
    {
      id: 6,
      name: 'Range 52',
      value: `${CurrencyConverterByLanguages(
        rawdata?.range_52?.split('-')?.[0],
        lang,
        country,
        rate,
      )} - ${CurrencyConverterByLanguages(
        rawdata?.range_52?.split('-')?.[1],
        lang,
        country,
        rate,
      )}`,
    },
    {
      id: 7,
      name: 'MA_200',
      value: CurrencyConverterByLanguages(rawdata?.MA_200, lang, country, rate),
    },
    {
      id: 8,
      name: 'MA_50',
      value: CurrencyConverterByLanguages(rawdata?.MA_50, lang, country, rate),
    },
  ];

  return dataConvert;
};
