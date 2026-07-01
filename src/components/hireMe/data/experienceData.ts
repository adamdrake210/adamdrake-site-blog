export type Experience = {
  id: string;
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
};

export const experienceData: Experience[] = [
  {
    id: 'chemify',
    company: 'Chemify',
    location: 'Prague',
    title: 'Staff Frontend Developer',
    period: 'May 2022 — Present',
    bullets: [
      'Lead frontend on flagship applications at a fast-scaling startup reinventing how chemistry approaches drug discovery; acting Product Owner for one flagship app.',
      "Build with React, TypeScript, Redux, React Query and Mantine to 10x chemists' efficiency; test continuously with Cypress and Vitest.",
      'Own features end to end — gathering requirements, designing mockups, iterating with users, and shipping to production.',
      'Make and justify tech-stack decisions, scope and assign work, and mentor junior engineers.',
      'Deploy and operate across GitLab CI/CD, Terraform and AWS; contribute backend features in Python where needed.',
    ],
  },
  {
    id: 'ebay-lead',
    company: 'eBay',
    location: 'Prague',
    title: 'Web Developer, Team Lead',
    period: 'Jan 2019 — May 2022',
    bullets: [
      "Led a team of 5 maintaining and automating eBay's static-pages platform with React, TypeScript, Node.js, Jest and Sass.",
      'Led and built three major React projects, including a CMS with a Google Sheets backend for marketing managers, and an API-heavy QA tooling app.',
      'Ran delivery with Agile — Kanban and Scrum — and JIRA.',
    ],
  },
  {
    id: 'ebay-frontend',
    company: 'eBay',
    location: 'Prague',
    title: 'Frontend Web Developer',
    period: 'Jul 2017 — Jan 2019',
    bullets: [
      "Built and maintained eBay's static HTML pages with JS, React, Sass, Node.js and Gulp.",
      'Streamlined the page-development pipeline and kept the stack current with emerging tools and frameworks.',
    ],
  },
];
