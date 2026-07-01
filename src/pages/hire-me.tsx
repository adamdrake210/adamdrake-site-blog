import React from 'react';
import Head from 'next/head';

import { SITE_NAME } from 'constants/constants';
import PageContainer from 'layouts/PageContainer';
import { HireMe } from 'components/hireMe/HireMe';

function HireMeIndex() {
  return (
    <>
      <Head>
        <title>{SITE_NAME} | Hire Me</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <HireMe />
      </PageContainer>
    </>
  );
}

export default HireMeIndex;
