import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { POLICY_TYPES } from "@/lib/policies";

const policyDetails = {
  'privacy-policy': {
    what: 'A Política de Privacidade é um documento legal que informa como uma empresa coleta, usa, armazena e protege os dados pessoais dos usuários.',
    purpose: 'É essencial para demonstrar transparência no tratamento de dados pessoais e cumprir regulamentações como LGPD, GDPR e outras leis de proteção de dados.',
    sites: 'Obrigatória para qualquer site que colete dados pessoais: e-commerce, blogs, sites corporativos, aplicativos, plataformas de serviços, redes sociais.',
    google: 'O Google exige Política de Privacidade para AdSense, Analytics e outros serviços. Sites sem política podem ser penalizados no ranking de busca.',
    info: 'Deve incluir: tipos de dados coletados, finalidade do uso, base legal, compartilhamento com terceiros, direitos dos usuários, cookies utilizados.'
  },
  'terms-of-use': {
    what: 'Os Termos de Uso definem as regras, condições e limitações para o uso de um site, aplicativo ou serviço.',
    purpose: 'Protege a empresa juridicamente, estabelece direitos e obrigações dos usuários, e define condições de uso do serviço.',
    sites: 'Essencial para: plataformas digitais, e-commerce, SaaS, aplicativos, fóruns, redes sociais, sites com cadastro de usuários.',
    google: 'O Google valoriza sites com termos claros para AdSense e outros serviços. Aumenta confiabilidade e pode melhorar SEO.',
    info: 'Deve conter: condições de uso, proibições, responsabilidades, limitações de responsabilidade, modificações dos termos.'
  },
  'cookie-policy': {
    what: 'A Política de Cookies explica como e por que um site utiliza cookies e tecnologias similares de rastreamento.',
    purpose: 'Cumpre exigências legais de transparência sobre cookies, especialmente LGPD, GDPR e regulamentações de privacidade.',
    sites: 'Obrigatória para sites que usam: Google Analytics, AdSense, pixels de rastreamento, cookies de marketing, ferramentas de terceiros.',
    google: 'Requisito obrigatório para AdSense e Analytics. Sites sem política de cookies podem ter serviços suspensos.',
    info: 'Deve incluir: tipos de cookies, finalidade, cookies de terceiros, como aceitar/recusar, tempo de armazenamento.'
  },
  'refund-policy': {
    what: 'A Política de Reembolso estabelece as condições, prazos e procedimentos para devolução de produtos ou cancelamento de serviços.',
    purpose: 'Define regras claras para reembolsos, protege a empresa e informa os direitos dos consumidores.',
    sites: 'Essencial para: e-commerce, lojas virtuais, serviços pagos, assinaturas, cursos online, aplicativos premium.',
    google: 'Para Google Ads e Shopping, uma política clara melhora a confiança e pode aumentar conversões.',
    info: 'Deve conter: prazos para reembolso, condições do produto, processo de solicitação, exceções, tempo de processamento.'
  },
  'transparency-policy': {
    what: 'A Política de Transparência demonstra o compromisso da empresa com práticas éticas e abertas em suas operações.',
    purpose: 'Constrói confiança com stakeholders, demonstra responsabilidade corporativa e melhora a reputação da marca.',
    sites: 'Importante para: empresas de tecnologia, fintech, startups, ONGs, empresas de mídia, plataformas de conteúdo.',
    google: 'Melhora a credibilidade do site, pode influenciar positivamente o ranking e é valorizado em nichos sensíveis.',
    info: 'Inclui: processos de tomada de decisão, políticas internas, relatórios de transparência, compromissos éticos.'
  },
  'security-policy': {
    what: 'A Política de Segurança descreve as medidas técnicas e organizacionais implementadas para proteger dados e sistemas.',
    purpose: 'Demonstra compromisso com segurança, atende requisitos de compliance e tranquiliza usuários sobre proteção de dados.',
    sites: 'Crucial para: fintech, e-commerce, SaaS, plataformas de saúde, sites governamentais, sistemas corporativos.',
    google: 'Sites seguros são priorizados no ranking. HTTPS é fator de ranking e políticas de segurança aumentam confiança.',
    info: 'Deve abordar: criptografia, controle de acesso, backup, monitoramento, resposta a incidentes, treinamento.'
  },
  'antispam-policy': {
    what: 'A Política Antispam define regras e procedimentos para prevenir envio de emails não solicitados e comunicações spam.',
    purpose: 'Cumpre leis antispam, protege a reputação do remetente e garante entregabilidade de emails legítimos.',
    sites: 'Essencial para: plataformas de email marketing, sites com newsletter, e-commerce, serviços de comunicação.',
    google: 'Gmail e outros serviços penalizam remetentes sem políticas antispam. Afeta entregabilidade e reputação.',
    info: 'Inclui: definição de spam, processo de opt-in/opt-out, lista de supressão, procedimentos de denúncia.'
  },
  'copyright-policy': {
    what: 'A Política de Direitos Autorais protege propriedade intelectual e define procedimentos para denúncias de violação.',
    purpose: 'Protege conteúdo original, cumpre leis de copyright e estabelece processo DMCA para remoção de conteúdo.',
    sites: 'Importante para: plataformas de conteúdo, blogs, sites de mídia, marketplaces, redes sociais, fóruns.',
    google: 'Google respeita DMCA e pode remover conteúdo violador. Política clara protege contra penalizações.',
    info: 'Deve conter: direitos protegidos, processo DMCA, penalidades por violação, contato para denúncias.'
  },
  'content-policy': {
    what: 'A Política de Conteúdo estabelece diretrizes sobre que tipo de conteúdo é permitido ou proibido na plataforma.',
    purpose: 'Mantém qualidade do conteúdo, protege usuários de conteúdo prejudicial e cumpre regulamentações.',
    sites: 'Essencial para: redes sociais, fóruns, plataformas de vídeo, blogs com comentários, marketplaces.',
    google: 'Conteúdo de qualidade melhora SEO. Políticas claras ajudam na moderação e experiência do usuário.',
    info: 'Inclui: conteúdo proibido, diretrizes de qualidade, processo de moderação, penalidades, recursos.'
  },
  'comment-moderation': {
    what: 'A Política de Moderação define regras para aprovação, rejeição e gerenciamento de comentários dos usuários.',
    purpose: 'Mantém discussões saudáveis, previne spam e conteúdo inadequado, e protege a comunidade.',
    sites: 'Necessária para: blogs, sites de notícias, fóruns, plataformas de review, sites com seção de comentários.',
    google: 'Comentários de qualidade podem melhorar SEO. Moderação adequada evita penalizações por spam.',
    info: 'Define: critérios de aprovação, conteúdo proibido, processo de moderação, recursos, tempo de resposta.'
  },
  'accessibility-policy': {
    what: 'A Política de Acessibilidade demonstra compromisso em tornar o site utilizável por pessoas com deficiências.',
    purpose: 'Cumpre leis de acessibilidade, amplia público-alvo e demonstra responsabilidade social.',
    sites: 'Importante para: sites governamentais, educacionais, corporativos, e-commerce, serviços públicos.',
    google: 'Acessibilidade é fator de ranking. Sites acessíveis têm melhor UX e podem ter preferência nas buscas.',
    info: 'Inclui: padrões WCAG, tecnologias assistivas, contato para suporte, compromissos de melhoria.'
  },
  'sustainability-policy': {
    what: 'A Política de Sustentabilidade demonstra compromisso com práticas ambientalmente responsáveis e impacto social positivo.',
    purpose: 'Atrai consumidores conscientes, melhora imagem da marca e cumpre compromissos ESG.',
    sites: 'Relevante para: empresas de tecnologia, e-commerce, corporações, startups sustentáveis, ONGs.',
    google: 'Sustentabilidade é tema valorizado. Pode melhorar percepção da marca e atrair links de qualidade.',
    info: 'Aborda: impacto ambiental, práticas sustentáveis, metas de carbono, responsabilidade social.'
  }
};

