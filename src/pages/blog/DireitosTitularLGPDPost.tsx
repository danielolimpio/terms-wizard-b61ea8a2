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
  CheckCircle2,
  AlertTriangle,
  FileText,
  UserCheck,
  Scale,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Lock,
  Eye,
  Mail,
  Download,
  RefreshCw,
  Trash2,
  Share2,
  Ban,
  HelpCircle,
  Search,
  Clock,
  Sparkles,
} from "lucide-react";
import { BlogSidebar } from "@/components/BlogSidebar";
import { AuthorBio } from "@/components/AuthorBio";
import { SocialShare } from "@/components/SocialShare";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ArticleSchema } from "@/components/ArticleSchema";
import capaImg from "@/assets/blog-direitos-titular-lgpd.jpg";
import meioImg from "@/assets/blog-direitos-titular-meio.jpg";

const faqs = [
  {
    question: "Quanto tempo a empresa tem para responder a uma solicitação do titular?",
    answer:
      "A LGPD não fixa um prazo único para todos os direitos, mas a ANPD e a prática de mercado adotam 15 dias como referência razoável, contados do recebimento do pedido. Para a confirmação simples de tratamento ou acesso resumido, a resposta deve ser imediata. Em casos complexos, a empresa pode informar ao titular o prazo necessário, justificadamente.",
  },
  {
    question: "Preciso provar minha identidade para exercer meus direitos?",
    answer:
      "Sim. A empresa tem o dever de confirmar que quem está pedindo é realmente o titular dos dados — caso contrário, qualquer pessoa poderia acessar informações alheias. O processo deve ser proporcional: pedir um documento extra para confirmar a exclusão de uma conta é razoável, exigir reconhecimento de firma para receber a cópia de um cadastro online não é.",
  },
  {
    question: "Posso pedir a exclusão de dados que ainda estão em uso por um contrato?",
    answer:
      "O direito à eliminação não é absoluto. Se a empresa precisa manter os dados para cumprir uma obrigação legal (como a guarda fiscal de notas) ou para executar um contrato vigente, ela pode recusar a exclusão imediata. Nesse caso, deve explicar o motivo e indicar quando os dados serão efetivamente apagados.",
  },
  {
    question: "O que fazer se a empresa não responder ou negar meu pedido sem justificativa?",
    answer:
      "Você pode registrar uma reclamação diretamente na Autoridade Nacional de Proteção de Dados (ANPD), pelo canal oficial de petição do titular. Antes disso, vale guardar todos os comprovantes (e-mails, prints, protocolos) e tentar um último contato formal com o encarregado (DPO) da empresa.",
  },
  {
    question: "Esses direitos valem para dados coletados antes da LGPD entrar em vigor?",
    answer:
      "Sim. A LGPD se aplica a qualquer tratamento de dados pessoais em curso, independentemente de quando os dados foram coletados. Cadastros antigos, listas de e-mail herdadas e backups continuam sob a lei — e o titular pode exercer todos os seus direitos sobre eles.",
  },
];

