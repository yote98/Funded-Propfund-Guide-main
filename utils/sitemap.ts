import { PropFirm, Article } from '../types';
import { propFirms, articles } from '../services/mockData';

export const generateSitemap = () => {
  const baseUrl = 'https://fundedprogramguide.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/compare', priority: '0.9', changefreq: 'weekly' },
    { url: '/education', priority: '0.8', changefreq: 'weekly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/glossary', priority: '0.7', changefreq: 'monthly' },
    { url: '/trading-tools', priority: '0.8', changefreq: 'weekly' },
    { url: '/analytics', priority: '0.8', changefreq: 'weekly' }
  ];

  const firmPages = propFirms.map(firm => ({
    url: `/firm-review/${firm.id}`,
    priority: '0.8',
    changefreq: 'weekly'
  }));

  const articlePages = articles.map(article => ({
    url: `/article/${article.id}`,
    priority: '0.7',
    changefreq: 'monthly'
  }));

  const allPages = [...staticPages, ...firmPages, ...articlePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: https://fundedprogramguide.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;
};
