import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cookie, Bell, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";

const UsoCookiesPage = () => {
  const breadcrumbItems = [
    { name: "O que é o Banner de Cookies?", url: "/uso-cookies" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>O que é o Banner de Cookies? | Guia Completo 2025</title>
        <meta name="description" content="Descubra o que é o banner de cookies, por que é obrigatório, o que deve conter e como implementar corretamente no seu site conforme LGPD e GDPR." />
        <meta name="keywords" content="banner de cookies, popup cookies, LGPD, GDPR, consentimento cookies, CMP" />
        <link rel="canonical" href="https://politicadeprivacidade.org/uso-cookies" />
      </Helmet>
      <StructuredData type="breadcrumb" items={breadcrumbItems} />
      <StructuredData type="faq" questions={[
        { question: "O que é um Banner de Cookies?", answer: "É um aviso exibido ao visitante do site pedindo consentimento para o uso de cookies, conforme exigido pela LGPD e GDPR." },
        { question: "O Banner de Cookies é obrigatório?", answer: "Sim. Sites que utilizam cookies de rastreamento, analytics ou publicidade devem exibir um banner de consentimento conforme a legislação de proteção de dados." },
        { question: "Qual a diferença entre Banner de Cookies e Política de Cookies?", answer: "O banner é o popup de consentimento exibido ao visitante. A Política de Cookies é a página que detalha quais cookies são usados e suas finalidades." },
        { question: "Quais tipos de cookies precisam de consentimento?", answer: "Cookies de marketing, analytics e personalização precisam de consentimento. Cookies essenciais para o funcionamento do site podem ser usados sem consentimento prévio." }
      ]} />
      
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4">
            <Cookie className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            O que é o Banner de Cookies?
          </h1>
          <p className="text-xl text-muted-foreground">
            Entenda a importância do popup de consentimento de cookies no seu site
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Cookie className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que é o Banner de Cookies?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                O <strong>banner de cookies</strong> (também conhecido como popup ou aviso de cookies) é aquela 
                janela que aparece quando você visita um site pela primeira vez, solicitando seu consentimento 
                para o uso de cookies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ele é obrigatório por lei (LGPD e GDPR) e deve aparecer antes que qualquer cookie não essencial 
                seja instalado no navegador do usuário. É a primeira linha de transparência e conformidade do seu site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Bell className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Por que é Obrigatório?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A LGPD (Lei Geral de Proteção de Dados) e o GDPR (Regulamento Geral de Proteção de Dados europeu) 
                exigem que os sites obtenham consentimento explícito dos usuários antes de coletar seus dados através 
                de cookies não essenciais.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-semibold text-amber-800 mb-2">⚠️ Consequências da Ausência:</h4>
                <ul className="list-disc list-inside text-sm text-amber-700 space-y-1">
                  <li>Multas de até R$ 50 milhões ou 2% do faturamento</li>
                  <li>Advertências e bloqueio de atividades</li>
                  <li>Suspensão do Google AdSense e Analytics</li>
                  <li>Perda de credibilidade com usuários</li>
                  <li>Problemas com plataformas de publicidade</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que Deve Conter?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Aviso Claro</h4>
                    <p className="text-sm text-muted-foreground">
                      Informação clara de que o site utiliza cookies e para quais finalidades
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Opções de Consentimento</h4>
                    <p className="text-sm text-muted-foreground">
                      Botões para aceitar, rejeitar ou personalizar as preferências de cookies
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Link para Política</h4>
                    <p className="text-sm text-muted-foreground">
                      Link direto para a Política de Cookies completa com mais detalhes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Categorização</h4>
                    <p className="text-sm text-muted-foreground">
                      Divisão por categorias: essenciais, funcionais, analytics, marketing
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Tipos de Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold mb-2">🟢 Cookies Essenciais</h4>
                  <p className="text-sm text-muted-foreground">
                    Necessários para o funcionamento básico do site. NÃO requerem consentimento.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">🔵 Cookies de Desempenho</h4>
                  <p className="text-sm text-muted-foreground">
                    Analytics e métricas. Requerem consentimento do usuário.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold mb-2">🟣 Cookies de Funcionalidade</h4>
                  <p className="text-sm text-muted-foreground">
                    Preferências e personalização. Requerem consentimento.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold mb-2">🟠 Cookies de Marketing</h4>
                  <p className="text-sm text-muted-foreground">
                    Publicidade e rastreamento. Requerem consentimento explícito.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Boas Práticas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <p className="text-muted-foreground">
                    Apareça imediatamente ao carregar a página (antes de carregar cookies)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <p className="text-muted-foreground">
                    Permita rejeitar todos os cookies não essenciais facilmente
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <p className="text-muted-foreground">
                    Ofereça opção de personalizar preferências por categoria
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <p className="text-muted-foreground">
                    Use linguagem simples e direta, sem termos técnicos complexos
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <p className="text-muted-foreground">
                    Mantenha o banner acessível (contraste, tamanho de fonte adequado)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Precisa de uma Política de Cookies?
            </h2>
            <p className="text-white/90 mb-6">
              Crie sua política completa para complementar o banner de cookies
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

export default UsoCookiesPage;
