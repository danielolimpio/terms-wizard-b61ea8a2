// Cookie Policy Generator Page
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
import { generateCookiePolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogSidebar } from "@/components/BlogSidebar";

const CookiePolicyGenerator = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const policyType = getPolicyById('cookie-policy');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!policyType) {
    return <div>Política não encontrada</div>;
  }

  const handleGenerate = (formData: PolicyFormData) => {
    const content = generateCookiePolicy(formData);
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
        <title>Gerador de Política de Cookies Grátis | LGPD e GDPR - Crie Agora</title>
        <meta name="description" content="✅ Gere política de cookies grátis em 2 minutos. Conforme LGPD e GDPR. Sem cadastro, baixe em PDF, DOC ou TXT. Ideal para sites com Google Analytics e AdSense." />
        <link rel="canonical" href="https://politicadeprivacidade.org/gerador-politica-cookies" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      </Helmet>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex gap-8">
          <div className="flex-1">
            <PolicyGenerator policyType={policyType} onGenerate={handleGenerate} />
            
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Tem dúvidas sobre Política de Cookies?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Saiba tudo sobre a página de Política de Cookies e sua importância
              </p>
              <Link to="/politica-cookies-info">
                <Button variant="outline" className="w-full">
                  O que é Política de Cookies?
                </Button>
              </Link>
            </div>
            
            <RelatedArticles policyType="cookie-policy" />
          </div>
          <BlogSidebar />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CookiePolicyGenerator;
