import React from 'react';
import { ActionIcon, Box, Flex, useMantineTheme } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';

import {
  ABOUT_ROUTE,
  BLOG_ROUTE,
  BOOKS_ROUTE,
  HIRE_ME_ROUTE,
} from 'constants/routeConstants';
import { useOpen } from 'hooks/useOpen';
import { useNightMode } from 'context/NightModeContext';
import { NavDrawer } from './NavDrawer';
import { NavBrand } from './NavBrand';
import { NavLinkButton } from './NavLinkButton';

export const navLinks = [
  {
    link: BLOG_ROUTE,
    text: 'Blog',
  },
  // {
  //   link: BOOKS_ROUTE,
  //   text: 'Books',
  {
    link: HIRE_ME_ROUTE,
    text: 'Hire Me',
  }, // },
  {
    link: ABOUT_ROUTE,
    text: 'About',
  },
];

const Navigation: React.FC = () => {
  const { open, switchOpen, handleClose } = useOpen();
  const isMdDown = useMediaQuery('(max-width: 768px)');
  const theme = useMantineTheme();
  const { night } = useNightMode();

  return (
    <Box
      style={{
        position: 'sticky',
        zIndex: 1000,
        top: 0,
        backgroundColor: night ? theme.colors.dark[7] : theme.colors.myColor[1],
        backdropFilter: 'saturate(110%) blur(110px)',
        transition: 'background-color 0.6s ease',
        opacity: 0.97,
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
        <NavBrand />
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

            {/* <SelectColorMode /> */}
          </Flex>
        )}
        {/* Mobile Buttons */}
        {isMdDown && (
          <Flex align="center">
            {/* <SelectColorMode /> */}
            <motion.div
              whileTap={{ scale: 0.85, rotate: 90 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <ActionIcon onClick={switchOpen} ml={16} size="lg">
                <IconMenu2 size={26} />
              </ActionIcon>
            </motion.div>
          </Flex>
        )}
      </Flex>
      {/* Mobile Menu */}
      <NavDrawer open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Navigation;
