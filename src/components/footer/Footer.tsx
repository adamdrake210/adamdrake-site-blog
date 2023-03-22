import React from 'react';

import styled from '@emotion/styled';
import { Flex, Text } from '@mantine/core';

const StickyFooter = styled(Flex)`
  position: relative;
  z-index: 10;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

export default function Footer() {
  // Colors for light and dark mode

  return (
    <StickyFooter>
      <Flex
        w="100%"
        p="16px 24px"
        justify="center"
        align="center"
        direction="column"
      >
        <Text size="sm">
          Adam Drakes Site &#169; {new Date().getFullYear()}
        </Text>
      </Flex>
    </StickyFooter>
  );
}
