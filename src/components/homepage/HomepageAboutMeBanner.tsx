import React from 'react';
import { Box, Text, Title } from '@mantine/core';
import { ABOUT_ME_TEXT } from 'constants/constants';

export const HomepageAboutMeBanner = () => {
  return (
    <Box component="section" w="100%" p={4} mb={8}>
      <Title order={1} mb={4} w="100%">
        Hi, I&apos;m Adam Drake
      </Title>
      <Text mb={4} size="xl">
        {ABOUT_ME_TEXT}
      </Text>
    </Box>
  );
};
