export const createAudioText = async (formData: FormData | null) => {
  console.log(
    '🚀 ~ formData: createAudioText.ts:2 ~ createAudioText ~ formData:',
    formData,
  );
  const response = await fetch('/api/openai/whisperOpenApi', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(
      `Failed to generate response from Open API Whisper Api: ${response.statusText}`,
    );
  }
  return response.json();
};
