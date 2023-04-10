import { useState } from 'react';
import { Box, Button, Center, FileInput, Flex, Text } from '@mantine/core';
import axios from 'axios';

import { CustomLoader } from 'components/common/CustomLoader';
import { TextCopier } from '../../common/TextCopier';

export const UploadImageFileForm = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [cloudinaryUrl, setCloudinaryUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleImageUpload = async () => {
    setIsLoading(true);
    try {
      if (uploadedFile) {
        const form = new FormData();

        form.set('file', uploadedFile);
        form.append('upload_preset', 'adamdrakeblog');

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dmiizmobu/image/upload`,
          form,
        );

        setCloudinaryUrl(response.data.secure_url);
      }
      setIsLoading(false);
    } catch (error) {
      // @ts-ignore
      setError(error);
    }
  };

  return (
    <div>
      <Flex direction="column" justify="center" w={600}>
        <FileInput
          placeholder="Pick Image"
          label="Upload Image Here"
          withAsterisk
          accept="image/png,image/jpeg"
          onChange={setUploadedFile}
          mb={16}
        />
        <Box mb={16}>
          <Button w={150} onClick={handleImageUpload} disabled={isLoading}>
            Upload Image
          </Button>
        </Box>
        <Center my={8}>
          {isLoading && <CustomLoader />}

          {error && <Text color="red">{error.message}</Text>}
        </Center>
        {cloudinaryUrl && (
          <TextCopier textToCopy={cloudinaryUrl} title="Cloudinary URL" />
        )}
      </Flex>
    </div>
  );
};
