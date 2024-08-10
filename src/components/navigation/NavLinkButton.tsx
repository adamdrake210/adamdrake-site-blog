import React from 'react';
import NextLink from 'next/link';
import { Button, useMantineTheme } from '@mantine/core';

type Props = {
  btnText: string;
  href: string;
};

export const NavLinkButton = ({ btnText, href }: Props) => {
  const theme = useMantineTheme();

  return (
    <NextLink href={href}>
      <Button
        component="a"
        variant="link"
        fz={32}
        px={16}
        style={{
          fontFamily: "'Red Hat Display', sans-serif",
          fontWeight: 200,
          textTransform: 'uppercase',
          backgroundColor: 'transparent',
          color: theme.colors.gray[6],
        }}
      >
        {btnText}
      </Button>
    </NextLink>
  );
};
