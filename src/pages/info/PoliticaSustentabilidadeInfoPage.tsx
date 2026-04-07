import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";

const PoliticaSustentabilidadeInfoPage = () => {
  const breadcrumbItems = [{ name: "O que é Política de Sustentabilidade?", url: "/politica-sustentabilidade" }];
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>O que é Política de Sustentabilidade? | Guia 2025</title>
        <meta name="description" content="Entenda o que é Política de Sustentabilidade e como demonstrar compromisso ambiental e responsabilidade social empresarial." />
        <link rel="canonical" href="https://politicadeprivacidade.org/politica-sustentabilidade" />
      </Helmet>
      <StructuredData type="breadcrumb" items={breadcrumbItems} />
      <StructuredData type="faq" questions={[
        { question: "O que é uma Política de Sustentabilidade?", answer: "É um documento que formaliza o compromisso da empresa com práticas ambientalmente responsáveis, sociais e de governança (ESG)." },
        { question: "Quem precisa de uma Política de Sustentabilidade?", answer: "Empresas de todos os portes que desejam demonstrar responsabilidade ambiental, especialmente aquelas sujeitas a regulamentações ESG." },
        { question: "O que deve conter na Política de Sustentabilidade?", answer: "Metas ambientais, práticas de redução de impacto, responsabilidade social, governança sustentável e indicadores de desempenho." },
        { question: "A Política de Sustentabilidade é obrigatória?", answer: "Para a maioria das empresas não é obrigatória por lei, mas é cada vez mais exigida por investidores, consumidores e parceiros comerciais." }
      ]} />
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4"><Leaf className="h-8 w-8 text-primary" /></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">O que é Política de Sustentabilidade?</h1>
          <p className="text-xl text-muted-foreground">Entenda como demonstrar compromisso ambiental e responsabilidade social</p>
        </div>
        <div className="space-y-8">
          <Card><CardHeader><div className="flex items-center gap-3"><Leaf className="h-8 w-8 text-primary" /><CardTitle className="text-2xl">O que é?</CardTitle></div></CardHeader><CardContent><p className="text-muted-foreground">A Política de Sustentabilidade documenta o compromisso da empresa com práticas ambientalmente responsáveis.</p></CardContent></Card>
          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white"><h2 className="text-2xl font-bold mb-4">Crie sua Política de Sustentabilidade</h2><Link to="/gerador-politica-sustentabilidade"><Button variant="secondary" size="lg">Gerar Política de Sustentabilidade</Button></Link></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default PoliticaSustentabilidadeInfoPage;
