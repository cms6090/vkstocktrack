'use client';
import StocksLayout from '@/app/components/modules/stocksModules/StocksPageLayout/Main/page';
import { useTranslation } from '@/app/i18n/client';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
  params: {
    lng: string;
  };
}

export default function StockLayoutPage({
  children,
  params: { lng },
}: RootLayoutProps) {
  const { t } = useTranslation(lng, 'stock');

  return <StocksLayout t={t}>{children}</StocksLayout>;
}
