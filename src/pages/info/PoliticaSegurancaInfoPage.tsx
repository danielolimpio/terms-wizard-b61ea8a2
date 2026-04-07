import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";

const PoliticaSegurancaInfoPage = () => {
  const breadcrumbItems = [{ name: "O que é Política de Segurança?", url: "/politica-seguranca" }];
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>O que é Política de Segurança? | Guia 2025</title>
        <meta name="description" content="Entenda o que é Política de Segurança e como demonstrar proteção de dados e sistemas contra ameaças." />
        <link rel="canonical" href="https://politicadeprivacidade.org/politica-seguranca" />
      </Helmet>
      <StructuredData type="breadcrumb" items={breadcrumbItems} />
      <StructuredData type="faq" questions={[
        { question: "O que é uma Política de Segurança?", answer: "É um documento que define as medidas técnicas e organizacionais para proteger dados, sistemas e infraestrutura contra ameaças cibernéticas." },
        { question: "A Política de Segurança é obrigatória?", answer: "A LGPD exige que empresas adotem medidas de segurança para proteger dados pessoais. A política formaliza essas medidas e demonstra conformidade." },
        { question: "O que deve conter na Política de Segurança?", answer: "Medidas de proteção de dados, controle de acesso, criptografia, backup, resposta a incidentes, treinamento de equipe e auditorias periódicas." },
        { question: "Qual a diferença entre Política de Segurança e Política de Privacidade?", answer: "A Política de Privacidade trata do uso de dados pessoais. A Política de Segurança foca nas medidas técnicas para proteger esses dados e sistemas." }
      ]} />
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4"><ShieldCheck className="h-8 w-8 text-primary" /></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">O que é Política de Segurança?</h1>
          <p className="text-xl text-muted-foreground">Demonstre como protege dados e sistemas</p>
        </div>
        <div className="space-y-8">
          <Card><CardHeader><div className="flex items-center gap-3"><ShieldCheck className="h-8 w-8 text-primary" /><CardTitle className="text-2xl">O que é?</CardTitle></div></CardHeader><CardContent><p className="text-muted-foreground">Define medidas de segurança para proteger dados e sistemas contra ameaças.</p></CardContent></Card>
          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white"><h2 className="text-2xl font-bold mb-4">Crie sua Política de Segurança</h2><Link to="/gerador-politica-seguranca"><Button variant="secondary" size="lg">Gerar Política de Segurança</Button></Link></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default PoliticaSegurancaInfoPage;
