import React from 'react';
import Navigation from 'components/navigation/Navigation';
import Footer from 'components/footer/Footer';
import { Box, Flex } from '@mantine/core';

type Props = {
  children: React.ReactNode;
  maxWidth: string;
};

const PageContainer = ({ children, maxWidth }: Props) => {
  return (
    <>
      <Navigation />
      <Flex
        style={{
          flexGrow: 1,
        }}
      >
        <Box w="100%" m="0 auto" maw={maxWidth} style={{ overflowY: 'scroll' }}>
          {children}
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default PageContainer;
