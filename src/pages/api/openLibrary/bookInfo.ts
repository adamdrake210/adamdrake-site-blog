/* eslint-disable import/no-anonymous-default-export */
export default async (req: any, res: any) => {
  try {
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    };

    const response = await fetch(
      'https://openlibrary.org/api/books?bibkeys=ISBN:0802130119&jscmd=data&format=json',
      {
        method: 'get',
        headers: headers,
      },
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: await response.text(),
      });
    }
    const data = await response.json();

    return res.status(200).json({ data });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
