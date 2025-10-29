import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPolicyById } from "@/lib/policies";
import { generateTransparencyPolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";

const TransparencyPolicyInfoPage = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const [showGenerator, setShowGenerator] = useState(false);

  const handlePolicyGenerated = (formData: PolicyFormData) => {
    const policyType = getPolicyById('transparency-policy');
    if (!policyType) return;

    const content = generateTransparencyPolicy(formData);
    
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

  const policyType = getPolicyById('transparency-policy');
  
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
              <span className="text-4xl">🔍</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Gerador Política de Transparência
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Demonstre compromisso com práticas éticas e transparentes em seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">O que é uma Política de Transparência?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Uma Política de Transparência é um documento que demonstra o compromisso de uma organização com práticas éticas, abertas e responsáveis em suas operações.
                </p>
                
                <p>
                  Diferente de outras políticas que são principalmente reativas ou regulatórias, a política de transparência é proativa, demonstrando valores corporativos e construindo confiança através da abertura. É uma ferramenta poderosa para diferenciação competitiva, especialmente em setores onde a confiança é fundamental.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Fundamentos da Transparência Corporativa</h3>
                
                <p>
                  A transparência corporativa baseia-se em três pilares principais: accountability (responsabilização), onde a empresa assume responsabilidade por suas ações e decisões; disclosure (divulgação), compartilhando informações relevantes de forma proativa; e engagement (engajamento), mantendo diálogo aberto com stakeholders.
                </p>

                <p>
                  No contexto digital atual, a transparência se estende a práticas de coleta e uso de dados, algoritmos de tomada de decisão, cadeia de suprimentos, impacto ambiental e social, e processos de governança corporativa. Empresas transparentes frequentemente publicam relatórios regulares sobre essas áreas.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Setores que Mais Necessitam</h3>
                
                <p>
                  Empresas de tecnologia, especialmente aquelas que lidam com dados pessoais ou algoritmos de IA, precisam demonstrar transparência sobre como seus sistemas funcionam. Fintech e empresas financeiras devem ser transparentes sobre taxas, processos de aprovação e uso de dados financeiros.
                </p>

                <p>
                  Plataformas de mídia social e conteúdo digital necessitam políticas claras sobre moderação de conteúdo, algoritmos de recomendação e monetização. Empresas de e-commerce devem ser transparentes sobre práticas de preços, avaliações de produtos e parcerias com fornecedores.
                </p>

                <p>
                  Organizações não-governamentais, fundações e empresas com foco em sustentabilidade têm expectativas ainda maiores de transparência sobre uso de recursos, impacto das ações e processos de tomada de decisão. Startups em captação de recursos também se beneficiam da transparência com investidores.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Elementos de uma Política Eficaz</h3>
                
                <p>
                  Uma política de transparência abrangente deve incluir informações sobre estrutura de governança, processos de tomada de decisão, critérios para parcerias e fornecedores, práticas de remuneração e benefícios, política de conflitos de interesse, e compromissos com sustentabilidade e responsabilidade social.
                </p>

                <p>
                  Para empresas digitais, é crucial abordar transparência de dados: que informações são coletadas, como são usadas, com quem são compartilhadas, e como os usuários podem controlá-las. Algoritmos e sistemas automatizados devem ter explicações sobre seu funcionamento e critérios de decisão quando possível.
                </p>

                <p>
                  A política deve estabelecer canais de comunicação claros para questões e feedback, cronograma para relatórios de transparência regulares, e compromissos específicos com melhoria contínua. Métricas e indicadores de transparência devem ser definidos e reportados periodicamente.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Benefícios Estratégicos</h3>
                
                <p>
                  Empresas transparentes constroem maior confiança com clientes, resultando em maior fidelização e recomendação. Investidores valorizam transparência como indicador de boa governança e menor risco. Talentos de qualidade são atraídos por organizações com valores claros e práticas éticas.
                </p>

                <p>
                  A transparência pode reduzir custos regulatórios e legais ao demonstrar conformidade proativa. Em crises, empresas transparentes recuperam confiança mais rapidamente. A transparência também facilita parcerias estratégicas e pode abrir portas para novos mercados e oportunidades.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Impacto no SEO e Marketing Digital</h3>
                
                <p>
                  O Google e outros mecanismos de busca valorizam sites que demonstram expertise, autoridade e confiabilidade (E-A-T). Uma política de transparência bem estruturada contribui significativamente para esses fatores, especialmente em nichos YMYL (Your Money or Your Life) como saúde, finanças e conselhos.
                </p>

                <p>
                  Conteúdo transparente sobre práticas empresariais gera links naturais de qualidade, melhora tempo de permanência no site, e reduz taxa de rejeição. Reviews e menções positivas sobre transparência em outras plataformas também contribuem para autoridade online.
                </p>

                <p>
                  Para empresas B2B, transparência pode melhorar SEO local e especializado, já que demonstra credibilidade para parceiros e clientes empresariais. Rich snippets sobre certificações, prêmios de transparência e reconhecimentos podem aparecer nos resultados de busca.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Implementação e Melhores Práticas</h3>
                
                <p>
                  Comece com uma auditoria de transparência atual, identificando áreas onde mais abertura seria benéfica. Priorize informações que stakeholders mais valorizam. Use linguagem clara e evite jargão corporativo excessivo. Seja específico com dados e exemplos concretos sempre que possível.
                </p>

                <p>
                  Estabeleça processo regular de atualização da política, idealmente alinhado com relatórios anuais ou trimestrais. Treine equipes sobre a política para garantir consistência na comunicação. Monitore feedback e ajuste práticas conforme necessário.
                </p>

                <p>
                  Considere certificações de transparência relevantes para seu setor. Participe de iniciativas setoriais de transparência. Use tecnologias como blockchain para transparência de cadeia de suprimentos quando aplicável. Sempre balance transparência com necessidades legítimas de privacidade e segurança competitiva.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gerar Sua Política</CardTitle>
                  <CardDescription>
                    Crie uma política de transparência personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => setShowGenerator(true)}
                  >
                    Gerar Política de Transparência
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Benefícios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Constrói confiança</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Diferenciação competitiva</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Atrai investidores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Melhora reputação</span>
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
                    {['transparência', 'ética', 'governança', 'responsabilidade'].map((tag) => (
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

export default TransparencyPolicyInfoPage;
