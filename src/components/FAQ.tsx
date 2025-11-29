import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  Shield, 
  CheckCircle, 
  Globe, 
  DollarSign, 
  UserCheck, 
  Zap, 
  Edit, 
  Calendar, 
  FileText, 
  MapPin, 
  ShoppingCart,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "É realmente grátis?",
    answer: "Sim! Nosso gerador de políticas é 100% gratuito, sem taxas ocultas, sem limites de uso e sem necessidade de cadastro. Você pode gerar quantas políticas precisar, a qualquer momento, sem pagar nada.",
    icon: DollarSign,
    category: "Geral",
    color: "text-green-500"
  },
  {
    question: "As políticas geradas são válidas juridicamente?",
    answer: "Sim. Nossas políticas seguem as diretrizes da LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018), GDPR e outras regulamentações internacionais. Os documentos são baseados em templates validados por especialistas. No entanto, recomendamos que você revise o conteúdo e, se necessário, consulte um advogado para adequações específicas ao seu negócio.",
    icon: Shield,
    category: "Legal",
    color: "text-blue-500"
  },
  {
    question: "Preciso criar uma conta para usar o gerador?",
    answer: "Não! Nosso gerador funciona de forma completamente anônima. Você não precisa criar conta, fazer login ou fornecer qualquer informação pessoal. Basta preencher o formulário e gerar sua política instantaneamente.",
    icon: UserCheck,
    category: "Uso",
    color: "text-purple-500"
  },
  {
    question: "Quanto tempo leva para gerar uma política?",
    answer: "A geração de documentos é instantânea! Após preencher o formulário com as informações do seu site (nome, URL, e-mail de contato), sua política será criada em menos de 10 segundos. Você pode baixar, copiar ou editar imediatamente.",
    icon: Zap,
    category: "Uso",
    color: "text-yellow-500"
  },
  {
    question: "Posso editar a política depois de gerar?",
    answer: "Sim! Você pode copiar o texto gerado e editá-lo livremente em qualquer editor de texto (Word, Google Docs, etc.). Além disso, oferecemos a opção de baixar em diferentes formatos: TXT, DOC e PDF, facilitando a edição posterior.",
    icon: Edit,
    category: "Uso",
    color: "text-orange-500"
  },
  {
    question: "As políticas estão atualizadas com a LGPD de 2026?",
    answer: "Sim! Todos os nossos templates são atualizados regularmente para refletir as mudanças na legislação brasileira (LGPD), europeia (GDPR) e de outras jurisdições. A última atualização foi em novembro de 2025, incluindo as novas diretrizes da ANPD e ePrivacy Regulation.",
    icon: Calendar,
    category: "Legal",
    color: "text-cyan-500"
  },
  {
    question: "Que tipos de políticas posso gerar?",
    answer: "Oferecemos mais de 12 tipos de documentos legais: Política de Privacidade, Termos de Uso, Política de Cookies, Política de Reembolso, Política de Transparência, Política de Segurança, Política de Propriedade Intelectual, Política de Conteúdo, Política Antispam, Política de Moderação de Comentários, Política de Acessibilidade e Política de Sustentabilidade.",
    icon: FileText,
    category: "Geral",
    color: "text-indigo-500"
  },
  {
    question: "As políticas funcionam para sites internacionais?",
    answer: "Sim! Nossas políticas são compatíveis com LGPD (Brasil), GDPR (União Europeia), CCPA (Califórnia/EUA) e outras regulamentações internacionais. Se seu site atende visitantes de múltiplos países, os documentos gerados já contemplam as principais exigências legais globais.",
    icon: Globe,
    category: "Internacional",
    color: "text-teal-500"
  },
  {
    question: "Posso usar as políticas para fins comerciais?",
    answer: "Sim! Todos os documentos gerados podem ser usados livremente para qualquer finalidade, seja pessoal ou comercial. Você tem total direito de uso, modificação e distribuição das políticas criadas. Não há restrições de licenciamento.",
    icon: CheckCircle,
    category: "Legal",
    color: "text-emerald-500"
  },
  {
    question: "Posso gerar políticas para e-commerce e lojas online?",
    answer: "Sim! Temos políticas específicas para e-commerce, incluindo Política de Reembolso, Termos de Uso com cláusulas de compra e venda, Política de Cookies para rastreamento de conversões e muito mais. Ideal para Shopify, WooCommerce, Mercado Livre e outras plataformas.",
    icon: ShoppingCart,
    category: "E-commerce",
    color: "text-pink-500"
  }
];

export const FAQ = () => {
  useEffect(() => {
    // Adiciona Schema.org FAQPage para Featured Snippets
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl mb-6 shadow-lg animate-pulse">
            <HelpCircle className="h-8 md:h-10 w-8 md:w-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire todas as suas dúvidas sobre nosso gerador de políticas legais gratuito
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((item, index) => {
            const Icon = item.icon;
            
            // Mapeamento de estilos por cor
            const iconBgStyles = {
              'text-green-500': 'bg-green-500/20',
              'text-blue-500': 'bg-blue-500/20',
              'text-purple-500': 'bg-purple-500/20',
              'text-yellow-500': 'bg-yellow-500/20',
              'text-orange-500': 'bg-orange-500/20',
              'text-cyan-500': 'bg-cyan-500/20',
              'text-indigo-500': 'bg-indigo-500/20',
              'text-teal-500': 'bg-teal-500/20',
              'text-emerald-500': 'bg-emerald-500/20',
              'text-pink-500': 'bg-pink-500/20',
            };
            
            return (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group"
              >
                <AccordionTrigger className="text-left px-6 py-5 hover:no-underline group-hover:bg-primary/5 transition-colors">
                  <div className="flex items-start gap-4 w-full">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${iconBgStyles[item.color as keyof typeof iconBgStyles]} flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.question}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pl-14">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg md:text-xl font-semibold text-foreground mb-2">
              Ainda tem dúvidas?
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Estamos aqui para ajudar! Entre em contato com nossa equipe.
            </p>
            <Link 
              to="/contato"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
            >
              Entre em contato conosco
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};