import { GetStaticProps } from 'next';

import { client } from 'client';
import { Post as PostType } from 'types/types';
import { BlogPost } from 'components/blog/BlogPost';

function Post({ post }: { post: PostType }) {
  return <>{post && <BlogPost post={post} />}</>;
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug)][].slug`,
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async context => {
  // It's important to default the slug so that it doesn't return "undefined"
  const params = context.params;
  const slug = params?.slug || '';
  const post = await client.fetch(
    `
    *[_type == "post" && slug == $slug][0]
  `,
    { slug },
  );

  return {
    props: {
      post,
    },
  };
};

export default Post;
