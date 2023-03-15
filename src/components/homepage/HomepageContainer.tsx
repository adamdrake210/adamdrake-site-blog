import React from 'react';
import { Box, Divider, Flex } from '@mantine/core';

import HomepageBanner from './HomepageBanner';
import { HomepageAboutMeBanner } from './HomepageAboutMeBanner';
import { SocialLinks } from 'components/common/SocialLinks';
import { MyStravaStats } from 'components/strava/MyStravaStats';
import { Post } from 'types/types';
import { CustomDivider } from 'components/common/CustomDivider';
import { AnimateFadeIn } from 'components/common/animations/AnimateFadeIn';

type Props = {
  latestPost: Post;
};

export default function HomepageContainer({ latestPost }: Props) {
  return (
    <Flex mt={32} px={16} w="100%" direction="column" align="center">
      <AnimateFadeIn>
        <HomepageAboutMeBanner />
      </AnimateFadeIn>
      <CustomDivider />

      {latestPost && (
        <AnimateFadeIn>
          <HomepageBanner
            post={latestPost}
            pageCategory="blog"
            cta="Read Blog Post"
            pageTitle="Latest Blog Post"
          />
        </AnimateFadeIn>
      )}
      <CustomDivider />
      <AnimateFadeIn>
        <MyStravaStats />
      </AnimateFadeIn>
      <CustomDivider />
      <SocialLinks />
    </Flex>
  );
}
