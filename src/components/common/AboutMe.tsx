import { Flex, Text, Title } from '@mantine/core';
import { ABOUT_ME_TEXT_SHORT } from 'constants/constants';
import React from 'react';
import { SelfieImage } from './images/SelfieImage';

export const AboutMe = () => {
  return (
    <Flex mb={64} px={16}>
      <SelfieImage maxWidth={100} />
      <Flex direction="column">
        <Title order={4} mb={8} w="100%">
          Written by Adam Drake
        </Title>
        <Text>{ABOUT_ME_TEXT_SHORT}</Text>
      </Flex>
    </Flex>
  );
};
