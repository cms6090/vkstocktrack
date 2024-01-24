import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Header from '../Header/page';

import * as S from './MainLayout';
import Footer from '../Footer/page';

const MainLayout = ({ children, t }: { children: ReactNode; t: any }) => {
  return (
    <S.MainLayoutWrap>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header t={t} />
        <S.Content>{children}</S.Content>
        <Footer t={t} />
      </motion.div>
    </S.MainLayoutWrap>
  );
};

export default MainLayout;
