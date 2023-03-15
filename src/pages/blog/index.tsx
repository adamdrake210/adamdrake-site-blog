import React from 'react';
import Head from 'next/head';

import PageContainer from 'layouts/PageContainer';
import { SITE_NAME } from 'constants/constants';
import { Post } from 'types/types';
import BlogPageContainer from 'components/blog/BlogPageContainer';
import { client } from 'client';
import { AnimateFadeIn } from 'components/common/animations/AnimateFadeIn';

type Props = {
  posts: Post[];
};

export default function BlogIndex({ posts }: Props) {
  return (
    <>
      <Head>
        <title>{SITE_NAME} | Blog</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <AnimateFadeIn>
          <BlogPageContainer posts={posts} />
        </AnimateFadeIn>
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      posts,
    },
  };
}
