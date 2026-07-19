import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const cfg = JSON.parse(readFileSync('site.routes.json', 'utf8'));
const OUT = 'dist/portfolio/browser'; // Pfad gegen angular.json prüfen

const url = (locale, route) =>
  `${cfg.baseUrl}/${locale}${route ? '/' + route : '/'}`.replace(/\/+$/, '/');

const entries = cfg.locales.flatMap((locale) =>
  cfg.routes.map((route) => {
    const alts = cfg.locales
      .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l, route)}"/>`)
      .join('\n');
    return `  <url>
    <loc>${url(locale, route)}</loc>
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${url(cfg.defaultLocale, route)}"/>
  </url>`;
  }),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${cfg.baseUrl}/sitemap.xml
`;

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'sitemap.xml'), sitemap);
writeFileSync(join(OUT, 'robots.txt'), robots);
console.log(`sitemap.xml: ${entries.length} URLs`);
