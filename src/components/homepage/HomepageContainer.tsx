import React from 'react';
import { Box, Flex, Grid, Text, Title } from '@mantine/core';
import NextLink from 'next/link';
import { useMediaQuery } from '@mantine/hooks';

import { HomepageAboutMeBanner } from './HomepageAboutMeBanner';
import { SocialLinks } from 'components/common/socialMedia/SocialLinks';
import { MyStravaStats } from 'components/strava/MyStravaStats';
import { Post } from 'types/types';
import { CustomDivider } from 'components/common/CustomDivider';
import { AnimateFadeIn } from 'components/common/animations/AnimateFadeIn';
import { SkillsBannerContainer } from 'components/skillsBanner/SkillsBannerContainer';
import { BlogCard } from 'components/blog/BlogCard';

type Props = {
  latestPosts: Post[];
};

export default function HomepageContainer({ latestPosts }: Props) {
  const isMdDown = useMediaQuery('(max-width: 747px)');
  const isSmDown = useMediaQuery('(max-width: 600px)');

  return (
    <Flex mt={32} px={16} w="100%" direction="column" align="center">
      <AnimateFadeIn>
        <HomepageAboutMeBanner />
      </AnimateFadeIn>
      <CustomDivider />

      {/* Latest Post */}
      <AnimateFadeIn>
        {latestPosts && latestPosts.length > 0 ? (
          <>
            <Title order={2} mb={16}>
              Recently Published
            </Title>
            <Grid>
              {latestPosts.map(post => {
                return (
                  <Grid.Col
                    mb={8}
                    span={isSmDown ? 12 : isMdDown ? 6 : 4}
                    key={post.slug}
                  >
                    <Box style={{ position: 'relative' }}>
                      <NextLink as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                        <a>
                          <BlogCard
                            title={post.title}
                            createdDate={post._createdAt}
                            content={post.content}
                            imageUrl={post.headerimageurl}
                          />
                        </a>
                      </NextLink>
                    </Box>
                  </Grid.Col>
                );
              })}
            </Grid>
          </>
        ) : (
          <Text fz="xl">No blog posts Found. Coming soon...</Text>
        )}
      </AnimateFadeIn>
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
