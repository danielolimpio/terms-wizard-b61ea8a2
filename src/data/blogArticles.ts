import blogImage1 from "@/assets/blog-politica-privacidade-2026.jpg";
import blogImage2 from "@/assets/blog-termos-uso-seguranca-juridica.jpg";
import blogImage3 from "@/assets/blog-politica-cookies-guia-completo.jpg";
import blogImage4 from "@/assets/blog-10-acoes-marketing-lgpd.jpg";
import blogImage5 from "@/assets/blog-o-que-e-cmp.jpg";
import blogImage6 from "@/assets/blog-multas-lgpd-2025.jpg";
import blogImage7 from "@/assets/blog-google-consent-mode-v2.jpg";
import blogImage8 from "@/assets/blog-dpo-lgpd.jpg";
import blogImage9 from "@/assets/blog-lgpd-marketing-digital.jpg";
import blogImage10 from "@/assets/blog-direitos-titular-lgpd.jpg";

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  slug: string;
  category: string;
  tags: string[]; // Tags para melhor filtragem
  publishedAt: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "10",
    title: "Direitos do Titular na LGPD: Guia Completo dos 9 Direitos Garantidos por Lei",
    excerpt: "Descubra quais são os 9 direitos garantidos pela LGPD ao titular de dados, com modelos de solicitação e o passo a passo para exercer cada um na prática.",
    image: blogImage10,
    readTime: "16 min",
    slug: "/blog/direitos-titular-lgpd-guia-completo",
    category: "LGPD",
    tags: ["lgpd", "privacidade", "compliance", "dados", "titular", "direitos"],
    publishedAt: "2026-06-28"
  },
  {
    id: "9",
    title: "LGPD e Marketing Digital: Como Adaptar Campanhas Sem Perder Performance",
    excerpt: "Aprenda a alinhar campanhas de e-mail, Meta e Google Ads à LGPD sem impactar negativamente seus resultados.",
    image: blogImage9,
    readTime: "15 min",
    slug: "/blog/lgpd-marketing-digital",
    category: "Marketing Digital",
    tags: ["lgpd", "marketing-digital", "compliance", "google-ads", "meta-ads"],
    publishedAt: "2025-11-30"
  },
  {
    id: "1",
    title: "Política de Privacidade: O Que É, Por Que Você Precisa e Modelo Gratuito 2026",
    excerpt: "Descubra tudo sobre políticas de privacidade em 2026, incluindo LGPD, GDPR e como criar a sua de forma gratuita e profissional.",
    image: blogImage1,
    readTime: "8 min",
    slug: "/blog/politica-privacidade-o-que-e-por-que-precisa-modelo-gratuito-2026",
    category: "LGPD",
    tags: ["lgpd", "privacidade", "gdpr", "compliance", "política"],
    publishedAt: "2025-11-09"
  },
  {
    id: "2",
    title: "Como Escrever Termos de Uso Para Seu Site, Evitar Processos e Garantir Segurança Jurídica",
    excerpt: "Guia completo sobre termos de uso: o que incluir, como proteger seu negócio e evitar armadilhas legais que podem custar caro.",
    image: blogImage2,
    readTime: "10 min",
    slug: "/blog/como-escrever-termos-do-seu-site-evitar-processos-garantir-seguranca-juridica",
    category: "Jurídico",
    tags: ["termos-uso", "jurídico", "compliance", "legal"],
    publishedAt: "2025-11-11"
  },
  {
    id: "3",
    title: "Política de Cookies: Guia Completo para LGPD, GDPR e Banner Correto em 2026",
    excerpt: "O banner de cookies errado pode gerar multas de até 2% do faturamento. Aprenda a cumprir LGPD e GDPR com o modelo certo, passo a passo.",
    image: blogImage3,
    readTime: "12 min",
    slug: "/blog/politica-cookies-guia-completo-lgpd-gdpr-banner-correto-2026",
    category: "Cookies",
    tags: ["cookies", "lgpd", "gdpr", "compliance", "banner"],
    publishedAt: "2025-11-14"
  },
  {
    id: "4",
    title: "10 Ações de Marketing que Mudam com a LGPD Hoje!",
    excerpt: "Descubra os 10 processos de marketing que a LGPD exige repensar para garantir conformidade e proteger dados dos seus usuários.",
    image: blogImage4,
    readTime: "9 min",
    slug: "/blog/10-acoes-marketing-lgpd",
    category: "Marketing",
    tags: ["marketing", "lgpd", "compliance", "dados"],
    publishedAt: "2025-11-28"
  },
  {
    id: "5",
    title: "O Que é CMP? Plataforma de Gestão de Consentimento para Sites e Lojas",
    excerpt: "Entenda o que é uma CMP, como ela funciona e por que é obrigatória para sites que usam cookies na LGPD.",
    image: blogImage5,
    readTime: "7 min",
    slug: "/blog/o-que-e-cmp-plataforma-gestao-consentimento",
    category: "Tecnologia",
    tags: ["cmp", "cookies", "lgpd", "consentimento", "tecnologia"],
    publishedAt: "2025-11-29"
  },
  {
    id: "6",
    title: "Multas da LGPD em 2025: Valores, Casos Reais e Como Evitar Penalidades",
    excerpt: "Saiba quanto pode custar uma multa da LGPD, veja casos reais e aprenda a se proteger com boas práticas.",
    image: blogImage6,
    readTime: "11 min",
    slug: "/blog/multas-lgpd-2025-valores-casos-reais",
    category: "Compliance",
    tags: ["multas", "lgpd", "compliance", "penalidades", "casos"],
    publishedAt: "2025-11-30"
  },
  {
    id: "7",
    title: "Google Consent Mode V2: Como Implementar na Sua Loja ou Site em 2026",
    excerpt: "Guia prático para implementar o Consent Mode V2 do Google com LGPD, sem perder conversões nem tráfego.",
    image: blogImage7,
    readTime: "13 min",
    slug: "/blog/google-consent-mode-v2-implementar",
    category: "Tecnologia",
    tags: ["google", "consent-mode", "cookies", "lgpd", "implementação"],
    publishedAt: "2025-11-30"
  },
  {
    id: "8",
    title: "DPO na LGPD: Quem Pode Ser, Funções e Como Terceirizar com Segurança",
    excerpt: "Descubra se sua empresa precisa de um DPO, quem pode assumir o cargo e como escolher um profissional qualificado.",
    image: blogImage8,
    readTime: "10 min",
    slug: "/blog/dpo-lgpd-quem-pode-ser",
    category: "DPO",
    tags: ["dpo", "lgpd", "compliance", "profissional", "terceirização"],
    publishedAt: "2025-11-30"
  }
];

