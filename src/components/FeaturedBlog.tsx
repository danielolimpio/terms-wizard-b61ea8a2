import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogImage1 from "@/assets/blog-politica-privacidade-2026.jpg";
import blogImage2 from "@/assets/blog-termos-uso-seguranca-juridica.jpg";
import blogImage3 from "@/assets/blog-politica-cookies-guia-completo.jpg";

const articles = [
  {
    id: 1,
    title: "Política de Privacidade: O Que É, Por Que Você Precisa e Modelo Gratuito 2026",
    excerpt: "Descubra tudo sobre políticas de privacidade em 2026, incluindo LGPD, GDPR e como criar a sua de forma gratuita e profissional.",
    image: blogImage1,
    date: "9 Nov 2025",
    readTime: "8 min",
    slug: "/blog/politica-privacidade-o-que-e-por-que-precisa-modelo-gratuito-2026",
    category: "LGPD"
  },
  {
    id: 2,
    title: "Como Escrever Termos de Uso Para Seu Site, Evitar Processos e Garantir Segurança Jurídica",
    excerpt: "Guia completo sobre termos de uso: o que incluir, como proteger seu negócio e evitar armadilhas legais que podem custar caro.",
    image: blogImage2,
    date: "11 Nov 2025",
    readTime: "10 min",
    slug: "/blog/como-escrever-termos-do-seu-site-evitar-processos-garantir-seguranca-juridica",
    category: "Jurídico"
  },
  {
    id: 3,
    title: "Política de Cookies: Guia Completo para LGPD, GDPR e Banner Correto em 2026",
    excerpt: "O banner de cookies errado pode gerar multas de até 2% do faturamento. Aprenda a cumprir LGPD e GDPR com o modelo certo, passo a passo.",
    image: blogImage3,
    date: "22 Nov 2025",
    readTime: "12 min",
    slug: "/blog/politica-cookies-guia-completo-lgpd-gdpr-banner-correto-2026",
    category: "Compliance"
  }
];

export const FeaturedBlog = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-4">
            <span className="text-xs md:text-sm font-semibold text-primary">📰 Blog</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Últimas do <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Blog</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Aprenda tudo sobre políticas legais, LGPD, GDPR e proteja seu negócio com nossos guias completos
          </p>
        </div>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {article.category}
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime} leitura</span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                {/* CTA */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary hover:bg-transparent"
                  onClick={() => window.location.href = article.slug}
                >
                  Ler artigo completo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        {/* View all CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.location.href = '/blog'}
          >
            Ver Todos os Artigos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};