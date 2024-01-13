import { useState } from 'react';
import { Box, Button, Center, FileInput, Flex, Text } from '@mantine/core';

import { CustomLoader } from 'components/common/CustomLoader';
import { TextCopier } from '../../common/TextCopier';
import { useMutation } from '@tanstack/react-query';
import { createAudioText } from 'services/api/createAudioText';

export const TranscribeAudioForm = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [audioText, setAudioText] = useState<string>('');

  const { mutate, error, isLoading, isError } = useMutation<
    { text: string },
    Error,
    { file: FormData }
  >({
    mutationFn: data => createAudioText(data.file),
  });

  const handleAudioUpload = async () => {
    if (!uploadedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', uploadedFile);

    mutate(
      {
        file: formData,
      },
      {
        onSuccess: async data => {
          console.log('audio_data', data);
          setAudioText(data.text);
        },
      },
    );
  };

  return (
    <div>
      <Flex direction="column" justify="center" w={600}>
        <FileInput
          placeholder="Pick Audio File"
          label="Upload Audio File Here"
          withAsterisk
          accept=".mp3, .wav, .mp4, .mpeg, .m4a, .mpga, .webm"
          onChange={setUploadedFile}
          mb={16}
        />
        <Box mb={16}>
          <Button w={150} onClick={handleAudioUpload} disabled={isLoading}>
            Upload Audio
          </Button>
        </Box>
        <Center my={8}>
          {isLoading && <CustomLoader />}

          {isError && <Text color="red">{error.message}</Text>}
        </Center>
        {audioText && <TextCopier textToCopy={audioText} title="Audio Text" />}
      </Flex>
    </div>
  );
};
