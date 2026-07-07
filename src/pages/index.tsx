import Head from 'next/head';

import PageContainer from 'layouts/PageContainer';
import HomepageContainer from 'components/homepage/HomepageContainer';
import { LoadingScreen } from 'components/common/LoadingScreen';
import { SITE_NAME } from 'constants/constants';
import { client } from 'client';

export default function PageIndex() {
  return (
    <>
      <Head>
        <title>{SITE_NAME} | Home</title>
      </Head>

      <LoadingScreen>
        <PageContainer maxWidth="1000px">
          <HomepageContainer />
        </PageContainer>
      </LoadingScreen>
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc) [0..8]`,
  );

  return {
    props: {
      latestPosts: posts,
    },
  };
}
