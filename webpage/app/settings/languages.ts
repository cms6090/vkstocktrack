import vietnamIcon from '@/public/icons/common/vietnam.svg';
import globalIcon from '@/public/icons/common/global.png';
import koreaIcon from '@/public/icons/common/korea.svg';

export type LanguageItemType = {
  id: number;
  label: string;
  value: string;
  image: any;
};

export const languageData: LanguageItemType[] = [
  {
    id: 1,
    label: 'Việt Nam',
    value: 'vi',
    image: vietnamIcon,
  },
  {
    id: 2,
    label: 'Global',
    value: 'en',
    image: globalIcon,
  },
  {
    id: 3,
    label: 'Korea',
    value: 'ko',
    image: koreaIcon,
  },
];
