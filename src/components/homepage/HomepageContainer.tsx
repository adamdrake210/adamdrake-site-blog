import React from 'react';
import { Flex } from '@chakra-ui/react';

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
    <Flex mt={[2, 2, 2, 12]} w="100%" direction="column" alignItems="center">
      <HomepageAboutMeBanner />

      {latestPost && (
        <HomepageBanner
          post={latestPost}
          pageCategory="articles"
          cta="Read Article"
          pageTitle="Latest Article"
        />
      )}
      <MyStravaStats />
      <SocialLinks />
    </Flex>
  );
}
