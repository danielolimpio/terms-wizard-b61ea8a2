import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import authorPhoto from "@/assets/author-photo.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sobre Nós | Gerador de Políticas Legais Gratuito</title>
        <meta 
          name="description" 
          content="Conheça o gerador de políticas legais mais completo do Brasil. Ferramenta 100% gratuita para criar políticas de privacidade, termos de uso e mais." 
        />
        <link rel="canonical" href="https://politicadeprivacidade.org/sobre" />
      </Helmet>
      
      <StructuredData type="organization" />
      <StructuredData 
        type="breadcrumb" 
        items={[
          { name: "Sobre Nós", url: "/sobre" }
        ]} 
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ name: "Sobre Nós", url: "/sobre" }]} />
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Sobre o Gerador de Políticas
            </h1>
            <p className="text-xl text-muted-foreground">
              A solução mais completa para criar documentos legais profissionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>🎯</span>
                  Nossa Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Democratizar o acesso a documentos legais de qualidade, permitindo que 
                  qualquer pessoa ou empresa possa gerar políticas profissionais de forma 
                  rápida, fácil e acessível.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>🚀</span>
                  Nossa Visão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser a principal referência em geração automatizada de políticas legais, 
                  ajudando milhares de empresas a se manterem em conformidade legal de 
                  forma simples e eficiente.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Por Que Escolher Nosso Gerador?</CardTitle>
              <CardDescription>
                Vantagens que fazem a diferença
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Conformidade Legal</h4>
                      <p className="text-sm text-muted-foreground">
                        Todas as políticas seguem as leis brasileiras (LGPD, CDC) e internacionais (GDPR)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Múltiplos Formatos</h4>
                      <p className="text-sm text-muted-foreground">
                        Baixe em PDF, Word, TXT ou copie com um clique
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Personalização Completa</h4>
                      <p className="text-sm text-muted-foreground">
                        Adapte cada política às necessidades específicas do seu negócio
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Múltiplos Idiomas</h4>
                      <p className="text-sm text-muted-foreground">
                        Gere políticas em português, inglês e outros idiomas
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Atualização Constante</h4>
                      <p className="text-sm text-muted-foreground">
                        Nossos templates são atualizados conforme mudanças na legislação
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <div>
                      <h4 className="font-medium">Suporte Especializado</h4>
                      <p className="text-sm text-muted-foreground">
                        Equipe qualificada pronta para ajudar quando você precisar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nossa História</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                O Gerador de Políticas nasceu da necessidade de simplificar um processo complexo 
                e custoso. Percebemos que muitas empresas, especialmente pequenos negócios e 
                startups, enfrentavam dificuldades para criar documentos legais adequados.
              </p>
              <p className="text-muted-foreground mb-4">
                Com uma equipe de especialistas em direito digital e tecnologia, desenvolvemos 
                uma plataforma que combina conhecimento jurídico com a praticidade da tecnologia, 
                tornando a criação de políticas legais acessível a todos.
              </p>
              <p className="text-muted-foreground">
                Hoje, já ajudamos milhares de empresas a se manterem em conformidade legal, 
                contribuindo para um ambiente digital mais transparente e seguro para todos.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Sobre o Autor – Especialista em Conformidade Digital e Proteção de Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <img 
                    src={authorPhoto} 
                    alt="Fundador do Políticas de Privacidade" 
                    className="w-48 h-48 rounded-lg object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-muted-foreground">
                    Sou desenvolvedor e pesquisador há mais de 8 anos no campo da governança digital e da adequação legal de websites no Brasil e no exterior. Fundei o Políticas de Privacidade com um objetivo claro: tornar o cumprimento da LGPD, GDPR e outras normas de proteção de dados acessível a todos, especialmente a pequenos empreendedores, criadores de conteúdo e donos de e-commerces que não contam com equipes jurídicas.
                  </p>
                  <p className="text-muted-foreground">
                    Não sou advogado, mas trabalho em constante diálogo com profissionais do Direito Digital para garantir que os modelos que disponibilizo sejam claros, atualizados e alinhados às melhores práticas internacionais. Meu foco nunca foi vender documentos — foi resolver um problema real: a burocracia, o custo e a falta de informação que impedem milhares de sites de operarem com segurança jurídica.
                  </p>
                  <p className="text-muted-foreground">
                    Este site foi construído com base em anos de análise de políticas de privacidade de empresas como Google, Meta, Shopify e startups brasileiras de alto crescimento. Tudo aqui é 100% gratuito, sem cadastro e sem obrigações — porque acredito que proteger a privacidade dos usuários não deveria ser um luxo, mas um padrão mínimo para qualquer site na web.
                  </p>
                  <p className="text-muted-foreground">
                    Se você está aqui, provavelmente busca mais do que um modelo: busca clareza, confiança e tranquilidade. E é exatamente isso que me motiva a atualizar este projeto diariamente.
                  </p>
                  <div className="pt-4">
                    <p className="text-sm font-medium text-foreground mb-3">
                      Fundador de Políticas de Privacidade<br />
                      Comprometido com a web aberta, ética e legalmente segura.
                    </p>
                    <div className="flex gap-4">
                      <a 
                        href="https://www.facebook.com/danielolimpio.com.br" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://x.com/danielolimpio_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="X (Twitter)"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://www.instagram.com/danielolimpio_com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/danielolimpio-com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://danielolimpio.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Website"
                      >
                        <Globe className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}