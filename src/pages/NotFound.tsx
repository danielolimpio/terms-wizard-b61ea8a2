import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero px-4">
      <Card className="w-full max-w-lg text-center">
        <CardHeader className="pb-4">
          <div className="text-6xl mb-4">📋</div>
          <CardTitle className="text-4xl font-bold text-foreground mb-2">404</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Ops! A página que você procura não foi encontrada
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            A URL <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code> não existe em nosso site.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="google" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            
            <Button variant="google-outline" onClick={() => window.location.href = '/'}>
              <Home className="mr-2 h-4 w-4" />
              Ir para Início
            </Button>
          </div>
          
          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground mb-3">
              Que tal gerar uma política para seu site?
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = '/politica-privacidade'}
            >
              <Search className="mr-2 h-3 w-3" />
              Criar Política de Privacidade
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
