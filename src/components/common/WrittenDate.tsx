import React from 'react';
import { Text } from '@mantine/core';

type Props = {
  date: string;
  author: string;
};

export const WrittenDate = ({ date, author }: Props) => {
  const convertedDate = new Date(date);

  return (
    <Text fz={14} fw={200}>
      Written on {convertedDate.toISOString().substring(0, 10)} by {author}
    </Text>
  );
};
