import { Button, Center, Flex, Text, UnstyledButton } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { CustomLoader } from 'components/common/CustomLoader';
import ControlledTextField from 'components/common/fields/ControlledTextField';
import { useForm } from 'react-hook-form';
import { postExistingImageToCloudinary } from 'services/api/cloudinaryApi';

type UploadImageFormValues = {
  imageUrl: string;
};

export const UploadImageForm = () => {
  const { mutate, error, isLoading, isError } = useMutation<
    any,
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
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" justify="center" align="center" w={250}>
        <ControlledTextField
          name="imageUrl"
          type="text"
          control={control}
          label="Image URL"
          placeholder="Enter the url for the image here..."
          disabled={isLoading}
          width={500}
        />
        <Center my={16}>
          <Button w={150} type="submit" disabled={isLoading}>
            Upload Image
          </Button>
        </Center>
        <Center my={8}>
          {isLoading && <CustomLoader />}

          {isError && <Text color="red">{error.message}</Text>}
        </Center>
      </Flex>
    </form>
  );
};
