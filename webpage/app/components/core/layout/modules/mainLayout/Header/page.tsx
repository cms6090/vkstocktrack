import Image from 'next/image';
import SelectLanguage from '../../SelectLanguage/page';

import * as S from './Header';
import { usePathname, useRouter } from 'next/navigation';

import logo from '@/public/images/assets/logo.svg';
import { routers } from '@/app/settings/protected';
import Link from 'next/link';
import { useMemo } from 'react';

export default function Header({ t }: { t: any }) {
  const router = useRouter();
  const pathname = usePathname();

  const selectedKeyMenu = useMemo(() => {
    return routers?.find(
      (item) => '/' + (pathname?.split('/')?.[2] || '') === item?.url,
    );
  }, [pathname]);

  return (
    <S.WrapHeader>
      <S.Content>
        <S.Logo>
          <Image
            onClick={() => router.push('/')}
            src={logo}
            alt="logo"
            width={140}
            height={40}
            priority
          />
        </S.Logo>

        <S.Menu>
          {routers.map((route) => (
            <Link
              key={route.id}
              href={`/${pathname?.split('/')?.[1]}${route.url}`}
              title={route.name}
              className={selectedKeyMenu?.url === route.url ? 'active' : ''}
            >
              {t(route.name)}
            </Link>
          ))}
        </S.Menu>

        <SelectLanguage />
      </S.Content>
    </S.WrapHeader>
  );
}
