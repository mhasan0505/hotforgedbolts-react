export const generateSitemap = () => {
  const baseUrl = 'https://hotforgedbolts.com';
  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/production', priority: '0.8', changefreq: 'monthly' },
    { path: '/about', priority: '0.7', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/fasteners', priority: '0.9', changefreq: 'weekly' },
    { path: '/hot-forging', priority: '0.8', changefreq: 'monthly' },
    { path: '/machining', priority: '0.8', changefreq: 'monthly' },
    { path: '/bolts', priority: '0.9', changefreq: 'weekly' },
    { path: '/nuts', priority: '0.9', changefreq: 'weekly' },
    { path: '/stud-bolts', priority: '0.9', changefreq: 'weekly' },
    { path: '/bolts/eye-bolts', priority: '0.8', changefreq: 'weekly' },
    { path: '/bolts/hex-head-bolts', priority: '0.8', changefreq: 'weekly' },
    { path: '/bolts/square-bolts', priority: '0.8', changefreq: 'weekly' },
    { path: '/bolts/counter-sunk-bolts', priority: '0.8', changefreq: 'weekly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Function to download sitemap (for development)
export const downloadSitemap = () => {
  const sitemap = generateSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};