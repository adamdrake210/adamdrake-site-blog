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
        sx={{
          flexGrow: 1,
          zIndex: 5,
          paddingTop: 32,
          height: '100vh',
        }}
      >
        <Box w="100%" m="0 auto" maw={maxWidth} sx={{ overflowY: 'scroll' }}>
          {children}
        </Box>
      </Flex>
      <div
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dmiizmobu/image/upload/v1679409655/adamdrake-blog/bg_image_homepage_opt.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          filter: 'blur(26px)',
          opacity: '0.15',
          position: 'absolute',
          left: 0,
          right: 0,
          zIndex: 1,
          display: 'block',
        }}
      ></div>
      <Footer />
    </>
  );
};

export default PageContainer;
