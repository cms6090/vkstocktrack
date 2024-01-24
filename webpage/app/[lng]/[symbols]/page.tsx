'use client';

import StocksDetails from '@/app/components/modules/stocksModules/Main/page';
import { useTranslation } from '@/app/i18n/client';

const StocksPage = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation(lng, 'stock');

  return <StocksDetails t={t} />;
};

export default StocksPage;
