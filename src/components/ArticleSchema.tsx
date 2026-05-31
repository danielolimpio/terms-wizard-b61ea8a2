import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  faq?: FAQItem[];
}

/**
 * Emits Article (NewsArticle/BlogPosting compatible) JSON-LD and,
 * optionally, FAQPage JSON-LD for blog posts with Q&A sections.
 */
export const ArticleSchema = ({
  headline,
  description,
  url,
  image = "https://politicadeprivacidade.org/logo.png",
  datePublished = "2025-11-30",
  dateModified,
  authorName = "Daniel Olímpio",
  authorUrl = "https://danielolimpio.com/",
  faq,
}: ArticleSchemaProps) => {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Políticas de Privacidade",
      logo: {
        "@type": "ImageObject",
        url: "https://politicadeprivacidade.org/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const faqSchema = faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(article)}</script>
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>
  );
};
