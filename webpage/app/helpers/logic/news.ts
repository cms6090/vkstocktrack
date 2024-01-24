import { LanguagesType } from '@/app/models/enum/languages';
import { CurrencyConverterByLanguages } from '@/app/utils/convert-price';

export const convertDataNews = (rawdata: any, lang: string) => {
  const date = Object.keys(rawdata?.English);

  const data = date?.map((item: any) => ({
    date: item?.slice(0, 10),
    description:
      lang === LanguagesType.Global
        ? rawdata?.English?.[item]
        : lang === LanguagesType.Korean
        ? rawdata?.Korean?.[item]
        : rawdata?.Vietnamese?.[item],
  }));

  return data;
};

export interface DataChartNewsStockInterface {
  date: any;
  price: number;
}

export const convertDataChartNewsStock = ({
  rawdata,
  lang,
  country,
  rate,
}: {
  rawdata: any;
  lang: string;
  country: string;
  rate: boolean;
}): DataChartNewsStockInterface[] => {
  const date = Object.keys(rawdata?.Close);

  const data = date?.map((item: any) => ({
    date: item,
    price: CurrencyConverterByLanguages(
      rawdata?.Close?.[item],
      lang,
      country,
      rate,
    ),
  }));

  return data;
};
