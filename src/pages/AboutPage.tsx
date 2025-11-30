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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl mb-6 shadow-lg">
              <Globe className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Sobre o Gerador de Políticas
            </h1>
            <p className="text-xl text-muted-foreground">
              A solução mais completa para criar documentos legais profissionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-blue-500/10 to-blue-500/5">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <span>Nossa Missão</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Democratizar o acesso a documentos legais de qualidade, permitindo que 
                  qualquer pessoa ou empresa possa gerar políticas profissionais de forma 
                  rápida, fácil e acessível.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-purple-500/10 to-purple-500/5">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <span>Nossa Visão</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Ser a principal referência em geração automatizada de políticas legais, 
                  ajudando milhares de empresas a se manterem em conformidade legal de 
                  forma simples e eficiente.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12 border-2 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10">
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

          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10">
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

          <Card className="mt-12 border-2 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10">
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
                    Sou desenvolvedor e pesquisador há mais de 20 anos em governança digital e adequação legal de websites no Brasil e no exterior. Fundei o Políticas de Privacidade para tornar o cumprimento da LGPD, GDPR e outras normas acessível — especialmente a pequenos empreendedores, criadores de conteúdo e donos de e-commerce sem suporte jurídico.
                  </p>
                  <p className="text-muted-foreground">
                    Trabalho em parceria com especialistas em Direito Digital para oferecer modelos claros, atualizados e alinhados às melhores práticas globais. Meu objetivo nunca foi vender documentos, mas resolver um problema real: a burocracia, o custo e a falta de informação que impedem sites de operarem com segurança jurídica.
                  </p>
                  <p className="text-muted-foreground">
                    Este projeto nasceu da análise de políticas de empresas como Google, Meta e Shopify, e é 100% gratuito, sem cadastro ou obrigações — porque proteger a privacidade dos usuários deve ser um padrão, não um luxo. Se você está aqui, busca clareza, confiança e tranquilidade. E é isso que me motiva a atualizá-lo todos os dias.
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