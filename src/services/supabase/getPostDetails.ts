import { supabase } from './supabaseClient';

export const getPostDetails = async ({ slug }: { slug: string }) => {
  const { data, error } = await supabase
    .from('posts')
    .select(`likes,id`)
    .eq('slug', slug);
  if (error) throw error;
  return data;
};
