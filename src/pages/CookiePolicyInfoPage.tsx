import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPolicyById } from "@/lib/policies";
import { generateCookiePolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";
import { Cookie, Shield, CheckCircle } from "lucide-react";

const CookiePolicyInfoPage = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const [showGenerator, setShowGenerator] = useState(false);

  const handlePolicyGenerated = (formData: PolicyFormData) => {
    const policyType = getPolicyById('cookie-policy');
    if (!policyType) return;

    const content = generateCookiePolicy(formData);
    
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

  const policyType = getPolicyById('cookie-policy');
  
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
            Gerador Política de Cookies
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Crie uma política de cookies completa e conforme a LGPD em minutos
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => setShowGenerator(true)}
          >
            Gerar Política de Cookies
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Cookie className="h-6 w-6 text-primary" />
                <CardTitle>O que é uma Política de Cookies?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Uma Política de Cookies explica aos visitantes quais tipos de cookies seu site usa, 
                para que servem e como os usuários podem gerenciá-los. É um documento essencial para 
                transparência e conformidade com leis de privacidade como LGPD e GDPR.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Por que é obrigatória?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                A LGPD e GDPR exigem que sites informem claramente sobre o uso de cookies. 
                Além de ser uma obrigação legal, uma política de cookies bem elaborada aumenta 
                a confiança dos usuários e demonstra transparência no tratamento de dados.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            O que incluímos na Política de Cookies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">O que são Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Explicação clara e acessível sobre cookies
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Tipos de Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Essenciais, desempenho, funcionalidade e publicidade
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Finalidade de Uso</h3>
                <p className="text-sm text-muted-foreground">
                  Para que cada tipo de cookie é utilizado
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Como Gerenciar</h3>
                <p className="text-sm text-muted-foreground">
                  Instruções para controlar e desativar cookies
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Cookies de Terceiros</h3>
                <p className="text-sm text-muted-foreground">
                  Informações sobre Google Analytics, AdSense, etc.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Conformidade LGPD</h3>
                <p className="text-sm text-muted-foreground">
                  Documento alinhado com a legislação brasileira
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-secondary rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Pronto para criar sua Política de Cookies?
          </h2>
          <p className="text-muted-foreground mb-6">
            Gere um documento profissional em minutos, totalmente gratuito
          </p>
          <Button 
            variant="default" 
            size="lg"
            onClick={() => setShowGenerator(true)}
          >
            Gerar Política de Cookies
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicyInfoPage;
