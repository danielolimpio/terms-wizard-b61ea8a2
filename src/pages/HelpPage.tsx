import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { 
  BookOpen, 
  CheckSquare, 
  Globe, 
  FileText, 
  Mail, 
  MessageSquare, 
  Download,
  ExternalLink,
  ShieldCheck,
  Rocket,
  Users,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Ajuda - Como Usar o Gerador de Políticas Legais | LGPD e GDPR</title>
        <meta 
          name="description" 
          content="Aprenda a usar nosso gerador de políticas, garantir conformidade com LGPD e GDPR, e proteger seu negócio online com os documentos certos — sem complicação." 
        />
        <link rel="canonical" href="https://politicadeprivacidade.org/ajuda" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs 
            items={[
              { name: "Ajuda", url: "/ajuda" }
            ]} 
          />
          
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-8 md:p-12 mb-12">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-2xl backdrop-blur-sm">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="text-sm">Central de Ajuda</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                O que você vai encontrar aqui
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Você criou seu site. Agora, precisa deixá-lo <strong>seguro, transparente e dentro da lei</strong>.
                <br className="hidden md:block" />
                Esta página é seu ponto de partida para entender como usar nossas ferramentas corretamente, 
                garantir conformidade com a LGPD e GDPR, e proteger seu negócio online com os documentos certos — sem complicação.
              </p>
            </div>
          </div>

          {/* Section 1: Primeiros Passos */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-500/20 rounded-xl">
                <Rocket className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">1. Primeiros passos: como usar nosso gerador</h2>
            </div>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardDescription className="text-base">
                  Um mini-guia rápido para novos usuários:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-lg font-bold shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Escolha o tipo de documento</h3>
                      <p className="text-muted-foreground">
                        Privacidade, Termos de Uso, Cookies, Reembolso, Segurança, etc.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-lg font-bold shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Responda às perguntas personalizadas</h3>
                      <p className="text-muted-foreground">
                        Ex: seu site coleta dados? Usa cookies? Qual é o domínio?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-lg font-bold shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Revise, copie ou baixe o documento</h3>
                      <p className="text-muted-foreground">
                        Escolha o formato ideal: PDF, Word, TXT ou copie direto para usar.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-lg font-bold shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Cole no seu site</h3>
                      <p className="text-muted-foreground">
                        WordPress, Shopify, Wix, HTML puro — veja os tutoriais abaixo
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Dica Importante:</p>
                      <p className="text-sm text-muted-foreground">
                        Sempre atualize seus documentos quando mudar algo no site (novo plugin, nova finalidade de dados, etc.).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: Tutoriais por Plataforma */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-xl">
                <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">2. Tutoriais por plataforma</h2>
            </div>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardDescription className="text-base">
                  Guias específicos para implementar documentos legais em diferentes plataformas:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Link to="/blog" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-accent/50 transition-all group">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">Como adicionar política de privacidade no WordPress</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>

                  <Link to="/blog" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-accent/50 transition-all group">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">Como inserir banner de cookies no Shopify</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>

                  <Link to="/blog" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-accent/50 transition-all group">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">Onde colocar os Termos de Uso no Wix ou Hostinger?</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>

                  <Link to="/blog" className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-accent/50 transition-all group">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">Como vincular documentos legais ao rodapé do seu site</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 3: Checklist de Conformidade */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-xl">
                <CheckSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">3. Checklist de conformidade essencial</h2>
            </div>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardDescription className="text-base">
                  Um recurso visual e útil que você pode salvar ou imprimir:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">Tenho uma política de privacidade acessível?</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">Meus usuários podem exercer seus direitos (acesso, exclusão, portabilidade)?</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">Meu banner de cookies pede consentimento antes de carregar scripts?</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">Meus Termos de Uso definem claramente o uso do serviço?</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">Meu site tem canal de contato para o Encarregado (DPO)?</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">Atualizei meus documentos em 2025?</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Download className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Baixe o Checklist Completo</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ofereça um PDF para download com esse checklist — captura de leads!
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: Recursos Recomendados */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/20 rounded-xl">
                <ShieldCheck className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">4. Recursos recomendados</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Modelos Editáveis</CardTitle>
                  </div>
                  <CardDescription>
                    Para quem prefere ajustar manualmente (Word/PDF)
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Teste Rápido</CardTitle>
                  </div>
                  <CardDescription>
                    Seu site está em risco com a LGPD?
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg mb-3">Ferramentas Externas Confiáveis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ExternalLink className="h-4 w-4 mt-1 shrink-0" />
                      <span><strong>ANPD</strong> - Autoridade Nacional de Proteção de Dados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ExternalLink className="h-4 w-4 mt-1 shrink-0" />
                      <span><strong>EDPB</strong> - Autoridade Europeia de Proteção de Dados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ExternalLink className="h-4 w-4 mt-1 shrink-0" />
                      <span><strong>Termly</strong> - Gerador de políticas internacional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ExternalLink className="h-4 w-4 mt-1 shrink-0" />
                      <span><strong>Cookiebot</strong> - Gestão de consentimento de cookies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 5: Suporte Humano */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-pink-500/20 rounded-xl">
                <Users className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">5. Suporte humano (quando o automático não basta)</h2>
            </div>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Documentos legais não são "copie e cole" — às vezes, você precisa de ajuda personalizada.
                </p>
                <p className="text-foreground font-medium mb-4">Nosso suporte está disponível para:</p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Esclarecer dúvidas sobre cláusulas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Ajudar a adaptar documentos a seu tipo de negócio (e-commerce, blog, SaaS, app)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Orientar sobre atualizações regulatórias</span>
                  </li>
                </ul>
                
                <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Entre em contato:</p>
                      <p className="text-muted-foreground text-sm mb-2">
                        Envie um e-mail para <strong>apoio@politicadeprivacidade.org</strong> com o assunto "AJUDA – [seu site]"
                      </p>
                      <p className="text-xs text-muted-foreground">
                        (Inclua seu domínio para análise mais rápida)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 6: Reportar Problema */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/20 rounded-xl">
                <MessageSquare className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">6. Reportar um problema ou sugestão</h2>
            </div>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground font-medium mb-2">Encontrou um erro no gerador?</p>
                    <p className="text-muted-foreground text-sm">
                      Avise-nos para que possamos corrigir rapidamente.
                    </p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-2">Tem uma ideia para melhorar?</p>
                    <p className="text-muted-foreground text-sm">
                      Suas sugestões são valiosas para aprimorar nossos serviços.
                    </p>
                  </div>
                  <Link 
                    to="/contato" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Enviar Feedback
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}