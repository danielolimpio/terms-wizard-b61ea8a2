import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { 
  MapPin, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send,
  HelpCircle,
  Zap,
  Phone
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contato | Gerador de Políticas Legais</title>
        <meta 
          name="description" 
          content="Entre em contato conosco. Dúvidas sobre geração de políticas de privacidade, termos de uso e compliance com LGPD." 
        />
        <link rel="canonical" href="https://politicadeprivacidade.org/contato" />
      </Helmet>
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Contato
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar! Envie sua mensagem e responderemos em breve com todo suporte necessário.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>E-mail</CardTitle>
                <CardDescription>
                  Para dúvidas gerais e suporte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:contato@politicadeprivacidade.org" 
                  className="text-primary hover:underline font-medium text-lg"
                >
                  contato@politicadeprivacidade.org
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Horário de Atendimento</CardTitle>
                <CardDescription>
                  Horário de Brasília (GMT-3)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Seg - Sex:</span>
                  <span className="font-medium">9h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado:</span>
                  <span className="font-medium">9h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingo:</span>
                  <span className="font-medium text-muted-foreground">Fechado</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Tempo de Resposta</CardTitle>
                <CardDescription>
                  Atendimento prioritário
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
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
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <Card className="border-2 shadow-xl">
                <CardHeader className="border-b bg-muted/30">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Send className="w-6 h-6 text-primary" />
                    Envie sua Mensagem
                  </CardTitle>
                  <CardDescription className="text-base">
                    Preencha o formulário abaixo e retornaremos o mais breve possível
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-medium">
                          Nome Completo *
                        </Label>
                        <Input 
                          id="name" 
                          placeholder="Digite seu nome completo" 
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-medium">
                          E-mail *
                        </Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="seu@email.com" 
                          className="h-11"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-medium">
                        Telefone (opcional)
                      </Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(00) 00000-0000" 
                        className="h-11"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-base font-medium">
                        Assunto *
                      </Label>
                      <Input 
                        id="subject" 
                        placeholder="Qual o assunto da sua mensagem?" 
                        className="h-11"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-medium">
                        Mensagem *
                      </Label>
                      <Textarea 
                        id="message" 
                        placeholder="Descreva sua dúvida ou solicitação com o máximo de detalhes possível..." 
                        rows={8}
                        className="resize-none"
                      />
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full h-12 text-base font-semibold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar esta mensagem, você concorda com nossa{" "}
                      <a href="/politica-privacidade" className="text-primary hover:underline">
                        Política de Privacidade
                      </a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Antes de Entrar em Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-lg">📚</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Central de Ajuda</p>
                      <a href="/ajuda" className="text-sm text-primary hover:underline">
                        Acesse nossa base de conhecimento →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-lg">❓</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Perguntas Frequentes</p>
                      <a href="/ajuda#faq" className="text-sm text-primary hover:underline">
                        Veja respostas rápidas →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-lg">🔧</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Guias e Tutoriais</p>
                      <a href="/blog" className="text-sm text-primary hover:underline">
                        Explore nosso blog →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Outros Canais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">WhatsApp Business</p>
                    <p className="text-sm text-muted-foreground">
                      Em breve disponível para atendimento direto
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Chat Online</p>
                    <p className="text-sm text-muted-foreground">
                      Suporte em tempo real nos horários comerciais
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Location Map */}
          <div className="mt-12">
            <Card className="border-2 shadow-xl overflow-hidden">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MapPin className="w-6 h-6 text-primary" />
                  Nossa Localização
                </CardTitle>
                <CardDescription className="text-base">
                  Av. Julia Freire, 1200 - Expedicionários, João Pessoa - PB, CEP: 58.041-000
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-[400px] rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.7!2d-34.8612!3d-7.1328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnNTguMSJTIDM0wrA1MSc0MC4zIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização no mapa"
                  />
                </div>
                <div className="p-6 bg-muted/30 border-t">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Pontos de Referência</p>
                      <p className="text-sm text-muted-foreground">
                        Próximo ao Shopping Manaíra e Hospital Unimed. Fácil acesso pela Av. Epitácio Pessoa.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
