import React from 'react';
import { Card, Group, Image, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { generateContentText } from 'utils/generateContentText';
import readingTime from 'reading-time';
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
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
    >
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        mih={350}
        sx={theme => ({
          '&:hover': {
            boxShadow: `0 0 0 2px ${theme.colors.blue[5]}`,
          },
        })}
      >
        <Card.Section>
          <Image src={imageUrl} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500} size="lg">
            {convertedDate.toISOString().substring(0, 10)},{' '}
            {calculateReadingTime(readingStats.minutes)}
          </Text>
        </Group>

        <Text size="xl">{title}</Text>
      </Card>
    </motion.div>
  );
};
