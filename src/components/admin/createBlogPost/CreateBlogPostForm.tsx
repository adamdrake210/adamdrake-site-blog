import { useState } from 'react';
import { Box, Button, Center, Flex, Text } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { CustomLoader } from 'components/common/CustomLoader';
import ControlledTextField from 'components/common/fields/ControlledTextField';
import { TextCopier } from '../../common/TextCopier';
import { createBlogPost } from 'services/api/openaiApi';

type CreateBlogPostFormValues = {
  prompt: string;
};

type CreateBlogPostRequestBody = {
  prompt: string;
};

type CreateBlogPostResponse = {
  blogText: string;
};

export const CreateBlogPostForm = () => {
  const [aiBlogText, setAiBlogText] = useState<string>('');

  const { mutate, error, isLoading, isError } = useMutation<
    CreateBlogPostResponse,
    Error,
    CreateBlogPostRequestBody
  >({
    mutationFn: data => createBlogPost(data.prompt),
  });

  const { handleSubmit, control } = useForm<CreateBlogPostFormValues>({
    defaultValues: {
      prompt: '',
    },
  });

  const onSubmit = (formData: CreateBlogPostFormValues) => {
    setAiBlogText('');
    mutate(
      {
        prompt: formData.prompt,
      },
      {
        onSuccess: async data => {
          setAiBlogText(data.blogText);
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" justify="center" w={600}>
        <ControlledTextField
          name="prompt"
          type="text"
          control={control}
          label="Blog Post Prompt"
          placeholder="Enter your prompt here to create a blog post..."
          disabled={isLoading}
        />
        <Box mb={16}>
          <Button w={150} type="submit" disabled={isLoading}>
            Create Blog Post
          </Button>
        </Box>
        <Center my={8}>
          {isLoading && <CustomLoader />}

          {isError && <Text color="red">{error.message}</Text>}
        </Center>
        {aiBlogText && (
          <TextCopier textToCopy={aiBlogText} title="AI Blog Text" />
        )}
      </Flex>
    </form>
  );
};
