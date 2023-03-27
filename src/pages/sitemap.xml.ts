import { client } from 'client';
import { SITE_DOMAIN } from 'constants/constants';
import { GetServerSideProps } from 'next';
import { Post } from 'types/types';

function generateSiteMap(posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!--We manually set the two URLs we know already-->
      <url>
        <loc>${SITE_DOMAIN}</loc>
      </url>
      <url>
        <loc>${SITE_DOMAIN}/about</loc>
      </url>
      <url>
        <loc>${SITE_DOMAIN}/books</loc>
      </url>
      <url>
        <loc>${SITE_DOMAIN}/blog</loc>
      </url>
      ${posts
        .map(({ slug }) => {
          return `
        <url>
            <loc>${`${SITE_DOMAIN}/blog/${slug}`}</loc>
        </url>
      `;
        })
        .join('')}
    </urlset>
  `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // We make an API call to gather the URLs for our site
  const posts = await client.fetch(`*[_type == "post"]`);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
