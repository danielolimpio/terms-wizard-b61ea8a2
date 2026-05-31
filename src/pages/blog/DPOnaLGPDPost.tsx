import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  UserCheck, 
  Building2, 
  Scale,
  MessageSquare,
  ClipboardList,
  Bell,
  BookOpen,
  Target,
  XCircle,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Lock,
  Eye,
  UserCog,
  Mail,
  Briefcase,
  Award,
  AlertCircle,
  Settings
} from "lucide-react";
import { BlogSidebar } from "@/components/BlogSidebar";
import { AuthorBio } from "@/components/AuthorBio";
import { SocialShare } from "@/components/SocialShare";
import { RelatedArticles } from "@/components/RelatedArticles";
import blogDPOImage from "@/assets/blog-dpo-lgpd.jpg";
import { ArticleSchema } from "@/components/ArticleSchema";

export default function DPOnaLGPDPost() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>DPO na LGPD: Quem Pode Ser, Funções e Como Terceirizar com Segurança | Políticas de Privacidade</title>
        <meta 
          name="description" 
          content="Descubra se sua empresa precisa de um DPO, quem pode assumir o cargo e como escolher um profissional qualificado." 
        />
        <meta property="og:title" content="DPO na LGPD: Quem Pode Ser, Funções e Como Terceirizar com Segurança" />
        <meta property="og:description" content="Descubra se sua empresa precisa de um DPO, quem pode assumir o cargo e como escolher um profissional qualificado." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://politicasdeprivacidade.com.br/blog/dpo-lgpd-quem-pode-ser" />
      </Helmet>
      <ArticleSchema
        headline="DPO na LGPD: Quem Pode Ser, Funções e Como Terceirizar com Segurança"
        description="Entenda o papel do DPO na LGPD, quem pode exercer a função, responsabilidades e como terceirizar com segurança."
        url="https://politicadeprivacidade.org/blog/dpo-lgpd-quem-pode-ser"
        image="https://politicadeprivacidade.org/logo.png"
        datePublished="2025-11-30"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-sm">
                    LGPD
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    DPO
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    Conformidade
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                  DPO na LGPD: Quem Pode Ser, Funções e Como Terceirizar com Segurança
                </h1>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                  <time dateTime="2025-01-24">24 de janeiro de 2025</time>
                  <span>•</span>
                  <span>15 min de leitura</span>
                </div>

                <img 
                  src={blogDPOImage}
                  alt="DPO na LGPD: Quem Pode Ser, Funções e Como Terceirizar com Segurança"
                  className="w-full h-auto rounded-lg shadow-lg mb-8"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <Card className="mb-8 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h2 className="text-2xl font-bold mb-3 text-foreground">
                          Introdução: O DPO não é um papel decorativo — é a ponte entre sua empresa e a privacidade real
                        </h2>
                        <p className="text-lg leading-relaxed">
                          Imagine que sua empresa recebe uma solicitação formal de um cliente: "Quero acessar todos os meus dados armazenados por vocês e saber com quem foram compartilhados." Você sabe exatamente a quem encaminhar esse pedido? Tem um canal claro, documentado e legalmente válido para responder em até 15 dias?
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                          Se sua resposta foi "não tenho certeza", você pode estar correndo um risco silencioso — mesmo que tenha uma política de privacidade no site e um aviso de cookies aparentemente em dia.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                          Na LGPD, o Encarregado de Dados, ou DPO (Data Protection Officer), é muito mais do que um nome em um rodapé. Ele é a interface obrigatória entre sua organização, os titulares dos dados e a ANPD. E, contrariando o que muitos pensam, nem toda empresa precisa de um DPO interno — mas todas precisam de um DPO de fato.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed mb-6">
                  Neste artigo, você vai entender se sua empresa está entre as obrigadas a nomear um DPO, quem pode exercer essa função (sim, pode ser você — ou um terceiro), quais são suas responsabilidades reais (além do que diz a lei) e como terceirizar esse papel com segurança, sem cair em armadilhas de "certificados relâmpago" ou consultorias superficiais.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Este é o guia definitivo sobre <strong>DPO na LGPD: Quem Pode Ser, Funções e Como Terceirizar com Segurança</strong> — escrito para empreendedores, gestores e profissionais que querem conformidade de verdade, não só aparência.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <UserCheck className="w-8 h-8 text-primary" />
                  Afinal, o que é um DPO e por que ele existe?
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  O DPO (Data Protection Officer), ou Encarregado de Dados em português, é a pessoa designada para receber e tratar reclamações, solicitações e comunicações dos titulares dos dados e da Autoridade Nacional de Proteção de Dados (ANPD).
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Ele foi inspirado no modelo europeu do GDPR, mas adaptado à realidade brasileira pela LGPD (Lei nº 13.709/2018), especialmente no <strong>Artigo 41</strong>.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Sua função não é fiscalizar a empresa por dentro, como um auditor interno. É ser o ponto de contato confiável, acessível e imparcial entre o público e a organização — garantindo que direitos como acesso, correção, anonimização e portabilidade sejam efetivamente exercidos.
                </p>

                <Card className="mb-8 bg-muted/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground">Analogia simples:</h3>
                        <p className="text-lg leading-relaxed">
                          Se sua empresa fosse um prédio, o DPO seria o porteiro com credencial da prefeitura — não decide as regras do condomínio, mas garante que visitantes (titulares) sejam recebidos, ouvidos e orientados corretamente.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-primary" />
                  Minha empresa precisa de um DPO? Entenda a obrigatoriedade real
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Muitos acreditam que "toda empresa precisa de DPO". A verdade é mais sutil.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A LGPD não exige DPO para todas as empresas. A obrigatoriedade depende de critérios específicos, definidos pela <strong>Resolução nº 2/2022 da ANPD</strong>:
                </p>

                <Card className="mb-6 border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      É obrigatório nomear DPO se sua empresa:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Realiza tratamento em larga escala de dados (ex: e-commerce com +10 mil clientes ativos)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Trata dados sensíveis (saúde, origem racial, orientação sexual, convicções religiosas, etc.)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Realiza monitoramento sistemático de indivíduos (ex: apps de rastreamento, câmeras com reconhecimento facial, plataformas de ensino com análise comportamental)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-l-4 border-l-amber-500">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-amber-500" />
                      Não é obrigatório (mas é recomendado) se:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Seu negócio é pequeno, com baixo volume de dados</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Coleta apenas dados essenciais (nome e e-mail para newsletter)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Não lida com dados sensíveis nem faz profiling</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mb-8 bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg leading-relaxed">
                        <strong>Porém, atenção:</strong> Mesmo que não seja obrigatório, ter um DPO demonstra maturidade e pode ser exigido por parceiros, marketplaces (como Google Play ou App Store) ou até por clientes corporativos.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  DPO na LGPD: Quem Pode Ser, Funções e Como Terceirizar com Segurança
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Agora que você sabe se precisa ou não de um DPO, surge a pergunta prática: quem pode ser esse encarregado?
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A LGPD é clara: não exige formação jurídica específica. O DPO pode ser:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                      <UserCog className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2 text-foreground">Funcionário interno</h3>
                      <p className="text-sm leading-relaxed">
                        Desde que tenha autonomia e não haja conflito de interesses
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                      <Briefcase className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2 text-foreground">Profissional terceirizado</h3>
                      <p className="text-sm leading-relaxed">
                        Especialista externo, contratado por serviço
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                      <Building2 className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2 text-foreground">Empresa especializada</h3>
                      <p className="text-sm leading-relaxed">
                        Em governança de dados
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  O essencial não é o diploma, mas a capacidade de entender a LGPD, comunicar-se com clareza e agir com imparcialidade.
                </p>

                <Card className="mb-8 bg-muted/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground">Exemplo real:</h3>
                        <p className="text-lg leading-relaxed">
                          Uma clínica de estética nomeou sua secretária como DPO. Ela não é advogada, mas foi treinada para reconhecer pedidos de titulares, encaminhar ao responsável técnico e registrar todas as interações. Isso é suficiente — e válido.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <ClipboardList className="w-8 h-8 text-primary" />
                  As 5 funções reais do DPO (além do que diz a lei)
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Na prática, o DPO eficaz faz muito mais do que "responder e-mails". Suas funções incluem:
                </p>

                <div className="space-y-4 mb-8">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <MessageSquare className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-foreground">
                            1. Receber e tratar solicitações dos titulares
                          </h3>
                          <p className="text-lg leading-relaxed">
                            (ex: "Quero excluir meus dados", "Com quem você compartilhou meu e-mail?")
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-foreground">
                            2. Orientar os colaboradores sobre boas práticas
                          </h3>
                          <p className="text-lg leading-relaxed">
                            (ex: treinar a equipe de atendimento a não armazenar CPF em planilhas locais)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Bell className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-foreground">
                            3. Comunicar-se com a ANPD em caso de incidentes
                          </h3>
                          <p className="text-lg leading-relaxed">
                            (ex: notificar um possível vazamento em até 2 dias úteis, se houver risco)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-foreground">
                            4. Manter registro das interações
                          </h3>
                          <p className="text-lg leading-relaxed">
                            (documentar todos os pedidos recebidos e como foram resolvidos — essencial em fiscalizações)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-foreground">
                            5. Ser um guardião da ética em dados
                          </h3>
                          <p className="text-lg leading-relaxed">
                            (questionar práticas como "vamos vender nossa base de leads?" ou "esse cookie é realmente necessário?")
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8 bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg leading-relaxed">
                        <strong>Dica crucial:</strong> O DPO não precisa tomar decisões técnicas (ex: escolher uma CMP), mas deve ter voz para alertar sobre riscos.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-primary" />
                  Terceirizar o DPO: quando faz sentido e como fazer com segurança
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Para a maioria dos pequenos e médios negócios, terceirizar o DPO é a opção mais segura, econômica e eficaz. Um especialista externo traz:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
                      <p className="text-lg leading-relaxed">Atualização constante sobre mudanças na ANPD</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
                      <p className="text-lg leading-relaxed">Distância emocional para agir com imparcialidade</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
                      <p className="text-lg leading-relaxed">Experiência com múltiplos setores (e-commerce, saúde, educação, etc.)</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
                      <p className="text-lg leading-relaxed">Modelos prontos de fluxos para atendimento a titulares</p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Mas nem todo serviço de "DPO terceirizado" é confiável. Veja como escolher com segurança:
                </p>

                <Card className="mb-8 border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <Award className="w-6 h-6 text-green-500" />
                      Critérios essenciais ao contratar um DPO externo:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Transparência sobre quem será o DPO real (não aceite "um time" — você precisa de um contato direto)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Canal de comunicação exclusivo (e-mail dedicado, não um SAC genérico)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Tempo de resposta definido (ex: 48h para responder titulares)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Registro de todas as interações (com relatórios mensais ou trimestrais)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Vinculação com profissionais de Direito Digital, se necessário</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mb-8 bg-amber-50 dark:bg-amber-950/20 border-amber-500">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <p className="text-lg leading-relaxed">
                        Evite empresas que oferecem "DPO + política de privacidade" por R$ 99/ano — isso é commoditização de um papel crítico.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mb-8">
                  <p className="text-lg leading-relaxed mb-4">
                    Leia nosso guia completo aqui:
                  </p>
                  <Link to="/blog/multas-lgpd-2025" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
                    Multas da LGPD em 2025: Valores, Casos Reais e Como Evitar Penalidades
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <Settings className="w-8 h-8 text-primary" />
                  Passo a passo para nomear seu DPO (mesmo que terceirizado)
                </h2>

                <div className="space-y-4 mb-8">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          1
                        </div>
                        <div>
                          <p className="text-lg leading-relaxed">
                            Avalie se sua empresa se enquadra na obrigatoriedade (use os critérios da ANPD acima)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          2
                        </div>
                        <div>
                          <p className="text-lg leading-relaxed">
                            Decida se será interno ou externo (para PMEs, externo é quase sempre melhor)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          3
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-foreground">Publique o contato do DPO</h3>
                          <ul className="space-y-2 ml-4">
                            <li className="text-lg leading-relaxed">• No rodapé do site: "Encarregado de Dados: dpo@seudominio.com.br"</li>
                            <li className="text-lg leading-relaxed">• Na política de privacidade: seção dedicada com nome (ou razão social) e e-mail</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          4
                        </div>
                        <div>
                          <p className="text-lg leading-relaxed">
                            Crie um fluxo interno para encaminhar pedidos recebidos por outros canais (ex: WhatsApp, SAC)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          5
                        </div>
                        <div>
                          <p className="text-lg leading-relaxed">
                            Treine sua equipe para reconhecer e redirecionar solicitações de privacidade
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8 bg-muted/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                      <Mail className="w-6 h-6 text-primary" />
                      Modelo de divulgação na política de privacidade:
                    </h3>
                    <div className="bg-background p-4 rounded border">
                      <p className="text-lg leading-relaxed italic">
                        "Nosso Encarregado de Dados (DPO) é [Nome ou Empresa], disponível para receber solicitações, reclamações ou dúvidas sobre o tratamento de seus dados pessoais. Entre em contato pelo e-mail: dpo@seudominio.com.br."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <XCircle className="w-8 h-8 text-red-500" />
                  Erros comuns ao lidar com o DPO (e como evitá-los)
                </h2>

                <div className="space-y-4 mb-8">
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2 text-foreground">"Nomear o dono como DPO em uma microempresa"</h3>
                          <p className="text-lg leading-relaxed">
                            Isso gera conflito de interesse. O dono dificilmente vai priorizar um pedido de exclusão se isso afetar vendas.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2 text-foreground">"Ter um e-mail genérico como contato"</h3>
                          <p className="text-lg leading-relaxed">
                            "contato@seudominio.com.br" não é suficiente. O DPO precisa de um canal exclusivo e identificável.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2 text-foreground">"Não treinar a equipe de atendimento"</h3>
                          <p className="text-lg leading-relaxed">
                            Se um cliente liga pedindo exclusão de dados e o atendente não sabe o que fazer, a falha é sua, não do DPO.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2 text-foreground">"Achar que DPO é só para cumprir tabela"</h3>
                          <p className="text-lg leading-relaxed">
                            Empresas que tratam o DPO como formalidade costumam ser as primeiras a serem multadas por descumprimento de direitos dos titulares.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  DPO e LGPD: uma parceria estratégica, não burocrática
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Ter um DPO bem estruturado não é custo — é investimento em confiança e resiliência. Ele é o termômetro da maturidade da sua governança de dados.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Ao demonstrar que há alguém disponível, capacitado e imparcial para cuidar dos direitos dos usuários, você comunica, sem palavras: "Aqui, sua privacidade é levada a sério."
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Esse tipo de mensagem constrói lealdade, reputação e diferenciação — especialmente em mercados competitivos como e-commerce, saúde digital e educação online.
                </p>

                <Card className="mb-8 bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-4">Pronto para estruturar seu DPO?</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Use nosso gerador gratuito de política de privacidade LGPD — ele já inclui a seção obrigatória com modelo de divulgação do Encarregado de Dados.
                    </p>
                    <Link to="/gerador-politica-privacidade">
                      <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                        Gerar Política de Privacidade Grátis
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <div className="bg-muted/50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Quer ir além? Leia também:</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/politica-cookies" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Como fazer aviso de cookies conforme LGPD
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/o-que-e-cmp" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        O Que é CMP? Plataforma de Gestão de Consentimento para Sites e Lojas
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <Lock className="w-8 h-8 text-primary" />
                  Conclusão: O DPO é o rosto humano da sua conformidade com a LGPD
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  O <strong>DPO na LGPD: Quem Pode Ser, Funções e Como Terceirizar com Segurança</strong> não é um tema técnico para juristas. É uma escolha estratégica de governança que define como sua empresa se relaciona com a privacidade no século XXI.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Seja interno ou externo, o DPO eficaz é aquele que transforma obrigações legais em experiências humanas reais — onde cada titular se sente ouvido, respeitado e empoderado.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  E, no final das contas, é isso que a LGPD realmente quer: dados protegidos, direitos exercidos e relações mais justas na internet.
                </p>

                <Card className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <Scale className="w-12 h-12 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">
                        Proteja seu negócio com conformidade completa
                      </h3>
                      <p className="text-lg leading-relaxed max-w-2xl">
                        Gere sua política de privacidade personalizada em minutos — 100% gratuito, sem cadastro e atualizado com a LGPD 2026.
                      </p>
                      <Link to="/gerador-politica-privacidade">
                        <Button size="lg" className="mt-4">
                          Criar Política de Privacidade Gratuita
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                  Perguntas Frequentes (FAQ)
                </h2>

                <div className="space-y-4 mb-12">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        1. Posso ser o DPO da minha própria empresa?
                      </h3>
                      <p className="text-lg leading-relaxed">
                        Sim, mas com ressalvas. Se você for o único dono e tomador de decisões, há risco de conflito de interesse. A ANPD recomenda que o DPO tenha autonomia para agir — algo difícil quando ele responde diretamente ao dono.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        2. Quanto custa um DPO terceirizado no Brasil?
                      </h3>
                      <p className="text-lg leading-relaxed">
                        Para pequenas empresas, os preços variam de R$ 150 a R$ 600 por mês, dependendo do volume de solicitações e complexidade. Evite planos "flat" sem limite de atendimentos — eles podem deixar você descoberto.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        3. O DPO precisa ser registrado na ANPD?
                      </h3>
                      <p className="text-lg leading-relaxed">
                        Não. A LGPD não exige registro prévio do DPO junto à ANPD. Basta publicar o contato na política de privacidade e mantê-lo funcional.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        4. O que acontece se eu não tiver DPO sendo obrigado?
                      </h3>
                      <p className="text-lg leading-relaxed">
                        Você está sujeito a sanções da ANPD, incluindo advertência, multa (até R$ 50 milhões) ou até a proibição de tratamento de dados. A ausência de DPO é uma das primeiras inconsistências verificadas em fiscalizações.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        5. Onde encontro orientações oficiais sobre o DPO?
                      </h3>
                      <p className="text-lg leading-relaxed">
                        Acesse o{' '}
                        <a 
                          href="https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/guia-do-encarregado.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          Guia do Encarregado da ANPD
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        {' '}— documento oficial, gratuito e atualizado com exemplos práticos para diferentes perfis de empresas.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8 bg-muted/30">
                  <CardContent className="pt-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <strong>Nota:</strong> Este artigo foi elaborado com base na LGPD, resoluções da Autoridade Nacional de Proteção de Dados (ANPD) e experiências reais de adequação em centenas de negócios brasileiros. Todo o conteúdo do Políticas de Privacidade é 100% gratuito, sem cadastro e sem obrigações — porque acreditamos que conformidade com dados deve ser acessível a todos, não só a quem pode pagar um departamento jurídico.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <SocialShare 
                title="DPO na LGPD: Quem Pode Ser, Funções e Como Terceirizar com Segurança"
              />

              <RelatedArticles tags={["dpo", "lgpd", "compliance", "profissional", "terceirização"]} currentArticleId="8" />

              <AuthorBio />
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <BlogSidebar />
              </div>
            </aside>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
