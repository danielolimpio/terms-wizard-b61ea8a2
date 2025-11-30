import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copyright } from "lucide-react";
import { Link } from "react-router-dom";

const PoliticaDireitosAutoraisInfoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            O que é Política de Direitos Autorais?
          </h1>
          <p className="text-xl text-muted-foreground">
            Proteja sua propriedade intelectual e conteúdo
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Copyright className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que é?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Define os direitos sobre conteúdo, marcas e propriedade intelectual do seu site.
              </p>
            </CardContent>
          </Card>

          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Crie sua Política de Direitos Autorais
            </h2>
            <Link to="/gerador-politica-propriedade-intelectual">
              <Button variant="secondary" size="lg">
                Gerar Política de Direitos Autorais
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaDireitosAutoraisInfoPage;
