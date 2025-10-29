import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPolicyById } from "@/lib/policies";
import { generateContentPolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";

const ContentPolicyInfoPage = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const [showGenerator, setShowGenerator] = useState(false);

  const handlePolicyGenerated = (formData: PolicyFormData) => {
    const policyType = getPolicyById('content-policy');
    if (!policyType) return;

    const content = generateContentPolicy(formData);
    
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

  const policyType = getPolicyById('content-policy');
  
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
              <span className="text-4xl">📝</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Gerador Política de Conteúdo
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Estabeleça diretrizes claras para conteúdo aceitável em sua plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">O que é uma Política de Conteúdo?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Uma Política de Conteúdo é um documento abrangente que estabelece diretrizes claras sobre que tipos de conteúdo são permitidos, desencorajados ou expressamente proibidos em uma plataforma digital, comunidade online, ou qualquer espaço onde usuários podem criar, compartilhar ou interagir com conteúdo.
                </p>
                
                <p>
                  Esta política vai muito além de simples regras de comportamento, estabelecendo framework legal e ético para moderação de conteúdo, proteção de usuários, compliance com regulamentações, e manutenção de ambiente saudável e construtivo. É fundamental para plataformas que dependem de user-generated content para funcionamento e crescimento.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Categorias de Conteúdo Regulamentado</h3>
                
                <p>
                  Conteúdo ilegal inclui material que viola leis locais, nacionais ou internacionais: conteúdo protegido por direitos autorais usado sem permissão, material que incita violência ou ódio contra grupos específicos, pornografia infantil, informações que facilitam atividades criminosas, e violações de privacidade através de doxxing ou sharing não autorizado de informações pessoais.
                </p>

                <p>
                  Conteúdo prejudicial mas não necessariamente ilegal requer consideração cuidadosa: desinformação sobre saúde pública, fake news que pode influenciar processos democráticos, bullying e harassment que não atinge threshold criminal, spam comercial excessivo, e conteúdo sexually explícito que pode ser legal mas inappropriate para certain audiences.
                </p>

                <p>
                  Conteúdo contextualmente inappropriate varia significantly baseado na natureza da plataforma: linguagem profana pode ser acceptable em gaming forums mas não em educational platforms, political content pode ser welcome em news sites mas problematic em lifestyle blogs, e comercial content pode ser appropriate com disclosure mas misleading sem proper labeling.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Desafios da Moderação de Conteúdo</h3>
                
                <p>
                  Scale é major challenge para large platforms - Facebook remove bilhões de posts annually, YouTube processes 500 hours de video uploaded every minute. Automated systems usando AI e machine learning são essential mas imperfect, requiring human oversight para nuanced decisions, cultural context, e edge cases que algorithms cannot handle effectively.
                </p>

                <p>
                  Cultural sensitivity adiciona complexity layer - conteúdo acceptable em one culture pode be offensive em another. Global platforms devem balance universal standards com local sensitivities, often requiring different policies para different regions while maintaining consistent brand values e user experience.
                </p>

                <p>
                  False positives (legitimate content incorrectly removed) e false negatives (harmful content não detected) são inevitable em scale. Robust appeals processes, transparent reporting de accuracy metrics, e continuous improvement de moderation algorithms são critical para maintaining user trust e platform integrity.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Tipos de Plataformas e Necessidades</h3>
                
                <p>
                  Social media platforms como Facebook, Twitter, Instagram enfrentam full spectrum de content challenges, requiring comprehensive policies covering hate speech, misinformation, graphic violence, harassment, e commercial content. Community guidelines devem be detailed yet understandable para billions de users globally.
                </p>

                <p>
                  E-commerce marketplaces como Amazon, eBay, Etsy devem address product authenticity, misleading descriptions, prohibited items (weapons, drugs, counterfeit goods), e seller behavior. Product reviews e seller communications também require moderation para prevent manipulation e ensure authenticity.
                </p>

                <p>
                  Educational platforms, forums, e professional networks require policies focused em maintaining constructive discourse, preventing spam, ensuring content accuracy, e protecting minors. Gaming platforms deve address toxic behavior, cheating, inappropriate usernames, e in-game harassment across diverse global audiences.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Legal Compliance e Regulamentação</h3>
                
                <p>
                  GDPR em Europe impacts content policies through "right to be forgotten" requests, requiring platforms para remove certain personal information upon request. COPPA nos EUA requires special protections para children under 13, affecting como platforms handle content targeting ou involving minors.
                </p>

                <p>
                  Section 230 nos EUA provides liability protection para platforms que moderate content em good faith, mas this protection é subject para ongoing legal e political debate. Similar laws em other countries vary significantly, requiring platforms para adapt policies para comply com local requirements while maintaining operational efficiency.
                </p>

                <p>
                  Emerging regulations like DSA (Digital Services Act) em Europe impose new obligations para large platforms regarding content moderation transparency, user appeals, e external auditing. Compliance requires significant investment em legal expertise, compliance systems, e reporting infrastructure.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Implementation e Enforcement</h3>
                
                <p>
                  Effective content policies require clear definitions, specific examples, e consistent enforcement. Vague terms like "inappropriate content" should be replaced com specific descriptions e examples. Policies should be regularly updated para address emerging threats, new content types, e evolving community norms.
                </p>

                <p>
                  Multi-tier enforcement systems podem include warnings, temporary restrictions, content removal, account suspension, e permanent bans. Progressive discipline encourages behavior modification while preserving user engagement. Appeals processes must be accessible, fair, e reasonably quick para maintain user trust.
                </p>

                <p>
                  Training para moderation teams é critical para consistent policy application. Moderators need regular updates about policy changes, cultural sensitivity training, e psychological support para deal com disturbing content. Quality assurance processes should monitor moderation decisions para ensure consistency e accuracy.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Impact no Business e SEO</h3>
                
                <p>
                  Search engines favor platforms com high-quality, original content e active moderation. Sites com significant spam ou low-quality content may be penalized em search rankings. Consistent enforcement de content standards contributes para better user experience, longer session times, e higher engagement metrics que positively impact SEO.
                </p>

                <p>
                  Brand safety é major concern para advertisers. Platforms com clear content policies e effective enforcement attract premium advertising partners willing para pay higher rates. Content adjacency issues (ads appearing next para inappropriate content) podem damage advertiser relationships e reduce revenue significantly.
                </p>

                <p>
                  User-generated content policies affect viral marketing opportunities e organic growth. Overly restrictive policies may stifle creativity e sharing, while insufficient moderation podem lead para toxic environments que drive away users e damage platform reputation long-term.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Transparency e Community Relations</h3>
                
                <p>
                  Transparency reports detailing content moderation statistics, policy enforcement data, e appeals outcomes build user trust e demonstrate commitment para fairness. Regular community updates about policy changes, reasoning behind decisions, e responses para user feedback maintain open dialogue com stakeholders.
                </p>

                <p>
                  Advisory boards including external experts, community representatives, e civil society organizations podem provide independent oversight e guidance em policy development. This external input helps platforms balance free expression com safety concerns while maintaining legitimacy em eyes de diverse stakeholders.
                </p>

                <p>
                  Clear communication about policy rationale, enforcement procedures, e appeals processes reduces user frustration e maintains community buy-in. Regular surveys, feedback sessions, e public consultations demonstrate platform commitment para responsive governance e continuous improvement de content standards.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gerar Sua Política</CardTitle>
                  <CardDescription>
                    Crie uma política de conteúdo personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => setShowGenerator(true)}
                  >
                    Gerar Política de Conteúdo
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Características</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Diretrizes claras</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Moderação eficaz</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Proteção de usuários</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Compliance legal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tags Relacionadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['conteúdo', 'diretrizes', 'moderação', 'comunidade'].map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContentPolicyInfoPage;