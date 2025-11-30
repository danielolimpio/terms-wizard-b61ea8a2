import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import blogHeroImage from "@/assets/blog-politica-privacidade-2026.jpg";
import blogTermosImage from "@/assets/blog-termos-uso-seguranca-juridica.jpg";
import blogCookiesImage from "@/assets/blog-politica-cookies-guia-completo.jpg";
import blogMarketingLGPDImage from "@/assets/blog-10-acoes-marketing-lgpd.jpg";
import blogCMPImage from "@/assets/blog-o-que-e-cmp.jpg";
import blogMultasImage from "@/assets/blog-multas-lgpd-2025.jpg";

interface BlogPost {
  id: string;
  title: string;
  meta_description: string;
  categories: string[];
  created_at: string;
  slug: string;
}

import { BlogSidebar } from "@/components/BlogSidebar";

export default function BlogPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Featured and recent articles
  const featuredArticles = [
    {
      id: 'featured-1',
      title: 'Política de Privacidade: O Que É, Por Que Precisa e Modelo Gratuito para Seu Site (2026)',
      meta_description: 'Descubra como criar uma política de privacidade legalmente válida no Brasil e na UE. Modelo pronto para download, atualizado conforme LGPD e GDPR.',
      categories: ['LGPD', 'Compliance', 'Privacidade'],
      created_at: '2025-11-09',
      slug: 'politica-privacidade-o-que-e-por-que-precisa-modelo-gratuito-2026',
      image: blogHeroImage,
      featured: true
    },
    {
      id: 'featured-2',
      title: 'Como Escrever os Termos do Seu Site para Evitar Processos e Garantir Segurança Jurídica',
      meta_description: 'Seu site pode ser processado por falta de termos de uso. Aprenda a redigir termos claros, completos e adaptados à LGPD, com exemplo prático para blogs e e-commerces.',
      categories: ['LGPD', 'Compliance', 'Termos de Uso'],
      created_at: '2025-11-11',
      slug: 'como-escrever-termos-do-seu-site-evitar-processos-garantir-seguranca-juridica',
      image: blogTermosImage,
      featured: false
    },
    {
      id: 'featured-3',
      title: 'Política de Cookies: Guia Completo para LGPD, GDPR e Como Instalar o Banner Correto em 2026',
      meta_description: 'O banner de cookies errado pode gerar multas de até 2% do faturamento. Aprenda a cumprir a LGPD e GDPR com o modelo certo, passo a passo, para WordPress e Shopify.',
      categories: ['LGPD', 'Compliance', 'Cookies'],
      created_at: '2025-11-14',
      slug: 'politica-cookies-guia-completo-lgpd-gdpr-banner-correto-2026',
      image: blogCookiesImage,
      featured: false
    },
    {
      id: 'featured-4',
      title: '10 Ações de Marketing que Mudam com a LGPD Hoje!',
      meta_description: 'Descubra os 10 processos de marketing que a LGPD exige repensar para garantir conformidade e proteger dados dos seus usuários.',
      categories: ['LGPD', 'Marketing', 'Compliance'],
      created_at: '2025-11-28',
      slug: '10-acoes-marketing-lgpd',
      image: blogMarketingLGPDImage,
      featured: false
    },
    {
      id: 'featured-5',
      title: 'O Que é CMP? Plataforma de Gestão de Consentimento para Sites e Lojas',
      meta_description: 'Entenda o que é uma CMP, como ela funciona e por que é obrigatória para sites que usam cookies na LGPD.',
      categories: ['LGPD', 'Cookies', 'Compliance'],
      created_at: '2025-11-29',
      slug: 'o-que-e-cmp-plataforma-gestao-consentimento',
      image: blogCMPImage,
      featured: false
    },
    {
      id: 'featured-6',
      title: 'Multas da LGPD em 2025: Valores, Casos Reais e Como Evitar Penalidades',
      meta_description: 'Saiba quanto pode custar uma multa da LGPD, veja casos reais e aprenda a se proteger com boas práticas.',
      categories: ['LGPD', 'Compliance'],
      created_at: '2025-11-30',
      slug: 'multas-lgpd-2025-valores-casos-reais',
      image: blogMultasImage,
      featured: false
    }
  ];

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
      <Helmet>
        <title>Blog | Guias sobre LGPD, GDPR e Políticas Legais</title>
        <meta 
          name="description" 
          content="Artigos completos sobre política de privacidade, LGPD, GDPR, cookies e compliance digital. Guias práticos para criar documentos legais." 
        />
        <link rel="canonical" href="https://politicadeprivacidade.org/blog" />
      </Helmet>
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex gap-8 max-w-7xl mx-auto">
          <div className="flex-1">
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
                onClick={() => navigate(`/blog/${featuredArticles[0].slug}`)}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={featuredArticles[0].image} 
                      alt={featuredArticles[0].title}
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
                      {featuredArticles[0].categories.map((cat, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                      {featuredArticles[0].title}
                    </CardTitle>
                    <CardDescription className="text-base mb-4">
                      {featuredArticles[0].meta_description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {new Date(featuredArticles[0].created_at).toLocaleDateString('pt-BR')}
                      </span>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Ler artigo completo →
                      </Button>
                    </div>
                  </CardHeader>
                </div>
              </Card>

              {/* Recent Articles */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Artigos Recentes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredArticles.slice(1).map((article) => (
                    <Card 
                      key={article.id} 
                      className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group"
                      onClick={() => navigate(`/blog/${article.slug}`)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          {article.categories.map((cat, idx) => (
                            <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                              {cat}
                            </span>
                          ))}
                        </div>
                        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {article.meta_description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {new Date(article.created_at).toLocaleDateString('pt-BR')}
                          </span>
                          <Button variant="ghost" size="sm" className="group-hover:text-primary">
                            Ler mais →
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Other posts from database */}
              {posts.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Mais Artigos do Blog</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                      <Card 
                        key={post.id} 
                        className="h-full hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => navigate(`/blog/${post.slug}`)}
                      >
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

        <BlogSidebar />
      </div>
      </main>
      
      <Footer />
    </div>
  );
}