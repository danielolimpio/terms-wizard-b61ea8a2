import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPolicyById } from "@/lib/policies";
import { generateCopyrightPolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";

const CopyrightPolicyInfoPage = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const [showGenerator, setShowGenerator] = useState(false);

  const handlePolicyGenerated = (formData: PolicyFormData) => {
    const policyType = getPolicyById('copyright-policy');
    if (!policyType) return;

    const content = generateCopyrightPolicy(formData);
    
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

  const policyType = getPolicyById('copyright-policy');
  
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
              <span className="text-4xl">©️</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Gerador Política de Propriedade Intelectual
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Proteja seus direitos autorais e gerencie propriedade intelectual de forma eficaz
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">O que é uma Política de Propriedade Intelectual?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Uma Política de Propriedade Intelectual é um documento legal abrangente que define como uma organização protege, gerencia e faz valer seus direitos sobre criações intelectuais, incluindo direitos autorais, marcas, patentes, segredos comerciais, e outros ativos intangíveis de valor econômico.
                </p>
                
                <p>
                  Esta política estabelece procedimentos claros para registro e proteção de IP, uso autorizado de propriedade intelectual de terceiros, resposta a violações, e gestão de disputas. É fundamental para empresas que criam conteúdo original, desenvolvem tecnologia, ou operam plataformas onde usuários podem compartilhar material protegido por direitos autorais.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Tipos de Propriedade Intelectual</h3>
                
                <p>
                  Direitos autorais protegem obras originais como textos, imagens, vídeos, música, software, e arquitetura. Proteção é automática na criação, mas registro oferece benefícios legais adicionais. Marcas protegem nomes, logos, slogans, e outros identificadores comerciais que distinguem produtos ou serviços no mercado.
                </p>

                <p>
                  Patentes protegem invenções técnicas, processos, e designs industriais por período limitado em troca de divulgação pública. Segredos comerciais incluem fórmulas, processos, listas de clientes, e outras informações confidenciais que proporcionam vantagem competitiva quando mantidas em sigilo.
                </p>

                <p>
                  No ambiente digital, outros tipos incluem nomes de domínio, bases de dados, algoritmos proprietários, designs de interface, e até método de negócios únicos. Cada tipo requer estratégias específicas de proteção e enforcement, tornando política abrangente essencial para cobertura adequada.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">DMCA e Procedimentos de Takedown</h3>
                
                <p>
                  O Digital Millennium Copyright Act (DMCA) dos EUA, e legislações similares globalmente, estabelecem procedimentos para remoção de conteúdo que viola direitos autorais. Plataformas digitais devem implementar processo de "notice and takedown" para manter proteção contra responsabilização por conteúdo de usuários.
                </p>

                <p>
                  Processo DMCA típico inclui: recebimento de notificação de violação com informações específicas, remoção ou desabilitação de acesso ao conteúdo, notificação ao usuário que postou o conteúdo, possibilidade de counter-notice pelo usuário, e restauração do conteúdo se counter-notice não for contestada em 10-14 dias.
                </p>

                <p>
                  Implementação adequada requer designação de agente DMCA registrado no Copyright Office dos EUA, publicação de informações de contato, processos internos para handling rápido de notices, e sistemas para tracking de violações repetidas que podem resultar em terminação de contas de usuários.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Setores de Alta Exposição</h3>
                
                <p>
                  Plataformas de mídia social, sites de compartilhamento de conteúdo, e marketplaces online enfrentam volume massive de potenciais violações de IP. YouTube, Facebook, eBay, e similares processam milhões de notices DMCA anualmente. Implementação robusta de políticas e sistemas automatizados é crítica para operação sustentável.
                </p>

                <p>
                  Empresas de software e tecnologia devem proteger código-fonte, algoritmos proprietários, e designs de interface. Startups frequentemente subestimam valor de IP, perdendo oportunidades de proteção early-stage que podem ser cruciais para funding e exit strategies futuras.
                </p>

                <p>
                  Agências de marketing digital, produtoras de conteúdo, e empresas de mídia lidam constantemente com licensing de imagens, música, vídeos, e outros materiais. Uso inadequado pode resultar em lawsuits custosos e damages significativos. Políticas claras sobre sourcing e usage rights são essenciais.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Gestão de Portfólio de IP</h3>
                
                <p>
                  Empresas devem manter inventário abrangente de ativos de IP, incluindo registros de direitos autorais, aplicações de marcas e patentes, licenças de terceiros, e materiais confidenciais. Este inventário deve ser regularmente auditado e atualizado conforme criação de novos ativos ou mudanças no negócio.
                </p>

                <p>
                  Estratégia de filing deve balancear custos de registro com valor potencial e riscos de enforcement. Nem todo IP precisa ser registrado, mas decisões devem ser documentadas e baseadas em análise de business case. Timing de aplicações pode ser crítico, especialmente para patentes em jurisdições first-to-file.
                </p>

                <p>
                  Licensing e monetização de IP podem gerar revenue streams significativos. Políticas devem abordar quando e como licenciar IP para terceiros, structures de royalty, monitoring de compliance de licensees, e enforcement de terms contratuais. Joint ventures e partnerships frequentemente envolvem complex IP arrangements.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Enforcement e Litigation</h3>
                
                <p>
                  Monitoring proativo de violações é essential para proteção eficaz. Isso inclui searches regulares por uso não autorizado online, monitoring de competitive activities, e tracking de applications de marcas similares por terceiros. Ferramentas automatizadas podem ajudar, mas oversight humano remain critical.
                </p>

                <p>
                  Quando violações são detected, resposta deve ser swift mas measured. Cease and desist letters são frequentemente first step, mas devem ser carefully drafted para avoid unnecessary escalation. Alternative dispute resolution pode ser cost-effective option antes de litigation formal.
                </p>

                <p>
                  Litigation de IP pode ser extremely expensive e time-consuming. Policy deve estabelecer criteria para quando pursue legal action, budget considerations, e process para selecting e managing outside counsel especializado em IP law.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Impacto no SEO e Marketing</h3>
                
                <p>
                  Google penaliza sites que repeatedly violam direitos autorais através de DMCA strikes. Multiple violations podem resultar em removal de URLs específicas ou entire domains dos resultados de busca. Políticas adequadas de IP protegem contra esses risks enquanto permitem uso legítimo de materiais.
                </p>

                <p>
                  Original content é valued by search engines e contribui para authority e rankings. Protecting original content através de registration e enforcement pode preserve competitive advantages em SEO. Conversely, using properly licensed images e content evita penalties.
                </p>

                <p>
                  Brand protection através de trademark registration e enforcement protege against cybersquatting, competitor confusion, e dilution de brand value online. Consistent enforcement maintains trademark strength e legal protections.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Compliance e Training</h3>
                
                <p>
                  Employees devem be trained sobre IP policies, especialmente those involved em content creation, marketing, e product development. Training deve cover basics de copyright law, proper attribution, fair use limitations, e procedures para obtaining permissions para third-party materials.
                </p>

                <p>
                  Contractors e freelancers devem understand IP ownership através de clear contractual provisions. Work-for-hire agreements, assignment clauses, e confidentiality provisions protegem company IP rights while clarifying expectations para external collaborators.
                </p>

                <p>
                  Regular policy reviews ensure continued effectiveness as business evolves e legal landscape changes. IP law é dynamic field com frequent court decisions e legislative updates que podem impact compliance requirements e strategic considerations.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gerar Sua Política</CardTitle>
                  <CardDescription>
                    Crie uma política de propriedade intelectual personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => setShowGenerator(true)}
                  >
                    Gerar Política de Propriedade Intelectual
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Proteções</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Direitos autorais</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Marcas registradas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Patentes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Segredos comerciais</span>
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
                    {['direitos autorais', 'propriedade intelectual', 'copyright', 'DMCA'].map((tag) => (
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

export default CopyrightPolicyInfoPage;