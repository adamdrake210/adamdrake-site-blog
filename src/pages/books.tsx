import React from 'react';
import Head from 'next/head';

import PageContainer from 'layouts/PageContainer';
import { SITE_NAME } from 'constants/constants';
import { currentlyReadingBooks, readBooks } from 'data/book-data';
import Image from 'next/image';
import { BooksContainer } from 'components/books/BooksContainer';

type Props = {
  currentBooksData: any;
  readBooksData: any;
};

export default function Books({ currentBooksData, readBooksData }: Props) {
  const currentBooksArray = Object.values(currentBooksData);
  const readBooksArray = Object.values(readBooksData);
  return (
    <>
      <Head>
        <title>{SITE_NAME} | Books</title>
      </Head>

      <PageContainer maxWidth="1000px">
        <BooksContainer
          currentBooks={currentBooksArray}
          readBooks={readBooksArray}
        />
      </PageContainer>
    </>
  );
}

export async function getServerSideProps() {
  const OPEN_LIBRARY_API = 'https://openlibrary.org/api/books?bibkeys=ISBN:';

  const currentBooksList = currentlyReadingBooks.join(',');

  const responseCurrentBooks = await fetch(
    `${OPEN_LIBRARY_API}${currentBooksList}&jscmd=data&format=json`,
  );
  const currentBooksData = await responseCurrentBooks.json();

  const readBooksList = readBooks.join(',');
  const responseReadBooks = await fetch(
    `${OPEN_LIBRARY_API}${readBooksList}&jscmd=data&format=json`,
  );
  const readBooksData = await responseReadBooks.json();

  return {
    props: { currentBooksData, readBooksData },
  };
}
