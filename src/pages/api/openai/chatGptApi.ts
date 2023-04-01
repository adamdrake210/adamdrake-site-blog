import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const chatGptUrl = 'https://api.openai.com/v1/chat/completions';

/* eslint-disable import/no-anonymous-default-export */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { message } = req.body;

    const response = await axios.post(
      chatGptUrl,
      {
        model: 'gpt-4',
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
        max_tokens: 420,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    const { data } = response;

    return res.status(200).json({ message: data.choices[0].message.content });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
