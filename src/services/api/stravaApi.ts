export const getMyStravaStats = async () => {
  const response = await fetch('api/strava/stravaStats');
  return response.json();
};

// Upload env to vercel
