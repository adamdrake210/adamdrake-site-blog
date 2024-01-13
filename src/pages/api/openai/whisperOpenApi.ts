import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const whisperApi = 'https://api.openai.com/v1/audio/transcriptions';

/* eslint-disable import/no-anonymous-default-export */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const formData = req.body;

    const response = await axios.post(
      whisperApi,
      {
        file: formData,
        model: 'whisper-1',
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    const { data } = response;
    console.log('🚀 ~ file: whisperOpenApi.ts:26 ~ data:', data);

    return res.status(200).json({ text: data.text });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
