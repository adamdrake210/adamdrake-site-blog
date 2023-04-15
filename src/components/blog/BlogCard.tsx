import React from 'react';
import { Card, Flex, Group, Image, Text } from '@mantine/core';
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
      whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
    >
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        mih={390}
        sx={theme => ({
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
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500} size="lg">
              {convertedDate.toISOString().substring(0, 10)},{' '}
              {calculateReadingTime(readingStats.minutes)}
            </Text>
            <Text size="lg">{title}</Text>
          </Group>
        </Flex>
      </Card>
    </motion.div>
  );
};
