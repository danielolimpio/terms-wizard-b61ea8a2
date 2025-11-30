import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cookie, FileText, Shield, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const PoliticaCookiesInfoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            O que é Política de Cookies?
          </h1>
          <p className="text-xl text-muted-foreground">
            Entenda sobre a página dedicada à explicação do uso de cookies no seu site
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Cookie className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que é a Política de Cookies?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A <strong>Política de Cookies</strong> é uma página específica no seu site que detalha 
                completamente como cookies e tecnologias similares são utilizados. É diferente do banner 
                de cookies (popup) – esta é uma página completa com todas as informações detalhadas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Enquanto o banner solicita consentimento, a Política de Cookies é o documento educativo 
                que explica em profundidade o que são cookies, quais você usa, para que servem e como os 
                usuários podem gerenciá-los.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Diferença: Banner vs Página de Política</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-primary/20 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3">🔔 Banner de Cookies</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Popup que aparece na primeira visita</li>
                    <li>• Solicita consentimento</li>
                    <li>• Informação breve e direta</li>
                    <li>• Link para a política completa</li>
                    <li>• Botões de aceitar/rejeitar</li>
                  </ul>
                </div>
                <div className="border-2 border-primary/20 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3">📄 Página de Política</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Página dedicada no site</li>
                    <li>• Explicação detalhada</li>
                    <li>• Lista completa de cookies</li>
                    <li>• Instruções de gerenciamento</li>
                    <li>• Base educativa e informativa</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Por que é Necessária?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">⚖️ Exigência Legal</h3>
                  <p className="text-sm text-muted-foreground">
                    LGPD e GDPR exigem transparência completa sobre o uso de cookies, não apenas um aviso.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">📚 Educação do Usuário</h3>
                  <p className="text-sm text-muted-foreground">
                    Ajuda usuários a entenderem como seus dados são coletados e usados.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">🤝 Transparência</h3>
                  <p className="text-sm text-muted-foreground">
                    Demonstra compromisso com a privacidade e aumenta a confiança dos visitantes.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">🔍 SEO e Conformidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Google valoriza sites transparentes e em conformidade com regulamentações.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que Deve Conter?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>O que são cookies:</strong> Explicação clara e acessível sobre a tecnologia
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Tipos de cookies usados:</strong> Essenciais, desempenho, funcionais e marketing
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Finalidade de cada tipo:</strong> Para que cada categoria de cookie é utilizada
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Lista detalhada de cookies:</strong> Nome, finalidade, duração e provedor de cada cookie
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Cookies de terceiros:</strong> Google Analytics, Facebook Pixel, AdSense, etc.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Como gerenciar cookies:</strong> Instruções para cada navegador (Chrome, Firefox, Safari, Edge)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Como desativar cookies:</strong> Passo a passo para bloquear ou remover
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Impacto da desativação:</strong> O que deixa de funcionar ao desabilitar cookies
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Atualizações da política:</strong> Como e quando a política pode ser alterada
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Categorias de Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold mb-2">🟢 Cookies Essenciais</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Necessários para o funcionamento básico do site. Não podem ser desativados.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    Exemplo: cookies de sessão, preferências de idioma, carrinho de compras
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">🔵 Cookies de Desempenho</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Coletam informações sobre como os visitantes usam o site. Requerem consentimento.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    Exemplo: Google Analytics, Hotjar, métricas de velocidade
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold mb-2">🟣 Cookies de Funcionalidade</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Permitem recursos melhorados e personalização. Requerem consentimento.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    Exemplo: preferências salvas, chat ao vivo, vídeos incorporados
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold mb-2">🟠 Cookies de Marketing</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Rastreiam visitantes para publicidade direcionada. Requerem consentimento explícito.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    Exemplo: Facebook Pixel, Google Ads, retargeting
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Crie sua Política de Cookies
            </h2>
            <p className="text-white/90 mb-6">
              Gere uma política completa e detalhada em minutos
            </p>
            <Link to="/gerador-politica-cookies">
              <Button variant="secondary" size="lg">
                Gerar Política de Cookies
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaCookiesInfoPage;
