import Main from '@/app/components/modules/learnModules/Main/page';
import React from 'react';

interface PageProps {
  params: {
    lng: string;
  };
}

export default async function LearnPage({ params: { lng } }: PageProps) {
  return <Main />;
}
