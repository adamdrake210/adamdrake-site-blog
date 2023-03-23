import React from 'react';
import { Box, Text, Title } from '@mantine/core';
import { ABOUT_ME_TEXT } from 'constants/constants';
import { SelfieImage } from 'components/common/images/SelfieImage';

export const HomepageAboutMeBanner = () => {
  return (
    <Box component="section" w="100%" p={4} mb={24}>
      <SelfieImage maxWidth={160} />

      <Title order={1} mb={8} w="100%">
        Hi, I&apos;m Adam Drake
      </Title>

      <Text mb={16} size={24}>
        {ABOUT_ME_TEXT}
      </Text>
    </Box>
  );
};
