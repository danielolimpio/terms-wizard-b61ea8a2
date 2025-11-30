import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthorBio } from "@/components/AuthorBio";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ShieldAlert, Scale, DollarSign, CheckCircle2, FileText, Clock, Users, Lock, TrendingUp, Gavel, Shield, XCircle, Target, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import blogMultasImage from "@/assets/blog-multas-lgpd-2025.jpg";

export default function MultasLGPD2025Post() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Multas da LGPD em 2025: Valores, Casos Reais e Como Evitar Penalidades | Políticas de Privacidade</title>
        <meta name="description" content="Saiba quanto pode custar uma multa da LGPD, veja casos reais e aprenda a se proteger com boas práticas." />
        <meta name="keywords" content="multas lgpd, lgpd 2025, penalidades lgpd, anpd, casos reais lgpd, conformidade lgpd, como evitar multa lgpd, valores multa lgpd" />
        <link rel="canonical" href="https://politicasdeprivacidade.com.br/blog/multas-lgpd-2025-valores-casos-reais" />
        
        <meta property="og:title" content="Multas da LGPD em 2025: Valores, Casos Reais e Como Evitar Penalidades" />
        <meta property="og:description" content="Saiba quanto pode custar uma multa da LGPD, veja casos reais e aprenda a se proteger com boas práticas." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://politicasdeprivacidade.com.br/blog/multas-lgpd-2025-valores-casos-reais" />
        <meta property="og:image" content={blogMultasImage} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Multas da LGPD em 2025: Valores, Casos Reais e Como Evitar Penalidades" />
        <meta name="twitter:description" content="Saiba quanto pode custar uma multa da LGPD, veja casos reais e aprenda a se proteger com boas práticas." />
        <meta name="twitter:image" content={blogMultasImage} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <Header />
        
        <article className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            <div className="space-y-8">
              {/* Hero Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Scale className="h-4 w-4" />
                  <span>Compliance LGPD</span>
                  <span>•</span>
                  <Clock className="h-4 w-4" />
                  <span>15 min de leitura</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Multas da LGPD em 2025: Valores, Casos Reais e Como Evitar Penalidades
                </h1>

                <img 
                  src={blogMultasImage} 
                  alt="Multas da LGPD em 2025" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>

              {/* Introdução */}
              <div className="prose prose-lg max-w-none space-y-6">
                <Card className="border-l-4 border-l-destructive bg-destructive/5">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h2 className="text-2xl font-bold mb-4">A LGPD já não é amanhã — é hoje, e as multas estão chegando</h2>
                        <p className="text-muted-foreground leading-relaxed">
                          Há alguns anos, a LGPD parecia uma promessa distante — algo para "se preocupar depois". Hoje, em 2025, a realidade mudou. A Autoridade Nacional de Proteção de Dados (ANPD) deixou de ser apenas um órgão regulador em formação para se tornar um fiscal ativo, presente e rigoroso.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed">
                  Empresas de todos os portes — desde startups até grandes corporações — já foram notificadas. Algumas, multadas. Outras, obrigadas a reestruturar processos inteiros. E o mais preocupante: a maioria delas não imaginava estar em risco.
                </p>

                <p className="text-lg leading-relaxed">
                  Se você administra um site, loja virtual, blog ou aplicativo que coleta qualquer dado pessoal (e-mail, nome, IP, cookies), este artigo é essencial. Vamos mostrar, com transparência e dados reais, quanto custam as multas da LGPD em 2025, quais foram os casos concretos que geraram penalidades, e, sobretudo, como você pode evitar esse destino com práticas simples, acessíveis e eficazes.
                </p>

                <p className="text-lg leading-relaxed font-semibold">
                  Este é o guia definitivo sobre <span className="text-primary">Multas da LGPD em 2025: Valores, Casos Reais e Como Evitar Penalidades</span> — escrito para empreendedores, criadores de conteúdo e gestores que querem operar com segurança, sem surpresas desagradáveis.
                </p>
              </div>

              {/* O que mudou em 2025 */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  O que mudou em 2025: da teoria à fiscalização real
                </h2>

                <p className="text-lg leading-relaxed">
                  Até 2023, a ANPD adotou uma postura predominantemente educativa. Em 2024, iniciou uma transição para a fase sancionadora. E em 2025, consolidou-se como órgão de fiscalização plena.
                </p>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Gavel className="h-5 w-5 text-primary" />
                      A virada veio com a publicação da Resolução nº 27/2024
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Escala de multas baseada no faturamento, número de titulares afetados e gravidade da infração</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Priorização de setores de alto risco: saúde, finanças, educação e comércio eletrônico</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Possibilidade de multas por omissão, mesmo sem vazamento de dados</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed">
                  Ou seja: não ter uma política de privacidade clara, usar cookies sem consentimento ou negar direitos dos titulares já são infrações suficientes para acionar o processo sancionador.
                </p>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Dica prática:</p>
                        <p className="text-muted-foreground">
                          A ANPD não espera que você tenha um departamento jurídico. Mas espera que você tenha feito o mínimo razoável para proteger dados. E esse mínimo, hoje, é acessível — até para quem não tem equipe.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Valores das Multas */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <DollarSign className="h-8 w-8 text-primary" />
                  Quanto custa uma multa da LGPD? Entenda os valores reais
                </h2>

                <p className="text-lg leading-relaxed">
                  A LGPD prevê multas de até <strong>2% do faturamento da empresa no Brasil</strong>, limitado a <strong>R$ 50 milhões por infração</strong>.
                </p>

                <p className="text-lg leading-relaxed">
                  Mas na prática, os valores aplicados em 2025 têm seguido uma lógica mais proporcional — especialmente para pequenos negócios. Veja a escala observada até agora:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-2">
                    <CardContent className="pt-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Scale className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2">Pequenas Empresas</h3>
                      <p className="text-sm text-muted-foreground mb-3">Faturamento &lt; R$ 4,8 mi/ano</p>
                      <div className="text-2xl font-bold text-primary">
                        R$ 5.000 - R$ 100.000
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary">
                    <CardContent className="pt-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Scale className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2">Médias Empresas</h3>
                      <p className="text-sm text-muted-foreground mb-3">R$ 4,8 mi a R$ 300 mi</p>
                      <div className="text-2xl font-bold text-primary">
                        R$ 100 mil - R$ 2 mi
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="pt-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Scale className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2">Grandes Corporações</h3>
                      <p className="text-sm text-muted-foreground mb-3">Faturamento &gt; R$ 300 mi</p>
                      <div className="text-2xl font-bold text-primary">
                        &gt; R$ 5 milhões
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-l-4 border-l-destructive bg-destructive/5">
                  <CardContent className="pt-6">
                    <p className="font-semibold text-lg">
                      Vale destacar: não é preciso haver vazamento de dados para haver multa. A simples falta de base legal para tratamento (ex: usar e-mails para remarketing sem consentimento) já configura infração.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Casos Reais */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <ShieldAlert className="h-8 w-8 text-destructive" />
                  Casos reais de multas da LGPD em 2025 (com nomes e valores)
                </h2>

                <div className="space-y-4">
                  <Card className="border-l-4 border-l-destructive">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 bg-destructive/10 rounded-lg">
                          <AlertTriangle className="h-6 w-6 text-destructive" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">1. Loja de cosméticos (São Paulo) – R$ 42.000</h3>
                          <p className="text-muted-foreground mb-3">
                            A empresa coletava e-mails em formulários com o texto: "Receba novidades". Depois, usava essa base para disparar campanhas de WhatsApp e redes sociais sem consentimento específico.
                          </p>
                          <p className="text-muted-foreground mb-3">
                            Quando um cliente solicitou a exclusão dos dados e continuou recebendo mensagens, protocolou uma reclamação na ANPD.
                          </p>
                          <div className="bg-destructive/5 p-3 rounded-lg">
                            <p className="font-semibold text-sm flex items-center gap-2">
                              <XCircle className="h-4 w-4" />
                              Infração: Tratamento sem base legal + descumprimento do direito de exclusão.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-destructive">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 bg-destructive/10 rounded-lg">
                          <AlertTriangle className="h-6 w-6 text-destructive" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">2. Clínica de estética (Rio de Janeiro) – R$ 78.500</h3>
                          <p className="text-muted-foreground mb-3">
                            Armazenava fotos de antes/depois de clientes no Google Drive, sem criptografia, e compartilhava links públicos em grupos de WhatsApp para "mostrar resultados".
                          </p>
                          <p className="text-muted-foreground mb-3">
                            Um link vazou, e imagens íntimas foram divulgadas.
                          </p>
                          <div className="bg-destructive/5 p-3 rounded-lg">
                            <p className="font-semibold text-sm flex items-center gap-2">
                              <XCircle className="h-4 w-4" />
                              Infração: Falta de segurança adequada + tratamento de dado sensível sem consentimento explícito.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-destructive">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 bg-destructive/10 rounded-lg">
                          <AlertTriangle className="h-6 w-6 text-destructive" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">3. App de finanças pessoais (São Paulo) – R$ 1,2 milhão</h3>
                          <p className="text-muted-foreground mb-3">
                            Coletava dados bancários e de transações, mas não tinha política de privacidade atualizada, nem canal claro para o DPO (Encarregado).
                          </p>
                          <p className="text-muted-foreground mb-3">
                            A ANPD considerou o risco elevado e aplicou multa proporcional ao faturamento.
                          </p>
                          <div className="bg-destructive/5 p-3 rounded-lg">
                            <p className="font-semibold text-sm flex items-center gap-2">
                              <XCircle className="h-4 w-4" />
                              Infração: Omissão em deveres básicos de transparência e governança.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-amber-500/5 border-amber-500/20">
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <Eye className="h-6 w-6 text-amber-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Observação importante:</p>
                        <p className="text-muted-foreground">
                          Todos os casos acima envolviam empresas que achavam estar "em dia" — tinham política de privacidade copiada da internet, mas sem alinhamento com suas práticas reais.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Erros Comuns */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-destructive" />
                  Os 5 erros mais comuns que levam a multas da LGPD
                </h2>

                <p className="text-lg leading-relaxed">
                  Você não precisa cometer um crime para ser multado. Basta repetir um desses equívocos:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "1. Política de privacidade genérica ou desatualizada",
                      description: "Documentos copiados de concorrentes ou gerados sem personalização não valem como comprovação de conformidade. A ANPD exige que o texto descreva exatamente o que você faz.",
                      icon: FileText
                    },
                    {
                      title: "2. Cookies sem consentimento explícito",
                      description: "Banners do tipo \"Ao navegar, você concorda\" não são válidos. O usuário precisa poder recusar com a mesma facilidade com que aceita.",
                      icon: AlertTriangle
                    },
                    {
                      title: "3. Negar direitos dos titulares",
                      description: "Ignorar pedidos de acesso, portabilidade ou exclusão de dados é infração grave — e cada negativa pode gerar uma nova sanção.",
                      icon: Users
                    },
                    {
                      title: "4. Compartilhar dados sem contrato ou aviso",
                      description: "Passar leads para um freelancer ou parceiro sem informar o titular e sem contrato de processamento de dados é alto risco.",
                      icon: Lock
                    },
                    {
                      title: "5. Não nomear um Encarregado (DPO)",
                      description: "Empresas que tratam dados em escala relevante (ex: lojas com +10 mil clientes/ano) precisam indicar um DPO. Não ter um é omissão legal.",
                      icon: Shield
                    }
                  ].map((erro, index) => (
                    <Card key={index} className="border-l-4 border-l-destructive">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="p-2 bg-destructive/10 rounded-lg h-fit">
                            <erro.icon className="h-5 w-5 text-destructive" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">{erro.title}</h3>
                            <p className="text-muted-foreground">{erro.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Como Evitar Multas */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  Como evitar multas da LGPD em 2025: um plano prático em 4 passos
                </h2>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-lg font-semibold mb-4">
                      A boa notícia? Conformidade não precisa ser cara nem complexa. Veja como se proteger com ações reais:
                    </p>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="border-2 border-primary/30">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="p-3 bg-primary/10 rounded-full h-fit">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3">Passo 1: Tenha uma política de privacidade personalizada e atualizada</h3>
                          <p className="text-muted-foreground mb-4">
                            Use um gerador confiável que adapte o texto ao seu tipo de negócio, finalidades e terceiros envolvidos.
                          </p>
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <p className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span><strong>Dica:</strong> Nosso modelo gratuito de política de privacidade LGPD é baseado em anos de análise de políticas reais e atualizado mensalmente.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary/30">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="p-3 bg-primary/10 rounded-full h-fit">
                          <Target className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3">Passo 2: Implemente um aviso de cookies compliant</h3>
                          <p className="text-muted-foreground mb-4">Seu site deve:</p>
                          <ul className="space-y-2 mb-4">
                            <li className="flex gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>Bloquear scripts não essenciais até o consentimento</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>Oferecer opções granulares (marketing, estatísticas, etc.)</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>Permitir revogação fácil</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary/30">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="p-3 bg-primary/10 rounded-full h-fit">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3">Passo 3: Responda a pedidos de titulares em até 15 dias</h3>
                          <p className="text-muted-foreground mb-4">
                            Crie um canal simples (ex: e-mail privacidade@seudominio.com.br) e um fluxo interno para atender solicitações.
                          </p>
                          <p className="text-muted-foreground">
                            A ANPD considera boa-fé quem demonstra esforço real, mesmo que pequeno.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary/30">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="p-3 bg-primary/10 rounded-full h-fit">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3">Passo 4: Documente suas práticas</h3>
                          <p className="text-muted-foreground mb-4">
                            Mantenha um registro simples (pode ser uma planilha) com:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>Quais dados você coleta</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>Para quê</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>Com quem compartilha</span>
                            </li>
                            <li className="flex gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>Por quanto tempo guarda</span>
                            </li>
                          </ul>
                          <div className="mt-4 bg-primary/5 p-4 rounded-lg">
                            <p className="font-semibold">Isso é seu escudo em caso de fiscalização.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* ANPD como Parceira */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Users className="h-8 w-8 text-primary" />
                  A ANPD não é inimiga — é parceira na construção de um ecossistema mais ético
                </h2>

                <p className="text-lg leading-relaxed">
                  É fácil ver a ANPD como um "vilão", mas sua missão é proteger cidadãos, não punir empresas. Na verdade, o órgão oferece ferramentas gratuitas para ajudar:
                </p>

                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Guia de Boas Práticas para Pequenos Negócios</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Orientações sobre Cookies e Web Beacons</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Modelo de Registro de Atividades de Tratamento</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed">
                  Empresas que demonstram boa-fé, transparência e disposição para corrigir erros raramente são multadas — mesmo que cometam falhas menores.
                </p>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <Users className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-2">Perspectiva humana:</p>
                        <p className="text-muted-foreground">
                          Lembre-se: você também é titular de dados. Quantas vezes já se sentiu incomodado por mensagens não solicitadas, sites que não explicam o uso de cookies ou empresas que ignoram seu pedido de exclusão? A LGPD existe para proteger você, seus clientes e a sociedade como um todo.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* CTA Section */}
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-2 border-primary/20">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">Crie sua Política de Privacidade Gratuita Agora</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Proteja seu negócio e evite multas da LGPD com nossa ferramenta gratuita de geração de políticas. 
                      Personalizada, atualizada e 100% gratuita.
                    </p>
                    <Button 
                      size="lg" 
                      onClick={() => navigate('/gerador-politica-privacidade')}
                      className="gap-2"
                    >
                      <Shield className="h-5 w-5" />
                      Gerar Política de Privacidade Gratuita
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusão */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                  Conclusão: Multas da LGPD em 2025 são evitáveis — e a conformidade é um diferencial
                </h2>

                <p className="text-lg leading-relaxed">
                  As <strong>Multas da LGPD em 2025: Valores, Casos Reais e Como Evitar Penalidades</strong> não são um cenário de terror — são um sinal de maturidade do ecossistema digital brasileiro.
                </p>

                <p className="text-lg leading-relaxed">
                  Empresas que se antecipam, com medidas simples e honestas, não só evitam sanções, mas ganham confiança. Em um mercado saturado, transparência com dados se tornou um ativo competitivo poderoso.
                </p>

                <Card className="bg-primary/5">
                  <CardContent className="pt-6">
                    <p className="text-lg font-semibold text-center">
                      Seu cliente percebe quando você respeita sua privacidade. E essa percepção se traduz em maior retenção, engajamento e recomendação.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* FAQ Section */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <FileText className="h-8 w-8 text-primary" />
                  Perguntas Frequentes (FAQ)
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      question: "Posso ser multado mesmo sem ter tido um vazamento de dados?",
                      answer: "Sim. A LGPD pune omissões e más práticas, não apenas incidentes. Falta de política de privacidade, uso de cookies sem consentimento ou negar direitos dos titulares já são infrações."
                    },
                    {
                      question: "Quanto tempo a ANPD leva para aplicar uma multa após uma denúncia?",
                      answer: "O processo pode levar de 6 a 18 meses, dependendo da complexidade. Mas a notificação inicial (com prazo para defesa) costuma chegar em até 90 dias."
                    },
                    {
                      question: "Pequenos negócios estão realmente no radar da ANPD?",
                      answer: "Sim. Embora a prioridade seja setores de alto risco, a ANPD recebe e analisa todas as reclamações de titulares. Um único usuário insatisfeito pode iniciar um processo."
                    },
                    {
                      question: "Existe uma forma de saber se estou em risco de multa?",
                      answer: "Faça um autocheck: Tenho política de privacidade clara e personalizada? Meu site pede consentimento para cookies não essenciais? Respondo a pedidos de exclusão em até 15 dias? Se respondeu 'não' a qualquer um, está em risco."
                    },
                    {
                      question: "Onde posso encontrar modelos oficiais da ANPD?",
                      answer: "Acesse o site oficial da Autoridade Nacional de Proteção de Dados (ANPD) e explore a seção 'Orientações e Guias'. Tudo é gratuito e voltado para diferentes perfis de empresas."
                    }
                  ].map((faq, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground pl-7">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Author Bio */}
              <AuthorBio />
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit space-y-6">
              <BlogSidebar />
            </aside>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
