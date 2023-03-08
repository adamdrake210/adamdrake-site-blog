import React from 'react';
import { Heading, Text, Box, Divider, Flex } from '@chakra-ui/react';
import { useThemeColors } from 'hooks/useThemeColors';
import { ABOUT_ME_TEXT } from 'constants/constants';
import { SocialLinks } from 'components/common/SocialLinks';

export const About: React.FC = () => {
  const { headingColor } = useThemeColors();

  return (
    <Box p={[4, 8]}>
      <Heading as="h1" size="2xl" fontWeight={200} mb={4} color={headingColor}>
        About Me
      </Heading>
      <Text mb={4} fontSize="xl">
        {ABOUT_ME_TEXT}
      </Text>
      <Divider />
      <Flex justifyContent="center">
        <SocialLinks />
      </Flex>
    </Box>
  );
};
