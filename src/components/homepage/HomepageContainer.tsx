import React from 'react';
import { Divider, Flex } from '@mantine/core';

import HomepageBanner from './HomepageBanner';
import { HomepageAboutMeBanner } from './HomepageAboutMeBanner';
import { SocialLinks } from 'components/common/SocialLinks';
import { MyStravaStats } from 'components/strava/MyStravaStats';
import { Post } from 'types/types';

type Props = {
  latestPost: Post;
};

export default function HomepageContainer({ latestPost }: Props) {
  return (
    <Flex mt={32} px={16} w="100%" direction="column" align="center">
      <HomepageAboutMeBanner />

      {latestPost && (
        <HomepageBanner
          post={latestPost}
          pageCategory="blog"
          cta="Read Blog Post"
          pageTitle="Latest Blog Post"
        />
      )}
      <MyStravaStats />
      <SocialLinks />
    </Flex>
  );
}
