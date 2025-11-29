import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { Button } from "@/components/ui/button";
import { getPolicyById } from "@/lib/policies";
import { generatePrivacyPolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";
import { Shield, Check, ArrowRight } from "lucide-react";

const PoliticaPrivacidadeGratisPage = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const [showGenerator, setShowGenerator] = useState(false);

  useEffect(() => {
    // Add HowTo Schema Markup
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Como Gerar Política de Privacidade Grátis",
      "description": "Aprenda a criar uma política de privacidade profissional em 3 passos simples",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Escolha a Política de Privacidade",
          "text": "Selecione o tipo de documento legal que você precisa: Política de Privacidade, Termos de Uso, Cookies e muito mais."
        },
        {
          "@type": "HowToStep",
          "name": "Preencha os Dados do Seu Site",
          "text": "Responda perguntas simples sobre seu site: nome da empresa, URL, email de contato e tipo de dados coletados."
        },
        {
          "@type": "HowToStep",
          "name": "Baixe e Use Sua Política",
          "text": "Sua política está pronta! Copie o texto, baixe em PDF, DOC ou TXT e publique no seu site em segundos."
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handlePolicyGenerated = (formData: PolicyFormData) => {
    const policyType = getPolicyById('privacy-policy');
    if (!policyType) return;

    const content = generatePrivacyPolicy(formData);
    const generated: GeneratedPolicy = {
      id: Date.now().toString(),
      type: policyType,
      content,
      formData,
      createdAt: new Date()
    };

    setGeneratedPolicy(generated);
  };

  const handleGenerateNew = () => {
    setGeneratedPolicy(null);
    setShowGenerator(false);
  };

  const policyType = getPolicyById('privacy-policy');

  if (!policyType) return null;

  if (generatedPolicy) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Política de Privacidade Gerada | Download Grátis</title>
          <meta name="description" content="Sua política de privacidade está pronta! Baixe em PDF, DOC ou TXT e publique no seu site." />
          <meta name="robots" content="noindex" />
        </Helmet>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <GeneratedPolicyResult
            generatedPolicy={generatedPolicy}
            onGenerateNew={handleGenerateNew}
          />
        </main>
        <Footer />
      </div>
    );
  }

  if (showGenerator) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Gerar Política de Privacidade | Preencha o Formulário</title>
          <meta name="description" content="Preencha o formulário com os dados do seu site para gerar sua política de privacidade profissional grátis." />
          <meta name="robots" content="noindex" />
        </Helmet>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button variant="outline" onClick={() => setShowGenerator(false)}>
              ← Voltar
            </Button>
          </div>
          <PolicyGenerator
            policyType={policyType}
            onGenerate={handlePolicyGenerated}
          />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Política de Privacidade Grátis | LGPD & GDPR | Sem Cadastro</title>
        <meta 
          name="description" 
          content="Crie política de privacidade profissional grátis em 2 minutos. Conforme LGPD e GDPR. Sem cadastro, download em PDF/DOC/TXT. Para blogs, e-commerce e sites." 
        />
        <meta name="keywords" content="política de privacidade grátis, gerador política privacidade, política privacidade LGPD, modelo política privacidade" />
        <link rel="canonical" href="https://politicadeprivacidade.org/politica-de-privacidade-gratis" />
        <meta property="og:title" content="Política de Privacidade Grátis | LGPD & GDPR" />
        <meta property="og:description" content="Crie política de privacidade profissional grátis em 2 minutos. Conforme LGPD e GDPR." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://politicadeprivacidade.org/politica-de-privacidade-gratis" />
      </Helmet>
      <Header />
      
      <main className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Gerador Grátis</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Política de Privacidade <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Grátis</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Crie sua política de privacidade completa e profissional em menos de 2 minutos. 
            Conforme LGPD e GDPR. 100% gratuito, sem cadastro.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Pronto em 2 Minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Sem Cadastro</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="text-base px-8"
            onClick={() => setShowGenerator(true)}
          >
            Gerar Política de Privacidade Grátis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Por que usar nosso gerador de política de privacidade?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Rápido e Simples</h3>
              <p className="text-muted-foreground">
                Gere sua política completa em menos de 2 minutos. Interface intuitiva e fácil de usar.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">LGPD & GDPR</h3>
              <p className="text-muted-foreground">
                Modelos atualizados conforme as principais legislações de proteção de dados.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Profissional</h3>
              <p className="text-muted-foreground">
                Documentos profissionais, prontos para publicação no seu site ou aplicativo.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            O que é uma Política de Privacidade?
          </h2>
          <p className="text-muted-foreground mb-6">
            Uma política de privacidade é um documento legal obrigatório que informa aos visitantes do seu site 
            como você coleta, usa, armazena e protege os dados pessoais deles. Com a LGPD (Lei Geral de Proteção 
            de Dados) no Brasil e o GDPR na Europa, ter uma política de privacidade clara e transparente é essencial 
            para qualquer site ou aplicativo.
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
            Por que você precisa de uma Política de Privacidade?
          </h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li><strong>Conformidade legal:</strong> Exigido pela LGPD e GDPR para sites que coletam dados pessoais</li>
            <li><strong>Transparência:</strong> Mostra aos usuários que você se preocupa com a privacidade deles</li>
            <li><strong>Proteção legal:</strong> Protege sua empresa contra possíveis ações judiciais</li>
            <li><strong>Credibilidade:</strong> Aumenta a confiança dos usuários no seu site ou aplicativo</li>
            <li><strong>Google AdSense:</strong> Requisito obrigatório para aprovação no programa</li>
          </ul>

          <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
            Como funciona nosso gerador de política de privacidade grátis?
          </h3>
          <p className="text-muted-foreground mb-6">
            Nosso gerador é extremamente simples de usar. Basta preencher um formulário com informações básicas 
            sobre seu site (nome, URL, email de contato, tipo de dados coletados) e nossa ferramenta gera 
            automaticamente uma política de privacidade completa e profissional. Você pode então copiar o texto, 
            baixar em PDF, DOC ou TXT, e publicar no seu site imediatamente.
          </p>

          <div className="bg-primary/10 rounded-xl p-6 my-8 border-l-4 border-primary">
            <p className="text-foreground font-medium">
              💡 <strong>Dica importante:</strong> Embora nossas políticas sejam baseadas em legislações atuais e 
              validadas por especialistas, sempre recomendamos que você consulte um advogado especializado para 
              revisar e adaptar o documento às necessidades específicas do seu negócio.
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pronto para criar sua política de privacidade?
          </h2>
          <p className="text-muted-foreground mb-6">
            Gere gratuitamente sua política de privacidade profissional agora mesmo
          </p>
          <Button 
            size="lg" 
            className="text-base px-8"
            onClick={() => setShowGenerator(true)}
          >
            Gerar Política de Privacidade Grátis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidadeGratisPage;