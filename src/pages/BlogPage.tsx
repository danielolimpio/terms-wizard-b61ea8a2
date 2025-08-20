import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "LGPD: O que Sua Empresa Precisa Saber em 2024",
      description: "Guia completo sobre a Lei Geral de Proteção de Dados e como adequar seu negócio.",
      date: "15 Jan 2024",
      category: "Legal",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "Como Criar uma Política de Privacidade Eficaz",
      description: "Passo a passo para elaborar uma política de privacidade que protege seu negócio.",
      date: "10 Jan 2024",
      category: "Guias",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "Cookies: Tipos, Usos e Regulamentação",
      description: "Entenda tudo sobre cookies e como implementar uma política adequada.",
      date: "5 Jan 2024",
      category: "Técnico",
      readTime: "5 min"
    },
    {
      id: 4,
      title: "Termos de Uso: Protegendo Sua Empresa",
      description: "A importância dos termos de uso e como elaborá-los corretamente.",
      date: "30 Dez 2023",
      category: "Legal",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "Google AdSense e Compliance Legal",
      description: "Como usar o AdSense de forma legal e transparente para seus usuários.",
      date: "28 Dez 2023",
      category: "Monetização",
      readTime: "4 min"
    },
    {
      id: 6,
      title: "Política de Reembolso: Boas Práticas",
      description: "Como criar uma política de reembolso clara e justa para todos.",
      date: "25 Dez 2023",
      category: "Negócios",
      readTime: "6 min"
    }
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                    <Button variant="ghost" size="sm">
                      Ler mais →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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