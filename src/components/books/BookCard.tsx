import React from 'react';
import Image from 'next/image';
import { Card, Grid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';

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
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Card
            shadow="lg"
            padding="lg"
            radius="md"
            withBorder
            mah={300}
            h="100%"
            sx={{
              ':hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
              },
            }}
          >
            <Card.Section sx={{ textAlign: 'center' }} p={16}>
              <Image
                src={`https://covers.openlibrary.org/b/isbn/${isbn_13}-M.jpg`}
                alt={`Cover for ${title}`}
                width={120}
                height={180}
              />
            </Card.Section>

            <Text fz="md">
              {title.slice(0, 20)} - {author}
            </Text>
          </Card>
        </motion.div>
      </a>
    </Grid.Col>
  );
};
