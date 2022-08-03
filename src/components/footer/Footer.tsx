import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const StickyFooter = styled(Flex)`
  z-index: 10;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

export default function Footer() {
  return (
    <StickyFooter>
      <Flex
        w="100%"
        p="16px 24px"
        justifyContent="center"
        alignContent="center"
        textAlign="center"
        backgroundColor="cyan.600"
        color="white"
        flexDirection="column"
      >
        <Text>Adam Drake &#169; {new Date().getFullYear()}</Text>
      </Flex>
    </StickyFooter>
  );
}
