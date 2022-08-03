import React from 'react';
import { useColorMode, Flex, Box } from '@chakra-ui/react';
import Navigation from 'components/navigation/Navigation';
import Footer from 'components/footer/Footer';

type Props = {
  children: React.ReactNode;
  maxWidth: string;
};

const PageContainer = ({ children, maxWidth }: Props) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: 'gray.900',
  };
  const primarytextColor = {
    light: 'black',
    dark: 'white',
  };

  return (
    <>
      <Navigation />
      <Flex minH="100%" grow={1} as="main">
        <Box
          w="100%"
          m="0 auto"
          maxW={maxWidth}
          bg={bgColor[colorMode]}
          color={primarytextColor[colorMode]}
        >
          {children}
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default PageContainer;
