import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  const items = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: '/posts/' + post.slug + '/',
    }));

  return rss({
    title: 'lee-chingfon',
    description: 'Latest posts from lee-chingfon.',
    site: context.site,
    items,
    customData: '<language>zh-Hant</language>',
  });
}
