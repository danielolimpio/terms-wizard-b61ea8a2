import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { Button } from "@/components/ui/button";
import { getPolicyById } from "@/lib/policies";
import { generateTermsOfUse } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";

export default function TermsOfUseGenerator() {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  
  const policyType = getPolicyById('terms-of-use');
  if (!policyType) return <div>Política não encontrada</div>;

  const handlePolicyGenerated = (formData: PolicyFormData) => {
    const content = generateTermsOfUse(formData);
    setGeneratedPolicy({ id: Date.now().toString(), type: policyType, content, formData, createdAt: new Date() });
  };

  if (generatedPolicy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <GeneratedPolicyResult generatedPolicy={generatedPolicy} onGenerateNew={() => setGeneratedPolicy(null)} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6"><Button variant="outline" onClick={() => window.history.back()}>← Voltar</Button></div>
        <PolicyGenerator policyType={policyType} onGenerate={handlePolicyGenerated} />
      </main>
      <Footer />
    </div>
  );
}