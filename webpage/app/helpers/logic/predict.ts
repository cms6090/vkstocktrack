import { CurrencyConverterByLanguages } from '@/app/utils/convert-price';

export const convertDataPredict = (
  rawdata: any,
  lang: string,
  country: string,
  rate: boolean,
) => {
  const date = Object.keys(rawdata?.Close);

  const data = date?.map((item: any) => ({
    date: item?.slice(0, 10),
    price: CurrencyConverterByLanguages(
      rawdata?.Close?.[item],
      lang,
      country,
      rate,
    ),
  }));

  return data;
};
