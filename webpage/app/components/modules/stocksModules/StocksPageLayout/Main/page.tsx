'use client';

import MenuPage from '../Menu/page';
import * as S from './StocksPageLayout';

export default function StocksLayout({
  children,
  t,
}: {
  children: React.ReactNode;
  t: any;
}) {
  return (
    <S.WrapStocksLayout>
      <MenuPage t={t} />
      <S.StocksContent>{children}</S.StocksContent>
    </S.WrapStocksLayout>
  );
}
