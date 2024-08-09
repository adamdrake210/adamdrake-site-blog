import React from 'react';
import Navigation from 'components/navigation/Navigation';
import Footer from 'components/footer/Footer';
import { Box, Flex, useMantineTheme } from '@mantine/core';

type Props = {
  children: React.ReactNode;
  maxWidth: string;
};

const PageContainer = ({ children, maxWidth }: Props) => {
  const theme = useMantineTheme();

  return (
    <>
      <Navigation />
      <Flex
        style={{
          flexGrow: 1,
          backgroundColor: theme.colors.myColor[0],
        }}
      >
        <Box w="100%" m="0 auto" maw={maxWidth}>
          {children}
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default PageContainer;
