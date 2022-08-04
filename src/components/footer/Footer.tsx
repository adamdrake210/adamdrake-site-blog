import React from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import {
  darkColorBg,
  darkColorText,
  lightColorBg,
  lightColorText,
} from 'styles/theme';

const StickyFooter = styled(Flex)`
  z-index: 10;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

export default function Footer() {
  // Colors for light and dark mode
  const bg = useColorModeValue(lightColorBg, darkColorBg);
  const color = useColorModeValue(lightColorText, darkColorText);

  return (
    <StickyFooter>
      <Flex
        w="100%"
        p="16px 24px"
        justifyContent="center"
        alignContent="center"
        textAlign="center"
        backgroundColor={bg}
        color={color}
        flexDirection="column"
      >
        <Text>Adam Drakes Site &#169; {new Date().getFullYear()}</Text>
      </Flex>
    </StickyFooter>
  );
}
