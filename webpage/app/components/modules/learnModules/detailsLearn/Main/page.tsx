import { usePathname } from 'next/navigation';
import * as S from './Main';
import learn, { LearnType } from '@/app/models/data/learn';
import { useEffect, useMemo, useState } from 'react';
import NextImage from 'next/image';
import clockIcon from '@/public/icons/common/clock.svg';
import { Image } from 'antd';
import { slugify } from '@/app/helpers/logic/slug';
import ItemLearn from '../../ItemLearn/page';

export default function DetailsLearn() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  const detailsLearn = useMemo(() => {
    return learn.find((item) => item?.slug === pathname.split('/').pop());
  }, [pathname]);

  const relatedArticles = useMemo(() => {
    const articles: LearnType[] = [];

    for (let i = 0; i < learn?.length; i++) {
      if (articles?.length === 3) break;

      if (learn?.[i]?.id !== Number(detailsLearn?.id)) {
        articles?.push(learn?.[i]);
      }
    }

    return articles;
  }, [detailsLearn?.id]);

  const renderText = (text: string) => {
    switch (text.slice(0, 3)) {
      case 'h3.':
        return <h3 id={slugify(text?.slice(3))}> {text?.slice(3)}</h3>;
      case 'h6.':
        return <h6> {text?.slice(3)}</h6>;
      default:
        return <p>{text?.slice(2)}</p>;
    }
  };

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  const checkHeaderTable = detailsLearn?.details?.find(
    (item) => item.slice(0, 3) === 'h3.',
  );

  if (!detailsLearn) return null;

  return (
    <S.WrapDetailsLearn>
      <div className="progress-bar-container">
        <div
          className="progress-bar-container__progress"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <S.TopDetails>
        <span className="type">{detailsLearn?.type}</span>
        <h2>{detailsLearn?.title}</h2>
        <p className="author">
          <span>{detailsLearn?.author}</span>
          <span>
            <NextImage src={clockIcon} alt="clock" width={12} height={12} />
            {detailsLearn?.time}m
          </span>
        </p>
        <S.Image>
          <Image
            src={detailsLearn?.image}
            alt="Stock"
            height={200}
            preview={false}
          />
        </S.Image>
      </S.TopDetails>
      <S.Content>
        {checkHeaderTable && (
          <S.Table>
            <h4>Table of Contents</h4>
            <ul>
              {detailsLearn?.details?.map(
                (item: string) =>
                  item.slice(0, 3) === 'h3.' && (
                    <li key={item}>
                      <a href={`#${slugify(item?.slice(3))}`}>
                        {item?.slice(3)}
                      </a>
                    </li>
                  ),
              )}
            </ul>
          </S.Table>
        )}
        {detailsLearn?.details?.map((item: string) => renderText(item))}
      </S.Content>
      <S.BottomDetails>
        <S.RelatedArticles>
          <h3 className="related-title">Related Articles</h3>
          <S.RelatedArticlesItems>
            {relatedArticles?.map((item: LearnType) => (
              <ItemLearn key={item?.id} data={item} />
            ))}
          </S.RelatedArticlesItems>
        </S.RelatedArticles>
      </S.BottomDetails>
    </S.WrapDetailsLearn>
  );
}
