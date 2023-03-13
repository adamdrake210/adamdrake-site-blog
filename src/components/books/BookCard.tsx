import React from 'react';
import Image from 'next/image';
import { Grid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
  title: string;
  author: string;
  identifier: string;
  isbn_13: string;
};

export const BookCard = ({ title, author, identifier, isbn_13 }: Props) => {
  const isSmDown = useMediaQuery('(max-width: 600px)');

  return (
    <Grid.Col span={isSmDown ? 6 : 3}>
      <a
        href={`https://openlibrary.org/books/${identifier}`}
        target="_blank"
        rel="no-referrer noreferrer"
      >
        <Image
          src={`https://covers.openlibrary.org/b/isbn/${isbn_13}-M.jpg`}
          alt={`Cover for ${title}`}
          width={200}
          height={300}
        />
        <Text fz="sm">
          {title} - {author}
        </Text>
      </a>
    </Grid.Col>
  );
};
