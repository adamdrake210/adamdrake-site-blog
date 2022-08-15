import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';

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
        <Icon viewBox="0 0 28 28" width="60px" height="60px" mx={4}>
          <LinkedInLogo fill={color} />
        </Icon>
      </a>
      <a
        href="https://github.com/adamdrake210"
        target="_blank"
        rel="noreferrer"
      >
        <Icon viewBox="0 0 65 65" width={50} height={50} mx={4}>
          <GithubLogo fill={color} />
        </Icon>
      </a>
      <a
        href="https://twitter.com/FrontEndDrake"
        target="_blank"
        rel="noreferrer"
      >
        <Icon viewBox="0 0 24 24" width={50} height={50} mx={4}>
          <TwitterLogo fill={color} />
        </Icon>
      </a>
    </Flex>
  );
};
