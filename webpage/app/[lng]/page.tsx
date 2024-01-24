'use client';
import StocksLayout from '@/app/components/modules/stocksModules/StocksPageLayout/Main/page';
import { useTranslation } from '../i18n/client';
import HomePage from '../components/modules/homeModules/Main/page';

export default function Home({ params: { lng } }: any) {
  const { t } = useTranslation(lng, 'stock');

  return (
    <StocksLayout t={t}>
      <HomePage t={t} />
    </StocksLayout>
  );
}
