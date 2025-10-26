import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPolicyById } from "@/lib/policies";
import { generateTermsOfUse } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";
import { FileText, Scale, Globe, Clock } from "lucide-react";

const TermsOfUsePage = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const [showGenerator, setShowGenerator] = useState(false);
  
  const policyType = getPolicyById('terms-of-use');
  if (!policyType) return <div>Política não encontrada</div>;

  const handlePolicyGenerated = (formData: PolicyFormData) => {
    const content = generateTermsOfUse(formData);
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
            Gerador de Termos de Uso
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Crie termos de uso profissionais e juridicamente sólidos para proteger seu site. 
            Defina regras claras e proteja seu negócio online.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm">
              <Scale className="mr-2 h-4 w-4" />
              Juridicamente Sólido
            </Badge>
            <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm">
              <Globe className="mr-2 h-4 w-4" />
              Múltiplos Idiomas
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-sm">
              <Clock className="mr-2 h-4 w-4" />
              Geração Rápida
            </Badge>
          </div>

          <Button variant="google" size="xl" onClick={() => setShowGenerator(true)}>
            Gerar Termos de Uso Gratuitos
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
                <CardTitle className="text-2xl">O que são Termos de Uso?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-muted-foreground mb-4">
                  Os Termos de Uso (também conhecidos como Termos de Serviço) são um acordo legal 
                  entre você e os usuários do seu site. Eles estabelecem as regras e diretrizes 
                  para o uso do seu site ou serviço.
                </p>
                
                <h3 className="text-lg font-semibold mb-3">Por que são essenciais?</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Proteção legal para seu negócio</li>
                  <li>Definição clara de responsabilidades</li>
                  <li>Limitação de responsabilidade civil</li>
                  <li>Estabelecimento de regras de uso</li>
                  <li>Base legal para suspender contas abusivas</li>
                  <li>Compliance com plataformas de pagamento</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Nossos Termos incluem:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Aceitação e modificação dos termos</li>
                  <li>Direitos e responsabilidades dos usuários</li>
                  <li>Usos permitidos e proibidos</li>
                  <li>Propriedade intelectual</li>
                  <li>Limitação de responsabilidade</li>
                  <li>Procedimentos de rescisão</li>
                  <li>Lei aplicável e jurisdição</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Termos Relacionados</CardTitle>
                <CardDescription>
                  Conceitos importantes sobre termos de uso e direito digital
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
                    <span>Baseado em melhores práticas jurídicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Adaptável a qualquer tipo de site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Cláusulas de limitação de responsabilidade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Proteção de propriedade intelectual</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Procedimentos de moderação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Lei brasileira aplicável</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="adsense-banner adsense-square">
              <span>Google AdSense - Square (300x250)</span>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Dúvidas Frequentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium mb-1">Termos de Uso são obrigatórios?</h4>
                  <p className="text-muted-foreground">Embora não sejam obrigatórios por lei, são altamente recomendados para qualquer site.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Preciso de advogado?</h4>
                  <p className="text-muted-foreground">Nossos templates cobrem a maioria dos casos, mas consulte um advogado para situações específicas.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Posso modificar depois?</h4>
                  <p className="text-muted-foreground">Sim, você pode atualizar seus termos, mas deve notificar os usuários sobre as mudanças.</p>
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
            Proteja seu negócio online hoje mesmo
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não deixe seu site desprotegido. Crie termos de uso profissionais 
            e estabeleça regras claras para seus usuários.
          </p>
          <Button variant="google" size="xl" onClick={() => setShowGenerator(true)}>
          Criar Termos de Uso Agora
        </Button>
      </div>
    </section>
    
    <Footer />
    </div>
  );
};

export default TermsOfUsePage;