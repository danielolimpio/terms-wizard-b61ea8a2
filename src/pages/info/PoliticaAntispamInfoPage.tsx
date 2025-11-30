import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const PoliticaAntispamInfoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            O que é Política Antispam?
          </h1>
          <p className="text-xl text-muted-foreground">
            Entenda como proteger usuários contra comunicações não solicitadas
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Mail className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que é Política Antispam?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A <strong>Política Antispam</strong> é um documento que estabelece as regras e práticas da sua 
                empresa em relação ao envio de comunicações eletrônicas (emails, SMS, WhatsApp, notificações), 
                garantindo que apenas mensagens autorizadas e relevantes sejam enviadas aos usuários.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ela demonstra compromisso com práticas éticas de marketing e comunicação, respeitando a 
                privacidade e preferências dos usuários em relação a mensagens comerciais e informativas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Por que é Importante?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">⚖️ Conformidade Legal</h3>
                  <p className="text-sm text-muted-foreground">
                    LGPD, CAN-SPAM Act e outras leis regulamentam envio de comunicações comerciais não solicitadas.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">🛡️ Proteção da Reputação</h3>
                  <p className="text-sm text-muted-foreground">
                    Evita que sua marca seja associada a spam, preservando credibilidade e imagem.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">📧 Deliverability</h3>
                  <p className="text-sm text-muted-foreground">
                    Práticas antispam melhoram a entrega de emails e reduzem bloqueios por provedores.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">🎯 Engajamento Real</h3>
                  <p className="text-sm text-muted-foreground">
                    Mensagens para públicos que optaram por recebê-las têm melhor taxa de abertura e conversão.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Quem Precisa?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📧 Empresas com Email Marketing</h4>
                  <p className="text-sm text-muted-foreground">
                    Qualquer negócio que envia newsletters ou emails promocionais
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🛒 E-commerce</h4>
                  <p className="text-sm text-muted-foreground">
                    Lojas online que enviam ofertas, atualizações de pedidos e promoções
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💼 Empresas B2B</h4>
                  <p className="text-sm text-muted-foreground">
                    Negócios que fazem prospecção e comunicação com outras empresas
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📱 Aplicativos Mobile</h4>
                  <p className="text-sm text-muted-foreground">
                    Apps que enviam notificações push, emails ou SMS aos usuários
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🎓 Plataformas Educacionais</h4>
                  <p className="text-sm text-muted-foreground">
                    Instituições que comunicam com alunos via email, SMS ou app
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💰 Serviços Financeiros</h4>
                  <p className="text-sm text-muted-foreground">
                    Bancos, fintechs e empresas que enviam alertas e ofertas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Práticas Antispam Essenciais</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Double Opt-in</h4>
                    <p className="text-sm text-muted-foreground">
                      Confirmar inscrição via email antes de adicionar à lista de comunicação
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Opção de Descadastro Fácil</h4>
                    <p className="text-sm text-muted-foreground">
                      Link de "unsubscribe" visível em todos os emails, processado imediatamente
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Identificação Clara do Remetente</h4>
                    <p className="text-sm text-muted-foreground">
                      Nome e endereço real da empresa em todos os emails enviados
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Assunto Honesto</h4>
                    <p className="text-sm text-muted-foreground">
                      Linhas de assunto que refletem verdadeiramente o conteúdo do email
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Frequência Adequada</h4>
                    <p className="text-sm text-muted-foreground">
                      Não bombardear usuários com mensagens excessivas
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Segmentação e Relevância</h4>
                    <p className="text-sm text-muted-foreground">
                      Enviar apenas conteúdo relevante baseado em interesses e comportamento
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">O que Caracteriza Spam?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Emails enviados sem consentimento prévio do destinatário
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Compra ou uso de listas de email de terceiros
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Assuntos enganosos ou clickbait que não refletem o conteúdo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Dificuldade ou impossibilidade de cancelar inscrição
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Envios em massa indiscriminados sem segmentação
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Ocultar identidade do remetente real
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Continuar enviando após pedido de descadastro
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Consequências do Spam</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-semibold text-amber-800 mb-3">⚠️ Penalidades Possíveis:</h4>
                <ul className="list-disc list-inside text-sm text-amber-700 space-y-2">
                  <li>Multas de até R$ 50 milhões pela LGPD</li>
                  <li>Bloqueio permanente por provedores de email (Gmail, Outlook, etc.)</li>
                  <li>Inclusão em blacklists de spam</li>
                  <li>Processos judiciais de usuários afetados</li>
                  <li>Danos irreparáveis à reputação da marca</li>
                  <li>Perda de domínio de email e necessidade de reconstrução completa</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Crie sua Política Antispam
            </h2>
            <p className="text-white/90 mb-6">
              Proteja sua reputação e garanta práticas éticas de comunicação
            </p>
            <Link to="/gerador-politica-antispam">
              <Button variant="secondary" size="lg">
                Gerar Política Antispam
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaAntispamInfoPage;
