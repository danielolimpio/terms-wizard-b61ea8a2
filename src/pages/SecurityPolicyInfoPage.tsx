import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPolicyById } from "@/lib/policies";
import { generateSecurityPolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";

const SecurityPolicyInfoPage = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const [showGenerator, setShowGenerator] = useState(false);

  const handlePolicyGenerated = (formData: PolicyFormData) => {
    const policyType = getPolicyById('security-policy');
    if (!policyType) return;

    const content = generateSecurityPolicy(formData);
    
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

  const policyType = getPolicyById('security-policy');
  
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
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">🛡️</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Gerador Política de Segurança
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Proteja dados e sistemas com uma política de segurança abrangente e eficaz
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>O que é uma Política de Segurança?</CardTitle>
              <CardDescription>
                Entenda a importância de proteger seus dados e sistemas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Uma Política de Segurança é um conjunto de diretrizes e práticas que visam proteger os ativos de informação de uma organização.
              </p>
              <p>
                Ela define responsabilidades, estabelece controles de acesso e descreve os procedimentos para lidar com incidentes de segurança.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Por que é Importante?</CardTitle>
              <CardDescription>
                Descubra os benefícios de ter uma política bem definida.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside">
                <li>Proteção contra ameaças cibernéticas</li>
                <li>Conformidade com regulamentações (LGPD, GDPR)</li>
                <li>Preservação da reputação da empresa</li>
                <li>Redução de riscos e perdas financeiras</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>O que Incluir na Política?</CardTitle>
              <CardDescription>
                Saiba quais elementos são essenciais em sua política.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside">
                <li>Escopo e objetivos da política</li>
                <li>Responsabilidades da equipe</li>
                <li>Controles de acesso e autenticação</li>
                <li>Procedimentos de backup e recuperação</li>
                <li>Medidas de segurança física e lógica</li>
                <li>Gestão de incidentes de segurança</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button 
              className="w-full md:w-auto"
              size="lg"
              onClick={() => setShowGenerator(true)}
            >
              Gerar Política de Segurança
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPolicyInfoPage;
