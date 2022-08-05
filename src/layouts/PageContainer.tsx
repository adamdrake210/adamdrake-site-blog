import React from 'react';
import { Flex, Box, useColorModeValue } from '@chakra-ui/react';
import Navigation from 'components/navigation/Navigation';
import Footer from 'components/footer/Footer';
import { darkColorText, lightColorText } from 'styles/theme';

type Props = {
  children: React.ReactNode;
  maxWidth: string;
};

const PageContainer = ({ children, maxWidth }: Props) => {
  // Colors for light and dark mode
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue(lightColorText, darkColorText);

  return (
    <>
      <Navigation />
      <Flex minH="100%" grow={1} as="main" pb={12}>
        <Box w="100%" m="0 auto" maxW={maxWidth} bg={bg} color={color}>
          {children}
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default PageContainer;
