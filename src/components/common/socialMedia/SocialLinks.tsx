import React from 'react';

import { GithubLogo } from 'assets/icons/GithubLogo';
import { TwitterLogo } from 'assets/icons/TwitterLogo';
import { LinkedInLogo } from 'assets/icons/LinkedInLogo';
import { ActionIcon, Flex, Tooltip, useMantineTheme } from '@mantine/core';

export const SocialLinks = () => {
  const theme = useMantineTheme();

  const iconColor =
    theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[6];

  return (
    <Flex my={32}>
      <a
        href="https://www.linkedin.com/in/adam-drake-ab065417/"
        target="_blank"
        rel="noreferrer"
      >
        <Tooltip label="For recruiters...">
          <ActionIcon
            w={60}
            h={60}
            mx={32}
            sx={{
              '&:hover': {
                transform: 'scale(1.1);',
                transition: 'all .2s ease-in-out',
              },
            }}
          >
            <LinkedInLogo fill={iconColor} />
          </ActionIcon>
        </Tooltip>
      </a>
      <a
        href="https://github.com/adamdrake210"
        target="_blank"
        rel="noreferrer"
      >
        <Tooltip label="For code enthusiasts...">
          <ActionIcon
            w={60}
            h={60}
            mx={32}
            sx={{
              '&:hover': {
                transform: 'scale(1.1);',
                transition: 'all .2s ease-in-out',
              },
            }}
          >
            <GithubLogo fill={iconColor} />
          </ActionIcon>
        </Tooltip>
      </a>
      <a
        href="https://twitter.com/FrontEndDrake"
        target="_blank"
        rel="noreferrer"
      >
        <Tooltip label="For the birds...">
          <ActionIcon
            w={60}
            h={60}
            mx={32}
            sx={{
              '&:hover': {
                transform: 'scale(1.1);',
                transition: 'all .2s ease-in-out',
              },
            }}
          >
            <TwitterLogo fill={iconColor} />
          </ActionIcon>
        </Tooltip>
      </a>
    </Flex>
  );
};
