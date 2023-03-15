import React from 'react';
import { Box, Image, Text, Title } from '@mantine/core';
import { ABOUT_ME_TEXT } from 'constants/constants';

export const HomepageAboutMeBanner = () => {
  return (
    <Box component="section" w="100%" p={4} mb={24}>
      <Image
        maw={160}
        mr={16}
        radius="xl"
        src="https://res.cloudinary.com/dmiizmobu/image/upload/v1678724204/adamdrake-blog/me_selfie.jpg"
        alt="Adam Drake AI Selfie"
      />

      <Title order={1} mb={8} w="100%">
        Hi, I&apos;m Adam Drake
      </Title>

      <Text mb={16} size={24}>
        {ABOUT_ME_TEXT}
      </Text>
    </Box>
  );
};
