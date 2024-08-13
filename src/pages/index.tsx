import React from 'react';
import Head from 'next/head';

import PageContainer from 'layouts/PageContainer';
import HomepageContainer from 'components/homepage/HomepageContainer';
import { SITE_NAME } from 'constants/constants';
import { client } from 'client';
import { Post } from 'types/types';

type Props = {
  latestPosts: Post[];
};

export default function PageIndex({ latestPosts }: Props) {
  return (
    <>
      <Head>
        <title>{SITE_NAME} | Home</title>
      </Head>

      <PageContainer maxWidth="1000px">
        <HomepageContainer latestPosts={latestPosts} />
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc) [0..8]`,
  );

  return {
    props: {
      latestPosts: posts,
    },
  };
}
