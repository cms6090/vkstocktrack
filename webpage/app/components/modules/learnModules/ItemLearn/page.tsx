import { Image } from 'antd';
import NextImage from 'next/image';
import clockIcon from '@/public/icons/common/clock.svg';
import * as S from './ItemLearn';
import { LearnType } from '@/app/models/data/learn';
import Link from 'next/link';

export default function ItemLearn({ data }: { data: LearnType }) {
  return (
    <S.WrapItemLearn>
      <Link href={`/learn/${data?.slug}`}>
        <S.Image>
          <Image src={data?.image} alt="Stock" height={200} preview={false} />
        </S.Image>
        <S.Content>
          <span>{data?.type}</span>
          <h3>{data?.title}</h3>
          <p>{data?.summary}</p>
        </S.Content>
        <S.Bottom>
          <span>{data?.author}</span>
          <span>
            <NextImage src={clockIcon} alt="clock" width={12} height={12} />
            {data?.time}m
          </span>
        </S.Bottom>
      </Link>
    </S.WrapItemLearn>
  );
}
