'use client';
import type { TabsProps } from 'antd';
import HistoryChart from '../../Chart/page';

import * as S from './Main';
import { useRouter, useSearchParams } from 'next/navigation';
import { CompareDetail } from '../Compare/page';
import { PredictDetail } from '../Predict/page';
import { NewsDetail } from '../News/page';

export default function DetailsSymbols({ t }: { t: any }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tab = searchParams.get('tab');

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t('historyData'),
      children: <HistoryChart t={t} />,
    },
    {
      key: '2',
      label: t('stockCompare'),
      children: <CompareDetail t={t} />,
    },
    {
      key: '3',
      label: t('news'),
      children: <NewsDetail t={t} />,
    },
    {
      key: '4',
      label: t('prediction'),
      children: <PredictDetail t={t} />,
    },
  ];

  const handleTabsChange = (activeKey: string) => {
    router.push(`?tab=${activeKey}`);
  };

  return (
    <S.TabsDetails
      defaultActiveKey="1"
      activeKey={tab || '1'}
      items={items}
      onChange={(activeKey) => handleTabsChange(activeKey)}
    />
  );
}
