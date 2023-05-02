import React from 'react';
import { Flex } from '@mantine/core';

import { GithubLogo } from 'assets/icons/GithubLogo';
import { TwitterLogo } from 'assets/icons/TwitterLogo';
import { LinkedInLogo } from 'assets/icons/LinkedInLogo';
import { SocialIcon } from './SocialIcon';

const socialIconsData = [
  {
    label: 'For recruiters...',
    icon: <LinkedInLogo />,
    href: 'https://www.linkedin.com/in/adam-drake-ab065417/',
  },
  {
    label: 'For code enthusiasts...',
    icon: <GithubLogo />,
    href: 'https://github.com/adamdrake210',
  },
  {
    label: 'For the birds...',
    icon: <TwitterLogo />,
    href: 'https://twitter.com/FrontEndDrake',
  },
];

export const SocialLinks = () => {
  return (
    <Flex my={32}>
      {socialIconsData.map(({ label, icon, href }) => (
        <SocialIcon key={label} label={label} icon={icon} href={href} />
      ))}
    </Flex>
  );
};
