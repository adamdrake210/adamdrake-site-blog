import React from 'react';
import { Box, Button, Input, Title } from '@mantine/core';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPostDetails } from 'services/supabase/createPostDetail';
import { RQ_BLOG_POST } from 'constants/constants';

export const CreateLikeData = () => {
  const [slug, setSlug] = React.useState<string>('');
  const queryClient = useQueryClient();

  const mutationOptions = {
    onError: (err: any) => {
      console.error(err);
    },
    onSuccess: () => {
      alert('Success!');
      setSlug('');
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries([RQ_BLOG_POST, slug]);
    },
  };

  const { mutate, isLoading } = useMutation<any, Error, any>({
    mutationFn: ({ slug }) => createPostDetails({ slug }),
  });

  const createLikeData = () => {
    mutate(
      {
        slug,
      },
      mutationOptions,
    );
  };

  return (
    <Box>
      <Title order={2} fz={30}>
        Create Like Data in Supabase
      </Title>
      <Input.Wrapper
        description="This is the slug for the blog post which needs a like component"
        w={600}
      >
        <Input
          name="title"
          value={slug}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSlug(e.target.value)
          }
          placeholder="Enter slug here"
          w="100%"
        />
      </Input.Wrapper>
      <Box my={16}>
        <Button w={150} onClick={createLikeData} disabled={isLoading}>
          Create
        </Button>
      </Box>
    </Box>
  );
};
