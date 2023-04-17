import { client } from 'client';
import { Post } from 'types/types';

export const getAllPosts = async (): Promise<Post[]> => {
  return await client.fetch(`*[_type == "post"] | order(date desc)`);
};
