import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { CLOUDINARY_URL, SITE_NAME } from 'constants/constants';

type Props = {
  title: string;
  description: string;
  publishedDate: string;
  imageUrl?: string;
  url: string;
  author?: string;
};

const PageSeo: React.FC<Props> = ({
  title,
  description,
  publishedDate,
  imageUrl,
  url,
  author,
}) => {
  const images = imageUrl ? [{ url: imageUrl, alt: title }] : [];

  return (
    <>
      <NextSeo
        title={`${title} – ${SITE_NAME}`}
        description={description}
        canonical={url}
        openGraph={{
          type: 'blog post',
          article: {
            publishedTime: publishedDate,
          },
          url,
          title,
          description: description,
          images,
        }}
      />
      <ArticleJsonLd
        authorName={author || null}
        dateModified={publishedDate}
        datePublished={publishedDate}
        description={description}
        publisherLogo="/static/favicon.ico"
        images={images.map(image => image.url)}
        publisherName={author}
        title={title}
        url={url}
      />
    </>
  );
};

export default PageSeo;
