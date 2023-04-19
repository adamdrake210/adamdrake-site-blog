import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ActionIcon, Box, Center, Flex, Text, Title } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';

import { getPostDetails } from 'services/supabase/getPostDetails';
import { updatePostDetails } from 'services/supabase/updatePostDetails';
import { RQ_BLOG_POST } from 'constants/constants';

type Props = {
  slug: string;
};

export const BlogLikeButton = ({ slug }: Props) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [RQ_BLOG_POST, slug],
    queryFn: () => getPostDetails({ slug }),
  });

  const { mutate } = useMutation<any, Error, any>({
    mutationFn: ({ id, likes }) => updatePostDetails({ id, likes }),
  });

  const mutationOptions = {
    onError: (err: any) => {
      console.error(err);
    },
    onSuccess: () => {
      queryClient.refetchQueries([RQ_BLOG_POST, slug]);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries([RQ_BLOG_POST, slug]);
    },
  };

  const handleLikeClick = (id: string, likes: number) => {
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
      {data && data.length > 0 && (
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
