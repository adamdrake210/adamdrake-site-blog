import React from 'react';
import NextLink from 'next/link';
import { Button, useMantineColorScheme } from '@mantine/core';

type Props = {
  btnText: string;
  href: string;
};

export const NavLinkButton = ({ btnText, href }: Props) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <NextLink href={href}>
      <Button
        component="a"
        variant="link"
        fz="xl"
        px={16}
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 200,
          textTransform: 'uppercase',
          backgroundColor: 'transparent',
          color: colorScheme === 'dark' ? 'white' : 'black',
        }}
      >
        {btnText}
      </Button>
    </NextLink>
  );
};
