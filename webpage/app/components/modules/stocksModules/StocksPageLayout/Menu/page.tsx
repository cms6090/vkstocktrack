'use client';
import React, { useMemo } from 'react';
import { Tooltip } from 'antd';
import { usePathname } from 'next/navigation';

import * as S from './Menu';
import { SymbolsInterface, symbols } from '@/app/models/data/stocks';
import Link from 'next/link';
import Image from 'next/image';

import { theme } from '@/app/styles/themes';

const MenuPage = ({ t }: { t: any }) => {
  const pathname = usePathname();

  const selectedKeyMenu = useMemo(() => {
    return (
      symbols?.find((item) => pathname.split('/')?.pop() === item?.slug)
        ?.slug || ''
    );
  }, [pathname]);

  return (
    <S.WrapMenu>
      <S.Menu>
        <h3>{t('stocksSymbol')}</h3>
        {symbols?.map((symbol: SymbolsInterface) => (
          <Tooltip
            title={`${symbol?.name} (${symbol?.symbol})`}
            key={symbol?.id}
            color={theme?.default?.colors?.primaryColor}
          >
            <Link
              href={`/${pathname?.split('/')?.[1]}/${symbol?.slug}`}
              className={selectedKeyMenu === symbol?.slug ? 'item-active' : ''}
            >
              <Image
                width={24}
                className="flag"
                src={symbol?.icon}
                alt="flag"
              />
              {symbol?.name}
            </Link>
          </Tooltip>
        ))}
      </S.Menu>
    </S.WrapMenu>
  );
};

export default MenuPage;
