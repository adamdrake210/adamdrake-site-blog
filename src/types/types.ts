export type FrontMatterArticles = {
  title: string;
  description: string;
  intro: string;
  slug: string;
  tags: string;
  publishedDate: string;
  published: boolean;
  writtenBy: string;
  layout: string;
  readTime: ReadTime;
};

export type ArticlesContentFrontMatter = {
  content: string;
  data: FrontMatterArticles;
  filePath?: string;
};

export type ReadTime = {
  text: string;
};
