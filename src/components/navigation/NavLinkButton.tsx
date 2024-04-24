import React from 'react';
import NextLink from 'next/link';
import { Button } from '@mantine/core';

type Props = {
  btnText: string;
  href: string;
};

export const NavLinkButton = ({ btnText, href }: Props) => {
  return (
    <NextLink href={href}>
      <Button
        component="a"
        variant="link"
        fz="xl"
        px={16}
        uppercase
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 200,
        }}
      >
        {btnText}
      </Button>
    </NextLink>
  );
};
