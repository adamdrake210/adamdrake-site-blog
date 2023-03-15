import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconClipboard } from '@tabler/icons-react';
import { useMutation } from '@tanstack/react-query';
import { CustomLoader } from 'components/common/CustomLoader';
import ControlledTextField from 'components/common/fields/ControlledTextField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postExistingImageToCloudinary } from 'services/api/cloudinaryApi';

type UploadImageFormValues = {
  imageUrl: string;
};

export const UploadImageForm = () => {
  const clipboard = useClipboard({ timeout: 1000 });
  const [cloudinaryUrl, setCloudinaryUrl] = useState<string>('');

  const { mutate, error, isLoading, isError } = useMutation<
    { imageUrl: string },
    Error,
    { imageUrl: string }
  >({
    mutationFn: data => postExistingImageToCloudinary(data.imageUrl),
  });

  const { handleSubmit, control } = useForm<UploadImageFormValues>({
    defaultValues: {
      imageUrl: '',
    },
  });

  const onSubmit = (formData: UploadImageFormValues) => {
    mutate(
      {
        imageUrl: formData.imageUrl,
      },
      {
        onSuccess: async data => {
          console.log('data', data);
          setCloudinaryUrl(data.imageUrl);
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" justify="center">
        <ControlledTextField
          name="imageUrl"
          type="text"
          control={control}
          label="Image URL"
          placeholder="Enter the url for the image here..."
          disabled={isLoading}
          width={500}
        />
        <Box mb={16}>
          <Button w={150} type="submit" disabled={isLoading}>
            Upload Image
          </Button>
        </Box>
        <Center my={8}>
          {isLoading && <CustomLoader />}

          {isError && <Text color="red">{error.message}</Text>}
        </Center>
        {cloudinaryUrl && (
          <Box my={32}>
            <Title order={2}>Cloudinary URL</Title>
            <Flex align="center">
              <Text>Cloudinary URL: {cloudinaryUrl}</Text>
              <Tooltip label="Copied!" opened={clipboard.copied}>
                <ActionIcon onClick={() => clipboard.copy(cloudinaryUrl)}>
                  <IconClipboard />
                </ActionIcon>
              </Tooltip>
            </Flex>
          </Box>
        )}
      </Flex>
    </form>
  );
};