// Mapeamento de tipos de política para tags relevantes
export const policyTypeToTags: Record<string, string[]> = {
  "privacy-policy": ["lgpd", "privacidade", "gdpr", "dados"],
  "terms-of-use": ["termos-uso", "jurídico", "legal"],
  "cookie-policy": ["cookies", "lgpd", "consentimento"],
  "refund-policy": ["jurídico", "reembolso", "legal"],
  "content-policy": ["compliance", "conteúdo", "moderação"],
  "security-policy": ["segurança", "proteção", "dados"],
  "antispam-policy": ["compliance", "spam", "email"],
  "copyright-policy": ["jurídico", "direitos-autorais", "legal"],
  "transparency-policy": ["compliance", "transparência", "ética"],
  "comment-moderation": ["moderação", "comentários", "compliance"],
  "sustainability-policy": ["sustentabilidade", "responsabilidade", "ética"],
  "accessibility-policy": ["acessibilidade", "inclusão", "wcag"],
  "marketing-digital": ["marketing-digital", "lgpd", "compliance", "google-ads", "meta-ads"]
};

/**
 * Retorna artigos relacionados baseados em tags
 * @param tags - Tags para filtrar artigos
 * @param currentArticleId - ID do artigo atual para excluir da lista
 * @param limit - Número máximo de artigos a retornar
 */
export const getRelatedArticles = (
  tags: string[], 
  currentArticleId?: string, 
  limit: number = 3
): BlogArticle[] => {
  // Filtra artigos que têm pelo menos uma tag em comum
  const related = blogArticles
    .filter(article => article.id !== currentArticleId)
    .map(article => {
      // Calcula pontuação baseada em tags em comum
      const matchCount = article.tags.filter(tag => 
        tags.some(searchTag => searchTag.toLowerCase() === tag.toLowerCase())
      ).length;
      return { article, matchCount };
    })
    .filter(item => item.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .map(item => item.article);

  // Se tiver menos que o limite, preenche com artigos mais recentes
  if (related.length < limit) {
    const remainingSlots = limit - related.length;
    const recentArticles = blogArticles
      .filter(article => 
        article.id !== currentArticleId && 
        !related.find(r => r.id === article.id)
      )
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, remainingSlots);
    
    return [...related, ...recentArticles].slice(0, limit);
  }

  return related.slice(0, limit);
};

/**
 * Retorna artigos relacionados para um tipo de política específico
 */
export const getRelatedArticlesForPolicy = (
  policyType: string, 
  limit: number = 3
): BlogArticle[] => {
  const tags = policyTypeToTags[policyType] || [];
  return getRelatedArticles(tags, undefined, limit);
};
