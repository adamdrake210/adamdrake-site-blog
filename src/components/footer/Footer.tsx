import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useThemeColors } from 'hooks/useThemeColors';

const StickyFooter = styled(Flex)`
  z-index: 10;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

export default function Footer() {
  // Colors for light and dark mode
  const { bgColor, color } = useThemeColors();

  return (
    <StickyFooter>
      <Flex
        w="100%"
        p="16px 24px"
        justifyContent="center"
        alignContent="center"
        textAlign="center"
        backgroundColor={bgColor}
        color={color}
        flexDirection="column"
      >
        <Text>Adam Drakes Site &#169; {new Date().getFullYear()}</Text>
      </Flex>
    </StickyFooter>
  );
}
