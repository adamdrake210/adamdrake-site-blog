import { supabase } from './supabaseClient';

export const createPostDetails = async ({ slug }: { slug: string }) => {
  const { data, error } = await supabase.from('posts').insert([
    {
      slug,
      likes: 0,
    },
  ]);
  if (error) throw error;
  return data;
};
