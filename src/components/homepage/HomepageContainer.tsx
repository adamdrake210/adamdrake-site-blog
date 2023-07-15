import React from 'react';
import { Box, Divider, Flex } from '@mantine/core';

import HomepageBanner from './HomepageBanner';
import { HomepageAboutMeBanner } from './HomepageAboutMeBanner';
import { SocialLinks } from 'components/common/socialMedia/SocialLinks';
import { MyStravaStats } from 'components/strava/MyStravaStats';
import { Post } from 'types/types';
import { CustomDivider } from 'components/common/CustomDivider';
import { AnimateFadeIn } from 'components/common/animations/AnimateFadeIn';
import { SkillsBannerContainer } from 'components/skillsBanner/SkillsBannerContainer';

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

      {/* Latest Post */}
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
      {/* Skills Banner */}
      <CustomDivider />
      <AnimateFadeIn>
        <SkillsBannerContainer />
      </AnimateFadeIn>
      {/* Strava Stats */}
      <CustomDivider />
      <AnimateFadeIn>
        <MyStravaStats />
      </AnimateFadeIn>
      {/* Social Media */}
      <CustomDivider />
      <SocialLinks />
    </Flex>
  );
}
