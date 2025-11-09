import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import blogHeroImage from "@/assets/blog-politica-privacidade-2026.jpg";

interface BlogPost {
  id: string;
  title: string;
  meta_description: string;
  categories: string[];
  created_at: string;
  slug: string;
}

export default function BlogPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Featured article
  const featuredArticle = {
    id: 'featured-1',
    title: 'Política de Privacidade: O Que É, Por Que Precisa e Modelo Gratuito para Seu Site (2026)',
    meta_description: 'Descubra como criar uma política de privacidade legalmente válida no Brasil e na UE. Modelo pronto para download, atualizado conforme LGPD e GDPR.',
    categories: ['LGPD', 'Compliance', 'Privacidade'],
    created_at: '2025-11-09',
    slug: 'politica-privacidade-o-que-e-por-que-precisa-modelo-gratuito-2026',
    image: blogHeroImage
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, meta_description, categories, created_at, slug')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (data) {
      setPosts(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Blog Gerador de Políticas
            </h1>
            <p className="text-xl text-muted-foreground">
              Artigos, guias e atualizações sobre políticas legais e compliance digital
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <div className="space-y-12">
              {/* Featured Article */}
              <Card 
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => navigate(`/blog/${featuredArticle.slug}`)}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        ⭐ Destaque
                      </span>
                    </div>
                  </div>
                  <CardHeader className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      {featuredArticle.categories.map((cat, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                      {featuredArticle.title}
                    </CardTitle>
                    <CardDescription className="text-base mb-4">
                      {featuredArticle.meta_description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {new Date(featuredArticle.created_at).toLocaleDateString('pt-BR')}
                      </span>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Ler artigo completo →
                      </Button>
                    </div>
                  </CardHeader>
                </div>
              </Card>

              {/* Other posts from database */}
              {posts.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Mais Artigos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                      <Card key={post.id} className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            {post.categories.length > 0 && (
                              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                {post.categories[0]}
                              </span>
                            )}
                          </div>
                          <CardTitle className="text-lg line-clamp-2">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-3">
                            {post.meta_description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              {new Date(post.created_at).toLocaleDateString('pt-BR')}
                            </span>
                            <Button variant="ghost" size="sm">
                              Ler mais →
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="text-center mt-12">
            <Button variant="google-outline" size="lg">
              Carregar Mais Artigos
            </Button>
          </div>

          <div className="mt-16">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>📬 Newsletter</CardTitle>
                <CardDescription>
                  Receba em primeira mão nossos artigos sobre compliance legal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="google">
                    Inscrever-se
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}