import { Skeleton } from 'antd';
import * as S from './CardSkeleton';

export default function CardSkeleton() {
  return (
    <S.WrapNews>
      <S.NewItem>
        <Skeleton.Button size="small" active />
        <Skeleton.Image
          style={{
            width: '300px',
            height: '170px',
            borderRadius: '8px',
            margin: '0 32px 0 16px',
          }}
          active
        />
        <S.ItemContent>
          <Skeleton.Input
            active
            block
            style={{ height: '26px', marginTop: '4px' }}
          />
          <Skeleton.Input
            active
            block
            style={{ height: '26px', marginTop: '8px' }}
          />
          <Skeleton.Input
            active
            size="small"
            block
            style={{ height: '18px', marginTop: '16px' }}
          />
          <Skeleton.Input
            active
            size="small"
            block
            style={{ height: '18px', marginTop: '4px', marginBottom: '12px' }}
          />
          <Skeleton.Input size="small" active />
        </S.ItemContent>
      </S.NewItem>
    </S.WrapNews>
  );
}
