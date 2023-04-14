import React from 'react';
import Head from 'next/head';

import PageContainer from 'layouts/PageContainer';
import { SITE_NAME } from 'constants/constants';
import { CreateBlogPostContainer } from 'components/admin/createBlogPost/CreateBlogPostContainer';
import { SlugMaker } from 'components/admin/createBlogPost/SlugMaker';
import { ChatGptForm } from 'components/admin/createBlogPost/ChatGptForm';
import { CreateLikeData } from 'components/admin/createBlogPost/CreateLikeData';

export default function AdminCreateBlogPost() {
  return (
    <>
      <Head>
        <title>{SITE_NAME} | Create Blog Post</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <CreateBlogPostContainer />
        <ChatGptForm />
        <SlugMaker />
        <CreateLikeData />
      </PageContainer>
    </>
  );
}
