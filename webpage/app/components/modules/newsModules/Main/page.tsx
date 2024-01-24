'use client';
import { Image } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import { default as NextImage } from 'next/image';

import scheduleIcon from '@/public/icons/common/schedule.svg';

import * as S from './Main';
import CardSkeleton from '../CardSkeleton/page';

export default function Main() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDataEvent = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://finnhub.io/api/v1/news?category=general&token=claetmpr01qi1290vm20claetmpr01qi1290vm2g',
      );
      const news = await response.json();
      setNews(news);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDataEvent();
  }, [fetchDataEvent]);

  const ConvertTitle = (title: string) => {
    if (title?.[0] === ':') {
      return title.slice(1);
    }

    return title;
  };

  const FormatTimestampToDate = (timestamp: number) => {
    const date = dayjs.unix(timestamp);

    // Get the current date
    const currentDate = dayjs();

    if (date.isSame(currentDate, 'day')) {
      // If the date is today, print hours and minutes
      const timeString = date.format('HH:mm');
      return timeString;
    } else {
      // If the date is not today, print the full date
      const dateString = date.format('MM-DD');
      return dateString;
    }
  };

  return (
    <S.WrapNews>
      <S.Title>
        <h2>News</h2>
        <p>Insights into the biggest events shaping the stock industry.</p>
        <div className="schedule">
          <NextImage
            src={scheduleIcon}
            width={24}
            height={24}
            alt="Schedule "
          />
          <p>Today</p>
        </div>
      </S.Title>
      {loading && [...Array(10)].map((index) => <CardSkeleton key={index} />)}
      {news.map((item: any) => (
        <S.NewItem key={item?.id}>
          <Link href={item?.url} target="_blank">
            <div className="time">
              <p>{FormatTimestampToDate(item?.datetime)}</p>
            </div>
            <Image src={item?.image} alt={item?.category} preview={false} />
            <S.ItemContent>
              <h3>{ConvertTitle(item?.headline)}</h3>
              <p>{item?.summary}</p>
              <span>{item?.source}</span>
            </S.ItemContent>
          </Link>
        </S.NewItem>
      ))}
    </S.WrapNews>
  );
}
