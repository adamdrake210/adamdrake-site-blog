import React from 'react';
import { Drawer, Flex, NavLink, Title } from '@mantine/core';
import { navLinks } from './Navigation';
import NextLink from 'next/link';
import { SITE_NAME } from 'constants/constants';

type Props = {
  open: boolean;
  handleClose: () => void;
};

export function NavDrawer({ open, handleClose }: Props) {
  return (
    <>
      <Drawer
        opened={open}
        position="right"
        onClose={handleClose}
        title="Navigation"
      >
        <Flex direction="column">
          <Title order={2}>{SITE_NAME}</Title>

          <Flex direction="column" align="flex-start">
            {navLinks.map(navLink => {
              return (
                <NextLink key={navLink.link} href={navLink.link} passHref>
                  <NavLink variant="link" py={12}>
                    {navLink.text}
                  </NavLink>
                </NextLink>
              );
            })}
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
}
