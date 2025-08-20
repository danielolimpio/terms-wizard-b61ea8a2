import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CookiePolicyInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              O que é uma Política de Cookies?
            </h1>
            <p className="text-xl text-muted-foreground">
              Entenda a importância e como criar uma política de cookies eficaz
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>🍪</span>
                  Definição
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Uma Política de Cookies é um documento legal que informa aos usuários sobre 
                  o uso de cookies em seu site. Ela explica quais tipos de cookies são utilizados, 
                  para que servem, como são coletados e como os usuários podem gerenciá-los.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Por que é Importante?</CardTitle>
                <CardDescription>
                  Conformidade legal e transparência
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium">Conformidade com LGPD</h4>
                        <p className="text-sm text-muted-foreground">
                          Atende aos requisitos da Lei Geral de Proteção de Dados
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium">Transparência</h4>
                        <p className="text-sm text-muted-foreground">
                          Demonstra transparência na coleta de dados
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium">Construção de Confiança</h4>
                        <p className="text-sm text-muted-foreground">
                          Aumenta a confiança dos usuários em seu site
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium">Conformidade com GDPR</h4>
                        <p className="text-sm text-muted-foreground">
                          Essencial para usuários europeus
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium">Google AdSense</h4>
                        <p className="text-sm text-muted-foreground">
                          Requisito obrigatório para monetização
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium">Analytics</h4>
                        <p className="text-sm text-muted-foreground">
                          Necessária para ferramentas de análise
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>O que deve conter?</CardTitle>
                <CardDescription>
                  Elementos essenciais de uma política de cookies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">1. Definição de Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Explicação clara do que são cookies e como funcionam
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">2. Tipos de Cookies Utilizados</h4>
                    <p className="text-sm text-muted-foreground">
                      Categorização: essenciais, funcionais, analíticos, publicitários
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">3. Finalidade de Cada Cookie</h4>
                    <p className="text-sm text-muted-foreground">
                      Explicação específica do uso de cada tipo de cookie
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">4. Cookies de Terceiros</h4>
                    <p className="text-sm text-muted-foreground">
                      Lista de serviços externos que utilizam cookies (Google, Facebook, etc.)
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">5. Como Gerenciar Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Instruções para aceitar, recusar ou excluir cookies
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">6. Informações de Contato</h4>
                    <p className="text-sm text-muted-foreground">
                      Como entrar em contato para dúvidas sobre cookies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tipos de Cookies</CardTitle>
                <CardDescription>
                  Conheça as diferentes categorias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2 text-green-600">Cookies Essenciais</h4>
                      <p className="text-sm text-muted-foreground">
                        Necessários para o funcionamento básico do site. Não podem ser desativados.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2 text-blue-600">Cookies Funcionais</h4>
                      <p className="text-sm text-muted-foreground">
                        Melhoram a funcionalidade e personalização do site.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2 text-orange-600">Cookies Analíticos</h4>
                      <p className="text-sm text-muted-foreground">
                        Coletam informações sobre como os visitantes usam o site.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2 text-purple-600">Cookies Publicitários</h4>
                      <p className="text-sm text-muted-foreground">
                        Usados para exibir anúncios relevantes aos usuários.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Melhores Práticas</CardTitle>
                <CardDescription>
                  Como implementar corretamente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">💡</span>
                    <div>
                      <h4 className="font-medium">Banner de Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Implemente um banner informativo que permita aceitar ou recusar cookies
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">💡</span>
                    <div>
                      <h4 className="font-medium">Link Visível</h4>
                      <p className="text-sm text-muted-foreground">
                        Mantenha um link para a política de cookies sempre visível (rodapé)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">💡</span>
                    <div>
                      <h4 className="font-medium">Linguagem Clara</h4>
                      <p className="text-sm text-muted-foreground">
                        Use linguagem simples e evite jargões jurídicos complexos
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">💡</span>
                    <div>
                      <h4 className="font-medium">Atualizações Regulares</h4>
                      <p className="text-sm text-muted-foreground">
                        Mantenha a política atualizada conforme mudanças no site
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legislação Aplicável</CardTitle>
                <CardDescription>
                  Leis que regulamentam o uso de cookies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">🇧🇷 LGPD</h4>
                    <p className="text-sm text-muted-foreground">
                      Lei Geral de Proteção de Dados (Brasil)
                    </p>
                  </div>
                  
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">🇪🇺 GDPR</h4>
                    <p className="text-sm text-muted-foreground">
                      Regulamento Geral sobre Proteção de Dados (Europa)
                    </p>
                  </div>
                  
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">🇺🇸 CCPA</h4>
                    <p className="text-sm text-muted-foreground">
                      California Consumer Privacy Act (Califórnia)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                variant="google" 
                size="lg"
                onClick={() => window.location.href = '/?policy=cookie-policy'}
              >
                Gerar Política de Cookies Agora
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}