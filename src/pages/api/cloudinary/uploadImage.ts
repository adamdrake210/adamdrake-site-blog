import { v2 } from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';

/* eslint-disable import/no-anonymous-default-export */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { imageUrl, width, height } = req.body;

    const cloudinaryResponse = await v2.uploader.upload(imageUrl, {
      folder: 'adamdrake-blog',
      format: 'jpg',
      transformation: [
        {
          width: width,
          height: height,
          gravity: 'face',
          crop: 'fill',
        },
      ],
    });

    return res.status(200).json({ imageUrl: cloudinaryResponse.secure_url });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
