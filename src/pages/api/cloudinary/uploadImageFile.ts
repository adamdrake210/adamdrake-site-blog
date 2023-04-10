import axios from 'axios';
import { v2 } from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';

/* eslint-disable import/no-anonymous-default-export */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { payload } = req.body;

    console.log(
      'process.env.CLOUDINARY_API_KEY: ',
      process.env.CLOUDINARY_API_KEY,
    );

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dmiizmobu/image/upload?upload_preset=adamdrakeblog`,
      payload,
      {
        headers: {
          Authorization: Buffer.from(
            process.env.CLOUDINARY_API_KEY +
              ':' +
              process.env.CLOUDINARY_API_SECRET,
          ).toString('base64'),
        },
      },
    );

    return res.status(200).json({ imageUrl: response });
  } catch (error: any) {
    console.log('🚀 ~ file: uploadImageFile.ts:32 ~ error:', error);
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
