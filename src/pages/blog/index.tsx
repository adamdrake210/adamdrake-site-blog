import React from 'react';
import Head from 'next/head';

import PageContainer from 'layouts/PageContainer';
import { SITE_NAME } from 'constants/constants';
import BlogPageContainer from 'components/blog/BlogPageContainer';
import { AnimateFadeIn } from 'components/common/animations/AnimateFadeIn';

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>{SITE_NAME} | Blog</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <AnimateFadeIn>
          <BlogPageContainer />
        </AnimateFadeIn>
      </PageContainer>
    </>
  );
}
