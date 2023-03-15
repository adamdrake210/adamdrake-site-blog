export const createBlogPost = async (prompt: string) => {
  const response = await fetch('/api/openai/createBlogPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to create blog post via OpenAI: ${response.statusText}`,
    );
  }
  return response.json();
};
