import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

interface I18nextOptions {
  lng: string;
  ns: string[];
  keyPrefix?: string;
}

interface I18nInstance {
  getFixedT(
    lng: string,
    ns: string,
    keyPrefix?: string,
  ): (key: string, options?: any) => string;
}

export async function initI18next(
  lng: string,
  ns: string,
): Promise<I18nInstance> {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
}

export async function useTranslation(
  lng: string,
  ns: string,
  options?: I18nextOptions,
): Promise<{
  t: (key: string, options?: I18nextOptions) => string;
  i18n: I18nInstance;
}> {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options?.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
}
