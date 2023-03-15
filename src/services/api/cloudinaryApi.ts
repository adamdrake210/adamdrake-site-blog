export const postExistingImageToCloudinary = async (imageUrl: string) => {
  const response = await fetch('/api/cloudinary/uploadImage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imageUrl }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to upload image to Cloudinary: ${response.statusText}`,
    );
  }
  return response.json();
};
