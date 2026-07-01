import React from 'react';
import Head from 'next/head';

import { BOOK_SERIES_NAME, BOOK_TITLE } from 'constants/constants';
import PageContainer from 'layouts/PageContainer';
import { BookLanding } from 'components/book/BookLanding';

function BookLandingPage() {
  return (
    <>
      <Head>
        <title>
          {BOOK_SERIES_NAME}: {BOOK_TITLE}
        </title>
      </Head>
      <PageContainer maxWidth="1000px">
        <BookLanding />
      </PageContainer>
    </>
  );
}

export default BookLandingPage;
