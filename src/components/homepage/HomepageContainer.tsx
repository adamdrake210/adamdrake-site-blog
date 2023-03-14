import React from 'react';
import { Box, Divider, Flex } from '@mantine/core';

import HomepageBanner from './HomepageBanner';
import { HomepageAboutMeBanner } from './HomepageAboutMeBanner';
import { SocialLinks } from 'components/common/SocialLinks';
import { MyStravaStats } from 'components/strava/MyStravaStats';
import { Post } from 'types/types';
import { CustomDivider } from 'components/common/CustomDivider';

type Props = {
  latestPost: Post;
};

export default function HomepageContainer({ latestPost }: Props) {
  return (
    <Flex mt={32} px={16} w="100%" direction="column" align="center">
      <HomepageAboutMeBanner />
      <CustomDivider />

      {latestPost && (
        <HomepageBanner
          post={latestPost}
          pageCategory="blog"
          cta="Read Blog Post"
          pageTitle="Latest Blog Post"
        />
      )}
      <CustomDivider />
      <MyStravaStats />
      <CustomDivider />
      <SocialLinks />
    </Flex>
  );
}
