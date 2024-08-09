import React from 'react';
import {
  Box,
  Card,
  Flex,
  Image,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { motion } from 'framer-motion';
import readingTime from 'reading-time';

import { generateContentText } from 'utils/generateContentText';
import { calculateReadingTime } from 'utils/calculateReadingTime';

type Props = {
  title: string;
  createdDate: string;
  content: any[];
  imageUrl: string;
};

export const BlogCard = ({ title, createdDate, content, imageUrl }: Props) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  // Reading Stats
  const text = generateContentText(content);
  const readingStats = readingTime(text);

  // Convert the date to a readable format
  const convertedDate = new Date(createdDate);

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98, transition: { duration: 0.2 } }}
    >
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        mih={400}
        style={theme => ({
          '&:hover': {
            boxShadow: `0 0 0 2px ${theme.colors.blue[5]}`,
          },
        })}
      >
        <Card.Section>
          <Image src={imageUrl} height={170} alt={`Image for ${title}`}></Image>
        </Card.Section>

        <Flex
          direction="column"
          justify="space-between"
          align="flex-start"
          h="200px"
        >
          <Box>
            <Title
              order={5}
              fw={700}
              style={{
                color: colorScheme === 'dark' ? 'white' : 'dark',
              }}
              my={16}
            >
              {title}
            </Title>
            <Text fw={500} size="md" mb={0}>
              Reading time: {calculateReadingTime(readingStats.minutes)}
            </Text>
            <Text
              size="sm"
              style={{
                color: colorScheme === 'dark' ? 'white' : 'dark',
              }}
            >
              Written on: {convertedDate.toISOString().substring(0, 10)},{' '}
            </Text>
          </Box>
        </Flex>
      </Card>
    </motion.div>
  );
};
