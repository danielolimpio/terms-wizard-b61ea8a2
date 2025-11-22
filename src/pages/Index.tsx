import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyCard } from "@/components/PolicyCard";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { LiveStats } from "@/components/LiveStats";
import { Button } from "@/components/ui/button";
import { POLICY_TYPES, getPolicyById } from "@/lib/policies";
import { generatePrivacyPolicy, generateTermsOfUse, generateCookiePolicy, generateRefundPolicy, generateTransparencyPolicy, generateSecurityPolicy, generateCopyrightPolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";
import { Search, Shield, Zap, Globe } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPolicyId, setSelectedPolicyId] = useState<string | null>(null);
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const policyParam = searchParams.get('policy');
    if (policyParam && getPolicyById(policyParam)) {
      setSelectedPolicyId(policyParam);
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  const handleGeneratePolicy = (policyId: string) => {
    setSelectedPolicyId(policyId);
    setGeneratedPolicy(null);
  };

  const handlePolicyGenerated = (formData: PolicyFormData) => {
    if (!selectedPolicyId) return;
    
    const policyType = getPolicyById(selectedPolicyId);
    if (!policyType) return;

    let content = "";
    switch (selectedPolicyId) {
      case 'privacy-policy':
        content = generatePrivacyPolicy(formData);
        break;
      case 'terms-of-use':
        content = generateTermsOfUse(formData);
        break;
      case 'cookie-policy':
        content = generateCookiePolicy(formData);
        break;
      case 'refund-policy':
        content = generateRefundPolicy(formData);
        break;
      case 'transparency-policy':
        content = generateTransparencyPolicy(formData);
        break;
      case 'security-policy':
        content = generateSecurityPolicy(formData);
        break;
      case 'copyright-policy':
        content = generateCopyrightPolicy(formData);
        break;
      default:
        content = `${policyType.name} para ${formData.siteName}\n\nEsta política está sendo gerada automaticamente...`;
    }

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
    setSelectedPolicyId(null);
    setGeneratedPolicy(null);
  };

  const filteredPolicies = POLICY_TYPES.filter(policy =>
    policy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policy.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policy.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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

  if (selectedPolicyId) {
    const policyType = getPolicyById(selectedPolicyId);
    if (!policyType) {
      setSelectedPolicyId(null);
      return null;
    }

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button variant="outline" onClick={() => setSelectedPolicyId(null)}>
              ← Voltar às Políticas
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
      <section 
        className="relative py-16 md:py-24 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Gerador de <span className="text-cyan-400">Políticas Legais</span>
            </h1>
            <p className="text-base md:text-xl text-gray-100 max-w-3xl mx-auto mb-6 md:mb-8 px-4 drop-shadow-md">
              Crie políticas de privacidade, termos de uso e outros documentos legais profissionais em minutos. 
              Gratuito, rápido e otimizado para LGPD e GDPR.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 shadow-lg">
              <Shield className="h-4 md:h-5 w-4 md:w-5 text-primary" />
              <span className="text-xs md:text-sm font-medium text-gray-900">LGPD Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 shadow-lg">
              <Zap className="h-4 md:h-5 w-4 md:w-5 text-primary" />
              <span className="text-xs md:text-sm font-medium text-gray-900">Geração Instantânea</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 shadow-lg">
              <Globe className="h-4 md:h-5 w-4 md:w-5 text-primary" />
              <span className="text-xs md:text-sm font-medium text-gray-900">Múltiplos Idiomas</span>
            </div>
          </div>

          <Button 
            variant="google" 
            size="xl" 
            className="text-sm md:text-base px-6 md:px-8 shadow-xl"
            onClick={() => window.location.href = '/gerador-politica-privacidade'}
          >
            Criar Política de Privacidade Grátis
          </Button>
        </div>
      </section>

      {/* Live Stats Section */}
      <LiveStats />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Escolha o Tipo de Política
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-center mb-6 px-4">
            Selecione o documento legal que você precisa gerar para seu site
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8 px-4">
            <div className="relative">
              <Search className="absolute left-7 md:left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar políticas..."
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="policy-grid px-4">
          {filteredPolicies.map((policy) => (
            <PolicyCard
              key={policy.id}
              policy={policy}
              onGenerate={handleGeneratePolicy}
            />
          ))}
        </div>

        {filteredPolicies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Nenhuma política encontrada para "{searchTerm}"
            </p>
          </div>
        )}
      </main>

      {/* Features Section */}
      <section className="bg-gradient-secondary py-8 md:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-12">
            Por que escolher nosso gerador?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 md:h-8 w-6 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Totalmente Gratuito</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Gere quantas políticas precisar sem custo algum. Sem limites ou restrições.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 md:h-8 w-6 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Rápido e Simples</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Gere documentos profissionais em menos de 2 minutos. Interface intuitiva e fácil de usar.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 md:h-8 w-6 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Múltiplos Formatos</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Baixe em TXT, DOC ou PDF. Copie o texto com um clique. Múltiplos idiomas disponíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
};

export default Index;