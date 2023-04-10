export const postExistingImageToCloudinary = async (imageUrl: any) => {
  const response = await fetch('/api/cloudinary/uploadImage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imageUrl, width: 960, height: 560 }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to upload image to Cloudinary: ${response.statusText}`,
    );
  }
  return response.json();
};