export default function AllPoliciesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Todas as Políticas Disponíveis
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça todos os tipos de políticas que você pode gerar para seu site ou negócio. 
            Cada política é essencial para diferentes aspectos legais e de compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {POLICY_TYPES.map((policy) => {
            const details = policyDetails[policy.id as keyof typeof policyDetails];
            return (
              <Card key={policy.id} className="w-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{policy.icon}</span>
                    <CardTitle className="text-xl md:text-2xl">{policy.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {policy.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-blue-500">📋</span>
                            O que é?
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {details?.what}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-green-500">🎯</span>
                            Para que serve?
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {details?.purpose}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-purple-500">🌐</span>
                            Onde é utilizada?
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {details?.sites}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-red-500">🔍</span>
                            Visão do Google
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {details?.google}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-orange-500">ℹ️</span>
                            Informações importantes
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {details?.info}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm text-foreground mb-2">Palavras-chave:</h4>
                          <div className="flex flex-wrap gap-1">
                            {policy.keywords.map((keyword, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full capitalize">
                          Categoria: {policy.category}
                        </span>
                        
                        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                          <Button 
                            variant="google-outline" 
                            size="sm"
                            className="w-full sm:w-auto"
                            onClick={() => window.location.href = `/?policy=${policy.id}`}
                          >
                            Gerar Esta Política
                          </Button>
                          <Button 
                            variant="google" 
                            size="sm"
                            className="w-full sm:w-auto"
                            onClick={() => window.location.href = `/${policy.slug}-info`}
                          >
                            Saber Mais
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}