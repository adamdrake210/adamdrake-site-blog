import { Box, Heading, Text } from '@chakra-ui/react';
import { ABOUT_ME_TEXT } from 'constants/constants';
import { useThemeColors } from 'hooks/useThemeColors';
import React from 'react';

export const HomepageAboutMeBanner = () => {
  const { headingColor } = useThemeColors();

  return (
    <Box
      as="section"
      w="100%"
      shadow={['none', 'none', 'none', 'sm']}
      p={4}
      mb={8}
    >
      <Heading
        as="h1"
        fontSize={['6xl', '6xl']}
        mb={4}
        w="100%"
        textAlign={['center', 'center', 'left']}
        color={headingColor}
      >
        Hi, I&apos;m Adam Drake
      </Heading>
      <Text mb={4} fontSize={['xl', '2xl']}>
        {ABOUT_ME_TEXT}
      </Text>
    </Box>
  );
};
