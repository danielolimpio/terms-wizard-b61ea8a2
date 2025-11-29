import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Search, ArrowLeft, FileText, Shield, Cookie, AlertCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Track 404 in Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_not_found', {
        page_path: location.pathname,
        referrer: document.referrer
      });
    }
  }, [location.pathname]);

  const popularPages = [
    {
      title: "Gerador de Política de Privacidade",
      description: "Crie sua política de privacidade em minutos",
      icon: Shield,
      url: "/gerador-politica-privacidade"
    },
    {
      title: "Gerador de Termos de Uso",
      description: "Proteja seu site com termos profissionais",
      icon: FileText,
      url: "/gerador-termos-uso"
    },
    {
      title: "Gerador de Política de Cookies",
      description: "Conforme LGPD e GDPR",
      icon: Cookie,
      url: "/gerador-politica-cookies"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>404 - Página Não Encontrada | Políticas de Privacidade</title>
        <meta name="description" content="A página que você procura não foi encontrada. Explore nossos geradores gratuitos de políticas legais." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ name: "Página Não Encontrada", url: location.pathname }]} />
          
          <Card className="text-center mb-12 border-2 border-destructive/20">
            <CardHeader className="pb-4">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <AlertCircle className="h-24 w-24 text-destructive animate-pulse" />
                  <div className="absolute inset-0 h-24 w-24 text-destructive opacity-20 animate-ping" />
                </div>
              </div>
              <CardTitle className="text-5xl md:text-6xl font-bold text-foreground mb-3">
                404
              </CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                Ops! A página que você procura não foi encontrada
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">
                  URL não encontrada:
                </p>
                <code className="bg-background px-3 py-2 rounded text-xs font-mono border border-border block break-all">
                  {location.pathname}
                </code>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="google" onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Button>
                
                <Button asChild>
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Ir para Início
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
              Páginas Mais Acessadas
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Talvez você esteja procurando por uma destas páginas:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {popularPages.map((page) => (
                <Link key={page.url} to={page.url}>
                  <Card className="h-full hover:border-primary transition-all hover:shadow-lg cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <page.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{page.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm">
                        {page.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Precisa de Ajuda?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Não encontrou o que procurava? Explore nossas opções:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" asChild className="flex-1">
                  <Link to="/politicas">
                    <FileText className="mr-2 h-4 w-4" />
                    Ver Todas as Políticas
                  </Link>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <Link to="/blog">
                    <FileText className="mr-2 h-4 w-4" />
                    Ler o Blog
                  </Link>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <Link to="/contato">
                    <Home className="mr-2 h-4 w-4" />
                    Entre em Contato
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
