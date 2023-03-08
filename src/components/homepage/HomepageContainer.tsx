import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';

import HomepageBanner from './HomepageBanner';
import { sortNumberByPublishedDateRemote } from 'utils/sortNumberByPublishedDateRemote';
import { HomepageAboutMeBanner } from './HomepageAboutMeBanner';
import { SocialLinks } from 'components/common/SocialLinks';
import { MyStravaStats } from 'components/strava/MyStravaStats';

type Props = {
  articlePosts: any[];
};

export default function HomepageContainer({ articlePosts }: Props) {
  const [articleArr, setArticleArr] = useState<Array<any>>([]);
  useEffect(() => {
    setArticleArr(articlePosts.sort(sortNumberByPublishedDateRemote));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex mt={[2, 2, 2, 12]} w="100%" direction="column" alignItems="center">
      <HomepageAboutMeBanner />

      {articleArr.length && (
        <HomepageBanner
          post={articleArr[0].data}
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
