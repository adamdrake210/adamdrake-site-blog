import { client } from 'client';
import { Post } from 'types/types';

export const BLOG_POSTS_PER_PAGE = 9;

export const getAllPosts = async (itemNumber: number): Promise<Post[]> => {
  return await client.fetch(
    `*[_type == "post"] | order(_createdAt desc) [${String(
      0 + itemNumber,
    )}...${String(BLOG_POSTS_PER_PAGE + itemNumber)}]`,
  );
};
