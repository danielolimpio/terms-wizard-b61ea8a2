import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Shield, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";

const ModeracaoComentariosInfoPage = () => {
  const breadcrumbItems = [
    { name: "O que é Política de Moderação de Comentários?", url: "/moderacao-comentarios" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>O que é Política de Moderação de Comentários? | Guia 2025</title>
        <meta name="description" content="Entenda o que é Política de Moderação de Comentários, por que é importante, tipos de moderação e como manter um ambiente saudável no seu site." />
        <meta name="keywords" content="moderação de comentários, política de comentários, moderação de conteúdo, gestão de comunidade, spam" />
        <link rel="canonical" href="https://politicadeprivacidade.org/moderacao-comentarios" />
      </Helmet>
      <StructuredData type="breadcrumb" items={breadcrumbItems} />
      
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            O que é Política de Moderação de Comentários?
          </h1>
          <p className="text-xl text-muted-foreground">
            Entenda como gerenciar comentários e manter um ambiente saudável
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que é Política de Moderação?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A <strong>Política de Moderação de Comentários</strong> é um documento que estabelece as regras 
                e procedimentos para gerenciar comentários, discussões e interações entre usuários em blogs, 
                sites, fóruns e redes sociais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ela define quais tipos de comentários são aceitáveis, como a moderação é realizada, e quais 
                ações serão tomadas contra violações das regras estabelecidas.
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
                  <h3 className="font-semibold text-lg">🛡️ Ambiente Seguro</h3>
                  <p className="text-sm text-muted-foreground">
                    Cria um espaço respeitoso onde todos se sentem confortáveis para participar das discussões.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">⚖️ Proteção Legal</h3>
                  <p className="text-sm text-muted-foreground">
                    Protege seu site contra responsabilização por comentários de terceiros que violem leis.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">📊 Qualidade das Discussões</h3>
                  <p className="text-sm text-muted-foreground">
                    Mantém o foco e a qualidade das conversas, evitando spam e conteúdo irrelevante.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">🎯 Transparência</h3>
                  <p className="text-sm text-muted-foreground">
                    Deixa claro para os usuários quais são as regras e consequências antes de comentar.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Onde é Necessária?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📝 Blogs e Sites de Notícias</h4>
                  <p className="text-sm text-muted-foreground">
                    Artigos que permitem comentários dos leitores
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💬 Fóruns de Discussão</h4>
                  <p className="text-sm text-muted-foreground">
                    Comunidades online com múltiplos tópicos e conversas
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🛒 E-commerce</h4>
                  <p className="text-sm text-muted-foreground">
                    Avaliações e comentários sobre produtos
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📱 Redes Sociais</h4>
                  <p className="text-sm text-muted-foreground">
                    Plataformas com interações públicas entre usuários
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🎓 Plataformas Educacionais</h4>
                  <p className="text-sm text-muted-foreground">
                    Discussões em cursos e materiais didáticos
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📹 Compartilhamento de Vídeos</h4>
                  <p className="text-sm text-muted-foreground">
                    Seções de comentários em vídeos e transmissões ao vivo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Tipos de Moderação</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">🔵 Pré-Moderação</h4>
                  <p className="text-sm text-muted-foreground">
                    Comentários são revisados antes de serem publicados. Maior controle, mas mais trabalho.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold mb-2">🟢 Pós-Moderação</h4>
                  <p className="text-sm text-muted-foreground">
                    Comentários são publicados imediatamente e moderados depois. Mais rápido, exige monitoramento constante.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold mb-2">🟣 Moderação Automática</h4>
                  <p className="text-sm text-muted-foreground">
                    Uso de filtros e IA para detectar e bloquear conteúdo inadequado automaticamente.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold mb-2">🟠 Moderação Comunitária</h4>
                  <p className="text-sm text-muted-foreground">
                    Usuários podem reportar comentários inadequados para revisão da equipe.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Comentários Geralmente Removidos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Spam, propaganda excessiva ou links suspeitos
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Discurso de ódio, insultos ou ataques pessoais
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Conteúdo ofensivo, pornográfico ou violento
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Informações pessoais ou privadas de terceiros
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Fake news ou desinformação deliberada
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Comentários completamente fora do tema
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span className="text-sm text-muted-foreground">
                    Trolling ou provocações destinadas a causar conflito
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">O que Deve Conter?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <p className="text-sm text-muted-foreground">
                    <strong>Diretrizes de comportamento:</strong> O que é aceitável e o que não é
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <p className="text-sm text-muted-foreground">
                    <strong>Processo de moderação:</strong> Como e quando os comentários são revisados
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <p className="text-sm text-muted-foreground">
                    <strong>Ações disciplinares:</strong> Advertência, remoção, suspensão ou banimento
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <p className="text-sm text-muted-foreground">
                    <strong>Sistema de denúncias:</strong> Como os usuários podem reportar violações
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <p className="text-sm text-muted-foreground">
                    <strong>Direito de recurso:</strong> Como contestar uma decisão de moderação
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <p className="text-sm text-muted-foreground">
                    <strong>Responsabilidades:</strong> Limitações de responsabilidade sobre conteúdo de terceiros
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Crie sua Política de Moderação
            </h2>
            <p className="text-white/90 mb-6">
              Estabeleça regras claras para comentários em minutos
            </p>
            <Link to="/gerador-politica-moderacao">
              <Button variant="secondary" size="lg">
                Gerar Política de Moderação
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ModeracaoComentariosInfoPage;
