import React from 'react';
import Head from 'next/head';

import PageContainer from 'layouts/PageContainer';
import { SITE_NAME } from 'constants/constants';
import { BooksContainer } from 'components/books/BooksContainer';
import { client } from 'client';
import { AnimateSpringFromRight } from 'components/common/animations/AnimateSpringFromRight';

type Props = {
  currentBooksData: any;
  readBooksData: any;
};

type Book = {
  isbn: string;
  title: string;
  rating: number;
  status: 'read' | 'reading' | 'want-to-read';
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
        <AnimateSpringFromRight>
          <BooksContainer
            currentBooks={currentBooksArray}
            readBooks={readBooksArray}
          />
        </AnimateSpringFromRight>
      </PageContainer>
    </>
  );
}

export async function getServerSideProps() {
  const OPEN_LIBRARY_API = 'https://openlibrary.org/api/books?bibkeys=ISBN:';

  // Fetching books from Sanity
  const books: Book[] = await client.fetch(`*[_type == "book"]`);

  const currentBooksList = books
    .map(book => {
      if (book.status === 'reading') {
        return book.isbn;
      }
    })
    .filter(book => book)
    .join(',');

  const readBooksList = books
    .map(book => {
      if (book.status === 'read') {
        return book.isbn;
      }
    })
    .filter(book => book)
    .join(',');

  const fetchCurrentBooks = () => {
    return fetch(
      `${OPEN_LIBRARY_API}${currentBooksList}&jscmd=data&format=json`,
    );
  };

  const fetchReadBooks = () => {
    return fetch(`${OPEN_LIBRARY_API}${readBooksList}&jscmd=data&format=json`);
  };

  const [responseCurrentBooks, responseReadBooks] = await Promise.all([
    fetchCurrentBooks(),
    fetchReadBooks(),
  ]);

  const currentBooksData = await responseCurrentBooks.json();
  const readBooksData = await responseReadBooks.json();

  return {
    props: { currentBooksData, readBooksData },
  };
}
