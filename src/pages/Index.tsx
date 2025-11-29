import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyCard } from "@/components/PolicyCard";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { LiveStats } from "@/components/LiveStats";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturedBlog } from "@/components/FeaturedBlog";
import { TrustBadges } from "@/components/TrustBadges";
import { FAQ } from "@/components/FAQ";
import { HomePrivacyPolicyGenerator } from "@/components/HomePrivacyPolicyGenerator";
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
      <Helmet>
        <title>Gerador de Política de Privacidade Grátis | Crie em 2 Minutos</title>
        <meta 
          name="description" 
          content="Gere política de privacidade grátis, conforme LGPD e GDPR. Crie termos de uso, cookies e mais em 2 minutos. Sem cadastro, 100% gratuito. Perfeito para blogs e e-commerce." 
        />
        <meta name="keywords" content="política de privacidade grátis, gerador política privacidade, como gerar política privacidade, LGPD, GDPR, termos de uso" />
        <link rel="canonical" href="https://politicadeprivacidade.org/" />
        <meta property="og:title" content="Gerador de Política de Privacidade Grátis | Crie em 2 Minutos" />
        <meta property="og:description" content="Gere política de privacidade grátis, conforme LGPD e GDPR. Sem cadastro, 100% gratuito." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://politicadeprivacidade.org/" />
      </Helmet>
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
              Gerador de Política de Privacidade Grátis | <span className="text-cyan-400">Crie em 2 Minutos</span>
            </h1>
            <h2 className="text-lg md:text-2xl text-gray-100 max-w-4xl mx-auto mb-6 md:mb-8 px-4 drop-shadow-md font-medium">
              Crie sua Política de Privacidade e Termos de Uso gratuitamente, em segundos, sem cadastro. 
              Perfeito para blogs, lojas Shopify e WordPress.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 shadow-lg">
              <span className="text-base md:text-lg font-bold text-gray-900">✅ 100% GRÁTIS</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 shadow-lg">
              <span className="text-base md:text-lg font-bold text-gray-900">⏱️ PRONTO EM 2 MINUTOS</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 shadow-lg">
              <span className="text-base md:text-lg font-bold text-gray-900">🚫 SEM CADASTRO</span>
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

      {/* Home Privacy Policy Generator */}
      <HomePrivacyPolicyGenerator />

      {/* Live Stats Section */}
      <LiveStats />
      
      {/* Social Proof Message */}
      <div className="py-4 text-center bg-gradient-to-r from-primary/5 via-cyan-500/5 to-primary/5">
        <p className="text-sm md:text-base text-muted-foreground font-medium">
          <span className="text-primary font-bold">+2.800 pessoas</span> criaram suas políticas esta semana. Junte-se a elas!
        </p>
      </div>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Main Content - Policy Selection */}
      <main className="container mx-auto px-4 py-12 md:py-16 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Section Header - Enhanced */}
        <div className="text-center mb-10 md:mb-12 relative">
          {/* Main Feature Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-cyan-500 text-white rounded-full px-5 md:px-6 py-2 mb-6 shadow-lg animate-pulse">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider">✨ Ferramenta Principal</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
            Escolha o Tipo de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-primary bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              Política Legal que Você Precisa
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Selecione o documento legal que você precisa gerar para seu site. 
            <span className="block mt-2 font-semibold text-foreground">
              Gratuito, rápido e 100% profissional.
            </span>
          </p>
          
          {/* Search Bar - Enhanced */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-card border-2 border-border rounded-xl shadow-lg hover:border-primary/50 transition-all">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar políticas... (ex: privacidade, cookies, termos)"
                  className="w-full pl-12 pr-4 py-4 bg-transparent border-0 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">12 tipos de políticas</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">Geração instantânea</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">100% gratuito</span>
            </div>
          </div>
        </div>

        {/* Policy Cards Grid */}
        <div className="policy-grid">
          {filteredPolicies.map((policy) => (
            <PolicyCard
              key={policy.id}
              policy={policy}
              onGenerate={handleGeneratePolicy}
            />
          ))}
        </div>

        {filteredPolicies.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-4">
              <Search className="h-10 w-10 text-muted-foreground" />
            </div>
            <p className="text-xl text-muted-foreground mb-2">
              Nenhuma política encontrada
            </p>
            <p className="text-sm text-muted-foreground">
              Tente buscar por "{searchTerm}" com outros termos
            </p>
          </div>
        )}
      </main>

      {/* Features Section */}
      <section className="bg-gradient-secondary py-8 md:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-12">
            Por que escolher nosso gerador de políticas legais?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 md:h-8 w-6 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Gratuito Sem Limites</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Gere quantas políticas precisar sem custo algum. Sem limites ou restrições.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 md:h-8 w-6 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Rápido: Pronto em 2 Minutos</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Gere documentos profissionais em menos de 2 minutos. Interface intuitiva e fácil de usar.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 md:h-8 w-6 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Múltiplos Formatos e Idiomas</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Baixe em TXT, DOC ou PDF. Copie o texto com um clique. Disponível em Português e Inglês.
              </p>
            </div>
          </div>
          
          {/* Social Proof Section */}
          <div className="text-center border-t border-border pt-12">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Sites que confiam em nós
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Milhares de sites já usam nossas políticas para estar em conformidade com a LGPD e GDPR. 
              Usado por milhares de negócios brasileiros.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <span className="font-semibold text-foreground">E-commerce</span>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <span className="font-semibold text-foreground">Blogs</span>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <span className="font-semibold text-foreground">SaaS</span>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <span className="font-semibold text-foreground">Startups</span>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <span className="font-semibold text-foreground">WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Featured Blog Section */}
      <FeaturedBlog />

      {/* Trust Badges Section */}
      <TrustBadges />
      
      <Footer />
    </div>
  );
};

export default Index;