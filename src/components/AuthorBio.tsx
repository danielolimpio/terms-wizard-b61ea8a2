import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";
import authorPhoto from "@/assets/author-photo.jpg";

export const AuthorBio = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mt-12 border-2 border-primary/20">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Foto do autor */}
          <div className="flex-shrink-0">
            <img 
              src={authorPhoto} 
              alt="Fundador do Políticas de Privacidade" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-primary/10"
            />
          </div>

          {/* Informações do autor */}
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Sobre o Autor
              </h3>
              <p className="text-sm text-muted-foreground">
                Especialista em Conformidade Digital e Proteção de Dados
              </p>
            </div>

            {/* Descrição com Ver Mais */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sou desenvolvedor e pesquisador há mais de 20 anos em governança digital e adequação legal de websites no Brasil e no exterior. Fundei o Políticas de Privacidade para tornar o cumprimento da LGPD, GDPR e outras normas acessível — especialmente a pequenos empreendedores, criadores de conteúdo e donos de e-commerce sem suporte jurídico.
              </p>

              {isExpanded && (
                <>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Trabalho em parceria com especialistas em Direito Digital para oferecer modelos claros, atualizados e alinhados às melhores práticas globais. Meu objetivo nunca foi vender documentos, mas resolver um problema real: a burocracia, o custo e a falta de informação que impedem sites de operarem com segurança jurídica.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Este projeto nasceu da análise de políticas de empresas como Google, Meta e Shopify, e é 100% gratuito, sem cadastro ou obrigações — porque proteger a privacidade dos usuários deve ser um padrão, não um luxo. Se você está aqui, busca clareza, confiança e tranquilidade. E é isso que me motiva a atualizá-lo todos os dias.
                  </p>
                </>
              )}

              <Button
                variant="link"
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-0 h-auto text-primary hover:text-primary/80"
              >
                {isExpanded ? "Ver Menos" : "Ver Mais"}
              </Button>
            </div>

            {/* Redes sociais */}
            <div className="pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">
                Fundador de Políticas de Privacidade | Comprometido com a web aberta, ética e legalmente segura
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/danielolimpio.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://x.com/danielolimpio_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/danielolimpio_com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/danielolimpio-com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://danielolimpio.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Website"
                >
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
