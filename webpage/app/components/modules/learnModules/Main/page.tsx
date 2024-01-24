'use client';
import learn, { LearnType } from '@/app/models/data/learn';
import ItemLearn from '../ItemLearn/page';
import * as S from './Main';
import { Image, Pagination, PaginationProps } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import { ITEMS_PER_PAGE } from '@/app/settings/pagination';
import { useEffect, useState } from 'react';

export default function Main() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const router = useRouter();

  const [currentListLearn, setCurrentListLearn] = useState<LearnType[]>([]);

  useEffect(() => {
    const currentPage: number = Number(page) || 1;

    const currentLearn = learn?.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE,
    );

    setCurrentListLearn(currentLearn);
  }, [page]);

  const handleChangePage: PaginationProps['onChange'] = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <S.WrapLearnPage>
      <S.WrapBanner>
        <S.Banner>
          <S.LeftBanner>
            <h1>Stocks Basics</h1>
            <p>
              All you need to know about the basics of stocks in one place.
              Learn how stocks work, how to actually use them, and why it
              matters to you.
            </p>
          </S.LeftBanner>
          <S.RightBanner>
            <Image
              preview={false}
              src="https://cdn3d.iconscout.com/3d/premium/thumb/economic-analysis-6788364-5602420.png?f=webp"
              alt="Stocks"
            />
          </S.RightBanner>
        </S.Banner>
      </S.WrapBanner>
      <S.ArticlesTitle>ArticlesTitle ({learn?.length})</S.ArticlesTitle>
      <S.ListArticles>
        {currentListLearn?.map((item) => (
          <ItemLearn key={item.id} data={item} />
        ))}
      </S.ListArticles>
      <S.WrapPagination>
        <Pagination
          defaultCurrent={Number(page) || 1}
          current={Number(page) || 1}
          defaultPageSize={ITEMS_PER_PAGE}
          total={learn?.length || 0}
          responsive={true}
          onChange={handleChangePage}
        />
      </S.WrapPagination>
    </S.WrapLearnPage>
  );
}
