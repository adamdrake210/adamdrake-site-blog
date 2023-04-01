import { useState } from 'react';
import { Box, Button, Center, Flex, Text } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { CustomLoader } from 'components/common/CustomLoader';
import ControlledTextField from 'components/common/fields/ControlledTextField';
import { TextCopier } from '../../common/TextCopier';
import { chatGptApi } from 'services/api/chatGptApi';

type ChatGptFormValues = {
  message: string;
};

type ChatGptRequestBody = {
  message: string;
};

type ChatGptResponseBody = {
  message: string;
};

export const ChatGptForm = () => {
  const [aiBlogText, setAiBlogText] = useState<string>('');

  const { mutate, error, isLoading, isError } = useMutation<
    ChatGptResponseBody,
    Error,
    ChatGptRequestBody
  >({
    mutationFn: data => chatGptApi(data.message),
  });

  const { handleSubmit, control } = useForm<ChatGptFormValues>({
    defaultValues: {
      message: '',
    },
  });

  const onSubmit = (formData: ChatGptFormValues) => {
    setAiBlogText('');
    mutate(
      {
        message: formData.message,
      },
      {
        onSuccess: async data => {
          console.log('🚀 ~ file: ChatGptForm.tsx:47 ~ onSubmit ~ data:', data);
          setAiBlogText(data.message);
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" justify="center" w={600}>
        <ControlledTextField
          name="message"
          control={control}
          label="Chat GPT message"
          placeholder="Enter your message here..."
          disabled={isLoading}
        />
        <Box mb={16}>
          <Button w={150} type="submit" disabled={isLoading}>
            Ask Chat GPT
          </Button>
        </Box>
        <Center my={8}>
          {isLoading && <CustomLoader />}

          {isError && <Text color="red">{error.message}</Text>}
        </Center>
        {aiBlogText && (
          <TextCopier textToCopy={aiBlogText} title="Chat GPT says" />
        )}
      </Flex>
    </form>
  );
};
