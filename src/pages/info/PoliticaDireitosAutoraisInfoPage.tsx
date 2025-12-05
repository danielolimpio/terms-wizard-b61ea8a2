import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copyright } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";

const PoliticaDireitosAutoraisInfoPage = () => {
  const breadcrumbItems = [{ name: "O que é Política de Direitos Autorais?", url: "/politica-direitos-autorais" }];
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>O que é Política de Direitos Autorais? | Guia 2025</title>
        <meta name="description" content="Entenda o que é Política de Direitos Autorais e como proteger sua propriedade intelectual e conteúdo online." />
        <link rel="canonical" href="https://politicadeprivacidade.org/politica-direitos-autorais" />
      </Helmet>
      <StructuredData type="breadcrumb" items={breadcrumbItems} />
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4"><Copyright className="h-8 w-8 text-primary" /></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">O que é Política de Direitos Autorais?</h1>
          <p className="text-xl text-muted-foreground">Proteja sua propriedade intelectual e conteúdo</p>
        </div>
        <div className="space-y-8">
          <Card><CardHeader><div className="flex items-center gap-3"><Copyright className="h-8 w-8 text-primary" /><CardTitle className="text-2xl">O que é?</CardTitle></div></CardHeader><CardContent><p className="text-muted-foreground">Define os direitos sobre conteúdo, marcas e propriedade intelectual do seu site.</p></CardContent></Card>
          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white"><h2 className="text-2xl font-bold mb-4">Crie sua Política de Direitos Autorais</h2><Link to="/gerador-politica-propriedade-intelectual"><Button variant="secondary" size="lg">Gerar Política de Direitos Autorais</Button></Link></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default PoliticaDireitosAutoraisInfoPage;
