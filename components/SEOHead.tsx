import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Funded Program Guide - Your #1 Resource for Prop Trading Firms",
  description = "Compare and choose the best proprietary trading firms. Expert reviews, detailed comparisons, and verified data to help you find the perfect prop firm for your trading style.",
  keywords = "prop trading, proprietary trading, funded trading, prop firms, trading firms, forex trading, futures trading, trading challenges, funded accounts",
  canonicalUrl,
  ogImage = "/images/og-image.jpg",
  structuredData,
  noIndex = false
}) => {
  const fullTitle = title.includes("Funded Program Guide") ? title : `${title} | Funded Program Guide`;
  const siteUrl = "https://fundedprogramguide.com";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Funded Program Guide" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Funded Program Guide" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0d9488" />
      <meta name="msapplication-TileColor" content="#0d9488" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </>
  );
};

export default SEOHead;
