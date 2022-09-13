import React from 'react';
import { Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { useThemeColors } from 'hooks/useThemeColors';

type Props = {
  heading: string;
  bookList: any[];
};

export const BookSection = ({ heading, bookList }: Props) => {
  const { headingColor } = useThemeColors();

  return (
    <Flex my={4} direction="column" alignItems="center">
      <Heading as="h1" size="3xl" mb={4} color={headingColor}>
        {heading}
      </Heading>
      <Grid templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={6}>
        {bookList?.map((book: any) => {
          return (
            <GridItem key={book.key}>
              <Image
                src={`https://covers.openlibrary.org/b/isbn/${book.identifiers.isbn_13}-M.jpg`}
                alt={`Cover for ${book.title}`}
                width={200}
                height={300}
              />
              <a
                href={`https://openlibrary.org/books/${book.identifiers.openlibrary}`}
                target="_blank"
                rel="noreferrer"
              >
                <Text fontSize="sm">
                  {book.title} - {book.authors[0].name}
                </Text>
              </a>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};
