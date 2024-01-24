'use client';

import { useEffect, useState } from 'react';
import * as S from './StockItem';
import { SymbolsInterface } from '@/app/models/data/stocks';
import { convertDataDayCompare } from '@/app/helpers/logic/compare';
import { usePathname } from 'next/navigation';
import { Country, Symbols } from '@/app/models/enum/symbols';
import Image from 'next/image';
import Link from 'next/link';

export default function StockItem({ symbol }: { symbol: SymbolsInterface }) {
  const pathname = usePathname();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:5000/output/api/country_output?ticker=${symbol?.ticker}`,
        );
        const data = await res.json();

        setData(
          convertDataDayCompare(
            data?.country_output,
            pathname?.split('/')?.[1],
            symbol?.country || Country.VietNam,
            symbol?.ticker !== Symbols.VnIndex &&
              symbol?.ticker !== Symbols?.KoSpi,
          ),
        );
      } catch (err) {
        //
      }
    };

    if (symbol) {
      fetchData();
    }
  }, [pathname, symbol]);

  return (
    <Link href={`/${pathname?.split('/')?.[1]}/${symbol?.slug}`}>
      <S.WrapStockItem>
        <div className="name-stock">
          <Image src={symbol?.icon} width={32} alt="" />
          {symbol?.name}
          <p>{symbol?.symbol}</p>
        </div>
        <div className="detail-info">
          {data?.map((item: any) => (
            <div className="item" key={item.name}>
              {item?.value}
            </div>
          ))}
        </div>
      </S.WrapStockItem>
    </Link>
  );
}
