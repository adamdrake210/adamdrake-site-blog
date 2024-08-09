import React from 'react';
import { ActionIcon, Box, Flex } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

import { SITE_NAME } from 'constants/constants';
import SelectColorMode from './SelectColorMode';
import { ABOUT_ROUTE, BLOG_ROUTE, BOOKS_ROUTE } from 'constants/routeConstants';
import { useOpen } from 'hooks/useOpen';
import { NavDrawer } from './NavDrawer';
import { NavLinkButton } from './NavLinkButton';

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
  const isMdDown = useMediaQuery('(max-width: 768px)');

  return (
    <Box
      style={{
        position: 'sticky',
        zIndex: 10,
        top: 0,
        backdropFilter: 'saturate(110%) blur(110px)',
        transition: 'background-color 0.1 ease-in-out',
      }}
      w="100%"
      p={16}
    >
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        maw="1020px"
        w="100%"
        m="0 auto"
      >
        <Box>
          <NavLinkButton btnText={SITE_NAME} href="/" />
        </Box>
        {!isMdDown && (
          <Flex align="center">
            {navLinks.map(navLink => {
              return (
                <NavLinkButton
                  key={navLink.link}
                  btnText={navLink.text}
                  href={navLink.link}
                />
              );
            })}

            <SelectColorMode />
          </Flex>
        )}
        {/* Mobile Buttons */}
        {isMdDown && (
          <Flex align="center">
            <SelectColorMode />
            <ActionIcon onClick={handleOpen} ml={16}>
              <IconMenu2 />
            </ActionIcon>
          </Flex>
        )}
      </Flex>
      {/* Mobile Menu */}
      <NavDrawer open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Navigation;
