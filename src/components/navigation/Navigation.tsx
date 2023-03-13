import React from 'react';
import NextLink from 'next/link';

import styled from '@emotion/styled';
import { SITE_NAME } from 'constants/constants';
import SelectColorMode from './SelectColorMode';
import { ABOUT_ROUTE, BLOG_ROUTE, BOOKS_ROUTE } from 'constants/routeConstants';
import { useOpen } from 'hooks/useOpen';
import { Box, Button, Flex } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';
import { NavDrawer } from './NavDrawer';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

export const navLinks = [
  {
    link: BLOG_ROUTE,
    text: 'Blog',
  },
  {
    link: BOOKS_ROUTE,
    text: 'Books',
  },
  {
    link: ABOUT_ROUTE,
    text: 'About',
  },
];

const Navigation: React.FC = () => {
  const { open, handleOpen, handleClose } = useOpen();

  // Colors for light and dark mode

  return (
    <StickyNav w="100%" p={2}>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        maw="1200px"
        w="100%"
        m="0 auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button variant="link" p={2} uppercase>
              {SITE_NAME}
            </Button>
          </NextLink>
        </Box>
        <Flex color="#ffffff" align="center">
          {navLinks.map(navLink => {
            return (
              <NextLink key={navLink.link} href={navLink.link} passHref>
                <Button variant="link" p={4}>
                  {navLink.text}
                </Button>
              </NextLink>
            );
          })}

          <SelectColorMode />
        </Flex>
        <Box color="#ffffff">
          <SelectColorMode />
          <Button variant="link" p={4} onClick={handleOpen}>
            <IconMenu2 />
          </Button>
        </Box>
      </Flex>
      <NavDrawer open={open} handleClose={handleClose} />
    </StickyNav>
  );
};

export default Navigation;
