// Content Policy Generator Page
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { getPolicyById } from "@/lib/policies";
import { generateContentPolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";

const ContentPolicyGenerator = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const policyType = getPolicyById('content-policy');
  
  if (!policyType) {
    return <div>Política não encontrada</div>;
  }

  const handleGenerate = (formData: PolicyFormData) => {
    const content = generateContentPolicy(formData);
    setGeneratedPolicy({
      id: Date.now().toString(),
      type: policyType,
      content,
      formData,
      createdAt: new Date()
    });
  };

  if (generatedPolicy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <GeneratedPolicyResult
            generatedPolicy={generatedPolicy}
            onGenerateNew={() => setGeneratedPolicy(null)}
          />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PolicyGenerator policyType={policyType} onGenerate={handleGenerate} />
      <Footer />
    </div>
  );
};

export default ContentPolicyGenerator;
