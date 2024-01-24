import Image from 'next/image';
import logo from '@/public/images/assets/logo.svg';
import * as S from './Footer';
import Link from 'next/link';

export default function Footer({ t }: any) {
  const social = [
    { id: 1, name: 'facebook' },
    { id: 1, name: 'twitter' },
    { id: 1, name: 'youtube' },
    { id: 1, name: 'instagram' },
  ];
  return (
    <S.WrapFooter>
      <S.TopFooter>
        <S.TopLeft>
          <div>
            <S.Logo>
              <Link href="/">
                <Image src={logo} alt="logo" width={140} height={40} priority />
              </Link>
            </S.Logo>
          </div>
        </S.TopLeft>
        <S.TopRight>
          <h4>{t('footer.followUs')}</h4>
          {social?.map((item: any) => <p key={item?.id}>{item?.name}</p>)}
        </S.TopRight>
      </S.TopFooter>
      <S.BotFooter>
        <p>© 2024 VKStockTrack</p>
      </S.BotFooter>
    </S.WrapFooter>
  );
}
