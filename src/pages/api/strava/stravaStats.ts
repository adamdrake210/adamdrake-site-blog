/* eslint-disable import/no-anonymous-default-export */
export default async (req: any, res: any) => {
  try {
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    };

    const body = JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    });

    const reauthorizeResponse = await fetch(
      'https://www.strava.com/oauth/token',
      {
        method: 'post',
        headers: headers,
        body: body,
      },
    );

    const reAuthJson = await reauthorizeResponse.json();

    const response = await fetch(
      `https://www.strava.com/api/v3/athletes/9568451/stats`,
      {
        headers: {
          Authorization: `Bearer ${reAuthJson.access_token}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
      },
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: await response.text(),
      });
    }
    const data = await response.json();

    const { count, distance } = data.ytd_run_totals;
    const movingTime = data.ytd_run_totals.moving_time;

    return res.status(200).json({ count, distance, movingTime });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
