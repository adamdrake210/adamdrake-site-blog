import React from 'react';
import { Flex, Spinner, Text } from '@chakra-ui/react';
import { useThemeColors } from 'hooks/useThemeColors';

export const Loader = () => {
  const { color } = useThemeColors();

  return (
    <Flex flexDirection="column" alignItems="center">
      <Spinner size="lg" color={color} />
      <Text fontSize="2xl" color={color}>
        Loading...
      </Text>
    </Flex>
  );
};
