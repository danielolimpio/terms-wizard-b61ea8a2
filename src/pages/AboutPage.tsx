import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdBanner } from "@/components/AdBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <AdBanner />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
}