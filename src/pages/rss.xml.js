import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '../data/site-config.ts';
import { sortItemsByDateDesc } from '../utils/data-utils.ts';

export async function GET(context) {
    const posts = (await getCollection('poem')).sort(sortItemsByDateDesc);
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site,
        items: posts.map((item) => ({
            title: item.data.title,
            description: item.data.excerpt,
            link: `/poem/${item.slug}/`,
            pubDate: item.data.publishDate.setUTCHours(0)
        }))
    });
}

// export async function GET(context) {
//     const posts = (await getCollection('trips')).sort(sortItemsByDateDesc);
//     return rss({
//         title: siteConfig.title,
//         description: siteConfig.description,
//         site: context.site,
//         items: posts.map((item) => ({
//             title: item.data.title,
//             description: item.data.excerpt,
//             link: `/trips/${item.slug}/`,
//             pubDate: item.data.publishDate.setUTCHours(0)
//         }))
//     });
// }
