import { Drawer, Flex } from '@mantine/core';
import { navLinks } from './Navigation';
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
        <Flex direction="column" my={24} mt={48}>
          <Flex
            direction="column"
            align="flex-start"
            justify="space-between"
            gap={16}
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
