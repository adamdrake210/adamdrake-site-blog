import React from 'react';
import Head from 'next/head';

import { SITE_NAME } from 'constants/constants';
import PageContainer from 'layouts/PageContainer';
import { About } from 'components/about/About';

function AboutIndex() {
  return (
    <>
      <Head>
        <title>{SITE_NAME} | About</title>
      </Head>
      <PageContainer maxWidth="700px">
        <About />
      </PageContainer>
    </>
  );
}

export default AboutIndex;
