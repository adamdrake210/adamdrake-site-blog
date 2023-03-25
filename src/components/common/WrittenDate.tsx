import React from 'react';
import { Text } from '@mantine/core';
import readingTime from 'reading-time';
import { generateContentText } from 'utils/generateContentText';
import { calculateReadingTime } from 'utils/calculateReadingTime';

type Props = {
  date: string;
  author: string;
  content: any[];
};

export const WrittenDate = ({ date, author, content }: Props) => {
  // Reading Stats
  const text = generateContentText(content);
  const readingStats = readingTime(text);

  // Convert the date to a readable format
  const convertedDate = new Date(date);

  return (
    <Text fz={16} fw={200}>
      Written on {convertedDate.toISOString().substring(0, 10)} by {author} -{' '}
      {calculateReadingTime(readingStats.minutes)}
    </Text>
  );
};
