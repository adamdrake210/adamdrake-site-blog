import React from 'react';
import { Heading, Text, Box, Divider } from '@chakra-ui/react';
import { useThemeColors } from 'hooks/useThemeColors';
import { ABOUT_ME_TEXT } from 'constants/constants';

export const About: React.FC = () => {
  const { headingColor } = useThemeColors();

  return (
    <Box p={[4, 8]}>
      <Heading as="h1" size="3xl" mb={4} color={headingColor}>
        About Me
      </Heading>
      <Text mb={4}>{ABOUT_ME_TEXT}</Text>
      <Divider />
    </Box>
  );
};
