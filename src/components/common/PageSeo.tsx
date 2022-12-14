import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { CLOUDINARY_URL, SITE_NAME } from 'constants/constants';

type Props = {
  title: string;
  description: string;
  publishedDate: string;
  slug: string;
  url: string;
  author?: string;
  type: string;
};

const PageSeo: React.FC<Props> = ({
  title,
  description,
  publishedDate,
  slug,
  url,
  author,
  type,
}) => {
  const featuredImage = {
    url: `${CLOUDINARY_URL}/adamdrake-blog/${slug}.png`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – ${SITE_NAME}`}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedDate,
          },
          url,
          title,
          description: description,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName={author || null}
        dateModified={publishedDate}
        datePublished={publishedDate}
        description={description}
        publisherLogo="/static/favicon.ico"
        images={[featuredImage.url]}
        publisherName={author}
        title={title}
        url={url}
      />
    </>
  );
};

export default PageSeo;
