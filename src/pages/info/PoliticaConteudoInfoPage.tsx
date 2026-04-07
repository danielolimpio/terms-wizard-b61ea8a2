import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck, Users, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";

const PoliticaConteudoInfoPage = () => {
  const breadcrumbItems = [
    { name: "O que é Política de Conteúdo?", url: "/politica-conteudo" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>O que é Política de Conteúdo? | Guia Completo 2025</title>
        <meta name="description" content="Entenda o que é Política de Conteúdo, para que serve, onde é necessária e como definir regras claras para conteúdo gerado por usuários." />
        <meta name="keywords" content="política de conteúdo, conteúdo gerado por usuários, moderação, regras de comunidade, UGC" />
        <link rel="canonical" href="https://politicadeprivacidade.org/politica-conteudo" />
      </Helmet>
      <StructuredData type="breadcrumb" items={breadcrumbItems} />
      <StructuredData type="faq" questions={[
        { question: "O que é uma Política de Conteúdo?", answer: "É um documento que define as regras sobre o tipo de conteúdo permitido em uma plataforma, incluindo conteúdo gerado por usuários." },
        { question: "Quem precisa de uma Política de Conteúdo?", answer: "Sites com fóruns, comentários, marketplace, redes sociais ou qualquer plataforma que permita conteúdo gerado por usuários (UGC)." },
        { question: "O que deve conter na Política de Conteúdo?", answer: "Regras claras sobre conteúdo proibido, processo de denúncia, consequências para violações, direitos de propriedade intelectual e moderação." },
        { question: "A Política de Conteúdo é obrigatória?", answer: "Não é obrigatória por lei, mas é essencial para proteger a plataforma de responsabilidade legal e manter um ambiente seguro para os usuários." }
      ]} />
      
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4">
            <FileCheck className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            O que é Política de Conteúdo?
          </h1>
          <p className="text-xl text-muted-foreground">
            Entenda como definir regras claras para conteúdo gerado por usuários
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileCheck className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que é Política de Conteúdo?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A <strong>Política de Conteúdo</strong> é um documento que estabelece as diretrizes sobre quais 
                tipos de conteúdo são permitidos ou proibidos em sua plataforma, blog, rede social ou qualquer 
                site que permita publicação de conteúdo por usuários.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ela define padrões de qualidade, comportamento aceitável e tipos de material que podem ser 
                compartilhados, protegendo tanto a plataforma quanto seus usuários.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Para que Serve?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">🛡️ Proteção da Comunidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Cria um ambiente seguro e respeitoso para todos os usuários, prevenindo abusos e 
                    comportamentos prejudiciais.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">⚖️ Base Legal</h3>
                  <p className="text-sm text-muted-foreground">
                    Fornece amparo legal para remover conteúdo inadequado e banir usuários que violem 
                    as regras estabelecidas.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">📊 Qualidade do Conteúdo</h3>
                  <p className="text-sm text-muted-foreground">
                    Mantém padrões de qualidade e relevância do conteúdo publicado na plataforma.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">🎯 Transparência</h3>
                  <p className="text-sm text-muted-foreground">
                    Comunica claramente aos usuários o que é esperado deles e quais são as consequências 
                    de violações.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertCircle className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Onde é Necessária?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📱 Redes Sociais</h4>
                  <p className="text-sm text-muted-foreground">
                    Plataformas onde usuários criam perfis e compartilham conteúdo
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💬 Fóruns e Comunidades</h4>
                  <p className="text-sm text-muted-foreground">
                    Espaços de discussão e troca de mensagens entre usuários
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📝 Blogs com Comentários</h4>
                  <p className="text-sm text-muted-foreground">
                    Sites que permitem comentários ou contribuições de visitantes
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🛒 Marketplaces</h4>
                  <p className="text-sm text-muted-foreground">
                    Plataformas onde usuários publicam produtos ou serviços
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🎓 Plataformas Educacionais</h4>
                  <p className="text-sm text-muted-foreground">
                    Sites de cursos com submissão de trabalhos e interações
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📹 Compartilhamento de Mídia</h4>
                  <p className="text-sm text-muted-foreground">
                    Plataformas de vídeos, fotos ou áudios gerados por usuários
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Conteúdos Geralmente Proibidos</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <div>
                    <strong>Discurso de ódio:</strong> Conteúdo que promove violência ou discriminação contra 
                    grupos por raça, religião, orientação sexual, etc.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <div>
                    <strong>Conteúdo ilegal:</strong> Atividades criminosas, pirataria, venda de produtos 
                    ilegais ou regulamentados
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <div>
                    <strong>Violência explícita:</strong> Imagens ou descrições gráficas de violência, 
                    automutilação ou crueldade
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <div>
                    <strong>Assédio e bullying:</strong> Intimidação, perseguição ou ataques pessoais 
                    direcionados a indivíduos
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <div>
                    <strong>Spam e conteúdo enganoso:</strong> Publicidade excessiva, clickbait, fake news 
                    ou manipulação
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <div>
                    <strong>Violação de propriedade intelectual:</strong> Conteúdo protegido por direitos 
                    autorais sem autorização
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <div>
                    <strong>Informações privadas:</strong> Publicação de dados pessoais de terceiros sem 
                    consentimento (doxxing)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <div>
                    <strong>Conteúdo adulto inadequado:</strong> Material sexual explícito em plataformas 
                    não destinadas a isso
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">O que Deve Conter?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Tipos de Conteúdo Permitido</h4>
                  <p className="text-sm text-muted-foreground">
                    Defina claramente quais categorias de conteúdo são bem-vindas
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Conteúdo Proibido</h4>
                  <p className="text-sm text-muted-foreground">
                    Liste especificamente o que não é permitido e exemplos
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Padrões de Comportamento</h4>
                  <p className="text-sm text-muted-foreground">
                    Estabeleça como os usuários devem interagir na plataforma
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Processo de Moderação</h4>
                  <p className="text-sm text-muted-foreground">
                    Explique como o conteúdo é revisado e quem toma as decisões
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Consequências de Violações</h4>
                  <p className="text-sm text-muted-foreground">
                    Advertências, remoção de conteúdo, suspensão ou banimento
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-1">Processo de Recurso</h4>
                  <p className="text-sm text-muted-foreground">
                    Como usuários podem contestar decisões de moderação
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Crie sua Política de Conteúdo
            </h2>
            <p className="text-white/90 mb-6">
              Estabeleça regras claras para sua comunidade em minutos
            </p>
            <Link to="/gerador-politica-conteudo">
              <Button variant="secondary" size="lg">
                Gerar Política de Conteúdo
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaConteudoInfoPage;
