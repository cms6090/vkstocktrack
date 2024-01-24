'use client';

import { dir } from 'i18next';
import React, { ReactNode } from 'react';
import '../globals.css';
import MainLayout from '../components/core/layout/modules/mainLayout/Main/page';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/themes';
import GlobalStyle from '../styles/global';
import NextTopLoader from 'nextjs-toploader';
import { useTranslation } from '../i18n/client';

interface RootLayoutProps {
  children: ReactNode;
  params: {
    lng: string;
  };
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  const { t } = useTranslation(lng, 'common');
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <ThemeProvider theme={theme.default}>
          <GlobalStyle />
          <NextTopLoader
            color={theme.default.colors.primaryColor}
            initialPosition={0.08}
            crawlSpeed={200}
            height={4}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
          />
          <MainLayout t={t}>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
