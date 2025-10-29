import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Gerador Política de Privacidade
            </h1>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa saber sobre políticas de privacidade para seu site
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>🔒</span>
                  O que é uma Política de Privacidade?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Uma Política de Privacidade é um documento legal fundamental que detalha como uma organização coleta, 
                  processa, armazena e protege os dados pessoais de seus usuários. Este documento serve como uma ponte 
                  transparente entre a empresa e seus usuários, estabelecendo confiança mútua através da clareza sobre 
                  práticas de tratamento de dados.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  No contexto digital atual, onde dados pessoais são constantemente coletados através de formulários, 
                  cookies, analytics e interações diversas, a Política de Privacidade tornou-se não apenas uma 
                  necessidade legal, mas um diferencial competitivo que demonstra o compromisso da empresa com a 
                  proteção da privacidade dos usuários.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Importância Legal e Regulatória</CardTitle>
                <CardDescription>
                  Conformidade com as principais legislações de proteção de dados
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A Política de Privacidade é obrigatória sob diversas legislações globais. No Brasil, a Lei Geral de 
                  Proteção de Dados (LGPD) exige transparência total sobre o tratamento de dados pessoais. Na Europa, 
                  o Regulamento Geral sobre Proteção de Dados (GDPR) impõe requisitos ainda mais rigorosos, incluindo 
                  multas que podem chegar a 4% do faturamento anual da empresa.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nos Estados Unidos, leis como CCPA (California Consumer Privacy Act) e COPPA (Children's Online 
                  Privacy Protection Act) regulamentam aspectos específicos da privacidade digital. O não cumprimento 
                  dessas regulamentações pode resultar em multas significativas, processos judiciais e danos 
                  irreparáveis à reputação da empresa.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-amber-800 mb-2">⚠️ Consequências do Não Cumprimento:</h4>
                  <ul className="list-disc list-inside text-sm text-amber-700 space-y-1">
                    <li>Multas que podem chegar a milhões de reais</li>
                    <li>Processos judiciais e ações coletivas</li>
                    <li>Perda de confiança dos usuários</li>
                    <li>Danos à reputação da marca</li>
                    <li>Suspensão de serviços por plataformas como Google</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tipos de Sites que Necessitam</CardTitle>
                <CardDescription>
                  Quando e onde implementar uma política de privacidade
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Praticamente qualquer site ou aplicação digital que colete dados pessoais necessita de uma Política 
                  de Privacidade. Isso inclui desde blogs pessoais que utilizam Google Analytics até grandes 
                  plataformas de e-commerce com milhões de usuários.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-600">🛒 E-commerce e Lojas Online</h4>
                    <p className="text-sm text-muted-foreground">
                      Coletam dados de pagamento, endereço, histórico de compras, preferências e comportamento de navegação.
                    </p>
                    
                    <h4 className="font-semibold text-blue-600">💼 Sites Corporativos</h4>
                    <p className="text-sm text-muted-foreground">
                      Formulários de contato, newsletters, downloads de materiais e tracking de visitantes.
                    </p>
                    
                    <h4 className="font-semibold text-purple-600">📱 Aplicativos Mobile</h4>
                    <p className="text-sm text-muted-foreground">
                      Localização, contatos, fotos, dados de uso e identificadores únicos do dispositivo.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-orange-600">🎓 Plataformas Educacionais</h4>
                    <p className="text-sm text-muted-foreground">
                      Dados acadêmicos, progresso de aprendizagem, interações e informações dos alunos.
                    </p>
                    
                    <h4 className="font-semibold text-red-600">🏥 Sites de Saúde</h4>
                    <p className="text-sm text-muted-foreground">
                      Informações médicas sensíveis, histórico de saúde e dados biométricos.
                    </p>
                    
                    <h4 className="font-semibold text-cyan-600">🌐 Redes Sociais</h4>
                    <p className="text-sm text-muted-foreground">
                      Perfis pessoais, interações, conteúdo compartilhado e redes de relacionamento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Como o Google Avalia Políticas de Privacidade</CardTitle>
                <CardDescription>
                  Impacto no SEO e serviços Google
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  O Google considera a presença e qualidade de políticas de privacidade como um fator de confiança e 
                  autoridade do site. Sites sem políticas de privacidade adequadas podem enfrentar penalizações no 
                  ranking de busca e ter serviços suspensos.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🎯 Requisitos do Google:</h4>
                  <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                    <li><strong>Google AdSense:</strong> Política de privacidade é obrigatória para aprovação</li>
                    <li><strong>Google Analytics:</strong> Deve ser mencionado na política</li>
                    <li><strong>Google Ads:</strong> Políticas claras melhoram Quality Score</li>
                    <li><strong>Google My Business:</strong> Aumenta credibilidade local</li>
                    <li><strong>Google Play Store:</strong> Obrigatório para apps</li>
                  </ul>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Além disso, o Google privilegia sites que demonstram transparência e conformidade com regulamentações 
                  de privacidade. Sites com políticas bem estruturadas tendem a ter melhor performance em termos de 
                  confiança do usuário, tempo de permanência e taxa de conversão.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Elementos Essenciais de uma Política de Privacidade</CardTitle>
                <CardDescription>
                  O que deve estar incluso no documento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Uma Política de Privacidade completa deve abordar todos os aspectos do tratamento de dados, desde a 
                  coleta até o descarte. Cada seção deve ser clara, específica e facilmente compreensível pelos usuários.
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-2">1. Identificação do Controlador</h4>
                    <p className="text-sm text-muted-foreground">
                      Nome da empresa, CNPJ, endereço completo e informações de contato do responsável pela proteção de dados.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-2">2. Tipos de Dados Coletados</h4>
                    <p className="text-sm text-muted-foreground">
                      Dados pessoais (nome, email, telefone), dados de navegação (IP, cookies), dados comportamentais 
                      e qualquer informação sensível.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold mb-2">3. Finalidades do Tratamento</h4>
                    <p className="text-sm text-muted-foreground">
                      Propósitos específicos para cada tipo de dado: marketing, análise, personalização, 
                      cumprimento de contratos, obrigações legais.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold mb-2">4. Base Legal para o Tratamento</h4>
                    <p className="text-sm text-muted-foreground">
                      Consentimento, legítimo interesse, cumprimento de contrato, obrigação legal ou proteção da vida.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold mb-2">5. Compartilhamento com Terceiros</h4>
                    <p className="text-sm text-muted-foreground">
                      Lista de parceiros, fornecedores e serviços que têm acesso aos dados, incluindo Google, 
                      Facebook, processadores de pagamento.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h4 className="font-semibold mb-2">6. Direitos dos Titulares</h4>
                    <p className="text-sm text-muted-foreground">
                      Acesso, correção, exclusão, portabilidade, oposição ao tratamento e revogação do consentimento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Melhores Práticas de Implementação</CardTitle>
                <CardDescription>
                  Como criar e manter uma política eficaz
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✅</span>
                      <div>
                        <h4 className="font-medium">Linguagem Clara e Acessível</h4>
                        <p className="text-sm text-muted-foreground">
                          Evite jargões jurídicos e use linguagem que qualquer usuário possa compreender.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✅</span>
                      <div>
                        <h4 className="font-medium">Fácil Acesso</h4>
                        <p className="text-sm text-muted-foreground">
                          Link visível no rodapé, popup de cookies e formulários de coleta de dados.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✅</span>
                      <div>
                        <h4 className="font-medium">Atualizações Regulares</h4>
                        <p className="text-sm text-muted-foreground">
                          Revise e atualize conforme mudanças na coleta de dados ou legislação.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✅</span>
                      <div>
                        <h4 className="font-medium">Versionamento</h4>
                        <p className="text-sm text-muted-foreground">
                          Mantenha histórico de versões e informe usuários sobre alterações.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✅</span>
                      <div>
                        <h4 className="font-medium">Canal de Contato</h4>
                        <p className="text-sm text-muted-foreground">
                          Disponibilize meio de contato específico para questões de privacidade.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✅</span>
                      <div>
                        <h4 className="font-medium">Auditoria Legal</h4>
                        <p className="text-sm text-muted-foreground">
                          Consulte advogados especializados para validação do documento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center pt-8">
              <Button 
                variant="google" 
                size="lg"
                onClick={() => window.location.href = '/?policy=privacy-policy'}
              >
                Gerar Política de Privacidade
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}