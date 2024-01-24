import { LanguagesType } from '../models/enum/languages';
import { Country } from '../models/enum/symbols';

export function CurrencyConverterByLanguages(
  amount: number | string,
  lang: string,
  country: string,
  rate: boolean,
): number {
  const vndToKrwRate: number = 0.054;
  const krwToVndRate: number = 18.61;
  const vndToUsdRate: number = 0.000041;
  const krwToUsdRate: number = 0.00076;
  const newAmount: number =
    (Number(String(amount).replaceAll(',', '')) as number) || 0;

  if (!rate) {
    return newAmount;
  }

  if (lang === LanguagesType.Korean) {
    if (country === Country.VietNam) {
      const convertedAmount: number = newAmount * vndToKrwRate;
      return Number(convertedAmount.toFixed(2));
    } else {
      return Number(newAmount.toFixed(2));
    }
  } else if (lang === LanguagesType.Global) {
    if (country === Country.VietNam) {
      const convertedAmount: number = newAmount * vndToUsdRate;
      return Number(convertedAmount.toFixed(2));
    } else {
      const convertedAmount: number = newAmount * krwToUsdRate;
      return Number(convertedAmount.toFixed(2));
    }
  } else {
    if (country === Country.VietNam) {
      return Number(newAmount.toFixed(2));
    } else {
      const convertedAmount: number = newAmount * krwToVndRate;
      return Number(convertedAmount.toFixed(2));
    }
  }
}
