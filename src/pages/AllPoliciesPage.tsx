import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { POLICY_TYPES } from "@/lib/policies";

const policyDetails = {
  'privacy-policy': {
    what: 'A Política de Privacidade é um documento legal obrigatório que detalha minuciosamente como uma organização coleta, processa, armazena, compartilha e protege as informações pessoais dos usuários. Este documento fundamental estabelece a transparência necessária entre a empresa e seus usuários, definindo claramente quais dados são coletados, desde informações básicas como nome e email até dados comportamentais mais complexos.',
    purpose: 'Serve como um contrato de confiança que cumpre rigorosamente as exigências da LGPD (Lei Geral de Proteção de Dados) no Brasil, GDPR na Europa e outras regulamentações internacionais. Além de proteger legalmente a empresa, garante aos usuários o conhecimento pleno de seus direitos digitais, incluindo acesso, retificação, exclusão e portabilidade de dados.',
    sites: 'Absolutamente obrigatória para: e-commerce e marketplaces digitais, plataformas SaaS e aplicativos web, blogs e sites de conteúdo com comentários, redes sociais e comunidades online, sites corporativos com formulários de contato, plataformas educacionais e de treinamento, serviços financeiros e fintechs, aplicativos móveis que coletam dados do usuário.',
    google: 'O Google considera a Política de Privacidade um fator crítico de confiabilidade. É pré-requisito obrigatório para aprovação no AdSense, Google Analytics, Google Ads e Google Play Store. Sites sem política adequada enfrentam suspensão de serviços, penalizações no ranking orgânico e podem ser removidos dos resultados de busca.',
    info: 'Elementos essenciais: identificação completa da empresa responsável, tipos específicos de dados coletados (pessoais, comportamentais, técnicos), finalidades detalhadas do processamento, base legal para cada tipo de coleta, políticas de compartilhamento com terceiros, medidas de segurança implementadas, direitos dos titulares dos dados, procedimentos para exercer direitos, política de cookies detalhada, informações de contato do DPO ou responsável.'
  },
  'terms-of-use': {
    what: 'Os Termos de Uso constituem um documento jurídico fundamental que estabelece o conjunto completo de regras, condições, direitos e obrigações que governam a relação entre a plataforma digital e seus usuários. Este contrato digital define os parâmetros legais de utilização, limitações de responsabilidade e condutas esperadas, funcionando como um acordo vinculativo entre as partes.',
    purpose: 'Oferece proteção jurídica abrangente para a empresa, estabelecendo limitações claras de responsabilidade, definindo condutas proibidas e aceitáveis, regulamentando o uso de propriedade intelectual, estabelecendo jurisdição para resolução de conflitos e criando um framework legal sólido para operação da plataforma. Protege contra uso inadequado, abuso de serviços e litígios desnecessários.',
    sites: 'Fundamental para: plataformas de e-commerce e marketplaces, aplicações SaaS e software como serviço, redes sociais e plataformas de comunidade, fóruns e sites com interação de usuários, plataformas de streaming e conteúdo digital, serviços de assinatura e membros, aplicativos móveis com funcionalidades interativas, plataformas financeiras e de pagamento.',
    google: 'O Google valoriza significativamente sites com termos claros e bem estruturados como indicador de credibilidade e profissionalismo. Termos bem definidos são requisito para aprovação em programas como AdSense, influenciam positivamente no ranking de busca, aumentam a confiança do usuário e podem melhorar métricas de engajamento, fatores considerados pelo algoritmo.',
    info: 'Componentes obrigatórios: condições específicas de acesso e uso, descrição detalhada dos serviços oferecidos, direitos e obrigações dos usuários, condutas expressamente proibidas, políticas de propriedade intelectual e direitos autorais, limitações e exclusões de responsabilidade, procedimentos para modificação dos termos, política de suspensão e cancelamento de contas, lei aplicável e foro competente.'
  },
  'cookie-policy': {
    what: 'A Política de Cookies é um documento técnico-legal específico que fornece informações detalhadas e transparentes sobre o uso de cookies e tecnologias similares de rastreamento implementadas em um website. Explica minuciosamente como essas pequenas tecnologias coletam, armazenam e utilizam informações sobre o comportamento de navegação dos usuários.',
    purpose: 'Garante conformidade total com regulamentações rigorosas como LGPD, GDPR, ePrivacy Directive e leis locais de privacidade. Estabelece transparência sobre tecnologias de rastreamento, permite controle granular do usuário sobre suas preferências de privacidade e protege a empresa de sanções regulatórias que podem chegar a milhões em multas.',
    sites: 'Obrigatória para: qualquer site que utiliza Google Analytics, Google AdSense ou Google Tag Manager, plataformas de e-commerce com pixels de remarketing, sites com ferramentas de chat online, plataformas que implementam cookies de marketing, sites com funcionalidades sociais (Facebook, Twitter, LinkedIn), aplicações que usam cookies de personalização, plataformas com sistemas de login e sessão.',
    google: 'Requisito absoluto para todos os serviços Google (Analytics, AdSense, Ads, Tag Manager). O Google pode suspender ou cancelar serviços de sites que não possuem política adequada. Além disso, a transparência sobre cookies é considerada fator de confiabilidade que pode influenciar positivamente o ranking orgânico e a aprovação em programas publicitários.',
    info: 'Elementos técnicos obrigatórios: classificação detalhada dos cookies (essenciais, funcionais, analíticos, marketing), finalidade específica de cada categoria, tempo de armazenamento de cada tipo, informações sobre cookies de terceiros implementados, instruções claras para gerenciamento de preferências, explicação sobre tecnologias similares (localStorage, sessionStorage, pixels), procedimentos para opt-out, impacto da desativação na funcionalidade do site.'
  },
  'refund-policy': {
    what: 'A Política de Reembolso é um documento comercial e legal que estabelece de forma clara e detalhada todas as condições, procedimentos, prazos e critérios para devolução de produtos físicos, digitais ou cancelamento de serviços. Define os direitos dos consumidores e as obrigações da empresa em situações de insatisfação, defeitos ou arrependimento de compra.',
    purpose: 'Cria um framework transparente que protege tanto consumidores quanto empresas, estabelecendo expectativas claras sobre processos de reembolso, reduzindo disputas e chargebacks, cumprindo rigorosamente o Código de Defesa do Consumidor e regulamentações comerciais. Constrói confiança do consumidor e pode aumentar significativamente as taxas de conversão.',
    sites: 'Essencial para: lojas virtuais e e-commerce de todos os portes, plataformas de serviços digitais e assinaturas, marketplaces e plataformas de venda, cursos online e plataformas educacionais, aplicativos premium e serviços pagos, plataformas de software como serviço (SaaS), serviços de consultoria e atendimento online, empresas que vendem produtos físicos pela internet.',
    google: 'Para campanhas do Google Ads e Google Shopping, uma política de reembolso clara e justa é fator determinante para aprovação de anúncios. Políticas transparentes melhoram a qualidade do anúncio, podem reduzir o custo por clique, aumentam a confiança do consumidor (melhorando CTR) e são requisito para certificações como Google Trusted Store.',
    info: 'Componentes essenciais: prazos específicos para solicitação (7, 14, 30 dias), condições detalhadas do produto para elegibilidade, processo passo-a-passo para solicitação, responsabilidade pelos custos de devolução, tempo de processamento e aprovação, formas de reembolso aceitas, exceções e produtos não elegíveis, política para produtos digitais e serviços, procedimentos para defeitos e garantias.'
  },
  'transparency-policy': {
    what: 'A Política de Transparência é um documento estratégico que demonstra o compromisso organizacional com práticas abertas, éticas e responsáveis em todas as operações empresariais. Vai além da conformidade legal, estabelecendo um compromisso voluntário com a prestação de contas, governança transparente e comunicação aberta com todos os stakeholders.',
    purpose: 'Constrói confiança profunda com investidores, clientes, parceiros e sociedade em geral, demonstrando maturidade organizacional e responsabilidade corporativa. Fortalece a reputação da marca, facilita relacionamentos com investidores, melhora o posicionamento competitivo e cria diferencial significativo em mercados onde a confiança é crucial.',
    sites: 'Estratégica para: empresas de tecnologia e startups em crescimento, fintechs e empresas de serviços financeiros, plataformas de dados e inteligência artificial, organizações não-governamentais e empresas sociais, empresas de mídia e comunicação, plataformas de conteúdo e redes sociais, empresas B2B que lidam com dados sensíveis, organizações que buscam certificações ESG.',
    google: 'O Google valoriza organizações transparentes como fontes confiáveis de informação. Sites com políticas de transparência robustas podem ter vantagem em E-A-T (Expertise, Authoritativeness, Trustworthiness), fator crucial para ranking. Transparência pode resultar em melhor posicionamento orgânico, especialmente em nichos sensíveis como saúde, finanças e notícias.',
    info: 'Elementos de transparência: processo detalhado de tomada de decisões organizacionais, políticas internas de governança e ética, relatórios regulares de impacto e performance, informações sobre estrutura acionária e financiamento, políticas de conflito de interesse, procedimentos de auditoria e compliance, canais abertos para feedback e denúncias, compromissos mensuráveis com metas e prazos definidos.'
  },
  'security-policy': {
    what: 'A Política de Segurança é um documento técnico abrangente que detalha todas as medidas organizacionais, técnicas e procedimentais implementadas para proteger dados, sistemas, infraestrutura e informações sensíveis contra ameaças cibernéticas, acessos não autorizados, vazamentos e outros riscos de segurança digital.',
    purpose: 'Estabelece um framework de segurança robusto que protege ativos digitais críticos, demonstra conformidade com padrões internacionais (ISO 27001, SOC 2), atende requisitos de compliance setorial, tranquiliza clientes e parceiros sobre proteção de dados, e cria base sólida para seguros cibernéticos e certificações de segurança.',
    sites: 'Crítica para: instituições financeiras e fintechs, plataformas de saúde e telemedicina, e-commerce que processa pagamentos, empresas SaaS que armazenam dados corporativos, plataformas governamentais e de serviços públicos, organizações que lidam com dados sensíveis, empresas de tecnologia e desenvolvimento de software, plataformas educacionais com informações de menores.',
    google: 'A segurança é fator de ranking direto no Google. Sites com HTTPS são priorizados, certificados de segurança influenciam a confiabilidade, políticas claras podem aumentar o E-A-T score, e demonstrações de segurança robusta podem melhorar significativamente o posicionamento orgânico, especialmente em consultas relacionadas a transações financeiras.',
    info: 'Componentes técnicos essenciais: arquitetura de segurança da informação, políticas de criptografia e proteção de dados, controles de acesso e autenticação multifator, procedimentos de backup e recuperação de desastres, monitoramento contínuo e detecção de ameaças, plano de resposta a incidentes de segurança, treinamento e conscientização de segurança, auditorias regulares e testes de penetração, políticas de terceiros e fornecedores.'
  },
  'antispam-policy': {
    what: 'A Política Antispam é um documento especializado que estabelece diretrizes rigorosas e procedimentos detalhados para prevenir, detectar e combater o envio de comunicações eletrônicas não solicitadas, protegendo a reputação digital da empresa e garantindo a qualidade das comunicações legítimas com clientes e prospects.',
    purpose: 'Garante conformidade total com leis antispam rigorosas como CAN-SPAM Act, GDPR, LGPD e regulamentações locais, protege a reputação do remetente junto a provedores de email, mantém altas taxas de entregabilidade, previne bloqueios e blacklists, e estabelece práticas éticas de comunicação digital que fortalecem o relacionamento com clientes.',
    sites: 'Fundamental para: plataformas de email marketing e automação, e-commerce com comunicação por email, empresas SaaS com notificações por email, plataformas de newsletter e comunicação, sites com formulários de contato e lead capture, empresas de marketing digital e agências, plataformas de eventos e webinars, organizações que fazem comunicação regular por email.',
    google: 'Gmail e outros serviços Google aplicam filtros rigorosos baseados na reputação do remetente. Empresas sem políticas antispam adequadas enfrentam baixa entregabilidade, emails direcionados para spam, suspensão de contas Google Workspace, e podem ter domínios blacklisted, afetando não apenas email marketing mas também comunicações corporativas essenciais.',
    info: 'Elementos operacionais críticos: definição técnica e legal de spam, processo rigoroso de double opt-in para listas, sistema de gerenciamento de lista de supressão, procedimentos claros de opt-out e unsubscribe, política de frequência de envios, sistema de tratamento de denúncias, procedimentos de higienização de listas, monitoramento de métricas de entregabilidade, treinamento de equipes sobre práticas antispam.'
  },
  'copyright-policy': {
    what: 'A Política de Propriedade Intelectual é um documento jurídico especializado que protege de forma abrangente todos os direitos autorais, marcas registradas, patentes e propriedade intelectual da empresa, estabelecendo também procedimentos claros para lidar com violações, denúncias DMCA e uso não autorizado de conteúdo protegido.',
    purpose: 'Oferece proteção legal robusta contra violações de propriedade intelectual, estabelece base sólida para ações judiciais quando necessário, cumpre requisitos do Digital Millennium Copyright Act (DMCA), protege valor de marca e ativos intelectuais, e cria framework para licenciamento e uso autorizado de propriedade intelectual.',
    sites: 'Essencial para: plataformas de conteúdo e mídia digital, redes sociais e comunidades online, marketplaces e plataformas de venda, sites de fotografia e conteúdo visual, plataformas de música e áudio, fóruns e sites com conteúdo gerado por usuários, empresas de software e tecnologia, organizações com conteúdo original valioso, plataformas educacionais com materiais proprietários.',
    google: 'O Google respeita rigorosamente direitos autorais através do sistema DMCA. Sites com políticas claras de copyright têm vantagem na proteção de conteúdo original, podem solicitar remoção mais eficiente de conteúdo violador dos resultados de busca, e demonstram seriedade profissional que pode influenciar positivamente autoridade de domínio e confiabilidade.',
    info: 'Componentes legais obrigatórios: identificação clara de propriedade intelectual protegida, processo detalhado para denúncias DMCA, procedimento de counter-notice para contestações, penalidades específicas para violações, informações de contato do agente DMCA designado, política de violadores repetitivos, diretrizes para uso justo (fair use), licenças e permissões para uso autorizado, procedimentos para remoção de conteúdo violador.'
  },
  'content-policy': {
    what: 'A Política de Conteúdo é um documento normativo abrangente que estabelece diretrizes detalhadas, critérios de qualidade e regras específicas sobre que tipo de conteúdo é permitido, encorajado, restrito ou completamente proibido na plataforma, criando um ambiente digital seguro, respeitoso e de alta qualidade para todos os usuários.',
    purpose: 'Mantém padrões elevados de qualidade de conteúdo, protege usuários de material prejudicial, ofensivo ou inadequado, cumpre regulamentações sobre conteúdo online, reduz riscos legais relacionados a conteúdo problemático, facilita processos de moderação eficientes, e cria ambiente propício para engajamento positivo e construção de comunidade saudável.',
    sites: 'Crítica para: redes sociais e plataformas de comunidade, fóruns de discussão e Q&A, plataformas de vídeo e streaming, sites de notícias com seção de comentários, marketplaces com reviews e avaliações, plataformas educacionais com interação, blogs corporativos com comentários, aplicativos de mensagem e comunicação, plataformas de conteúdo gerado por usuários.',
    google: 'O Google prioriza sites com conteúdo de alta qualidade e políticas claras de moderação. Plataformas com políticas robustas de conteúdo têm vantagem significativa em rankings, menor risco de penalizações por conteúdo problemático, melhor experiência do usuário (fator de ranking), e podem qualificar para recursos especiais como rich snippets e featured snippets.',
    info: 'Diretrizes operacionais essenciais: definição clara de conteúdo aceitável e inaceitável, critérios específicos de qualidade e relevância, política detalhada sobre hate speech e discriminação, diretrizes sobre nudez, violência e conteúdo sensível, regras sobre spam e autopromoção, processo de moderação e revisão de conteúdo, sistema de denúncias e recursos, penalidades graduais para violações, política de apelação e contestação.'
  },
  'comment-moderation': {
    what: 'A Política de Moderação é um documento operacional especializado que define critérios técnicos e editoriais precisos para aprovação, edição, rejeição e gerenciamento de comentários e interações dos usuários, estabelecendo processo estruturado para manter discussões saudáveis, construtivas e alinhadas com os valores da plataforma.',
    purpose: 'Garante qualidade das discussões e interações, previne spam, trolling e comportamentos tóxicos, protege a comunidade de conteúdo prejudicial, mantém ambiente respeitoso para todos os usuários, reduz responsabilidade legal por conteúdo de terceiros, e facilita construção de comunidade engajada e positiva.',
    sites: 'Fundamental para: blogs corporativos e pessoais com comentários, sites de notícias e jornalismo, fóruns especializados e comunidades técnicas, plataformas de review e avaliação, sites educacionais com discussões, plataformas de Q&A e suporte, redes sociais corporativas, portais de conteúdo com interação de usuários.',
    google: 'Comentários de qualidade podem melhorar significativamente o SEO através de conteúdo adicional relevante, aumento do tempo de permanência na página, maior engajamento de usuários, e criação de conteúdo evergreen. Google valoriza sites com discussões saudáveis, mas penaliza plataformas com spam excessivo ou conteúdo problemático em comentários.',
    info: 'Processo de moderação detalhado: critérios específicos para aprovação automática, lista de palavras e temas proibidos, processo de moderação manual para casos duvidosos, política de tempo de resposta para moderação, sistema de escalação para conteúdo complexo, procedimentos para comentários reportados, política de banimento e suspensão de usuários, sistema de apelação para decisões de moderação, treinamento de moderadores, métricas de qualidade e performance.'
  },
  'accessibility-policy': {
    what: 'A Política de Acessibilidade é um documento de compromisso social que demonstra dedicação organizacional em tornar produtos digitais utilizáveis por pessoas com diferentes tipos de deficiências e necessidades especiais, seguindo padrões internacionais como WCAG (Web Content Accessibility Guidelines) e legislações de inclusão digital.',
    purpose: 'Cumpre obrigações legais de acessibilidade (Lei Brasileira de Inclusão, ADA nos EUA), amplia significativamente o público-alvo potencial, demonstra responsabilidade social corporativa, melhora experiência para todos os usuários (não apenas PcD), reduz riscos de processos judiciais, e fortalece imagem de marca como organização inclusiva e socialmente consciente.',
    sites: 'Obrigatória para: sites governamentais e de serviços públicos, instituições educacionais e universidades, empresas de grande porte e corporações, plataformas de e-commerce e serviços online, organizações de saúde e hospitais, bancos e instituições financeiras, empresas que vendem para governo, organizações sem fins lucrativos.',
    google: 'Acessibilidade é fator de ranking crescente no Google. Sites acessíveis têm melhor estrutura HTML, navegação mais clara, melhor experiência móvel, tempos de carregamento otimizados, e maior usabilidade geral - todos fatores que o Google considera para ranking. Além disso, acessibilidade pode resultar em menções positivas e links naturais.',
    info: 'Implementação técnica abrangente: conformidade com WCAG 2.1 níveis A, AA e AAA, suporte completo a tecnologias assistivas (leitores de tela, navegação por teclado), contraste adequado de cores e tipografia legível, legendas e transcrições para conteúdo multimídia, formulários acessíveis com labels apropriados, navegação clara e consistente, testes regulares com usuários PcD, treinamento de equipe em design inclusivo.'
  },
  'sustainability-policy': {
    what: 'A Política de Sustentabilidade é um documento estratégico que articula o compromisso organizacional com práticas ambientalmente responsáveis, impacto social positivo e governança sustentável, abordando desde pegada de carbono digital até responsabilidade social corporativa, alinhada com objetivos de desenvolvimento sustentável (ODS) da ONU.',
    purpose: 'Atrai consumidores e investidores cada vez mais conscientes sobre questões ambientais, melhora significativamente a imagem e reputação da marca, facilita acesso a financiamentos ESG, cumpre crescentes exigências de relatórios de sustentabilidade, cria diferencial competitivo importante, e demonstra liderança em responsabilidade corporativa.',
    sites: 'Estratégica para: empresas de tecnologia com grandes datacenters, e-commerce preocupado com logística sustentável, corporações com pressão por ESG, startups que querem atrair investimento consciente, empresas B2B que vendem para grandes corporações, organizações que buscam certificações ambientais, plataformas que promovem economia circular, empresas em setores regulamentados.',
    google: 'Sustentabilidade está se tornando tema cada vez mais valorizado pelo Google. Empresas com práticas sustentáveis podem ter vantagem em busca local, atrair links de qualidade de organizações ambientais, ter melhor percepção de marca que resulta em maior CTR, e beneficiar-se do crescente interesse público por temas ambientais, gerando tráfego orgânico relevante.',
    info: 'Compromissos mensuráveis específicos: metas de redução de pegada de carbono com prazos definidos, uso de energia renovável e eficiência energética, práticas de economia circular e redução de resíduos, políticas de fornecedores sustentáveis, programas de responsabilidade social e impacto comunitário, relatórios regulares de sustentabilidade, certificações ambientais buscadas, investimento em tecnologias limpas, compensação de carbono e projetos ambientais.'
  }
};

export default function AllPoliciesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
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
                        
                        <Button 
                          variant="google-outline" 
                          size="sm"
                          className="w-full sm:w-auto"
                          onClick={() => window.location.href = `/?policy=${policy.id}`}
                        >
                          Gerar Esta Política
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      </main>
      
      <Footer />
    </div>
  );
}