export default function DireitosTitularLGPDPost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Direitos do Titular na LGPD: Guia Completo 2026 | Políticas</title>
        <meta
          name="description"
          content="Entenda os direitos do titular de dados na LGPD: acesso, correção, exclusão, portabilidade e como exercer cada um com modelos e exemplos práticos."
        />
        <meta property="og:title" content="Direitos do Titular na LGPD: Guia Completo 2026" />
        <meta
          property="og:description"
          content="Conheça os direitos garantidos pela LGPD ao titular de dados e aprenda, com exemplos reais, como exercer cada um deles."
        />
        <meta property="og:type" content="article" />
        <link
          rel="canonical"
          href="https://politicadeprivacidade.org/blog/direitos-titular-lgpd-guia-completo"
        />
      </Helmet>

      <ArticleSchema
        headline="Direitos do Titular na LGPD: Guia Completo dos 9 Direitos Garantidos por Lei"
        description="Guia prático e atemporal sobre os direitos do titular de dados na LGPD, com exemplos, modelos de solicitação e o passo a passo para exercer cada direito."
        url="https://politicadeprivacidade.org/blog/direitos-titular-lgpd-guia-completo"
        image="https://politicadeprivacidade.org/logo.png"
        datePublished="2026-06-28"
        faq={faqs}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-grow container mx-auto px-4 py-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-sm">LGPD</Badge>
                  <Badge variant="secondary" className="text-sm">Direitos do Titular</Badge>
                  <Badge variant="secondary" className="text-sm">Privacidade</Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                  Direitos do Titular na LGPD: Guia Completo dos 9 Direitos Garantidos por Lei
                </h1>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                  <time dateTime="2026-06-28">28 de junho de 2026</time>
                  <span>•</span>
                  <span>16 min de leitura</span>
                </div>

                <img
                  src={capaImg}
                  alt="Pessoa revisando seus dados pessoais em um notebook, exercendo os direitos do titular previstos na LGPD"
                  width={1280}
                  height={720}
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
                          Antes da lei, você era apenas um cadastro. Hoje, você é dono da sua história digital.
                        </h2>
                        <p className="text-lg leading-relaxed">
                          Pare um instante e tente lembrar: em quantos sites, lojas, aplicativos e formulários você já deixou nome, e-mail, CPF, endereço ou telefone nos últimos cinco anos? Em uma manhã comum, a maioria das pessoas distribui dados pessoais em pelo menos sete plataformas diferentes — sem perceber.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                          A Lei Geral de Proteção de Dados (LGPD) virou esse jogo de cabeça para baixo. Você deixou de ser apenas um registro em uma planilha e passou a ser, oficialmente, o dono dos seus dados. E ser dono significa poder pedir explicações, exigir mudanças, recuperar o que é seu — e, quando quiser, sumir do mapa.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                          O problema é que pouquíssima gente sabe quais direitos realmente tem, como acioná-los e o que fazer quando uma empresa decide ignorar o pedido. É esse vácuo que este guia se propõe a fechar.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed mb-6">
                  Nas próximas seções, vamos percorrer um a um os nove direitos do titular previstos na LGPD, sempre com exemplos do mundo real, modelos de pedido prontos para copiar e o passo a passo para registrar reclamações quando o canal interno da empresa falhar.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Se você é consumidor, este texto vai te dar autonomia. Se você é dono de empresa, ele funciona como um espelho: cada direito aqui listado é uma responsabilidade que o seu negócio precisa estar pronto para honrar — e, no fim, você vai encontrar links úteis para começar a se adequar gratuitamente.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <UserCheck className="w-8 h-8 text-primary" />
                  Quem é o "titular dos dados" e por que isso importa
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  O <strong>titular</strong> é qualquer pessoa natural a quem os dados pessoais se referem. Em outras palavras: se a informação é sobre você, você é o titular. Não importa se ela está em um banco de dados de um e-commerce, no CRM de uma clínica, em um aplicativo de delivery ou em uma planilha esquecida no Google Drive de um pequeno escritório.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Essa definição importa porque os direitos descritos no artigo 18 da LGPD são exercidos exclusivamente pelo titular (ou por seu representante legal). E quem precisa atendê-los é a empresa que decide como e por que tratar os dados — o chamado <em>controlador</em>. Para entender melhor essa figura, vale a leitura do nosso guia sobre <Link to="/blog/dpo-lgpd-quem-pode-ser" className="text-primary hover:underline">o papel do DPO na LGPD e como terceirizar com segurança</Link>, já que é geralmente o encarregado quem responde por essas solicitações no dia a dia.
                </p>

                <Card className="mb-8 bg-muted/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground">Pense assim:</h3>
                        <p className="text-lg leading-relaxed">
                          Se uma empresa fosse uma biblioteca dos seus dados, você seria o autor de todos os livros lá guardados. A LGPD apenas reconheceu, em lei, que você sempre teve o direito de pedir cópia, corrigir os capítulos errados e mandar tirar das prateleiras o que não quer mais que seja lido.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <Scale className="w-8 h-8 text-primary" />
                  Os 9 direitos do titular previstos no artigo 18 da LGPD
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  A LGPD reúne, no artigo 18, nove direitos principais. Eles não são uma lista decorativa: são instrumentos concretos que você pode usar a qualquer momento, sem custo, e que a empresa é obrigada a responder. A seguir, percorremos cada um deles com exemplos práticos do dia a dia brasileiro.
                </p>

                {/* 1 */}
                <Card className="mb-6 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">1. Confirmação da existência de tratamento</h3>
                        <p className="text-lg leading-relaxed mb-3">
                          É o direito mais básico e, talvez por isso, o mais ignorado. Antes de pedir cópia, correção ou exclusão, você pode simplesmente perguntar: <em>"vocês tratam dados meus?"</em>. A empresa precisa responder de forma clara, em linguagem acessível, sem rodeios técnicos.
                        </p>
                        <p className="text-lg leading-relaxed">
                          <strong>Exemplo real:</strong> uma pessoa que nunca se cadastrou em uma loja online começa a receber e-mails promocionais. Ela tem o direito de escrever para o canal de privacidade do remetente e pedir, antes de qualquer coisa, a confirmação de que seus dados foram, sim, incluídos em alguma base.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 2 */}
                <Card className="mb-6 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Eye className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">2. Acesso aos dados</h3>
                        <p className="text-lg leading-relaxed mb-3">
                          Confirmado o tratamento, você pode pedir para ver tudo: quais dados a empresa guarda sobre você, como os coletou, com que finalidade e por quanto tempo pretende mantê-los.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Aqui mora um detalhe importante: a empresa não pode entregar só o nome e o e-mail e dizer "pronto". O direito de acesso envolve mostrar o conjunto completo, incluindo dados gerados internamente — como pontuação em programas de fidelidade, histórico de pedidos ou logs de comportamento.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 3 */}
                <Card className="mb-6 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <RefreshCw className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">3. Correção de dados incompletos, inexatos ou desatualizados</h3>
                        <p className="text-lg leading-relaxed mb-3">
                          Endereço antigo no cadastro do banco, nome errado em um plano de saúde, telefone que não é mais seu em uma operadora: tudo isso é corrigível por solicitação direta.
                        </p>
                        <p className="text-lg leading-relaxed">
                          A correção precisa ser feita em tempo razoável e propagada para qualquer parceiro com quem aqueles dados tenham sido compartilhados. Não basta consertar na tela do atendente e deixar o registro errado em todos os outros sistemas.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <img
                  src={meioImg}
                  alt="Pessoa exercendo seus direitos de privacidade em um aplicativo no celular, ajustando configurações de dados pessoais"
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-lg my-10"
                />

                {/* 4 */}
                <Card className="mb-6 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Ban className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">4. Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade</h3>
                        <p className="text-lg leading-relaxed mb-3">
                          Esse direito é técnico no nome, mas simples na prática. Se a empresa guarda dados que não tem mais razão de guardar — ou que coletou sem base legal —, você pode pedir que eles sejam anonimizados (transformados em estatística), bloqueados (congelados) ou eliminados de vez.
                        </p>
                        <p className="text-lg leading-relaxed">
                          <strong>Exemplo:</strong> um portal de vagas que mantém currículos no ar dez anos depois da última atualização. Se você nunca renovou o consentimento e não há base legal para a retenção, pode exigir a exclusão completa.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 5 */}
                <Card className="mb-6 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Download className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">5. Portabilidade dos dados</h3>
                        <p className="text-lg leading-relaxed mb-3">
                          A portabilidade existe para você não ficar refém de um fornecedor. É o direito de pedir seus dados em um formato estruturado e levar para outro serviço — algo já comum em bancos digitais e operadoras de telecomunicações.
                        </p>
                        <p className="text-lg leading-relaxed">
                          A regulamentação detalhada ainda está sendo amadurecida pela ANPD, mas o princípio é claro: dados pessoais são seus, e mudar de plataforma não deve ser uma punição em forma de retrabalho.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 6 */}
                <Card className="mb-6 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Trash2 className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">6. Eliminação dos dados tratados com consentimento</h3>
                        <p className="text-lg leading-relaxed mb-3">
                          Esse é o famoso "direito ao esquecimento" — embora a expressão técnica seja menos romântica. Quando o tratamento foi feito com base no seu consentimento, você pode retirá-lo a qualquer momento e exigir a eliminação.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Há ressalvas: se houver obrigação legal de guarda (notas fiscais, registros médicos, contratos), parte dos dados pode permanecer pelo tempo exigido por outra norma — mas a empresa precisa explicar exatamente o que ficou, por quê e por quanto tempo.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 7 */}
                <Card className="mb-6 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Share2 className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">7. Informação sobre compartilhamento com terceiros</h3>
                        <p className="text-lg leading-relaxed mb-3">
                          Você pode perguntar — e tem que ser respondido — com quem seus dados foram compartilhados. Isso vale para entidades públicas e privadas: parceiros de marketing, processadores de pagamento, plataformas de anúncios, empresas de logística.
                        </p>
                        <p className="text-lg leading-relaxed">
                          É um direito poderoso, porque expõe a rede invisível por trás de qualquer cadastro. Muita gente descobre só por meio dele que seu e-mail percorreu cinco empresas diferentes antes do primeiro disparo de promoção chegar.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 8 */}
                <Card className="mb-6 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <FileText className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">8. Informação sobre a possibilidade de não fornecer consentimento e suas consequências</h3>
                        <p className="text-lg leading-relaxed">
                          Sempre que uma empresa pedir uma autorização, você tem o direito de saber, com transparência, o que acontece se você disser não. Algumas funcionalidades podem ficar indisponíveis — e tudo bem. O que não se admite é o famoso "consentimento forçado", em que negar significa não poder usar absolutamente nada do serviço, mesmo coisas que não dependem daquele dado.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 9 */}
                <Card className="mb-6 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">9. Revogação do consentimento</h3>
                        <p className="text-lg leading-relaxed">
                          O consentimento dado hoje pode ser retirado amanhã — sem que isso prejudique você no acesso a outros recursos baseados em outras hipóteses legais. A revogação precisa ser tão fácil quanto a concessão: se você marcou um checkbox para autorizar, deve conseguir desmarcar com um clique equivalente, não enfrentando um labirinto de menus.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <Mail className="w-8 h-8 text-primary" />
                  Como exercer seus direitos na prática: modelo pronto de solicitação
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Saber que os direitos existem não basta. A maior parte das pessoas desiste no meio do caminho porque não sabe escrever um pedido formal. Para acabar com essa fricção, abaixo está um modelo enxuto, em linguagem direta, que serve para praticamente qualquer empresa brasileira.
                </p>

                <Card className="mb-8 bg-muted/40">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Modelo de solicitação ao encarregado (DPO)</h3>
                    <div className="bg-background border border-border rounded-md p-4 text-base leading-relaxed">
                      <p className="mb-3">
                        Assunto: <strong>Solicitação do titular de dados — LGPD</strong>
                      </p>
                      <p className="mb-3">Prezados,</p>
                      <p className="mb-3">
                        Eu, <em>[seu nome completo]</em>, portador do CPF <em>[número]</em>, na qualidade de titular dos meus dados pessoais, com fundamento no artigo 18 da Lei nº 13.709/2018 (LGPD), venho solicitar:
                      </p>
                      <p className="mb-3">
                        ( ) confirmação da existência de tratamento;<br />
                        ( ) acesso aos meus dados pessoais e às finalidades para as quais são tratados;<br />
                        ( ) correção dos seguintes dados: <em>[descreva]</em>;<br />
                        ( ) eliminação dos meus dados tratados com base no meu consentimento;<br />
                        ( ) informação sobre os terceiros com quem meus dados foram compartilhados;<br />
                        ( ) revogação do consentimento concedido em <em>[descreva a situação]</em>.
                      </p>
                      <p className="mb-3">
                        Aguardo retorno por este mesmo canal em prazo razoável, nos termos da regulamentação da ANPD. Caso a solicitação seja negada total ou parcialmente, peço a justificativa formal por escrito.
                      </p>
                      <p>Atenciosamente,<br /><em>[seu nome e contato]</em></p>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed mb-6">
                  Envie a mensagem para o canal de privacidade indicado no rodapé ou na política de privacidade da empresa. Se você não encontra esse contato, esse já é o primeiro sinal de inconformidade — e, sim, pode ser objeto de reclamação. Para empresas que ainda não publicaram um documento adequado, a melhor recomendação é usar nosso <Link to="/gerador-politica-privacidade" className="text-primary hover:underline">gerador de política de privacidade gratuito</Link>, que já entrega o texto com os campos obrigatórios para contato com o encarregado.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <Clock className="w-8 h-8 text-primary" />
                  Quais prazos a empresa precisa respeitar
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  A LGPD não traz prazos rígidos para todos os direitos, mas a ANPD adota como referência o intervalo de até quinze dias para respostas substantivas. Para pedidos simples — como a confirmação de tratamento ou o acesso a uma cópia resumida — a expectativa é de retorno em formato simplificado e <strong>imediato</strong>.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Quando o caso é complexo, a empresa pode estender o prazo, mas deve comunicar isso ao titular, explicar o motivo e indicar uma nova data. O que ela não pode é simplesmente engavetar a solicitação ou repassar de mesa em mesa até o pedido morrer no esquecimento.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                  O que fazer quando a empresa ignora ou nega o pedido
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Se o canal interno falhou, a próxima etapa é registrar uma reclamação formal na ANPD. O órgão recebe denúncias por meio do canal de petição do titular, disponível no portal oficial. Para abrir o caso, basta descrever o pedido feito, anexar comprovantes de envio (e-mails, prints, protocolos) e narrar de forma objetiva o que aconteceu.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Você pode consultar diretamente a{" "}
                  <a
                    href="https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao/peticao-do-titular"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    página oficial da ANPD sobre petição do titular
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {" "}para entender o passo a passo atualizado. Vale também conhecer o texto integral da{" "}
                  <a
                    href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Lei nº 13.709/2018 no Planalto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  , que é a fonte primária de cada direito comentado neste artigo.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Em paralelo, é possível acionar o Procon do seu estado quando a violação envolver relação de consumo, ou ainda buscar a via judicial em casos de dano concreto. O importante é não tratar o silêncio da empresa como ponto final: a LGPD existe justamente para que ele não seja.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <Search className="w-8 h-8 text-primary" />
                  Erros comuns que enfraquecem o pedido do titular
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Trabalhando com adequação de empresas e atendendo dúvidas de leitores, é possível identificar um padrão de pequenos deslizes que costumam emperrar pedidos legítimos. Vale a pena conhecê-los para não tropeçar:
                </p>

                <Card className="mb-8 border-l-4 border-l-amber-500">
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Mandar a solicitação por um canal genérico de SAC, em vez do contato específico de privacidade — o que faz o pedido perder prioridade.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Pedir tudo de uma vez sem indicar prioridade: vale mais escrever "primeiro acesso, depois exclusão" do que mandar uma lista confusa.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Não guardar comprovantes. Sem print, sem protocolo, sem e-mail de confirmação, fica difícil sustentar a reclamação depois.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                        <span className="text-lg leading-relaxed">Aceitar negativas sem justificativa. Toda recusa precisa vir acompanhada de fundamento legal claro.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  Para empresas: como transformar direitos do titular em vantagem competitiva
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Do outro lado do balcão, a percepção mudou. Empresas que enxergam os direitos do titular como custo regulatório perdem espaço para aquelas que os tratam como diferencial. Um canal de privacidade que responde em três dias, com linguagem cordial e clara, fideliza tanto quanto um bom atendimento de pós-venda.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Para colocar a casa em ordem, três providências resolvem boa parte do problema: publicar uma política de privacidade real (não um modelo copiado), nomear formalmente um encarregado e construir um fluxo interno de atendimento a solicitações. Caso ainda não tenha esse alicerce, comece pelos passos descritos em <Link to="/blog/politica-privacidade-o-que-e-por-que-precisa-modelo-gratuito-2026" className="text-primary hover:underline">nosso guia completo sobre política de privacidade em 2026</Link>.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Quem busca uma referência internacional sobre boas práticas pode consultar também o material do{" "}
                  <a
                    href="https://www.gov.br/anpd/pt-br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    portal oficial da ANPD
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  , que reúne guias orientativos, perguntas frequentes e o histórico de decisões já tomadas pela autoridade.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
                  <Lock className="w-8 h-8 text-primary" />
                  Conclusão: direitos só existem de verdade quando são exercidos
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  A LGPD criou uma régua nova para a relação entre pessoas e empresas no Brasil. Mas, como toda lei, ela só ganha vida quando os destinatários — você, eu, todos nós — entendem o que está escrito e usam.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Saber que você pode pedir acesso, correção, portabilidade e exclusão é o primeiro passo. Mandar o pedido é o segundo. Cobrar resposta, registrar reclamação e exigir transparência é o que, no longo prazo, faz mudar a cultura de empresas que ainda enxergam dados pessoais como matéria-prima descartável.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  Da próxima vez que receber um e-mail estranho, perceber um dado errado em um cadastro antigo ou desconfiar do uso que estão fazendo das suas informações, lembre-se: existe uma lei inteira escrita para te dar o direito de pedir explicações. E existe um guia inteiro escrito para te ajudar a fazer isso de cabeça erguida.
                </p>

                <Card className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <Scale className="w-12 h-12 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">
                        Tem um site ou loja? Comece sua adequação agora
                      </h3>
                      <p className="text-lg leading-relaxed max-w-2xl">
                        Gere gratuitamente uma política de privacidade alinhada à LGPD, com os campos certos para receber e responder às solicitações dos titulares.
                      </p>
                      <Link to="/gerador-politica-privacidade">
                        <Button size="lg" className="mt-4">
                          Criar Política de Privacidade Grátis
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Perguntas Frequentes (FAQ)</h2>

                <div className="space-y-4 mb-12">
                  {faqs.map((item, idx) => (
                    <Card key={idx}>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          {idx + 1}. {item.question}
                        </h3>
                        <p className="text-lg leading-relaxed">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mb-8 bg-muted/30">
                  <CardContent className="pt-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <strong>Nota:</strong> este artigo foi elaborado com base no texto integral da Lei nº 13.709/2018 (LGPD), em materiais oficiais da Autoridade Nacional de Proteção de Dados (ANPD) e em mais de duas décadas de experiência com adequação de empresas brasileiras a normas de privacidade. O conteúdo é informativo e não substitui aconselhamento jurídico para casos concretos.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <SocialShare title="Direitos do Titular na LGPD: Guia Completo dos 9 Direitos Garantidos por Lei" />

              <RelatedArticles
                tags={["lgpd", "privacidade", "compliance", "dados", "titular"]}
                currentArticleId="10"
              />

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
