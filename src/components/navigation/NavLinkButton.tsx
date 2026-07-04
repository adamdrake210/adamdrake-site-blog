import React from 'react';
import NextLink from 'next/link';
import { Text } from '@mantine/core';

type Props = {
  btnText: string;
  href: string;
};

export const NavLinkButton = ({ btnText, href }: Props) => {
  return (
    <NextLink href={href}>
      <Text
        fz={24}
        px={16}
        className="nav-link"
        style={{
          fontFamily: "'Red Hat Display', sans-serif",
          fontWeight: 200,
          textTransform: 'uppercase',
          backgroundColor: 'transparent',
        }}
      >
        {btnText}
      </Text>
    </NextLink>
  );
};
