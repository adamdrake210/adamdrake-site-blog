import React from 'react';
import Image from 'next/image';
import {
  Card,
  Grid,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
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
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Grid.Col span={isSmDown ? 6 : 3}>
      <a
        href={`https://openlibrary.org/books/${identifier}`}
        target="_blank"
        rel="no-referrer noreferrer"
        style={{
          textDecoration: 'none',
        }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <Card
            shadow="lg"
            padding="lg"
            radius="md"
            withBorder
            mih={300}
            style={{
              ':hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
              },
            }}
          >
            <Card.Section style={{ textAlign: 'center' }} p={16}>
              <Image
                src={`https://covers.openlibrary.org/b/isbn/${isbn_13}-M.jpg`}
                alt={`Cover for ${title}`}
                width={120}
                height={180}
              />
            </Card.Section>

            <Text
              fz="lg"
              style={{
                color:
                  colorScheme === 'dark'
                    ? theme.colors.gray[0]
                    : theme.colors.gray[8],
              }}
            >
              {title.slice(0, 20)} - {author}
            </Text>
          </Card>
        </motion.div>
      </a>
    </Grid.Col>
  );
};
