import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Política de Cookies
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Entenda como utilizamos cookies para melhorar sua experiência
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>🍪</span>
                  O que são Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies são pequenos arquivos de texto que são armazenados em seu navegador quando você visita um site. 
                  Eles ajudam o site a lembrar informações sobre sua visita, como suas preferências de idioma e outras configurações.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Como Utilizamos Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Cookies Essenciais</h4>
                    <p className="text-sm text-muted-foreground">
                      Necessários para o funcionamento básico do site e não podem ser desativados.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Cookies de Preferências</h4>
                    <p className="text-sm text-muted-foreground">
                      Lembram suas configurações e preferências para personalizar sua experiência.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Cookies Analíticos</h4>
                    <p className="text-sm text-muted-foreground">
                      Nos ajudam a entender como os visitantes interagem com o site para melhorarmos nossos serviços.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gerenciar Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies 
                  que já estão no seu computador e pode configurar a maioria dos navegadores para impedir que sejam colocados.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium mb-2">Chrome</h5>
                    <p className="text-muted-foreground">Configurações → Privacidade → Cookies</p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Firefox</h5>
                    <p className="text-muted-foreground">Opções → Privacidade → Cookies</p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Safari</h5>
                    <p className="text-muted-foreground">Preferências → Privacidade → Cookies</p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Edge</h5>
                    <p className="text-muted-foreground">Configurações → Cookies e permissões</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                variant="google" 
                size="lg"
                onClick={() => window.location.href = '/'}
              >
                Gerar Sua Política de Cookies
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}