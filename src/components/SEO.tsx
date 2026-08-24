import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  schema?: any;
}

export function SEO({ title, description, canonicalUrl, schema }: SEOProps) {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "CavalCount — Assessoria Contábil Empresarial",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Melvin Jones, 386 - Jardim Nova Indaia",
      "addressLocality": "Indaiatuba",
      "addressRegion": "SP",
      "postalCode": "13344-511",
      "addressCountry": "BR"
    },
    "telephone": "+5519971468014",
    "url": "https://cavalcount.com.br",
    "areaServed": "Indaiatuba",
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
