import React from 'react';
import { Flex, Text, Title } from '@mantine/core';

type Props = {
  heading: string;
  statistics: string;
};

export const StravaCardDetails = ({ heading, statistics }: Props) => {
  return (
    <Flex direction="column" align="center" my={4}>
      <Title order={3}>{heading}</Title>
      <Text size="xl">{statistics}</Text>
    </Flex>
  );
};
