import { PropFirm } from '../types';

export const getHomepageStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Funded Program Guide",
    "url": "https://fundedprogramguide.com",
    "description": "Your #1 resource for finding, comparing, and choosing the right proprietary trading firm.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://fundedprogramguide.com/compare?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Funded Program Guide",
      "url": "https://fundedprogramguide.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fundedprogramguide.com/logo.png"
      }
    }
  };
};

export const getFirmStructuredData = (firm: PropFirm) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": firm.name,
    "url": firm.officialWebsite,
    "description": firm.shortDescription,
    "logo": firm.logoUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": firm.rating,
      "reviewCount": firm.reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },
    "offers": {
      "@type": "Offer",
      "price": firm.minStartingCost,
      "priceCurrency": "USD",
      "description": `Starting cost for ${firm.name} evaluation`
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": firm.geoRestrictions || "Global"
    }
  };
};

export const getArticleStructuredData = (article: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.summary,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "datePublished": article.publishedDate,
    "image": article.imageUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Funded Program Guide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fundedprogramguide.com/logo.png"
      }
    }
  };
};

export const getBreadcrumbStructuredData = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://fundedprogramguide.com${item.url}`
    }))
  };
};
