import React from 'react';

import { Box, Divider, Flex, Text, Title } from '@mantine/core';
import { ABOUT_ME_TEXT } from 'constants/constants';
import { SocialLinks } from 'components/common/SocialLinks';

export const About: React.FC = () => {
  return (
    <Box p={{ base: 4, md: 8 }}>
      <Title order={1} mb={16}>
        About Me
      </Title>
      <Text mb={32} size="lg">
        {ABOUT_ME_TEXT}
      </Text>
      <Divider />
      <Flex justify="center" my={24}>
        <SocialLinks />
      </Flex>
    </Box>
  );
};
