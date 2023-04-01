import { useState } from 'react';
import { Box, Button, Center, Flex, Text } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { CustomLoader } from 'components/common/CustomLoader';
import ControlledTextField from 'components/common/fields/ControlledTextField';
import { postExistingImageToCloudinary } from 'services/api/cloudinaryApi';
import { TextCopier } from '../../common/TextCopier';

type UploadImageFormValues = {
  imageUrl: string;
};

type CloudinaryImageUploadRequestBody = {
  imageUrl: string;
};

type CloudinaryImageUploadResponse = {
  imageUrl: string;
};

export const UploadImageForm = () => {
  const [cloudinaryUrl, setCloudinaryUrl] = useState<string>('');

  const { mutate, error, isLoading, isError } = useMutation<
    CloudinaryImageUploadResponse,
    Error,
    CloudinaryImageUploadRequestBody
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
          setCloudinaryUrl(data.imageUrl);
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" justify="center" w={600}>
        <ControlledTextField
          name="imageUrl"
          control={control}
          label="Image URL"
          placeholder="Enter the url for the image here..."
          disabled={isLoading}
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
          <TextCopier textToCopy={cloudinaryUrl} title="Cloudinary URL" />
        )}
      </Flex>
    </form>
  );
};
