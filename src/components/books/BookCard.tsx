import React from 'react';
import Image from 'next/image';
import { GridItem, Link, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  author: string;
  identifier: string;
  isbn_13: string;
};

export const BookCard = ({ title, author, identifier, isbn_13 }: Props) => {
  return (
    <GridItem>
      <Link href={`https://openlibrary.org/books/${identifier}`} isExternal>
        <Image
          src={`https://covers.openlibrary.org/b/isbn/${isbn_13}-M.jpg`}
          alt={`Cover for ${title}`}
          width={200}
          height={300}
        />
        <Text fontSize="sm">
          {title} - {author}
        </Text>
      </Link>
    </GridItem>
  );
};
