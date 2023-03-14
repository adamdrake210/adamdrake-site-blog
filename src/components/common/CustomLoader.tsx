import React from 'react';
import { Flex, Loader, Text } from '@mantine/core';

type Props = {
  loadingText?: string;
};

export const CustomLoader = ({ loadingText }: Props) => {
  return (
    <Flex direction="column" align="center">
      <Loader size="lg" />
      <Text fz="lg">{loadingText || 'Loading...'}</Text>
    </Flex>
  );
};
