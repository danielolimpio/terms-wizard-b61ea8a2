import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";

const NossaPrivacidadePage = () => {
  const breadcrumbItems = [
    { name: "O que é Política de Privacidade?", url: "/nossa-privacidade" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>O que é Política de Privacidade? | Guia Completo 2025</title>
        <meta name="description" content="Descubra o que é Política de Privacidade, para que serve, onde usar e o que deve conter. Guia completo sobre LGPD e proteção de dados pessoais." />
        <meta name="keywords" content="política de privacidade, LGPD, proteção de dados, privacidade online, dados pessoais" />
        <link rel="canonical" href="https://politicadeprivacidade.org/nossa-privacidade" />
      </Helmet>
      <StructuredData type="breadcrumb" items={breadcrumbItems} />
      
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            O que é Política de Privacidade?
          </h1>
          <p className="text-xl text-muted-foreground">
            Entenda tudo sobre a Política de Privacidade e sua importância para seu site ou aplicação
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Definição</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A <strong>Política de Privacidade</strong> é um documento legal fundamental que informa aos usuários 
                como uma empresa coleta, usa, armazena, compartilha e protege seus dados pessoais. É a base da 
                transparência no relacionamento entre organizações e seus usuários no ambiente digital.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Este documento deve ser claro, acessível e completo, explicando todos os aspectos do tratamento 
                de dados pessoais, desde a coleta inicial até a eventual exclusão das informações.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Para que Serve?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Transparência</h3>
                  <p className="text-sm text-muted-foreground">
                    Informa os usuários sobre quais dados são coletados e como serão utilizados, 
                    criando um relacionamento de confiança.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Conformidade Legal</h3>
                  <p className="text-sm text-muted-foreground">
                    Garante que sua empresa está em conformidade com a LGPD, GDPR e outras 
                    regulamentações de proteção de dados.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Proteção Jurídica</h3>
                  <p className="text-sm text-muted-foreground">
                    Protege sua empresa contra litígios relacionados ao uso inadequado de dados 
                    pessoais dos usuários.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Credibilidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Demonstra profissionalismo e compromisso com a privacidade, aumentando a 
                    confiança dos usuários e clientes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Em Quais Sites Devo Utilizar?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Praticamente <strong>todos os sites e aplicações</strong> que coletam dados pessoais devem ter 
                uma Política de Privacidade. Isso inclui:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Sites de E-commerce</h4>
                  <p className="text-sm text-muted-foreground">
                    Lojas virtuais que coletam dados de compra, endereço, pagamento e navegação.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Blogs e Sites Informativos</h4>
                  <p className="text-sm text-muted-foreground">
                    Sites com formulários de contato, newsletter ou Google Analytics.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Aplicativos Mobile</h4>
                  <p className="text-sm text-muted-foreground">
                    Apps que acessam localização, contatos, fotos ou dados do dispositivo.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Plataformas SaaS</h4>
                  <p className="text-sm text-muted-foreground">
                    Sistemas que gerenciam dados de usuários, empresas ou clientes.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Sites Corporativos</h4>
                  <p className="text-sm text-muted-foreground">
                    Páginas institucionais com formulários ou ferramentas de analytics.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Redes Sociais</h4>
                  <p className="text-sm text-muted-foreground">
                    Plataformas que gerenciam perfis, interações e conteúdo de usuários.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Lock className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que Deve Conter?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Identificação do responsável:</strong> Nome, CNPJ e contato do controlador dos dados
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Tipos de dados coletados:</strong> Quais informações são capturadas (nome, email, IP, etc.)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Finalidade da coleta:</strong> Para que os dados serão utilizados
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Base legal:</strong> Justificativa legal para o tratamento dos dados
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Compartilhamento com terceiros:</strong> Se e com quem os dados são compartilhados
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Direitos dos usuários:</strong> Como exercer acesso, correção, exclusão e portabilidade
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Segurança:</strong> Medidas de proteção implementadas
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Cookies:</strong> Uso de cookies e tecnologias similares
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Crie sua Política de Privacidade Agora
            </h2>
            <p className="text-white/90 mb-6">
              Gere um documento profissional e completo em minutos, totalmente gratuito
            </p>
            <Link to="/gerador-politica-privacidade">
              <Button variant="secondary" size="lg">
                Gerar Política de Privacidade
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NossaPrivacidadePage;
