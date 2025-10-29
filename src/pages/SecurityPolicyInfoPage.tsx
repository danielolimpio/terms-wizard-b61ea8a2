import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SecurityPolicyInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">🛡️</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Gerador de Política de Segurança
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Proteja dados e sistemas com uma política de segurança abrangente e eficaz
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">O que é uma Política de Segurança?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Uma Política de Segurança é um documento abrangente que define as medidas técnicas, organizacionais e procedimentais implementadas por uma organização para proteger seus ativos digitais, dados sensíveis e sistemas de informação contra ameaças internas e externas.
                </p>
                
                <p>
                  Este documento vai além de simples diretrizes técnicas, estabelecendo uma cultura de segurança que permeia toda a organização. Inclui responsabilidades específicas, procedimentos de resposta a incidentes, políticas de acesso, e protocolos de manutenção de segurança que garantem proteção contínua e eficaz.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Componentes Fundamentais</h3>
                
                <p>
                  Uma política de segurança robusta abrange múltiplas camadas de proteção: segurança física (controle de acesso a instalações, proteção de equipamentos), segurança de rede (firewalls, detecção de intrusão, criptografia), segurança de dados (backup, controle de acesso, classificação de informações), e segurança de aplicações (desenvolvimento seguro, testes de penetração).
                </p>

                <p>
                  A gestão de identidade e acesso (IAM) é crucial, definindo quem tem acesso a quais recursos, quando e sob que condições. Isso inclui autenticação multifator, princípio do menor privilégio, revisões regulares de permissões, e procedimentos para criação, modificação e revogação de acessos.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Setores de Alta Criticidade</h3>
                
                <p>
                  Instituições financeiras e fintech enfrentam regulamentações rigorosas como PCI DSS, precisando de políticas que abordem proteção de dados de cartões, prevenção de fraudes, e conformidade bancária. Empresas de saúde devem cumprir HIPAA e similares, protegendo informações médicas sensíveis com controles específicos.
                </p>

                <p>
                  E-commerces lidam com dados de pagamento e informações pessoais de milhões de usuários, exigindo políticas que cubram segurança de transações, proteção contra vazamentos, e conformidade com regulamentações de proteção de dados como LGPD e GDPR.
                </p>

                <p>
                  Empresas SaaS e de tecnologia devem proteger propriedade intelectual, códigos-fonte, e dados de clientes, implementando políticas que abranjam desenvolvimento seguro, gestão de vulnerabilidades, e proteção de infraestrutura em nuvem. Governo e órgãos públicos têm requisitos específicos para proteção de informações classificadas.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Gestão de Riscos e Conformidade</h3>
                
                <p>
                  A política deve estabelecer processo formal de avaliação de riscos, identificando ameaças potenciais, vulnerabilidades existentes, e impacto de possíveis incidentes. Isso inclui análise de riscos técnicos (malware, ataques cibernéticos), operacionais (erro humano, falhas de processo), e estratégicos (mudanças regulatórias, evolução de ameaças).
                </p>

                <p>
                  Conformidade regulatória é aspecto crítico, especialmente com LGPD, ISO 27001, SOX, HIPAA, PCI DSS, e outras regulamentações setoriais. A política deve mapear controles específicos exigidos, estabelecer procedimentos de auditoria, e definir responsabilidades para manutenção de conformidade contínua.
                </p>

                <p>
                  Métricas de segurança devem ser definidas e monitoradas continuamente: tempo de detecção de incidentes, tempo de resposta, número de vulnerabilidades encontradas e corrigidas, taxa de conscientização de funcionários em treinamentos de segurança, e eficácia de controles implementados.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Resposta a Incidentes</h3>
                
                <p>
                  Um plano robusto de resposta a incidentes é essencial, definindo classificação de severidade, procedimentos de escalação, equipes de resposta, canais de comunicação, e cronogramas de ação. Deve abordar desde pequenos incidentes até crises de segurança major que podem impactar operações críticas.
                </p>

                <p>
                  O plano deve incluir procedimentos de contenção (isolamento de sistemas comprometidos), erradicação (remoção de ameaças), recuperação (restauração de serviços), e lições aprendidas (análise pós-incidente para melhorar processos). Comunicação com stakeholders, autoridades regulatórias, e clientes deve ser planejada previamente.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Impacto no Negócio e Confiança</h3>
                
                <p>
                  Uma política de segurança bem implementada protege não apenas ativos digitais, mas também reputação da marca, confiança do cliente, e valor de mercado. Empresas com histórico de segurança sólida conseguem premium de preços, parcerias estratégicas mais facilmente, e menor custo de cyber insurance.
                </p>

                <p>
                  Para empresas B2B, demonstrar maturidade em segurança é frequentemente requisito para participar de licitações e parcerias corporativas. Certificações como ISO 27001, SOC 2, e outras validações de terceiros são frequentemente exigidas por clientes empresariais grandes.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">SEO e Marketing Digital</h3>
                
                <p>
                  Google considera segurança fator de ranking direto - sites HTTPS têm preferência, e sites com histórico de malware são penalizados severamente. Uma política de segurança transparente pode melhorar percepção de confiabilidade, especialmente para e-commerce e serviços financeiros.
                </p>

                <p>
                  Certificações de segurança podem ser destacadas em rich snippets e podem aparecer em resultados de busca. Reviews e menções sobre práticas de segurança em sites de terceiros contribuem para autoridade e confiabilidade online.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Implementação e Manutenção</h3>
                
                <p>
                  Implementação eficaz requer comprometimento da alta administração, recursos adequados, e abordagem faseada. Comece com avaliação de segurança atual, identifique gaps críticos, e priorize controles de maior impacto. Treinamento regular de funcionários é fundamental para sucesso.
                </p>

                <p>
                  A política deve ser documento vivo, revisado e atualizado regularmente conforme evolução de ameaças, mudanças tecnológicas, e requisitos regulatórios. Testes regulares de penetração, auditorias de segurança, e exercícios de resposta a incidentes mantêm eficácia dos controles.
                </p>

                <p>
                  Considere frameworks estabelecidos como NIST Cybersecurity Framework, ISO 27001, ou CIS Controls como base para desenvolvimento. Adapte controles às necessidades específicas do negócio, evitando implementações genéricas que podem não abordar riscos únicos da organização.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gerar Sua Política</CardTitle>
                  <CardDescription>
                    Crie uma política de segurança personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => window.location.href = '/?policy=security-policy'}
                  >
                    Gerar Política de Segurança
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
                      <span>Proteção de dados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Conformidade regulatória</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Redução de riscos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Confiança do cliente</span>
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
                    {['segurança', 'proteção', 'cibersegurança', 'dados'].map((tag) => (
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
}