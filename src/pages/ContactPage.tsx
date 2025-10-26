import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos aqui para ajudar! Envie sua mensagem e responderemos em breve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Envie sua Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo com sua dúvida ou solicitação
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome *</Label>
                        <Input id="name" placeholder="Seu nome completo" />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Assunto *</Label>
                      <Input id="subject" placeholder="Qual o assunto da sua mensagem?" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Descreva sua dúvida ou solicitação..." 
                        rows={6}
                      />
                    </div>
                    
                    <Button variant="google" size="lg" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>📧</span>
                    E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    Para dúvidas gerais e suporte:
                  </p>
                  <a 
                    href="mailto:contato@politicasprivacidade.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    contato@politicasprivacidade.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>⏰</span>
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                    <p><strong>Sábado:</strong> 9h às 12h</p>
                    <p><strong>Domingo:</strong> Fechado</p>
                    <p className="text-sm mt-4">
                      * Horário de Brasília (GMT-3)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🕐</span>
                    Tempo de Resposta
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dúvidas gerais:</span>
                      <span className="font-medium">24 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Suporte técnico:</span>
                      <span className="font-medium">4-8 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Parcerias:</span>
                      <span className="font-medium">48 horas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>💡</span>
                    Antes de Entrar em Contato
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p>✓ Verifique nossa <a href="/ajuda" className="text-primary hover:underline">Central de Ajuda</a></p>
                    <p>✓ Consulte as <a href="/ajuda" className="text-primary hover:underline">Perguntas Frequentes</a></p>
                    <p>✓ Teste diferentes tipos de política</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}