import { GITHUB_URL, SITE_DOMAIN } from 'constants/constants';
import { HIRE_ME_ROUTE } from 'constants/routeConstants';

let hasGreeted = false;

export const logConsoleGreeting = () => {
  if (hasGreeted) return;
  hasGreeted = true;

  console.log(
    '%c Ah, a fellow developer 👋 %c\n\n' +
      'You look like someone who reads source code for fun.\n' +
      `The good stuff lives here: ${GITHUB_URL}\n` +
      `And if you like what you see, I'm for hire: ${SITE_DOMAIN}${HIRE_ME_ROUTE}\n\n` +
      '%cP.S. try ↑ ↑ ↓ ↓ ← → ← → B A — the sparkles were stars all along.',
    'background: #6c573e; color: #fbf4ee; font-size: 14px; padding: 6px 12px; border-radius: 4px;',
    'color: #8a745a; font-size: 12px; line-height: 1.6;',
    'color: #a28f77; font-size: 12px; font-style: italic;',
  );
};
