import React from 'react';
import { Flex, Grid, Heading } from '@chakra-ui/react';

import { BookCard } from './BookCard';

type Props = {
  heading: string;
  bookList: any[];
};

export const BookSection = ({ heading, bookList }: Props) => {
  return (
    <Flex my={4} direction="column" alignItems="center">
      <Heading as="h2" size="2xl" fontWeight={200} mb={4}>
        {heading}
      </Heading>
      <Grid templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={6}>
        {bookList?.map((book: any) => {
          return (
            <BookCard
              key={book.key}
              title={book.title}
              author={book.authors[0].name}
              identifier={book.identifiers.openlibrary}
              isbn_13={book.identifiers.isbn_13}
            />
          );
        })}
      </Grid>
    </Flex>
  );
};
