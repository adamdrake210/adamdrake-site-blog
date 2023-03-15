import { Configuration, OpenAIApi } from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/* eslint-disable import/no-anonymous-default-export */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { prompt } = req.body;

    const openAiResponse = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 420,
      temperature: 0.86,
      top_p: 1,
      n: 1,
    });
    const blogText = openAiResponse.data.choices[0].text;

    return res.status(200).json({ blogText });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
