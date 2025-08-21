import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AntispamPolicyInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">🚫</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Política Antispam
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Proteja sua reputação e garanta entregabilidade com práticas antispam eficazes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">O que é uma Política Antispam?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Uma Política Antispam é um conjunto abrangente de diretrizes e procedimentos que uma organização implementa para prevenir o envio de comunicações não solicitadas, proteger sua reputação de remetente, e garantir conformidade com leis e regulamentações antispam nacionais e internacionais.
                </p>
                
                <p>
                  Esta política vai além de simples diretrizes técnicas, estabelecendo processos de consentimento explícito, gestão de listas de contatos, procedimentos de opt-out, monitoramento de reputação de envio, e resposta a reclamações. É fundamental para qualquer negócio que utiliza email marketing, newsletters, ou comunicações automatizadas.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Fundamentos Legais e Regulatórios</h3>
                
                <p>
                  No Brasil, a Lei 12.965/14 (Marco Civil da Internet) e a LGPD estabelecem regras sobre comunicações eletrônicas e consentimento. Internacionalmente, leis como CAN-SPAM Act (EUA), GDPR (Europa), e CASL (Canadá) impõem requisitos rigorosos sobre email marketing, com penalidades que podem chegar a milhões em multas.
                </p>

                <p>
                  Estas regulamentações exigem consentimento explícito, identificação clara do remetente, assunto não enganoso, endereço físico na assinatura, mecanismo de opt-out funcionando, e processamento de solicitações de descadastro em prazo específico (geralmente 10 dias úteis). Violações podem resultar em multas pesadas e danos à reputação.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Elementos Técnicos Essenciais</h3>
                
                <p>
                  A implementação técnica inclui autenticação de email (SPF, DKIM, DMARC) para verificar legitimidade do remetente, configuração adequada de servidores de envio, monitoramento de reputação de IP e domínio, e uso de ferramentas de teste de entregabilidade. Estas medidas são essenciais para evitar filtros de spam.
                </p>

                <p>
                  Gestão de listas requer processos para coleta de consentimento duplo (double opt-in), segmentação adequada, limpeza regular de emails inválidos, e manutenção de listas de supressão abrangentes. Sistemas automatizados devem processar opt-outs imediatamente e manter registros de consentimento.
                </p>

                <p>
                  Métricas de entregabilidade devem ser monitoradas continuamente: taxa de entrega, taxa de abertura, taxa de cliques, taxa de descadastro, reclamações de spam, e reputation scores de provedores principais (Gmail, Outlook, Yahoo). Quedas nestes indicadores podem sinalizar problemas com práticas de envio.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Setores de Alto Risco</h3>
                
                <p>
                  E-commerce e varejo online dependem heavily de email marketing para promoções, carrinho abandonado, e follow-up de vendas. Volumes altos e comunicações frequentes aumentam risco de reclamações se práticas adequadas não forem seguidas. Segmentação precisa e relevância de conteúdo são cruciais.
                </p>

                <p>
                  Plataformas de educação online, cursos, e coaching enviam grandes volumes de emails educacionais e promocionais. Conteúdo deve agregar valor real para evitar percepção de spam. SaaS e empresas de tecnologia frequentemente enviam emails transacionais e de onboarding que podem ser mal interpretados se não bem implementados.
                </p>

                <p>
                  Empresas de serviços financeiros enfrentam regulamentações adicionais sobre comunicações com clientes. Imobiliárias, seguros, e consultorias frequentemente usam cold email, prática de altíssimo risco que requer cuidado extremo com conformidade legal e técnica.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Gestão de Consentimento</h3>
                
                <p>
                  Consentimento deve ser específico, informado, e verificável. Double opt-in é considerado gold standard: usuário se inscreve, recebe email de confirmação, e deve clicar link para confirmar interesse. Este processo reduz drasticamente reclamações e melhora engagement, apesar de potencialmente reduzir tamanho da lista.
                </p>

                <p>
                  Registros de consentimento devem incluir timestamp, IP address, formulário utilizado, fonte do lead, e histórico de comunicações. Estes dados são essenciais para demonstrar conformidade em auditorias ou disputas legais. Sistemas devem permitir fácil acesso e exportação destes dados.
                </p>

                <p>
                  Opt-out deve ser simples e imediato - idealmente um clique sem necessidade de login. Considere opções de preferências (frequência, tipos de conteúdo) além de descadastro total. Processos de "win-back" podem ser implementados, mas devem respeitar totalmente preferências expressas pelo usuário.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Impacto no Negócio</h3>
                
                <p>
                  Práticas antispam adequadas protegem investment em email marketing, que tipicamente tem ROI de $36-42 para cada $1 investido. Reputação de remetente comprometida pode levar meses para recuperar, impactando drasticamente receita de campanhas. Multas regulatórias podem ser devastadoras para negócios menores.
                </p>

                <p>
                  Emails na caixa de spam têm taxa de abertura próxima a zero, tornando ineficaz investimento em conteúdo e design. Além disso, provedores podem bloquear completamente emails de remetentes com reputação ruim, afetando até comunicações transacionais críticas como confirmações de pedido e redefinição de senhas.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">SEO e Reputação Online</h3>
                
                <p>
                  Embora email marketing não impacte diretamente SEO, reclamações de spam podem afetar reputação online geral. Reviews negativas sobre práticas de spam podem aparecer em resultados de busca. Blacklists de spam podem afetar deliverability não apenas de emails, mas também confiança geral na marca.
                </p>

                <p>
                  Google e outros podem penalizar domains associados a práticas spam. Links em emails spam podem ser desvalorizados ou ignorados para fins de SEO. Reputação positiva como remetente responsável pode, inversamente, contribuir para autoridade geral da marca online.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Melhores Práticas Operacionais</h3>
                
                <p>
                  Estabeleça processo de approval para todas as campanhas, incluindo revisão de listas, conteúdo, e compliance. Treine equipes sobre regulamentações e consequências de violações. Implemente controles técnicos que impeçam envios acidentais para listas não autorizadas.
                </p>

                <p>
                  Monitore continuamente métricas de entregabilidade e investigate rapidamente qualquer degradação. Mantenha relacionamento próximo com provedores de email e ISPs principais. Considere certificações de terceiros como Return Path ou similar para melhorar reputação.
                </p>

                <p>
                  Documente todos os processos e mantenha registros detalhados para demonstrar conformidade. Realize auditorias regulares de práticas e sistemas. Considere seguros específicos para riscos de compliance em marketing digital, especialmente para empresas com grandes volumes de envio.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gerar Sua Política</CardTitle>
                  <CardDescription>
                    Crie uma política antispam personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => window.location.href = '/?policy=antispam-policy'}
                  >
                    Gerar Política Antispam
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
                      <span>Protege reputação</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Melhora entregabilidade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Conformidade legal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Evita multas</span>
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
                    {['antispam', 'email marketing', 'comunicação', 'spam'].map((tag) => (
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