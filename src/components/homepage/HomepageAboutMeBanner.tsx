import React from 'react';
import { Box, Flex, Text, Title } from '@mantine/core';

import { ABOUT_ME_TEXT } from 'constants/constants';
import { SelfieImage } from 'components/common/images/SelfieImage';
import { AnimatedCircles } from 'components/common/animations/AnimatedCircles';

export const HomepageAboutMeBanner = () => {
  return (
    <Box component="section" w="100%" p={4} mb={24}>
      <SelfieImage maxWidth={160} />

      <Flex
        sx={{
          marginBottom: 8,
          alignItems: 'center',
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: 24,
          },
        }}
      >
        <Title
          order={1}
          mr={6}
          sx={{
            '@media (max-width: 600px)': {
              fontSize: 36,
            },
          }}
        >
          Hi, I&apos;m Adam Drake
        </Title>
        <AnimatedCircles />
      </Flex>
      <Text mb={16} size={24}>
        {ABOUT_ME_TEXT}
      </Text>
    </Box>
  );
};
