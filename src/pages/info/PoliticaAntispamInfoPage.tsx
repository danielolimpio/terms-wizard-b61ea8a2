import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";

const PoliticaAntispamInfoPage = () => {
  const breadcrumbItems = [
    { name: "O que é Política Antispam?", url: "/politica-antispam" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>O que é Política Antispam? | Guia Completo 2025</title>
        <meta name="description" content="Entenda o que é Política Antispam, por que é importante, práticas essenciais e consequências do spam. Proteja sua reputação e conformidade legal." />
        <meta name="keywords" content="política antispam, email marketing, LGPD, CAN-SPAM, opt-in, unsubscribe" />
        <link rel="canonical" href="https://politicadeprivacidade.org/politica-antispam" />
      </Helmet>
      <StructuredData type="breadcrumb" items={breadcrumbItems} />
      <StructuredData type="faq" questions={[
        { question: "O que é uma Política Antispam?", answer: "É um documento que define as regras da empresa sobre envio de comunicações eletrônicas, garantindo que apenas mensagens autorizadas sejam enviadas." },
        { question: "A Política Antispam é obrigatória?", answer: "Sim, para empresas que fazem email marketing. A LGPD exige consentimento prévio e a CAN-SPAM Act exige opção de descadastro em todas as comunicações." },
        { question: "O que deve conter na Política Antispam?", answer: "Regras de opt-in e opt-out, frequência de envio, tipos de comunicações, processo de descadastro e medidas contra spam." },
        { question: "Qual a diferença entre opt-in e double opt-in?", answer: "No opt-in simples o usuário aceita receber emails. No double opt-in, o usuário confirma a inscrição por email, garantindo maior qualidade da lista." }
      ]} />
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">O que é Política Antispam?</h1>
          <p className="text-xl text-muted-foreground">Entenda como proteger usuários contra comunicações não solicitadas</p>
        </div>
        <div className="space-y-8">
          <Card><CardHeader><div className="flex items-center gap-3"><Mail className="h-8 w-8 text-primary" /><CardTitle className="text-2xl">O que é Política Antispam?</CardTitle></div></CardHeader><CardContent className="space-y-4"><p className="text-muted-foreground leading-relaxed">A <strong>Política Antispam</strong> é um documento que estabelece as regras e práticas da sua empresa em relação ao envio de comunicações eletrônicas.</p></CardContent></Card>
          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Crie sua Política Antispam</h2>
            <Link to="/gerador-politica-antispam"><Button variant="secondary" size="lg">Gerar Política Antispam</Button></Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaAntispamInfoPage;
