import { Flex, useMantineTheme } from '@mantine/core';

import { HomepageAboutMeBanner } from './HomepageAboutMeBanner';
import { SocialLinks } from 'components/common/socialMedia/SocialLinks';
import { MyStravaStats } from 'components/strava/MyStravaStats';
import { CustomDivider } from 'components/common/CustomDivider';
import { AnimateFadeIn } from 'components/common/animations/AnimateFadeIn';
import { SkillsBannerContainer } from 'components/skillsBanner/SkillsBannerContainer';
import HomepageFeaturedMediumPosts from './HomepageFeaturedMediumPosts';

export default function HomepageContainer() {
  const theme = useMantineTheme();

  return (
    <Flex
      px={16}
      w="100%"
      direction="column"
      align="center"
      bg={theme.colors.myColor[1]}
      style={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      <AnimateFadeIn>
        <HomepageAboutMeBanner />
        <CustomDivider />
        <HomepageFeaturedMediumPosts />
        <CustomDivider />
      </AnimateFadeIn>
      {/* Skills Banner */}
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
