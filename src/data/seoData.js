export const seoData = {
  home: {
    title: 'Hot Forged Bolts - Premium Quality Fasteners & Industrial Hardware',
    description: 'Leading manufacturer of hot forged bolts, nuts, and fasteners. Specializing in DIN, ASME, and ISO standard products for industrial applications worldwide.',
    keywords: 'hot forged bolts, fasteners, nuts, industrial hardware, DIN bolts, ASME nuts, ISO fasteners, hex head bolts, heavy hex nuts, manufacturing'
  },
  bolts: {
    title: 'Premium Bolts - DIN, ASME & ISO Standards | Hot Forged Bolts',
    description: 'High-quality bolts including hex head bolts, eye bolts, square bolts, and counter sunk bolts. DIN 931, DIN 933, DIN 960, DIN 961 standards available.',
    keywords: 'hex head bolts, eye bolts, square bolts, counter sunk bolts, DIN 931, DIN 933, DIN 960, DIN 961, DIN 7990, bolt manufacturing'
  },
  nuts: {
    title: 'Heavy Hex Nuts - ASME, DIN & EN Standards | Hot Forged Bolts',
    description: 'Premium quality nuts including ASME heavy hex nuts, DIN 934, DIN 935, DIN 936, EN 14399, and EN 4032 standards for industrial applications.',
    keywords: 'heavy hex nuts, ASME nuts, DIN 934, DIN 935, DIN 936, EN 14399, EN 4032, nut manufacturing, industrial nuts'
  },
  studbolts: {
    title: 'Stud Bolts & Threaded Rods | Hot Forged Bolts',
    description: 'High-strength stud bolts and threaded rods for heavy-duty applications. Available in various grades and specifications.',
    keywords: 'stud bolts, threaded rods, heavy duty fasteners, industrial bolts, structural bolts'
  },
  fasteners: {
    title: 'Industrial Fasteners - Bolts, Nuts & Hardware | Hot Forged Bolts',
    description: 'Complete range of industrial fasteners including bolts, nuts, and specialized hardware for construction and manufacturing industries.',
    keywords: 'industrial fasteners, construction hardware, manufacturing bolts, structural fasteners, heavy duty nuts'
  },
  production: {
    title: 'Hot Forging Production Process | Hot Forged Bolts Manufacturing',
    description: 'Advanced hot forging production facilities with state-of-the-art equipment. Learn about our manufacturing process and quality control standards.',
    keywords: 'hot forging, production process, manufacturing, quality control, industrial production, forging equipment'
  },
  hotforging: {
    title: 'Hot Forging Services - Advanced Manufacturing | Hot Forged Bolts',
    description: 'Professional hot forging services with controlled heating, closed die forging, and rigorous quality control for superior mechanical properties.',
    keywords: 'hot forging services, closed die forging, controlled heating, forging technology, metal forming'
  },
  machining: {
    title: 'Precision Machining Services | Hot Forged Bolts',
    description: 'Professional machining services for custom fasteners and industrial components. Precision manufacturing with advanced CNC technology.',
    keywords: 'precision machining, CNC machining, custom fasteners, machining services, industrial machining'
  },
  about: {
    title: 'About Hot Forged Bolts - Leading Fastener Manufacturer',
    description: 'Learn about Hot Forged Bolts, a leading manufacturer of premium quality fasteners, bolts, and nuts with years of industry experience.',
    keywords: 'about us, fastener manufacturer, company history, industrial experience, quality manufacturing'
  },
  contact: {
    title: 'Contact Hot Forged Bolts - Get Quote for Premium Fasteners',
    description: 'Contact Hot Forged Bolts for quotes, technical support, and product information. Reach out to our expert team for all your fastener needs.',
    keywords: 'contact, quote request, technical support, fastener inquiry, customer service'
  },
  // Product-specific pages
  hexheadbolts: {
    title: 'Hex Head Bolts - DIN 931, DIN 933, DIN 960, DIN 961 | Hot Forged Bolts',
    description: 'Premium hex head bolts in DIN 931, DIN 933, DIN 960, DIN 961, and DIN 7990 standards. High-strength bolts for structural applications.',
    keywords: 'hex head bolts, DIN 931, DIN 933, DIN 960, DIN 961, DIN 7990, structural bolts, heavy hex bolts'
  },
  eyebolts: {
    title: 'Eye Bolts DIN 444 - Lifting & Rigging Hardware | Hot Forged Bolts',
    description: 'DIN 444 eye bolts for lifting applications and mechanical linkages. High-quality forged eye bolts for safe lifting operations.',
    keywords: 'eye bolts, DIN 444, lifting bolts, rigging hardware, mechanical linkages, lifting applications'
  },
  countersunk: {
    title: 'Counter Sunk Allen Bolts DIN 7991 | Hot Forged Bolts',
    description: 'DIN 7991 countersunk allen bolts for flush surface applications. Perfect for machinery, automotive, and furniture applications.',
    keywords: 'countersunk bolts, DIN 7991, allen bolts, flush surface, socket head bolts, machinery bolts'
  },
  squarebolts: {
    title: 'Square Bolts - Heavy Duty Square Head Bolts | Hot Forged Bolts',
    description: 'Heavy-duty square bolts for construction and industrial applications. Anti-rotation design for secure fastening.',
    keywords: 'square bolts, square head bolts, heavy duty bolts, construction bolts, anti-rotation bolts'
  }
};

// Product-specific structured data
export const createProductStructuredData = (product) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Hot Forged Bolts"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hot Forged Bolts",
      "url": "https://hotforgedbolts.com"
    },
    "category": product.category,
    "material": product.material || "Steel",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Standard",
        "value": product.standard
      },
      {
        "@type": "PropertyValue",
        "name": "Diameter Range",
        "value": product.diameter
      }
    ]
  };
};

// Organization structured data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hot Forged Bolts",
  "url": "https://hotforgedbolts.com",
  "description": "Leading manufacturer of hot forged bolts, nuts, and fasteners with premium quality and international standards.",
  "foundingDate": "2010",
  "industry": "Manufacturing",
  "productionCapacity": "Industrial Fasteners",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fasteners Catalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Hex Head Bolts",
          "category": "Fasteners"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Heavy Hex Nuts",
          "category": "Fasteners"
        }
      }
    ]
  }
};