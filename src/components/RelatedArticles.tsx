import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { getRelatedArticles, getRelatedArticlesForPolicy, BlogArticle } from "@/data/blogArticles";

interface RelatedArticlesProps {
  /** Tipo de política para buscar artigos relacionados */
  policyType?: string;
  /** Tags específicas para buscar artigos relacionados */
  tags?: string[];
  /** ID do artigo atual (para excluir da lista) */
  currentArticleId?: string;
  /** Número de artigos a exibir */
  limit?: number;
}

export const RelatedArticles = ({ 
  policyType, 
  tags, 
  currentArticleId, 
  limit = 3 
}: RelatedArticlesProps) => {
  const navigate = useNavigate();

  // Busca artigos relacionados baseado no contexto
  let articles: BlogArticle[] = [];
  
  if (policyType) {
    // Usa o tipo de política para buscar artigos
    articles = getRelatedArticlesForPolicy(policyType, limit);
  } else if (tags && tags.length > 0) {
    // Usa tags específicas
    articles = getRelatedArticles(tags, currentArticleId, limit);
  } else {
    // Fallback: retorna artigos mais recentes
    articles = getRelatedArticles([], currentArticleId, limit);
  }

  if (articles.length === 0) {
    return null; // Não renderiza se não houver artigos
  }

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
                loading="lazy"
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
