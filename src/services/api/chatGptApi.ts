export const chatGptApi = async (message: string) => {
  const response = await fetch('/api/openai/chatGptApi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to generate response from ChatGpt: ${response.statusText}`,
    );
  }
  return response.json();
};
