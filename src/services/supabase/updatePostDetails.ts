import { supabase } from './supabaseClient';

export const updatePostDetails = async ({
  id,
  likes,
}: {
  id: string;
  likes: number;
}) => {
  const { data, error } = await supabase
    .from('posts')
    .update({ likes })
    .match({ id });
  if (error) throw error;
  return data;
};
