import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Shield, 
  Cookie, 
  FileText, 
  DollarSign, 
  Eye, 
  Lock, 
  Ban, 
  Copyright, 
  FileWarning, 
  MessageSquare, 
  Accessibility, 
  Leaf,
  HelpCircle,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

// Dados do FAQ organizado por seções
const faqSections = [
  {
    id: "privacy-policy",
    title: "Política de Privacidade",
    icon: Shield,
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
    slug: "/gerador-politica-privacidade",
    questions: [
      {
        q: "O que é uma Política de Privacidade?",
        a: "É um documento legal que explica como seu site coleta, usa, armazena e protege os dados pessoais dos visitantes. É obrigatória pela LGPD e GDPR."
      },
      {
        q: "Meu site precisa de Política de Privacidade?",
        a: "Sim, se você coleta qualquer dado pessoal (nome, e-mail, IP, cookies, etc.), você precisa ter uma Política de Privacidade clara e acessível."
      },
      {
        q: "A Política de Privacidade gerada é válida juridicamente?",
        a: "Sim, nossos modelos seguem as diretrizes da LGPD e GDPR. No entanto, recomendamos revisão por um advogado para casos específicos."
      },
      {
        q: "Como divulgar a Política de Privacidade no meu site?",
        a: "Coloque um link visível no rodapé do seu site e nos formulários de cadastro. É importante que seja facilmente acessível aos usuários."
      }
    ]
  },
  {
    id: "cookie-policy",
    title: "Política de Cookies",
    icon: Cookie,
    color: "text-orange-500",
    bgColor: "bg-orange-500/20",
    slug: "/gerador-politica-cookies",
    questions: [
      {
        q: "O que é uma Política de Cookies?",
        a: "É um documento que informa aos usuários sobre o uso de cookies no seu site, explicando quais tipos são usados e para que finalidade."
      },
      {
        q: "É obrigatório ter Política de Cookies?",
        a: "Sim, se seu site usa cookies (incluindo Google Analytics, Facebook Pixel, etc.), você precisa informar os usuários conforme LGPD e GDPR."
      },
      {
        q: "Preciso de um banner de consentimento de cookies?",
        a: "Sim, além da política, você precisa implementar um banner para que os usuários possam aceitar ou recusar cookies não essenciais."
      },
      {
        q: "Quais tipos de cookies devo declarar?",
        a: "Declare todos: essenciais (funcionamento), analíticos (Google Analytics), marketing (Facebook Ads) e de terceiros (integrações)."
      }
    ]
  },
  {
    id: "terms-of-use",
    title: "Termos de Uso",
    icon: FileText,
    color: "text-purple-500",
    bgColor: "bg-purple-500/20",
    slug: "/gerador-termos-uso",
    questions: [
      {
        q: "O que são Termos de Uso?",
        a: "São as regras e condições que os usuários devem aceitar para usar seu site ou serviço. Define direitos, obrigações e limitações de responsabilidade."
      },
      {
        q: "Qual a diferença entre Termos de Uso e Política de Privacidade?",
        a: "Termos de Uso regem o comportamento do usuário no site. Política de Privacidade explica como você trata os dados pessoais coletados."
      },
      {
        q: "Termos de Uso são obrigatórios?",
        a: "Não são obrigatórios por lei, mas são altamente recomendados para proteger seu negócio de uso indevido e disputas legais."
      },
      {
        q: "Posso copiar Termos de Uso de outro site?",
        a: "Não é recomendado. Cada negócio tem suas especificidades. Use nosso gerador para criar termos personalizados para seu site."
      }
    ]
  },
  {
    id: "refund-policy",
    title: "Política de Reembolso",
    icon: DollarSign,
    color: "text-green-500",
    bgColor: "bg-green-500/20",
    slug: "/gerador-politica-reembolso",
    questions: [
      {
        q: "O que é uma Política de Reembolso?",
        a: "É um documento que estabelece as regras para devolução de produtos ou cancelamento de serviços, incluindo prazos e condições."
      },
      {
        q: "E-commerce precisa de Política de Reembolso?",
        a: "Sim, é obrigatório por lei. O Código de Defesa do Consumidor garante 7 dias para arrependimento em compras online."
      },
      {
        q: "Posso negar reembolsos?",
        a: "Você pode estabelecer condições (prazo, estado do produto), mas não pode negar o direito de arrependimento de 7 dias em compras online."
      },
      {
        q: "Como funciona o prazo de 7 dias?",
        a: "O cliente tem 7 dias corridos a partir do recebimento do produto para solicitar a devolução, sem precisar justificar."
      }
    ]
  },
  {
    id: "transparency-policy",
    title: "Política de Transparência",
    icon: Eye,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/20",
    slug: "/gerador-politica-transparencia",
    questions: [
      {
        q: "O que é uma Política de Transparência?",
        a: "É um documento que demonstra o compromisso da empresa com a transparência nas suas operações, dados e processos."
      },
      {
        q: "Por que ter uma Política de Transparência?",
        a: "Aumenta a confiança dos usuários, demonstra compromisso ético e pode ser um diferencial competitivo no mercado."
      },
      {
        q: "O que deve conter na Política de Transparência?",
        a: "Informações sobre processos decisórios, uso de dados, relatórios financeiros (se aplicável) e canais de comunicação com stakeholders."
      },
      {
        q: "Política de Transparência é obrigatória?",
        a: "Não é obrigatória por lei, mas é altamente recomendada para empresas que valorizam a ética e a confiança do público."
      }
    ]
  },
  {
    id: "security-policy",
    title: "Política de Segurança",
    icon: Lock,
    color: "text-red-500",
    bgColor: "bg-red-500/20",
    slug: "/gerador-politica-seguranca",
    questions: [
      {
        q: "O que é uma Política de Segurança?",
        a: "É um documento que descreve as medidas técnicas e organizacionais para proteger dados e sistemas contra acessos não autorizados."
      },
      {
        q: "Quem precisa de Política de Segurança?",
        a: "Empresas que lidam com dados sensíveis (financeiros, saúde, etc.) e querem demonstrar compromisso com a segurança da informação."
      },
      {
        q: "O que deve conter na Política de Segurança?",
        a: "Medidas de proteção (criptografia, firewall), procedimentos de backup, plano de resposta a incidentes e treinamento de equipe."
      },
      {
        q: "Política de Segurança substitui certificações ISO?",
        a: "Não, mas é um primeiro passo importante. Certificações como ISO 27001 exigem políticas mais abrangentes e auditorias regulares."
      }
    ]
  },
  {
    id: "antispam-policy",
    title: "Política Antispam",
    icon: Ban,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20",
    slug: "/gerador-politica-antispam",
    questions: [
      {
        q: "O que é uma Política Antispam?",
        a: "É um documento que estabelece regras sobre o envio de e-mails marketing, garantindo conformidade com leis antispam como CAN-SPAM e LGPD."
      },
      {
        q: "É obrigatório ter Política Antispam?",
        a: "Sim, se você envia e-mails marketing. A LGPD exige consentimento prévio e opção de descadastramento clara."
      },
      {
        q: "O que deve conter na Política Antispam?",
        a: "Explicação sobre como conseguiu o e-mail, frequência de envios, tipo de conteúdo e processo de descadastramento (opt-out)."
      },
      {
        q: "Posso comprar listas de e-mail?",
        a: "Não! A LGPD proíbe o uso de dados pessoais sem consentimento. Você só pode enviar e-mails para quem autorizou expressamente."
      }
    ]
  },
  {
    id: "copyright-policy",
    title: "Política de Propriedade Intelectual",
    icon: Copyright,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/20",
    slug: "/gerador-politica-propriedade-intelectual",
    questions: [
      {
        q: "O que é Política de Propriedade Intelectual?",
        a: "É um documento que protege seus direitos autorais, marcas e conteúdos originais, definindo regras de uso e citação."
      },
      {
        q: "Quem precisa dessa política?",
        a: "Blogs, sites de notícias, cursos online e qualquer negócio que produza conteúdo original (textos, imagens, vídeos)."
      },
      {
        q: "Como proteger meu conteúdo de cópias?",
        a: "Além da política, você pode registrar obras na Biblioteca Nacional ou usar ferramentas anti-plágio e watermarks em imagens."
      },
      {
        q: "O que fazer se copiarem meu conteúdo?",
        a: "Envie notificação DMCA (se for site internacional) ou notificação extrajudicial exigindo remoção. Se persistir, busque assessoria jurídica."
      }
    ]
  },
  {
    id: "content-policy",
    title: "Política de Conteúdo",
    icon: FileWarning,
    color: "text-pink-500",
    bgColor: "bg-pink-500/20",
    slug: "/gerador-politica-conteudo",
    questions: [
      {
        q: "O que é uma Política de Conteúdo?",
        a: "É um documento que define que tipo de conteúdo é permitido e proibido na sua plataforma, incluindo regras de moderação."
      },
      {
        q: "Quem precisa de Política de Conteúdo?",
        a: "Redes sociais, fóruns, sites com comentários, marketplaces e qualquer plataforma onde usuários possam publicar conteúdo."
      },
      {
        q: "O que deve ser proibido na Política de Conteúdo?",
        a: "Conteúdo ilegal, discurso de ódio, spam, violência, pornografia infantil, fraude e violação de direitos autorais."
      },
      {
        q: "Posso remover conteúdo de usuários?",
        a: "Sim, desde que suas regras estejam claras na Política de Conteúdo. Você tem o direito de moderar e remover conteúdo inadequado."
      }
    ]
  },
  {
    id: "moderation-policy",
    title: "Política de Moderação de Comentários",
    icon: MessageSquare,
    color: "text-teal-500",
    bgColor: "bg-teal-500/20",
    slug: "/gerador-politica-moderacao",
    questions: [
      {
        q: "O que é Política de Moderação?",
        a: "É um documento que estabelece regras sobre como comentários e interações de usuários serão moderados no seu site."
      },
      {
        q: "É obrigatório moderar comentários?",
        a: "Não é obrigatório por lei, mas é recomendado para evitar problemas legais com conteúdo ofensivo ou ilegal publicado por terceiros."
      },
      {
        q: "Posso deletar comentários negativos?",
        a: "Você pode deletar comentários que violem suas regras (ofensivos, spam), mas não é recomendado deletar críticas construtivas."
      },
      {
        q: "Como implementar moderação eficiente?",
        a: "Use filtros automáticos para palavras ofensivas, exija cadastro para comentar e tenha uma equipe para revisar denúncias."
      }
    ]
  },
  {
    id: "accessibility-policy",
    title: "Política de Acessibilidade",
    icon: Accessibility,
    color: "text-purple-500",
    bgColor: "bg-purple-500/20",
    slug: "/gerador-politica-acessibilidade",
    questions: [
      {
        q: "O que é Política de Acessibilidade?",
        a: "É um documento que demonstra o compromisso do site em ser acessível a pessoas com deficiência, seguindo diretrizes WCAG."
      },
      {
        q: "Sites precisam ser acessíveis?",
        a: "Sim, a Lei Brasileira de Inclusão (LBI) exige que sites públicos e de serviços essenciais sejam acessíveis. É boa prática para todos."
      },
      {
        q: "O que é WCAG?",
        a: "Web Content Accessibility Guidelines - diretrizes internacionais para tornar conteúdo web acessível a pessoas com deficiência."
      },
      {
        q: "Como tornar meu site acessível?",
        a: "Use textos alternativos em imagens, legendas em vídeos, navegação por teclado, contraste adequado e estrutura semântica HTML."
      }
    ]
  },
  {
    id: "sustainability-policy",
    title: "Política de Sustentabilidade",
    icon: Leaf,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/20",
    slug: "/gerador-politica-sustentabilidade",
    questions: [
      {
        q: "O que é Política de Sustentabilidade?",
        a: "É um documento que descreve as práticas ambientais, sociais e de governança (ESG) adotadas pela empresa."
      },
      {
        q: "Por que ter Política de Sustentabilidade?",
        a: "Demonstra compromisso socioambiental, atrai clientes conscientes, melhora imagem da marca e pode ser exigido por investidores."
      },
      {
        q: "Pequenas empresas precisam de Política de Sustentabilidade?",
        a: "Não é obrigatório, mas cada vez mais consumidores valorizam empresas que se preocupam com impacto ambiental e social."
      },
      {
        q: "O que incluir na Política de Sustentabilidade?",
        a: "Metas de redução de carbono, uso de energia renovável, gestão de resíduos, responsabilidade social e governança corporativa."
      }
    ]
  }
];

