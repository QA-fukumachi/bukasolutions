const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

const schemaLd = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Buka Solutions",
    "image": "https://res.cloudinary.com/dkzz5rx9d/image/upload/v1775485588/desktop_ain6i1.png",
    "@id": "https://bukasolutionsllc.com/",
    "url": "https://bukasolutionsllc.com/",
    "telephone": "+17202180076",
    "email": "bukasolutions2025@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boulder",
      "addressRegion": "CO",
      "addressCountry": "US"
    }
  }
  </script>`;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  const descMatch = content.match(/<meta name="description" content="(.*?)">/i);
  
  const title = titleMatch ? titleMatch[1] : 'Buka Solutions | Modern Remodeling & Repair';
  const description = descMatch ? descMatch[1] : 'Full house remodels, renovations and repairs in Boulder, CO.';
  
  const canonicalUrl = file === 'index.html' ? 'https://bukasolutionsllc.com/' : `https://bukasolutionsllc.com/${file}`;

  let headInjections = `
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="canonical" href="${canonicalUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://res.cloudinary.com/dkzz5rx9d/image/upload/v1775485588/desktop_ain6i1.png">
  <meta name="twitter:card" content="summary_large_image">`;

  if (file === 'index.html') {
    headInjections += schemaLd;
  }

  if (!content.includes('og:title')) {
    content = content.replace('</head>', `${headInjections}\n</head>`);
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
