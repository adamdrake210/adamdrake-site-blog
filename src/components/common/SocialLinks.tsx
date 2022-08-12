import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';

import { GithubLogo } from 'assets/icons/GithubLogo';
import { TwitterLogo } from 'assets/icons/twitterLogo';
import { LinkedInLogo } from 'assets/icons/LinkedInLogo';

export const SocialLinks = () => {
  return (
    <Flex my={8}>
      <a
        href="https://www.linkedin.com/in/adam-drake-ab065417/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          viewBox="0 0 28 28"
          color="white"
          width="60px"
          height="60px"
          mx={4}
        >
          <LinkedInLogo />
        </Icon>
      </a>
      <a
        href="https://github.com/adamdrake210"
        target="_blank"
        rel="noreferrer"
      >
        <Icon viewBox="0 0 65 65" color="white" width={50} height={50} mx={4}>
          <GithubLogo />
        </Icon>
      </a>
      <a
        href="https://twitter.com/FrontEndDrake"
        target="_blank"
        rel="noreferrer"
      >
        <Icon viewBox="0 0 50 50" color="white" width={50} height={50} mx={4}>
          <TwitterLogo />
        </Icon>
      </a>
    </Flex>
  );
};
