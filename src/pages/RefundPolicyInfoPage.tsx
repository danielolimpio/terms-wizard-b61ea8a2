import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RefundPolicyInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              O que é uma Política de Reembolso?
            </h1>
            <p className="text-xl text-muted-foreground">
              Entenda como criar uma política de reembolso clara e eficaz
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>💰</span>
                  Definição
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Uma Política de Reembolso é um documento que estabelece as condições, 
                  procedimentos e prazos sob os quais os clientes podem solicitar o 
                  reembolso de produtos ou serviços adquiridos. É essencial para 
                  estabelecer transparência e confiança na relação comercial.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Por que é Fundamental?</CardTitle>
                <CardDescription>
                  Importância para seu negócio
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
                          Atende ao Código de Defesa do Consumidor brasileiro
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium">Redução de Conflitos</h4>
                        <p className="text-sm text-muted-foreground">
                          Previne disputas e reclamações desnecessárias
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium">Transparência</h4>
                        <p className="text-sm text-muted-foreground">
                          Demonstra clareza nos processos comerciais
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium">Confiança do Cliente</h4>
                        <p className="text-sm text-muted-foreground">
                          Aumenta a segurança na compra
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium">Proteção Jurídica</h4>
                        <p className="text-sm text-muted-foreground">
                          Protege a empresa de processos
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium">Processos Claros</h4>
                        <p className="text-sm text-muted-foreground">
                          Padroniza procedimentos internos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Elementos Essenciais</CardTitle>
                <CardDescription>
                  O que sua política deve conter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">1. Condições para Reembolso</h4>
                    <p className="text-sm text-muted-foreground">
                      Especificação clara de quando o reembolso é aplicável
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">2. Prazos Definidos</h4>
                    <p className="text-sm text-muted-foreground">
                      Tempo limite para solicitação e processamento de reembolsos
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">3. Procedimentos de Solicitação</h4>
                    <p className="text-sm text-muted-foreground">
                      Passo a passo de como solicitar o reembolso
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">4. Formas de Reembolso</h4>
                    <p className="text-sm text-muted-foreground">
                      Como o dinheiro será devolvido (cartão, conta bancária, etc.)
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">5. Exceções e Limitações</h4>
                    <p className="text-sm text-muted-foreground">
                      Situações em que o reembolso não se aplica
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium mb-2">6. Informações de Contato</h4>
                    <p className="text-sm text-muted-foreground">
                      Como entrar em contato para solicitar reembolsos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tipos de Negócio</CardTitle>
                <CardDescription>
                  Considerações por segmento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2 text-blue-600">E-commerce</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Produtos físicos</li>
                        <li>• Estado da mercadoria</li>
                        <li>• Frete de devolução</li>
                        <li>• Prazo de 7 dias (CDC)</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2 text-green-600">Serviços Digitais</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Software/Apps</li>
                        <li>• Assinaturas</li>
                        <li>• Conteúdo digital</li>
                        <li>• Licenças</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2 text-orange-600">Cursos Online</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Garantia de satisfação</li>
                        <li>• Progresso mínimo</li>
                        <li>• Certificações</li>
                        <li>• Acesso vitalício</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2 text-purple-600">SaaS/Assinaturas</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Cancelamento pro-rata</li>
                        <li>• Períodos de teste</li>
                        <li>• Downgrade de planos</li>
                        <li>• Reembolso parcial</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Melhores Práticas</CardTitle>
                <CardDescription>
                  Como criar uma política eficaz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">💡</span>
                    <div>
                      <h4 className="font-medium">Seja Específico</h4>
                      <p className="text-sm text-muted-foreground">
                        Detalhe exatamente quais situações permitem reembolso
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">💡</span>
                    <div>
                      <h4 className="font-medium">Prazos Realistas</h4>
                      <p className="text-sm text-muted-foreground">
                        Estabeleça prazos que sejam justos para ambas as partes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">💡</span>
                    <div>
                      <h4 className="font-medium">Processo Simples</h4>
                      <p className="text-sm text-muted-foreground">
                        Torne o processo de reembolso o mais simples possível
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">💡</span>
                    <div>
                      <h4 className="font-medium">Comunique Claramente</h4>
                      <p className="text-sm text-muted-foreground">
                        Use linguagem clara e evite termos técnicos complexos
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">💡</span>
                    <div>
                      <h4 className="font-medium">Atualize Regularmente</h4>
                      <p className="text-sm text-muted-foreground">
                        Revise e atualize conforme mudanças no negócio
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legislação Brasileira</CardTitle>
                <CardDescription>
                  Direitos do consumidor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium mb-2">⚖️ Código de Defesa do Consumidor</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Direito de arrependimento: 7 dias corridos</li>
                      <li>• Compras online e fora do estabelecimento</li>
                      <li>• Devolução integral do valor pago</li>
                      <li>• Não cobrança de taxas adicionais</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium mb-2">📋 Marco Civil da Internet</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Transparência nas políticas</li>
                      <li>• Informações claras sobre reembolsos</li>
                      <li>• Facilidade de acesso às políticas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exemplos de Situações</CardTitle>
                <CardDescription>
                  Quando aplicar reembolsos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-green-600">✅ Reembolso Aplicável</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Produto com defeito</li>
                      <li>• Produto diferente do anunciado</li>
                      <li>• Arrependimento em até 7 dias</li>
                      <li>• Serviço não prestado</li>
                      <li>• Falha técnica do sistema</li>
                      <li>• Cancelamento de evento</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 text-red-600">❌ Exceções Comuns</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Produtos personalizados</li>
                      <li>• Serviços já consumidos</li>
                      <li>• Produtos perecíveis</li>
                      <li>• Software já baixado</li>
                      <li>• Prazo expirado</li>
                      <li>• Uso inadequado do produto</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                variant="google" 
                size="lg"
                onClick={() => window.location.href = '/?policy=refund-policy'}
              >
                Gerar Política de Reembolso Agora
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}