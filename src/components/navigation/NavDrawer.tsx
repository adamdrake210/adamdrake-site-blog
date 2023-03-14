import React from 'react';
import { Button, Drawer, Flex, NavLink, Title } from '@mantine/core';
import { navLinks } from './Navigation';
import NextLink from 'next/link';
import { SITE_NAME } from 'constants/constants';
import { NavLinkButton } from './NavLinkButton';

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
        title="NAVIGATION"
      >
        <Flex direction="column">
          <Title order={2} mb={24}>
            {SITE_NAME}
          </Title>

          <Flex
            direction="column"
            align="flex-start"
            justify="space-between"
            h={150}
          >
            {navLinks.map(navLink => {
              return (
                <NavLinkButton
                  key={navLink.link}
                  btnText={navLink.text}
                  href={navLink.link}
                />
              );
            })}
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
}
