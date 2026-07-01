export type ToolkitGroup = {
  category: string;
  items: string[];
};

export const toolkitData: ToolkitGroup[] = [
  {
    category: 'Frontend',
    items: [
      'React',
      'RxJS',
      'React Flow',
      'TypeScript',
      'Redux',
      'React Query',
      'GraphQL',
      'Tailwind',
      'Mantine',
      'Chakra',
      'Material-UI',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express',
      'Python',
      'FastAPI',
      'Laravel',
      'MongoDB & Mongoose',
      'PostgreSQL',
    ],
  },
  {
    category: 'Testing',
    items: ['Playwright', 'Cypress', 'Vitest', 'Jest', 'React Testing Library'],
  },
  {
    category: 'Platform',
    items: ['GitLab CI/CD', 'Terraform', 'AWS', 'Docker'],
  },
];

export const aiWorkflowData = [
  {
    title: 'Agentic, not automated',
    text: 'Multi-agent workflows with a human reviewing and steering every decision.',
  },
  {
    title: 'Partner, not pilot',
    text: "AI amplifies engineering judgment — it doesn't replace ownership of the outcome.",
  },
  {
    title: 'Shipping quality',
    text: 'Raising reliability, UX, and code quality for the people who actually use the software.',
  },
];

export const languagesData = [
  { language: 'English', level: 'Native' },
  { language: 'Czech', level: 'B2' },
];
