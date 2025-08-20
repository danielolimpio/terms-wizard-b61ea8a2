import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TermsOfUseInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Termos de Uso: Guia Completo
            </h1>
            <p className="text-xl text-muted-foreground">
              Proteja seu negócio com termos de uso bem estruturados
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>📋</span>
                  O que são Termos de Uso?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Os Termos de Uso, também conhecidos como Termos de Serviço ou Termos e Condições, são um contrato 
                  legal entre uma empresa e seus usuários que estabelece as regras, direitos e responsabilidades para 
                  o uso de um produto, serviço ou plataforma digital. Este documento é fundamental para proteger 
                  juridicamente a empresa e definir claramente as expectativas de ambas as partes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Diferente da Política de Privacidade, que foca na proteção de dados, os Termos de Uso regulamentam 
                  o comportamento do usuário, limitam a responsabilidade da empresa e estabelecem as condições sob 
                  as quais o serviço pode ser utilizado. É um documento essencial que pode prevenir disputas legais 
                  e proteger a empresa de diversos riscos jurídicos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Importância Jurídica e Proteção Legal</CardTitle>
                <CardDescription>
                  Por que todo negócio digital precisa de termos de uso
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Os Termos de Uso servem como uma blindagem jurídica para empresas digitais, estabelecendo limites 
                  claros de responsabilidade e definindo as condições sob as quais o serviço é oferecido. Sem este 
                  documento, empresas ficam vulneráveis a processos judiciais, interpretações adversas da legislação 
                  e disputas desnecessárias com usuários.
                </p>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">🚨 Riscos da Ausência de Termos de Uso:</h4>
                  <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                    <li>Responsabilização ilimitada por danos ou prejuízos</li>
                    <li>Impossibilidade de restringir tipos de uso inadequado</li>
                    <li>Vulnerabilidade a processos por violação de direitos</li>
                    <li>Dificuldade para suspender ou encerrar contas problemáticas</li>
                    <li>Ausência de proteção para propriedade intelectual</li>
                    <li>Impossibilidade de definir jurisdição para disputas</li>
                  </ul>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  No Brasil, embora não exista legislação específica exigindo Termos de Uso, o Código Civil, o Código 
                  de Defesa do Consumidor e o Marco Civil da Internet fornecem base legal para sua aplicação. 
                  Tribunais brasileiros têm reconhecido a validade destes documentos quando bem estruturados e 
                  claramente apresentados aos usuários.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tipos de Plataformas que Necessitam</CardTitle>
                <CardDescription>
                  Quando implementar termos de uso é essencial
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Praticamente qualquer plataforma digital que permita interação de usuários, transações comerciais 
                  ou ofereça serviços precisa de Termos de Uso. A complexidade e especificidade do documento variarão 
                  conforme o tipo e risco do negócio.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-blue-600 mb-2">🛒 E-commerce</h4>
                      <p className="text-sm text-muted-foreground">
                        Condições de venda, política de devolução, responsabilidade por produtos, 
                        processo de checkout, garantias e limitações.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-green-600 mb-2">💰 Fintechs</h4>
                      <p className="text-sm text-muted-foreground">
                        Regulamentações financeiras, limites de transação, KYC, prevenção à 
                        lavagem de dinheiro, responsabilidades fiscais.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-purple-600 mb-2">🎓 EdTech</h4>
                      <p className="text-sm text-muted-foreground">
                        Acesso a conteúdo, certificações, propriedade intelectual, 
                        comportamento em fóruns, política de reembolso.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-orange-600 mb-2">🌐 SaaS</h4>
                      <p className="text-sm text-muted-foreground">
                        Níveis de serviço, uptime, suporte técnico, limites de uso, 
                        backup de dados, rescisão de contrato.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-red-600 mb-2">📱 Apps Mobile</h4>
                      <p className="text-sm text-muted-foreground">
                        Permissões do dispositivo, uso offline, atualizações, 
                        compatibilidade, funcionalidades premium.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-cyan-600 mb-2">🤝 Marketplaces</h4>
                      <p className="text-sm text-muted-foreground">
                        Relação entre vendedores e compradores, taxas, disputas, 
                        qualidade de produtos, avaliações.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Perspectiva do Google e SEO</CardTitle>
                <CardDescription>
                  Como termos de uso impactam presença digital
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  O Google e outros mecanismos de busca consideram a presença de Termos de Uso como um indicador de 
                  credibilidade e profissionalismo de um site. Embora não seja um fator direto de ranking, sites com 
                  documentos legais bem estruturados tendem a transmitir mais confiança aos usuários e aos algoritmos.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">🎯 Benefícios para SEO:</h4>
                  <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                    <li><strong>Confiança do Usuário:</strong> Maior tempo de permanência no site</li>
                    <li><strong>Taxa de Conversão:</strong> Usuários mais confiantes convertem mais</li>
                    <li><strong>Google Ads:</strong> Políticas claras melhoram aprovação de anúncios</li>
                    <li><strong>E-A-T (Expertise, Authoritativeness, Trustworthiness):</strong> Melhora percepção de autoridade</li>
                    <li><strong>Conformidade:</strong> Reduz risco de penalizações por práticas inadequadas</li>
                  </ul>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Para negócios que utilizam Google Ads, AdSense ou Google Shopping, ter Termos de Uso claros pode 
                  facilitar a aprovação de campanhas e reduzir o risco de suspensão de contas. O Google valoriza 
                  transparência e sites que demonstram profissionalismo através de documentos legais completos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Elementos Essenciais dos Termos de Uso</CardTitle>
                <CardDescription>
                  Componentes que não podem faltar no documento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Um documento de Termos de Uso completo deve abordar todos os aspectos da relação entre empresa e 
                  usuário, estabelecendo regras claras e protegendo ambas as partes. Cada seção deve ser específica 
                  ao tipo de negócio e aos riscos envolvidos.
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-2">1. Aceitação dos Termos</h4>
                    <p className="text-sm text-muted-foreground">
                      Como e quando os termos são aceitos, idade mínima para uso, consentimento parental 
                      para menores de idade.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-2">2. Descrição do Serviço</h4>
                    <p className="text-sm text-muted-foreground">
                      O que é oferecido, limitações técnicas, disponibilidade, funcionalidades 
                      incluídas e excluídas.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold mb-2">3. Condições de Uso</h4>
                    <p className="text-sm text-muted-foreground">
                      Comportamentos permitidos e proibidos, restrições geográficas, 
                      limites de idade, uso comercial vs. pessoal.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold mb-2">4. Contas de Usuário</h4>
                    <p className="text-sm text-muted-foreground">
                      Criação de conta, responsabilidade por credenciais, suspensão, 
                      encerramento, recuperação de conta.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold mb-2">5. Propriedade Intelectual</h4>
                    <p className="text-sm text-muted-foreground">
                      Direitos autorais, marcas registradas, licenças de uso, 
                      conteúdo gerado pelo usuário, DMCA.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h4 className="font-semibold mb-2">6. Limitação de Responsabilidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Isenções de responsabilidade, danos diretos e indiretos, 
                      force majeure, disponibilidade do serviço.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-semibold mb-2">7. Rescisão e Suspensão</h4>
                    <p className="text-sm text-muted-foreground">
                      Motivos para suspensão, processo de rescisão, 
                      consequências do encerramento, recuperação de dados.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Estratégias de Implementação</CardTitle>
                <CardDescription>
                  Como apresentar e fazer valer os termos de uso
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">📝</span>
                      <div>
                        <h4 className="font-medium">Apresentação Clara</h4>
                        <p className="text-sm text-muted-foreground">
                          Link visível no rodapé, processo de cadastro, checkout e páginas importantes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✅</span>
                      <div>
                        <h4 className="font-medium">Consentimento Ativo</h4>
                        <p className="text-sm text-muted-foreground">
                          Checkbox obrigatório, não pré-marcado, com linguagem clara sobre aceitação.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-purple-500 mt-1">🔄</span>
                      <div>
                        <h4 className="font-medium">Controle de Versões</h4>
                        <p className="text-sm text-muted-foreground">
                          Histórico de alterações, notificação de mudanças, data da última atualização.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">⚖️</span>
                      <div>
                        <h4 className="font-medium">Validade Legal</h4>
                        <p className="text-sm text-muted-foreground">
                          Revisão jurídica, adequação à legislação local, cláusulas válidas.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">🎯</span>
                      <div>
                        <h4 className="font-medium">Especificidade do Negócio</h4>
                        <p className="text-sm text-muted-foreground">
                          Adaptação aos riscos específicos, setor de atuação, tipo de usuários.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-500 mt-1">📞</span>
                      <div>
                        <h4 className="font-medium">Canal de Comunicação</h4>
                        <p className="text-sm text-muted-foreground">
                          Meio de contato para dúvidas, disputas e esclarecimentos sobre os termos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">💡 Dica Importante:</h4>
                  <p className="text-sm text-yellow-700">
                    Mantenha uma cópia de quando cada usuário aceitou os termos. Isso pode ser crucial 
                    em disputas legais para provar que o usuário concordou com as condições específicas.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center pt-8">
              <Button 
                variant="google" 
                size="lg"
                onClick={() => window.location.href = '/?policy=terms-of-use'}
              >
                Gerar Termos de Uso Agora
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}