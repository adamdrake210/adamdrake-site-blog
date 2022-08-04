import fs from 'fs';
import path from 'path';

// *_PATH is useful when you want to get the path to a specific file
export const ARTICLE_PATH = path.join(process.cwd(), 'src/posts/articles');

// export const INTERVIEW_PATH =
//   'https://github.com/adamdrake210/pbt_posts_content/blob/master/posts/interviews';
const isMdx = () => {
  // @ts-ignore
  return fileName => /\.mdx?$/.test(fileName);
};

// interviewFilePaths is the list of all mdx files inside the ARTICLE_PATH directory
export const articleFilePaths = fs
  .readdirSync(ARTICLE_PATH)
  // Only include md(x) files
  .filter(isMdx);
