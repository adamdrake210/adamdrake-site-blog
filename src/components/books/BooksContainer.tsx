import { Anchor, Flex, Text } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import React from 'react';

import { BookSection } from './BookSection';

type Props = {
  currentBooks: any[];
  readBooks: any[];
};

export const BooksContainer = ({ currentBooks, readBooks }: Props) => {
  return (
    <Flex
      mt={{ base: 8, md: 16 }}
      p={32}
      w="100%"
      direction="column"
      align="center"
    >
      {/* Currently Reading */}
      <BookSection heading="Books I am reading" bookList={currentBooks} />
      {/* Already Reading */}
      <BookSection heading="Books I have read" bookList={readBooks} />

      <Text size="sm" mt={32}>
        Book covers courtesy of{' '}
        <Anchor href="https://openlibrary.org/developers/api">
          Open Library <IconExternalLink size={16} />
        </Anchor>
        .
      </Text>
    </Flex>
  );
};
