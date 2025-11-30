import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogSidebar } from "@/components/BlogSidebar";
import { getPolicyById } from "@/lib/policies";
import { generatePrivacyPolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";

const GeradorPoliticaPrivacidadePage = () => {
  const [searchParams] = useSearchParams();
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const [initialFormData, setInitialFormData] = useState<Partial<PolicyFormData> | null>(null);

  useEffect(() => {
    // Pre-fill form with URL params if available
    const siteName = searchParams.get('siteName');
    const siteUrl = searchParams.get('siteUrl');
    const companyName = searchParams.get('companyName');
    const contactEmail = searchParams.get('contactEmail');
    const language = searchParams.get('language');
    const country = searchParams.get('country');
    const hasAdsense = searchParams.get('hasAdsense') === 'true';

    if (siteName || siteUrl) {
      setInitialFormData({
        siteName: siteName || "",
        siteUrl: siteUrl || "",
        companyName: companyName || "",
        contactEmail: contactEmail || "",
        language: language || "pt-BR",
        country: country || "Brasil",
        hasAdsense,
      });
    }
  }, [searchParams]);

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
  };

  const policyType = getPolicyById('privacy-policy');

  if (!policyType) return null;

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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gerador de Política de Privacidade | Crie Grátis Agora</title>
        <meta 
          name="description" 
          content="Ferramenta profissional para gerar política de privacidade grátis. Preencha o formulário e baixe em PDF, DOC ou TXT. Conforme LGPD e GDPR." 
        />
        <link rel="canonical" href="https://politicadeprivacidade.org/gerador-politica-privacidade" />
      </Helmet>
      
      <StructuredData type="organization" />
      <StructuredData 
        type="breadcrumb" 
        items={[
          { name: "Geradores", url: "/politicas" },
          { name: "Política de Privacidade", url: "/gerador-politica-privacidade" }
        ]} 
      />
      <StructuredData 
        type="product" 
        name="Gerador de Política de Privacidade" 
        description="Ferramenta gratuita para gerar política de privacidade conforme LGPD e GDPR. Baixe em PDF, DOC ou TXT."
        offers={{
          price: "0",
          priceCurrency: "BRL"
        }}
      />
      
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumbs items={[
          { name: "Geradores", url: "/politicas" },
          { name: "Política de Privacidade", url: "/gerador-politica-privacidade" }
        ]} />
        
        <div className="mb-6">
          <Button variant="outline" onClick={() => window.history.back()}>
            ← Voltar
          </Button>
        </div>
        
        <div className="flex gap-8">
          <div className="flex-1">
            <PolicyGenerator
              policyType={policyType}
              onGenerate={handlePolicyGenerated}
              initialFormData={initialFormData || undefined}
            />
            <RelatedArticles policyType="privacy-policy" />
          </div>
          <BlogSidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GeradorPoliticaPrivacidadePage;