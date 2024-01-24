'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Select } from 'antd';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import { LanguageItemType, languageData } from '@/app/settings/languages';

import downArrow from '@/public/icons/common/down-arrow-select.svg';

import * as S from './SelectLanguage';

const SelectLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [convertedLanguageData, setConvertedLanguageData] = useState<
    { value: string; label: JSX.Element }[]
  >([]);
  const [languageValue, setLanguageValue] = useState<{
    value: string;
    label: JSX.Element;
  }>();

  useEffect(() => {
    if (convertedLanguageData.length && pathname.split('/')?.[1]) {
      setLanguageValue(
        convertedLanguageData.find(
          (item) => item.value === pathname.split('/')?.[1],
        ),
      );
    }
  }, [convertedLanguageData, pathname]);

  const renderLabelLanguage = (item: LanguageItemType) => {
    return (
      <div className="flag">
        <Image src={item.image} alt="flag" fill />
      </div>
    );
  };

  useEffect(() => {
    if (languageData.length) {
      const convertedData = languageData.map((item) => ({
        value: item.value,
        label: renderLabelLanguage(item),
      }));

      setConvertedLanguageData(convertedData);
    }
  }, []);

  const iconDropDownSelect = () => {
    return (
      <div className="select-icon">
        <Image src={downArrow} alt="icon-drop-down-select" fill />
      </div>
    );
  };

  const handleOnChangeSelect = (e: any) => {
    setLanguageValue(e);
    // Chuyển hướng trang sau khi component đã được render xong
    setTimeout(() => {
      router.push(`/${e?.value}/${pathname.split('/').slice(2).join('/')}`);
    }, 0);
  };

  return (
    <S.LanguageSelectWrapper>
      <Select
        labelInValue
        value={languageValue}
        onChange={(e) => handleOnChangeSelect(e)}
        suffixIcon={iconDropDownSelect()}
        options={convertedLanguageData}
      />
    </S.LanguageSelectWrapper>
  );
};

export default SelectLanguage;
