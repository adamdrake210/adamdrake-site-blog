import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  heading: string;
  statistics: string;
};

export const StravaCardDetails = ({ heading, statistics }: Props) => {
  return (
    <Flex flexDirection="column" alignItems="center" my={[4, 2]}>
      <Heading as="h3" size="xl">
        {heading}
      </Heading>
      <Text fontSize="3xl">{statistics}</Text>
    </Flex>
  );
};
