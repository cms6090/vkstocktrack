import * as S from '../Chart/Chart';
import { Skeleton } from 'antd';

function TrendlineChartSkeleton() {
  return (
    <S.WrapPriceChart>
      <S.TrendlineHeader>
        <S.Title>
          <Skeleton.Input size="small" active />
        </S.Title>
      </S.TrendlineHeader>
      <S.Placeholder>
        <Skeleton.Input size="small" active />
        <Skeleton.Input size="small" active />
        <Skeleton.Input size="small" active />
        <Skeleton.Input size="small" active />
        <Skeleton.Input size="small" active />
      </S.Placeholder>
    </S.WrapPriceChart>
  );
}

export default TrendlineChartSkeleton;
