import React from 'react';
import Head from 'next/head';
import PageContainer from 'layouts/PageContainer';
import readingTime from 'reading-time';

import { articleFilePaths, ARTICLE_PATH } from 'utils/mdxUtils';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { SITE_NAME } from 'constants/constants';
import ArticlesPageContainer from 'components/articles/ArticlesPageContainer';

type Props = {
  articlePosts: any[];
};

export default function ArticlesIndex({ articlePosts }: Props) {
  return (
    <>
      <Head>
        <title>{SITE_NAME} | Articles</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <ArticlesPageContainer articlePosts={articlePosts} />
      </PageContainer>
    </>
  );
}

export function getStaticProps() {
  const articlePosts = articleFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(ARTICLE_PATH, filePath));
    const { content, data } = matter(source);
    const readTime = readingTime(content);

    return {
      content,
      data: { ...data, readTime },
      filePath,
    };
  });
  return { props: { articlePosts } };
}
