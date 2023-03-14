import React from 'react';
import { Flex, Grid, Title } from '@mantine/core';

import { BookCard } from './BookCard';

type Props = {
  heading: string;
  bookList: any[];
};

export const BookSection = ({ heading, bookList }: Props) => {
  return (
    <Flex my={16} direction="column" align="center">
      <Title order={2} fw={200} mb={24}>
        {heading}
      </Title>
      <Grid gutter={16} gutterXs="md" gutterMd="xl" gutterXl={50}>
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
