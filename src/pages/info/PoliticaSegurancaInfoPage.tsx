import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const PoliticaSegurancaInfoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            O que é Política de Segurança?
          </h1>
          <p className="text-xl text-muted-foreground">
            Demonstre como protege dados e sistemas
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que é?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Define medidas de segurança para proteger dados e sistemas contra ameaças.
              </p>
            </CardContent>
          </Card>

          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Crie sua Política de Segurança
            </h2>
            <Link to="/gerador-politica-seguranca">
              <Button variant="secondary" size="lg">
                Gerar Política de Segurança
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaSegurancaInfoPage;
