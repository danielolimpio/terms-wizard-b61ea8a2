// Copyright Policy Generator Page
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { getPolicyById } from "@/lib/policies";
import { generateCopyrightPolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogSidebar } from "@/components/BlogSidebar";

const CopyrightPolicyGenerator = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const policyType = getPolicyById('copyright-policy');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!policyType) {
    return <div>Política não encontrada</div>;
  }

  const handleGenerate = (formData: PolicyFormData) => {
    const content = generateCopyrightPolicy(formData);
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
      <Helmet>
        <title>Gerador de Política de Direitos Autorais Grátis | Proteja Seu Conteúdo</title>
        <meta name="description" content="✅ Gere política de direitos autorais grátis. Proteja sua propriedade intelectual conforme DMCA. Sem cadastro, baixe em PDF, DOC ou TXT." />
        <link rel="canonical" href="https://politicadeprivacidade.org/gerador-politica-propriedade-intelectual" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      </Helmet>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex gap-8">
          <div className="flex-1">
            <PolicyGenerator policyType={policyType} onGenerate={handleGenerate} />
            
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Tem dúvidas sobre Direitos Autorais?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Saiba como proteger sua propriedade intelectual e conteúdo
              </p>
              <Link to="/politica-direitos-autorais">
                <Button variant="outline" className="w-full">
                  O que é Política de Direitos Autorais?
                </Button>
              </Link>
            </div>
            
            <RelatedArticles policyType="copyright-policy" />
          </div>
          <BlogSidebar />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CopyrightPolicyGenerator;