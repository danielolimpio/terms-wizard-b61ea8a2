import { Helmet } from "react-helmet-async";

interface OrganizationSchema {
  type: "organization";
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchema {
  type: "breadcrumb";
  items: BreadcrumbItem[];
}

interface ProductSchema {
  type: "product";
  name: string;
  description: string;
  offers: {
    price: string;
    priceCurrency: string;
  };
}

interface AggregateRatingSchema {
  type: "aggregateRating";
  ratingValue: string;
  reviewCount: string;
}

type StructuredDataProps = 
  | OrganizationSchema 
  | BreadcrumbSchema 
  | ProductSchema 
  | AggregateRatingSchema;

export const StructuredData = (props: StructuredDataProps) => {
  const getSchema = () => {
    switch (props.type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Políticas de Privacidade",
          "url": "https://politicadeprivacidade.org",
          "logo": "https://politicadeprivacidade.org/logo.png",
          "description": "Gerador gratuito de políticas legais para sites, blogs e e-commerces. Conforme LGPD e GDPR.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "contato@politicadeprivacidade.org",
            "availableLanguage": ["Portuguese", "English"]
          },
          "sameAs": [
            "https://www.facebook.com/danielolimpio.com.br",
            "https://x.com/danielolimpio_",
            "https://www.instagram.com/danielolimpio_com/",
            "https://www.linkedin.com/in/danielolimpio-com/",
            "https://danielolimpio.com/"
          ],
          "founder": {
            "@type": "Person",
            "name": "Daniel Olímpio",
            "url": "https://danielolimpio.com/",
            "sameAs": [
              "https://www.linkedin.com/in/danielolimpio-com/",
              "https://x.com/danielolimpio_"
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1247",
            "bestRating": "5",
            "worstRating": "1"
          }
        };

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": props.items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://politicadeprivacidade.org${item.url}`
          }))
        };

      case "product":
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": props.name,
          "description": props.description,
          "brand": {
            "@type": "Organization",
            "name": "Políticas de Privacidade"
          },
          "offers": {
            "@type": "Offer",
            "price": props.offers.price,
            "priceCurrency": props.offers.priceCurrency,
            "availability": "https://schema.org/InStock",
            "url": "https://politicadeprivacidade.org"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1247",
            "bestRating": "5",
            "worstRating": "1"
          }
        };

      case "aggregateRating":
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Políticas de Privacidade",
          "url": "https://politicadeprivacidade.org",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": props.ratingValue,
            "reviewCount": props.reviewCount,
            "bestRating": "5",
            "worstRating": "1"
          }
        };

      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
