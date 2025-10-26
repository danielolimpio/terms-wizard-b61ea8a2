import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPolicyById } from "@/lib/policies";
import { generatePrivacyPolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";
import { Shield, FileText, Globe, Clock } from "lucide-react";

const PrivacyPolicyPage = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const [showGenerator, setShowGenerator] = useState(false);
  
  const policyType = getPolicyById('privacy-policy');
  if (!policyType) return <div>Política não encontrada</div>;

  const handlePolicyGenerated = (formData: PolicyFormData) => {
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

  if (generatedPolicy) {
    return (
      <div className="min-h-screen bg-background">
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
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button variant="outline" onClick={() => setShowGenerator(false)}>
              ← Voltar às Informações
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
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex justify-center mb-6">
            <span className="text-6xl">{policyType.icon}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gerador de Política de Privacidade
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Crie uma política de privacidade profissional e conforme a LGPD em minutos. 
            Proteja seu site e seus usuários com documentos legais precisos.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm">
              <Shield className="mr-2 h-4 w-4" />
              LGPD Compliant
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm">
              <Globe className="mr-2 h-4 w-4" />
              GDPR Ready
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-sm">
              <Clock className="mr-2 h-4 w-4" />
              Geração Instantânea
            </Badge>
          </div>

          <Button variant="google" size="xl" onClick={() => setShowGenerator(true)}>
            Gerar Política de Privacidade Gratuita
          </Button>
        </div>
      </section>

      {/* AdSense Banner */}
      <div className="container mx-auto px-4 py-4">
        <div className="adsense-banner adsense-leaderboard">
          <span>Google AdSense - Leaderboard (728x90)</span>
        </div>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">O que é uma Política de Privacidade?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-muted-foreground mb-4">
                  Uma política de privacidade é um documento legal que explica como uma organização 
                  coleta, usa, divulga e gerencia os dados de um cliente ou visitante. É essencial 
                  para compliance com leis como LGPD no Brasil e GDPR na Europa.
                </p>
                
                <h3 className="text-lg font-semibold mb-3">Por que você precisa de uma?</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Cumprimento da Lei Geral de Proteção de Dados (LGPD)</li>
                  <li>Transparência com seus usuários sobre coleta de dados</li>
                  <li>Proteção legal para seu negócio</li>
                  <li>Construção de confiança com visitantes</li>
                  <li>Requisito para Google AdSense e outras plataformas</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">O que nossa ferramenta inclui:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Coleta e uso de dados pessoais</li>
                  <li>Política de cookies detalhada</li>
                  <li>Direitos dos usuários conforme LGPD</li>
                  <li>Informações sobre segurança de dados</li>
                  <li>Procedimentos de contato e reclamações</li>
                  <li>Compatibilidade com Google AdSense</li>
                  <li>Retenção e exclusão de dados</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Palavras-chave Importantes</CardTitle>
                <CardDescription>
                  Termos relacionados à política de privacidade que você deve conhecer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {policyType.keywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Características
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Conforme LGPD Brasileira</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Compatível com GDPR</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Suporte ao Google AdSense</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Múltiplos idiomas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Downloads em vários formatos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Personalização automática</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="adsense-banner adsense-square">
              <span>Google AdSense - Square (300x250)</span>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>FAQ Rápido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium mb-1">É realmente gratuito?</h4>
                  <p className="text-muted-foreground">Sim, nossa ferramenta é 100% gratuita sem limites.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Posso usar comercialmente?</h4>
                  <p className="text-muted-foreground">Absolutamente! Use em qualquer site pessoal ou comercial.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">É válido juridicamente?</h4>
                  <p className="text-muted-foreground">Nossos templates seguem as melhores práticas, mas consulte um advogado para casos específicos.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-secondary py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pronto para criar sua Política de Privacidade?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Proteja seu site e construa confiança com seus usuários. 
            Gere sua política de privacidade profissional agora mesmo.
          </p>
          <Button variant="google" size="xl" onClick={() => setShowGenerator(true)}>
          Começar Agora - É Grátis!
        </Button>
      </div>
    </section>
    
    <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;