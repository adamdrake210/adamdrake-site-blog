import React from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';

type Props = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

export const SocialIcon = ({ label, icon, href }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Tooltip label={label}>
        <ActionIcon
          variant="transparent"
          w={60}
          h={60}
          mx={32}
          style={{
            '&:hover': {
              transform: 'scale(1.1);',
              transition: 'all .2s ease-in-out',
            },
          }}
        >
          {icon}
        </ActionIcon>
      </Tooltip>
    </a>
  );
};
