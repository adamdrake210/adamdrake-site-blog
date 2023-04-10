import React from 'react';
import Head from 'next/head';

import PageContainer from 'layouts/PageContainer';
import { SITE_NAME } from 'constants/constants';
import { UploadImageContainer } from 'components/admin/uploadImage/UploadImageContainer';
import { UploadImageFileContainer } from 'components/admin/uploadImage/UploadImageFileContainer';

export default function AdminUploadImage() {
  return (
    <>
      <Head>
        <title>{SITE_NAME} | Upload Image</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <UploadImageContainer />
        <UploadImageFileContainer />
      </PageContainer>
    </>
  );
}
