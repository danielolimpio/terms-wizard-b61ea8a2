import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogArticles } from "@/data/blogArticles";

// Pega os 3 primeiros artigos para exibir na home
const articles = blogArticles.slice(0, 3).map(article => ({
  id: parseInt(article.id),
  title: article.title,
  excerpt: article.excerpt,
  image: article.image,
  date: new Date(article.publishedAt).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' }),
  readTime: article.readTime,
  slug: article.slug,
  category: article.category
}));

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