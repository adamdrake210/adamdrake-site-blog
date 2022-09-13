import { Flex, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import React from 'react';
import { BookSection } from './BookSection';

type Props = {
  currentBooks: any[];
  readBooks: any[];
};

export const BooksContainer = ({ currentBooks, readBooks }: Props) => {
  return (
    <Flex
      mt={[2, 2, 2, 12]}
      p={[4]}
      w="100%"
      direction="column"
      alignItems="center"
    >
      {/* Currently Reading */}
      <BookSection heading="Books I am reading" bookList={currentBooks} />
      {/* Currently Reading */}
      <BookSection heading="Books I have read" bookList={readBooks} />

      <Text fontSize="xs" mt={8}>
        Book covers courtesy of{' '}
        <Link href="https://openlibrary.org/developers/api" isExternal>
          Open Library <ExternalLinkIcon mx="2px" />
        </Link>
        .
      </Text>
    </Flex>
  );
};
