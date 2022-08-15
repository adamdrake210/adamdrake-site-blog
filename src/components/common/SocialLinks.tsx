import React from 'react';
import { Flex, Icon, Tooltip } from '@chakra-ui/react';

import { GithubLogo } from 'assets/icons/GithubLogo';
import { TwitterLogo } from 'assets/icons/TwitterLogo';
import { LinkedInLogo } from 'assets/icons/LinkedInLogo';
import { useThemeColors } from 'hooks/useThemeColors';

export const SocialLinks = () => {
  const { color } = useThemeColors();

  return (
    <Flex my={8}>
      <a
        href="https://www.linkedin.com/in/adam-drake-ab065417/"
        target="_blank"
        rel="noreferrer"
      >
        <Tooltip label="For recruiters...">
          <Icon
            viewBox="0 0 28 28"
            width="60px"
            height="60px"
            mx={4}
            _hover={{
              transform: 'scale(1.1);',
              transition: 'all .2s ease-in-out',
            }}
          >
            <LinkedInLogo fill={color} />
          </Icon>
        </Tooltip>
      </a>
      <a
        href="https://github.com/adamdrake210"
        target="_blank"
        rel="noreferrer"
      >
        <Tooltip label="For code enthusiasts...">
          <Icon
            viewBox="0 0 65 65"
            width={50}
            height={50}
            mx={4}
            _hover={{
              transform: 'scale(1.1);',
              transition: 'all .2s ease-in-out',
            }}
          >
            <GithubLogo fill={color} />
          </Icon>
        </Tooltip>
      </a>
      <a
        href="https://twitter.com/FrontEndDrake"
        target="_blank"
        rel="noreferrer"
      >
        <Tooltip label="For the birds...">
          <Icon
            viewBox="0 0 24 24"
            width={50}
            height={50}
            mx={4}
            _hover={{
              transform: 'scale(1.1);',
              transition: 'all .2s ease-in-out',
            }}
          >
            <TwitterLogo fill={color} />
          </Icon>
        </Tooltip>
      </a>
    </Flex>
  );
};
