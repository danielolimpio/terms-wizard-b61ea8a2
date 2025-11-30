import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accessibility } from "lucide-react";
import { Link } from "react-router-dom";

const PoliticaAcessibilidadeInfoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            O que é Política de Acessibilidade?
          </h1>
          <p className="text-xl text-muted-foreground">
            Garanta acesso inclusivo para todos os usuários
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Accessibility className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que é?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Estabelece compromisso com acessibilidade para pessoas com deficiência.
              </p>
            </CardContent>
          </Card>

          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Crie sua Política de Acessibilidade
            </h2>
            <Link to="/gerador-politica-acessibilidade">
              <Button variant="secondary" size="lg">
                Gerar Política de Acessibilidade
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaAcessibilidadeInfoPage;
