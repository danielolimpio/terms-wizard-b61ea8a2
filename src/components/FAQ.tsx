import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "A política de privacidade gerada é válida juridicamente?",
    answer: "Sim, nossos modelos são baseados em legislações atuais como a LGPD e GDPR. No entanto, recomendamos sempre consultar um advogado para adaptações específicas ao seu negócio."
  },
  {
    question: "Preciso de um advogado para revisar a política?",
    answer: "Não é obrigatório, mas altamente recomendado para garantir total conformidade com as leis aplicáveis ao seu setor."
  },
  {
    question: "Posso usar a política para meu site no Brasil e na Europa?",
    answer: "Sim, nossos modelos são adaptados para atender às exigências da LGPD (Brasil) e GDPR (União Europeia)."
  },
  {
    question: "É realmente grátis?",
    answer: "Sim! Nosso gerador de políticas é 100% gratuito, sem taxas ocultas, sem limites de uso e sem necessidade de cadastro. Você pode gerar quantas políticas precisar, a qualquer momento, sem pagar nada."
  },
  {
    question: "As políticas geradas são válidas juridicamente?",
    answer: "Sim. Nossas políticas seguem as diretrizes da LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018), GDPR e outras regulamentações internacionais. Os documentos são baseados em templates validados por especialistas. No entanto, recomendamos que você revise o conteúdo e, se necessário, consulte um advogado para adequações específicas ao seu negócio."
  },
  {
    question: "Posso usar as políticas para fins comerciais?",
    answer: "Sim! Todos os documentos gerados podem ser usados livremente para qualquer finalidade, seja pessoal ou comercial. Você tem total direito de uso, modificação e distribuição das políticas criadas. Não há restrições de licenciamento."
  },
  {
    question: "Preciso criar uma conta para usar o gerador?",
    answer: "Não! Nosso gerador funciona de forma completamente anônima. Você não precisa criar conta, fazer login ou fornecer qualquer informação pessoal. Basta preencher o formulário e gerar sua política instantaneamente."
  },
  {
    question: "Quanto tempo leva para gerar uma política?",
    answer: "A geração de documentos é instantânea! Após preencher o formulário com as informações do seu site (nome, URL, e-mail de contato), sua política será criada em menos de 10 segundos. Você pode baixar, copiar ou editar imediatamente."
  },
  {
    question: "Posso editar a política depois de gerar?",
    answer: "Sim! Você pode copiar o texto gerado e editá-lo livremente em qualquer editor de texto (Word, Google Docs, etc.). Além disso, oferecemos a opção de baixar em diferentes formatos: TXT, DOC e PDF, facilitando a edição posterior."
  },
  {
    question: "As políticas estão atualizadas com a LGPD de 2026?",
    answer: "Sim! Todos os nossos templates são atualizados regularmente para refletir as mudanças na legislação brasileira (LGPD), europeia (GDPR) e de outras jurisdições. A última atualização foi em novembro de 2025, incluindo as novas diretrizes da ANPD e ePrivacy Regulation."
  },
  {
    question: "Que tipos de políticas posso gerar?",
    answer: "Oferecemos mais de 12 tipos de documentos legais: Política de Privacidade, Termos de Uso, Política de Cookies, Política de Reembolso, Política de Transparência, Política de Segurança, Política de Propriedade Intelectual, Política de Conteúdo, Política Antispam, Política de Moderação de Comentários, Política de Acessibilidade e Política de Sustentabilidade."
  },
  {
    question: "As políticas funcionam para sites internacionais?",
    answer: "Sim! Nossas políticas são compatíveis com LGPD (Brasil), GDPR (União Europeia), CCPA (Califórnia/EUA) e outras regulamentações internacionais. Se seu site atende visitantes de múltiplos países, os documentos gerados já contemplam as principais exigências legais globais."
  },
  {
    question: "Posso gerar políticas para e-commerce e lojas online?",
    answer: "Sim! Temos políticas específicas para e-commerce, incluindo Política de Reembolso, Termos de Uso com cláusulas de compra e venda, Política de Cookies para rastreamento de conversões e muito mais. Ideal para Shopify, WooCommerce, Mercado Livre e outras plataformas."
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
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="h-6 md:h-8 w-6 md:w-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Perguntas Frequentes sobre Política de Privacidade Grátis
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Tire todas as suas dúvidas sobre nosso gerador de políticas legais gratuito
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-4 md:p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-foreground hover:text-primary transition-colors py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            Ainda tem dúvidas? Estamos aqui para ajudar!
          </p>
          <a 
            href="/contato" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm md:text-base"
          >
            Entre em contato conosco
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};