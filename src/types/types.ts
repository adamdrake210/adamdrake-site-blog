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

export type Post = {
  title: string;
  description: string;
  content: Array<any>; // TODO find this type
  slug: string;
  tags: string;
  writtenBy: string;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
};
