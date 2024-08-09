import React from 'react';
import { Box, Flex, Text, Title } from '@mantine/core';

import { ABOUT_ME_TEXT } from 'constants/constants';

export const HomepageAboutMeBanner = () => {
  return (
    <Box component="section" w="100%" p={4} mb={24}>
      <Flex
        style={{
          marginBottom: 8,
          alignItems: 'center',
          '@media (maxWidth: 600px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: 24,
          },
        }}
      >
        <Title
          order={1}
          mr={6}
          style={{
            '@media (maxWidth: 600px)': {
              fontSize: 36,
            },
          }}
        >
          Hi, I&apos;m Adam Drake
        </Title>
        {/* <AnimatedCircles /> */}
      </Flex>
      <Text mb={16} fz={24}>
        {ABOUT_ME_TEXT}
      </Text>
    </Box>
  );
};
