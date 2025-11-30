import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Cookie, Shield, Eye, Settings, FileText, AlertTriangle, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 shadow-lg">
              <Cookie className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Política de Cookies
            </h1>
            <p className="text-xl text-muted-foreground">
              Como utilizamos cookies em nosso site
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <Card className="border-2 border-orange-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Cookie className="h-6 w-6 text-orange-500" />
                    <h2 className="text-2xl font-semibold text-foreground">O que são Cookies?</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed">
                    Cookies são pequenos arquivos de texto que são colocados no seu computador 
                    ou dispositivo móvel quando você visita um site. Eles são amplamente utilizados 
                    para fazer com que os sites funcionem de forma mais eficiente, bem como para 
                    fornecer informações aos proprietários do site.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Settings className="h-6 w-6 text-orange-500" />
                    <h2 className="text-2xl font-semibold text-foreground">Como Usamos Cookies</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Utilizamos cookies para melhorar sua experiência em nosso site e fornecer 
                    nossos serviços de forma mais eficaz. Nossos cookies nos ajudam a:
                  </p>
                  <ul className="list-disc list-inside space-y-3 ml-4 text-base text-foreground leading-relaxed">
                    <li>Lembrar suas preferências e configurações</li>
                    <li>Entender como você usa nosso site</li>
                    <li>Melhorar a funcionalidade do site</li>
                    <li>Personalizar sua experiência</li>
                    <li>Garantir a segurança do site</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-6 w-6 text-orange-500" />
                    <h2 className="text-2xl font-semibold text-foreground">Tipos de Cookies que Usamos</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Cookies Essenciais</h3>
                      <p className="text-base text-foreground leading-relaxed mb-3">
                        Estes cookies são necessários para o funcionamento básico do site e 
                        não podem ser desativados. Eles incluem:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-base text-foreground leading-relaxed">
                        <li>Cookies de sessão para manter você logado</li>
                        <li>Cookies de segurança para proteger contra ataques</li>
                        <li>Cookies de funcionalidade para lembrar suas preferências</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Cookies de Análise</h3>
                      <p className="text-base text-foreground leading-relaxed mb-3">
                        Estes cookies nos ajudam a entender como os visitantes interagem com 
                        nosso site, coletando informações anonimamente:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-base text-foreground leading-relaxed">
                        <li>Número de visitantes</li>
                        <li>Páginas mais visitadas</li>
                        <li>Tempo gasto no site</li>
                        <li>Origem dos visitantes</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Cookies de Preferências</h3>
                      <p className="text-base text-foreground leading-relaxed mb-3">
                        Estes cookies permitem que o site lembre informações que mudam a 
                        forma como ele se comporta ou aparece:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-base text-foreground leading-relaxed">
                        <li>Idioma preferido</li>
                        <li>Tema (claro/escuro)</li>
                        <li>Configurações de acessibilidade</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Eye className="h-6 w-6 text-orange-500" />
                    <h2 className="text-2xl font-semibold text-foreground">Cookies de Terceiros</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Também podemos usar serviços de terceiros que definem cookies em seu dispositivo:
                  </p>
                  <ul className="list-disc list-inside space-y-3 ml-4 text-base text-foreground leading-relaxed">
                    <li><strong>Google Analytics:</strong> Para análise de tráfego e comportamento do usuário</li>
                    <li><strong>Serviços de CDN:</strong> Para entrega otimizada de conteúdo</li>
                    <li><strong>Serviços de segurança:</strong> Para proteção contra ameaças</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Settings className="h-6 w-6 text-orange-500" />
                    <h2 className="text-2xl font-semibold text-foreground">Gerenciando Cookies</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Você tem controle sobre os cookies e pode gerenciá-los de várias maneiras:
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Através do Navegador</h3>
                      <p className="text-base text-foreground leading-relaxed mb-3">
                        A maioria dos navegadores permite controlar cookies através das configurações. 
                        Você pode:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-base text-foreground leading-relaxed">
                        <li>Bloquear todos os cookies</li>
                        <li>Permitir apenas cookies essenciais</li>
                        <li>Excluir cookies existentes</li>
                        <li>Configurar alertas quando cookies são definidos</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Através de Ferramentas de Opt-out</h3>
                      <p className="text-base text-foreground leading-relaxed mb-3">
                        Você pode optar por não receber cookies de análise específicos:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-base text-foreground leading-relaxed">
                        <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                        <li><a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-6 w-6 text-orange-500" />
                    <h2 className="text-2xl font-semibold text-foreground">Impacto da Desativação de Cookies</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Embora você possa desativar cookies, isso pode afetar sua experiência no site:
                  </p>
                  <ul className="list-disc list-inside space-y-3 ml-4 text-base text-foreground leading-relaxed">
                    <li>Algumas funcionalidades podem não funcionar corretamente</li>
                    <li>Suas preferências podem não ser salvas</li>
                    <li>Você pode precisar fazer login novamente a cada visita</li>
                    <li>O site pode não lembrar suas configurações</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-6 w-6 text-orange-500" />
                    <h2 className="text-2xl font-semibold text-foreground">Atualizações desta Política</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Podemos atualizar esta política de cookies de tempos em tempos. Quando fizermos 
                    mudanças significativas, notificaremos você através do site ou por outros meios.
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    <strong>Última atualização:</strong> Novembro de 2025
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Lock className="h-6 w-6 text-orange-500" />
                    <h2 className="text-2xl font-semibold text-foreground">Contato</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed">
                    Se você tiver dúvidas sobre nossa política de cookies, entre em contato 
                    conosco através do e-mail: contato@politicadeprivacidade.org
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}
