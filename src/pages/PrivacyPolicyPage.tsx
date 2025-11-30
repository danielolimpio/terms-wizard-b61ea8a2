import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, CheckCircle2, Lock, Eye, Users, FileText, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Política de Privacidade
            </h1>
            <p className="text-xl text-muted-foreground">
              Como coletamos, usamos e protegemos suas informações pessoais
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <Card className="border-2 border-blue-500/20 shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-blue-500" />
                    1. Informações que Coletamos
                  </h2>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Coletamos apenas as informações essenciais para fornecer nossos serviços:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Dados fornecidos nos formulários de geração de políticas (nome do site, domínio, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Informações de navegação através de cookies técnicos</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Endereço IP para análise de tráfego e segurança</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Dados de contato quando você nos envia mensagens</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Eye className="h-6 w-6 text-purple-500" />
                    2. Como Usamos suas Informações
                  </h2>
                  <p className="text-base text-foreground leading-relaxed mb-4">Utilizamos suas informações para:</p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Gerar as políticas solicitadas de forma personalizada</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Melhorar nossos serviços e funcionalidades</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Responder às suas dúvidas e solicitações</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Garantir a segurança da plataforma</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Realizar análises estatísticas de uso</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-500/20 shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Users className="h-6 w-6 text-red-500" />
                    3. Compartilhamento de Dados
                  </h2>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                    exceto nas seguintes situações:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Quando exigido por lei ou autoridade judicial</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Para proteger nossos direitos legais</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Com prestadores de serviços essenciais (hospedagem, analytics) sob contrato de confidencialidade</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-500/20 shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-orange-500" />
                    4. Cookies
                  </h2>
                  <p className="text-base text-foreground leading-relaxed">
                    Utilizamos cookies essenciais para o funcionamento do site e cookies de análise 
                    para melhorar nossos serviços. Você pode gerenciar suas preferências de cookies 
                    nas configurações do seu navegador.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-500/20 shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Lock className="h-6 w-6 text-green-500" />
                    5. Segurança
                  </h2>
                  <p className="text-base text-foreground leading-relaxed">
                    Implementamos medidas técnicas e organizacionais adequadas para proteger suas 
                    informações contra acesso não autorizado, alteração, divulgação ou destruição.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-cyan-500/20 shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-cyan-500" />
                    6. Seus Direitos
                  </h2>
                  <p className="text-base text-foreground leading-relaxed mb-4">Conforme a LGPD, você tem direito a:</p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>Confirmar a existência de tratamento de dados</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>Acessar seus dados pessoais</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>Corrigir dados incompletos ou inexatos</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>Solicitar a exclusão de dados desnecessários</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>Revogar seu consentimento</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>Portabilidade dos dados</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-500/20 shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-indigo-500" />
                    7. Retenção de Dados
                  </h2>
                  <p className="text-base text-foreground leading-relaxed">
                    Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades 
                    descritas nesta política, respeitando os prazos legais aplicáveis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-500/20 shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Mail className="h-6 w-6 text-pink-500" />
                    8. Contato
                  </h2>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                    entre em contato conosco através do e-mail:
                  </p>
                  <p className="text-base font-semibold text-primary">
                    contato@politicadeprivacidade.org
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-500/20 shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-yellow-500" />
                    9. Alterações
                  </h2>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Esta política pode ser atualizada periodicamente. Recomendamos que você 
                    a revise regularmente para se manter informado sobre como protegemos suas informações.
                  </p>
                  <p className="text-base text-foreground font-medium">
                    <strong>Última atualização:</strong> Novembro de 2025
                  </p>
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