export default function FAQPage() {
  useEffect(() => {
    // Adiciona Schema.org FAQPage para Featured Snippets
    const allQuestions = faqSections.flatMap(section => 
      section.questions.map(q => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.a
        }
      }))
    );

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allQuestions
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQ - Perguntas Frequentes | Políticas de Privacidade</title>
        <meta 
          name="description" 
          content="Tire todas suas dúvidas sobre Política de Privacidade, Termos de Uso, Cookies e outras políticas legais. Respostas completas para suas perguntas." 
        />
        <link rel="canonical" href="https://politicadeprivacidade.org/faq" />
      </Helmet>
      
      <StructuredData type="organization" />
      <StructuredData 
        type="breadcrumb" 
        items={[
          { name: "FAQ", url: "/faq" }
        ]} 
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ name: "FAQ", url: "/faq" }]} />
          
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl mb-6 shadow-lg animate-pulse">
              <HelpCircle className="h-8 md:h-10 w-8 md:w-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Perguntas Frequentes (FAQ)
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre respostas para suas dúvidas sobre políticas legais, LGPD, GDPR e muito mais
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="mb-12 sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-2 border-primary/20 rounded-2xl p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <ChevronRight className="h-5 w-5 text-primary" />
              Navegação Rápida
            </h2>
            <div className="flex flex-wrap gap-2">
              {faqSections.map((section) => {
                const SectionIcon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      const element = document.getElementById(section.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all hover:scale-105 ${section.bgColor} border-transparent hover:border-primary/50 group`}
                  >
                    <SectionIcon className={`h-4 w-4 ${section.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-foreground">{section.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-8">
            {faqSections.map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.id} className="scroll-mt-32" id={section.id}>
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-primary/20">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${section.bgColor} flex items-center justify-center animate-pulse`}>
                      <SectionIcon className={`h-6 w-6 ${section.color}`} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {section.title}
                      </h2>
                      <Link 
                        to={section.slug}
                        className="text-sm text-primary hover:underline inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Gerar esta política gratuitamente
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Questions */}
                  <Accordion type="single" collapsible className="space-y-3">
                    {section.questions.map((item, idx) => (
                      <AccordionItem
                        key={idx}
                        value={`${section.id}-${idx}`}
                        className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group"
                      >
                        <AccordionTrigger className="text-left px-6 py-4 hover:no-underline group-hover:bg-primary/5 transition-colors">
                          <div className="flex items-start gap-3 w-full">
                            <Badge variant="secondary" className="mt-1 shrink-0">
                              {idx + 1}
                            </Badge>
                            <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.q}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5">
                          <div className="pl-10">
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-2xl p-8 border border-primary/20 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Não encontrou sua resposta?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
                >
                  Entre em contato
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/gerador-politica-privacidade"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-foreground px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
                >
                  Gerar Política Agora
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
