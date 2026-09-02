import { MEDRITER_URL, SITE_DOMAIN } from 'constants/constants';

export const medriterUrl = (campaign: string) => {
  const url = new URL(MEDRITER_URL);

  url.searchParams.set('utm_source', new URL(SITE_DOMAIN).host);
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', campaign);

  return url.toString();
};
