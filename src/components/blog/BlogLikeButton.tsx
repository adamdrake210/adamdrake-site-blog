import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getPostDetails } from 'services/supabase/getPostDetails';
import { ActionIcon, Box, Center, Flex, Text, Title } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import { updatePostDetails } from 'services/supabase/updatePostDetails';

type Props = {
  slug: string;
};

export const BlogLikeButton = ({ slug }: Props) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => getPostDetails({ slug }),
  });

  const { mutate } = useMutation<any, Error, any>({
    mutationKey: ['blogPost', slug],
    mutationFn: ({ id, likes }) => updatePostDetails({ id, likes }),
  });

  const mutationOptions = {
    onError: (err: any) => {
      console.error(err);
    },
    onSuccess: () => {
      queryClient.refetchQueries(['blogPost', slug]);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(['blogPost', slug]);
    },
  };

  console.log('data', data);

  const handleLikeClick = (id: string, likes: number) => {
    console.log('like button clicked');
    mutate(
      {
        id,
        likes: likes + 1,
      },
      mutationOptions,
    );
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    console.error('Like button error', error);
  }

  return (
    <>
      {data && (
        <Center my={16}>
          <Flex direction="column" align="center" justify="center">
            <Title order={3}>Wanna press a button?</Title>
            <Flex align="center">
              <ActionIcon
                color="grape"
                size="lg"
                mr={5}
                onClick={() => handleLikeClick(data[0].id, data[0].likes)}
              >
                <IconHeartFilled size="1.625rem" />
              </ActionIcon>
              <Text fz={20} fw={600}>
                {data[0].likes}
              </Text>
            </Flex>
          </Flex>
        </Center>
      )}
    </>
  );
};

// Click heart to like a post
// Update the number of likes in the database
// Update the number of likes in the UI
