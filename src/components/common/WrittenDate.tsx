import React from 'react';
import { Text } from '@mantine/core';
import readingTime from 'reading-time';

type Props = {
  date: string;
  author: string;
  content: any[];
};

// This function is used to generate the text for the reading time calculation
const generateText = (content: any[]) => {
  const text = content
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map((child: any) => child.text).join('');
    })
    .join('\n\n');
  return text;
};

export const WrittenDate = ({ date, author, content }: Props) => {
  const text = generateText(content);
  const readingStats = readingTime(text);
  console.log(readingStats);

  const convertedDate = new Date(date);

  return (
    <Text fz={16} fw={200}>
      Written on {convertedDate.toISOString().substring(0, 10)} by {author} -{' '}
      {Math.ceil(readingStats.minutes) + 1} min read
    </Text>
  );
};
