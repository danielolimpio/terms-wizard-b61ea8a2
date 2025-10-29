import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPolicyById } from "@/lib/policies";
import { generateTermsOfUse } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";
import { FileText, Shield, CheckCircle } from "lucide-react";

const TermsOfUseInfoPage = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const [showGenerator, setShowGenerator] = useState(false);

  const handlePolicyGenerated = (formData: PolicyFormData) => {
    const policyType = getPolicyById('terms-of-use');
    if (!policyType) return;

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

  const policyType = getPolicyById('terms-of-use');
  
  if (!policyType) {
    return <div>Política não encontrada</div>;
  }

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
              ← Voltar
            </Button>
          </div>
          
          <PolicyGenerator
            policyType={policyType}
            onGenerate={handlePolicyGenerated}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-16 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gerador de Termos de Uso
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Crie termos de uso profissionais e completos para seu site em minutos
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => setShowGenerator(true)}
          >
            Gerar Termos de Uso Agora
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <FileText className="h-6 w-6 text-primary" />
                <CardTitle>O que são Termos de Uso?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Termos de Uso são documentos legais que estabelecem as regras, direitos e obrigações 
                entre você e os usuários do seu site ou aplicativo. Eles definem como sua plataforma 
                pode ser utilizada e protegem tanto você quanto seus usuários.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Por que são essenciais?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Termos de Uso bem elaborados protegem seu negócio contra responsabilidades legais, 
                estabelecem limites claros de uso, definem propriedade intelectual e ajudam a resolver 
                disputas. São fundamentais para qualquer site ou aplicativo profissional.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            O que incluímos nos Termos de Uso
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Aceitação dos Termos</h3>
                <p className="text-sm text-muted-foreground">
                  Define como e quando os usuários aceitam os termos
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Uso Permitido</h3>
                <p className="text-sm text-muted-foreground">
                  Estabelece o que os usuários podem e não podem fazer
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Propriedade Intelectual</h3>
                <p className="text-sm text-muted-foreground">
                  Protege seus direitos autorais e marcas registradas
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Limitação de Responsabilidade</h3>
                <p className="text-sm text-muted-foreground">
                  Define limites de responsabilidade da plataforma
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Modificações e Rescisão</h3>
                <p className="text-sm text-muted-foreground">
                  Como alterar os termos e encerrar contas
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Lei Aplicável</h3>
                <p className="text-sm text-muted-foreground">
                  Define jurisdição e legislação aplicável
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-secondary rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Pronto para criar seus Termos de Uso?
          </h2>
          <p className="text-muted-foreground mb-6">
            Gere um documento profissional em minutos, totalmente gratuito
          </p>
          <Button 
            variant="default" 
            size="lg"
            onClick={() => setShowGenerator(true)}
          >
            Começar Agora
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUseInfoPage;
