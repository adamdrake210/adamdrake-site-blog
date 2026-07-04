import React from 'react';
import Navigation from 'components/navigation/Navigation';
import Footer from 'components/footer/Footer';
import { Box, Flex, useMantineTheme } from '@mantine/core';
import { SparklesBackground } from 'components/common/SparklesBackground';
import { useNightMode } from 'context/NightModeContext';

type Props = {
  children: React.ReactNode;
  maxWidth: string;
};

const PageContainer = ({ children, maxWidth }: Props) => {
  const theme = useMantineTheme();
  const { night } = useNightMode();

  return (
    <>
      <SparklesBackground
        particleColor={night ? '#ffffff' : '#000000'}
        speed={night ? 2 : 5}
        maxSize={night ? 3 : 5}
        particleDensity={night ? 220 : 180}
      />
      <Navigation />
      <Flex
        style={{
          flexGrow: 1,
          backgroundColor: night
            ? theme.colors.dark[6]
            : theme.colors.myColor[0],
          transition: 'background-color 0.6s ease',
        }}
      >
        <Box
          w="100%"
          m="0 auto"
          maw={maxWidth}
          bg={night ? theme.colors.dark[7] : theme.colors.myColor[1]}
          style={{
            position: 'relative',
            zIndex: 1,
            transition: 'background-color 0.6s ease',
          }}
        >
          {children}
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default PageContainer;
