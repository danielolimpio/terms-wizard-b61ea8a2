import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import blogImage1 from "@/assets/blog-politica-privacidade-2026.jpg";
import blogImage2 from "@/assets/blog-termos-uso-seguranca-juridica.jpg";
import blogImage3 from "@/assets/blog-politica-cookies-guia-completo.jpg";

const articles = [
  {
    id: 1,
    title: "Política de Privacidade: O Que É, Por Que Você Precisa e Modelo Gratuito 2026",
    excerpt: "Descubra tudo sobre políticas de privacidade em 2026, incluindo LGPD, GDPR e como criar a sua de forma gratuita e profissional.",
    image: blogImage1,
    readTime: "8 min",
    slug: "/blog/politica-privacidade-o-que-e-por-que-precisa-modelo-gratuito-2026",
    category: "LGPD"
  },
  {
    id: 2,
    title: "Como Escrever Termos de Uso Para Seu Site, Evitar Processos e Garantir Segurança Jurídica",
    excerpt: "Guia completo sobre termos de uso: o que incluir, como proteger seu negócio e evitar armadilhas legais que podem custar caro.",
    image: blogImage2,
    readTime: "10 min",
    slug: "/blog/como-escrever-termos-do-seu-site-evitar-processos-garantir-seguranca-juridica",
    category: "Jurídico"
  },
  {
    id: 3,
    title: "Política de Cookies: Guia Completo para LGPD, GDPR e Banner Correto em 2026",
    excerpt: "O banner de cookies errado pode gerar multas de até 2% do faturamento. Aprenda a cumprir LGPD e GDPR com o modelo certo, passo a passo.",
    image: blogImage3,
    readTime: "12 min",
    slug: "/blog/politica-cookies-guia-completo-lgpd-gdpr-banner-correto-2026",
    category: "Compliance"
  }
];

export const RelatedArticles = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 md:py-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          📖 Leia Também
        </h2>
        <p className="text-muted-foreground">
          Artigos relacionados que podem te interessar
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card 
            key={article.id}
            className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            onClick={() => navigate(article.slug)}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-muted">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Category badge */}
              <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                {article.category}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-5">
              {/* Meta info */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Clock className="h-3 w-3" />
                <span>{article.readTime} leitura</span>
              </div>
              
              {/* Title */}
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              {/* Excerpt */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              
              {/* CTA */}
              <Button
                variant="ghost"
                size="sm"
                className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary hover:bg-transparent"
              >
                Ler artigo
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
