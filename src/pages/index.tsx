import React from 'react';
import Head from 'next/head';

import PageContainer from 'layouts/PageContainer';
import { articleFilePaths, ARTICLE_PATH } from 'utils/mdxUtils';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import HomepageContainer from 'components/homepage/HomepageContainer';
import { SITE_NAME } from 'constants/constants';

type Props = {
  articlePostsRemote: any;
};

export default function PageIndex({ articlePostsRemote }: Props) {
  return (
    <>
      <Head>
        <title>{SITE_NAME} | Home</title>
      </Head>

      <PageContainer maxWidth="1000px">
        <HomepageContainer articlePosts={articlePostsRemote} />
      </PageContainer>
    </>
  );
}

export function getStaticProps() {
  const getPostsContentAndFrontmatter = (
    postsPaths: string[],
    folderPath: string,
  ) => {
    const PostsRemote = postsPaths.map(filePath => {
      const source = fs.readFileSync(path.join(folderPath, filePath));
      const { content, data } = matter(source);

      return {
        content,
        data,
        filePath,
      };
    });
    return PostsRemote;
  };

  const articlePostsRemote = getPostsContentAndFrontmatter(
    articleFilePaths,
    ARTICLE_PATH,
  );

  return {
    props: { articlePostsRemote },
  };
}
