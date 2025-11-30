import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogSidebar } from "@/components/BlogSidebar";
import { AuthorBio } from "@/components/AuthorBio";
import { SocialShare } from "@/components/SocialShare";
import { RelatedArticles } from "@/components/RelatedArticles";
import { 
  ShieldCheck, 
  Cookie, 
  CheckCircle2,
  AlertTriangle,
  Settings,
  FileText,
  Lock,
  Users,
  Clock,
  Eye
} from "lucide-react";
import heroImage from "@/assets/blog-o-que-e-cmp.jpg";

const PostOQueECMP = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>O Que é CMP? Plataforma de Gestão de Consentimento para Sites e Lojas - Políticas de Privacidade</title>
        <meta 
          name="description" 
          content="Entenda o que é uma CMP, como ela funciona e por que é obrigatória para sites que usam cookies na LGPD." 
        />
        <meta name="keywords" content="CMP, consentimento, cookies, LGPD, gestão de consentimento, banner de cookies, compliance" />
        <link rel="canonical" href="https://politicadeprivacidade.org/blog/o-que-e-cmp-plataforma-gestao-consentimento" />
        
        <meta property="og:title" content="O Que é CMP? Plataforma de Gestão de Consentimento para Sites e Lojas" />
        <meta property="og:description" content="Entenda o que é uma CMP, como ela funciona e por que é obrigatória para sites que usam cookies na LGPD." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={heroImage} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "O Que é CMP? Plataforma de Gestão de Consentimento para Sites e Lojas",
            "description": "Entenda o que é uma CMP, como ela funciona e por que é obrigatória para sites que usam cookies na LGPD.",
            "image": heroImage,
            "datePublished": new Date().toISOString(),
            "author": {
              "@type": "Person",
              "name": "Equipe Políticas de Privacidade"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8 lg:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_300px] gap-8">
              <article className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <img 
                    src={heroImage} 
                    alt="Interface futurística de e-commerce mostrando gestão de consentimento e cookies" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                <header className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">
                    O Que é CMP? Plataforma de Gestão de Consentimento para Sites e Lojas
                  </h1>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <time dateTime={new Date().toISOString()}>
                      {new Date().toLocaleDateString('pt-BR', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                    <span>•</span>
                    <span>12 min de leitura</span>
                  </div>

                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Entenda o que é uma CMP, como ela funciona e por que é obrigatória para sites que usam cookies na LGPD.
                  </p>
                </header>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Cookie className="w-8 h-8 text-primary" />
                    Quando seu site pede "OK" para cookies, alguém precisa garantir que esse "OK" seja válido
                  </h2>

                  <p className="mb-6">
                    Você já entrou em um site e viu aquele banner familiar: "Usamos cookies para melhorar sua experiência. Ao continuar, você concorda." Clicou em "Aceitar" e seguiu navegando — como quase todo mundo faz.
                  </p>

                  <p className="mb-6">
                    Mas se você é quem administra esse site, há uma pergunta crucial que não pode ser ignorada: <strong>esse "OK" é legalmente válido?</strong>
                  </p>

                  <p className="mb-6">
                    Se sua resposta for "não tenho certeza", você está em boa companhia — mas também em risco real. A LGPD não aceita consentimentos genéricos, implícitos ou obtidos por meio de interfaces enganosas. Para operar com segurança, você precisa de uma <strong>CMP</strong> — ou Plataforma de Gestão de Consentimento.
                  </p>

                  <p className="mb-6">
                    Este artigo vai desvendar, de forma clara e prática, o que é CMP, por que ela deixou de ser opcional para se tornar essencial em qualquer site ou loja virtual que use cookies de rastreamento, analytics ou publicidade. Você entenderá como ela funciona, quais critérios avaliar ao escolher uma e como implementá-la sem complicações técnicas.
                  </p>

                  <p className="mb-6">
                    Ao final, você terá clareza para tomar decisões que protejam seu negócio, respeitem seus visitantes e garantam conformidade com a lei — sem depender de soluções improvisadas ou plugins que prometem compliance, mas não entregam.
                  </p>

                  <p className="mb-6">
                    E sim: este é o <strong>O Que é CMP? Plataforma de Gestão de Consentimento para Sites e Lojas</strong> que você precisava para fechar o ciclo da sua adequação à LGPD.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                    O que é CMP? A definição que vai além do jargão técnico
                  </h2>

                  <p className="mb-6">
                    <strong>CMP</strong> é a sigla em inglês para <strong>Consent Management Platform</strong> — ou, em português, Plataforma de Gestão de Consentimento. Trata-se de uma ferramenta tecnológica que permite:
                  </p>

                  <ul className="list-none space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Informar os visitantes sobre o uso de cookies e tecnologias similares</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Obter seu consentimento de forma livre, informada e específica</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Registrar essa autorização para fins de comprovação</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Bloquear scripts de terceiros até que o consentimento seja dado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Permitir que o usuário revogue ou altere suas preferências a qualquer momento</span>
                    </li>
                  </ul>

                  <p className="mb-6">
                    Em outras palavras, uma CMP é o <strong>operador técnico do consentimento</strong> exigido pela LGPD. Ela transforma um princípio legal — "consentimento prévio e inequívoco" — em uma experiência real, funcional e auditável no seu site.
                  </p>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Eye className="w-5 h-5 text-primary" />
                        Analogia do dia a dia:
                      </h3>
                      <p>
                        Imagine que sua casa tem um sistema de segurança com câmeras. Antes de instalar, você avisa os convidados: "Vou gravar o corredor para segurança. Quer que eu desative enquanto estiver aqui?"
                      </p>
                      <p className="mt-3">
                        A CMP é o equivalente digital dessa conversa — só que automatizada, escalável e com comprovante.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-primary" />
                    Por que a LGPD tornou as CMPs praticamente obrigatórias
                  </h2>

                  <p className="mb-6">
                    Muitos gestores ainda acreditam que um aviso de cookies simples — com um botão "Aceitar" — basta. A realidade é outra.
                  </p>

                  <p className="mb-6">
                    A Autoridade Nacional de Proteção de Dados (ANPD) deixou claro, em seu <strong>Guia sobre Cookies e Web Beacons (2023)</strong>, que:
                  </p>

                  <Card className="bg-muted/50 border-muted mb-6">
                    <CardContent className="pt-6">
                      <p className="italic text-lg">
                        "O consentimento deve ser específico, informado, livre e inequívoco. O simples ato de continuar navegando não constitui consentimento válido."
                      </p>
                    </CardContent>
                  </Card>

                  <p className="mb-6">
                    Isso descarta banners do tipo:
                  </p>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 mb-6">
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span>"Ao usar este site, você aceita os cookies"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span>"Fechar este aviso significa concordar"</span>
                      </li>
                    </ul>
                  </div>

                  <p className="mb-6">
                    Além disso, a LGPD exige que:
                  </p>

                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>O usuário possa recusar com a mesma facilidade com que aceita</li>
                    <li>O consentimento seja granular (por finalidade: marketing, estatísticas, etc.)</li>
                    <li>Você registre e armazene a prova desse consentimento por pelo menos 5 anos</li>
                  </ul>

                  <p className="mb-6">
                    Fazer isso manualmente — com scripts caseiros ou plugins básicos — é tecnicamente complexo, propenso a falhas e insuficiente para uma auditoria.
                  </p>

                  <p className="mb-6">
                    Daí a importância de uma <strong>O Que é CMP? Plataforma de Gestão de Consentimento para Sites e Lojas</strong> profissional: ela resolve tudo isso de forma integrada, segura e atualizada.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Settings className="w-8 h-8 text-primary" />
                    Como uma CMP funciona na prática (passo a passo)
                  </h2>

                  <p className="mb-6">
                    Vamos ver o que acontece nos bastidores quando um visitante acessa um site com CMP ativa:
                  </p>

                  <div className="space-y-6">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3">1. Bloqueio inicial de todos os scripts não essenciais</h3>
                        <p>
                          Assim que a página carrega, a CMP impede que Google Analytics, Meta Pixel, Hotjar ou qualquer outro tracker execute — mesmo que o código esteja no HTML.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3">2. Exibição do banner de consentimento</h3>
                        <p>
                          Um pop-up ou barra aparece com linguagem clara, categorias de cookies e opções de aceite/recusa.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3">3. Escolha do usuário</h3>
                        <p className="mb-3">O visitante pode:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Aceitar tudo</li>
                          <li>Recusar tudo (exceto cookies essenciais)</li>
                          <li>Personalizar por categoria (ex: aceitar estatísticas, mas não marketing)</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3">4. Liberação condicional dos scripts</h3>
                        <p>
                          A CMP só carrega os scripts correspondentes às categorias aceitas. Se o marketing foi recusado, o Meta Pixel nunca é acionado.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3">5. Registro do consentimento</h3>
                        <p>
                          A escolha é armazenada em log seguro, com data, hora, versão da política e IP (anonimizado). Isso serve como prova em caso de fiscalização.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3">6. Acesso contínuo às preferências</h3>
                        <p>
                          Um botão fixo (ex: "Preferências de cookies") permite que o usuário altere sua decisão a qualquer momento — inclusive meses depois.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary mt-6">
                    <CardContent className="pt-6">
                      <p className="font-semibold">
                        <strong>Diferencial-chave:</strong> Uma CMP não apenas exibe um aviso — ela controla o comportamento técnico do site com base na escolha do usuário. É a diferença entre "parecer compliant" e ser compliant de fato.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    Quais sites e lojas realmente precisam de uma CMP?
                  </h2>

                  <p className="mb-6">
                    A resposta curta: <strong>qualquer um que use cookies não essenciais.</strong>
                  </p>

                  <p className="mb-6">
                    Veja se você se encaixa em algum destes cenários:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-4">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Usa Google Analytics ou Google Tag Manager</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Tem pixel do Meta (Facebook/Instagram) para conversões ou remarketing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Implementa anúncios do Google Ads com rastreamento</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-4">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Usa ferramentas como Hotjar, Microsoft Clarity ou Microsoft Ads</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Tem chatbots (Tidio, Zenvia) ou formulários de lead (RD Station, Mailchimp)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Opera uma loja virtual (Shopify, WooCommerce, VTEX) com trackers integrados</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <p className="mb-6">
                    Se respondeu "sim" a qualquer um, sua necessidade de CMP é alta.
                  </p>

                  <Card className="bg-muted/50 border-muted">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">Importante:</p>
                      <p>
                        Mesmo que você tenha "anonimizado o IP" no GA4, a ANPD entende que cookies de analytics ainda exigem consentimento, pois permitem rastrear comportamentos individuais — o que configura tratamento de dado pessoal.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-primary" />
                    Os 5 critérios essenciais para escolher uma CMP no Brasil
                  </h2>

                  <p className="mb-6">
                    Nem toda plataforma que se diz "LGPD-compliant" realmente cumpre o que promete. Ao avaliar uma CMP, verifique:
                  </p>

                  <div className="space-y-6">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Lock className="w-5 h-5 text-primary" />
                          1. Bloqueio efetivo de scripts antes do consentimento
                        </h3>
                        <p>
                          A ferramenta deve não carregar nenhum cookie não essencial até o usuário escolher. Muitos plugins "simulam" consentimento, mas os scripts já rodaram nos bastidores.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Settings className="w-5 h-5 text-primary" />
                          2. Granularidade por categoria
                        </h3>
                        <p>
                          O usuário deve poder aceitar "estatísticas" e recusar "marketing", por exemplo. Aceitar tudo ou recusar tudo não é suficiente.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          3. Facilidade de recusa
                        </h3>
                        <p>
                          Botões de recusa devem ter tamanho, cor e destaque equivalentes ao de aceite. Esconder "Recusar" em um link pequeno é dark pattern — e ilegal.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-primary" />
                          4. Registro e armazenamento de consentimentos
                        </h3>
                        <p>
                          A CMP deve gerar um log auditável, com criptografia e retenção mínima de 5 anos, conforme exigido pela ANPD.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <ShieldCheck className="w-5 h-5 text-primary" />
                          5. Atualização automática de scripts
                        </h3>
                        <p>
                          A plataforma deve escanear seu site periodicamente e identificar novos cookies — evitando que você adicione uma ferramenta nova e quebre a conformidade sem perceber.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary mt-6">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-4">Soluções recomendadas no mercado brasileiro:</h3>
                      <ul className="space-y-3">
                        <li>
                          <a 
                            href="https://goadopt.io/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-semibold"
                          >
                            AdOpt
                          </a>
                          {" "}(nacional, com foco total em LGPD)
                        </li>
                        <li>
                          <a 
                            href="https://www.cookieyes.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-semibold"
                          >
                            Cookiebot
                          </a>
                          {" "}(internacional, com suporte a GDPR + LGPD)
                        </li>
                        <li>
                          <a 
                            href="https://usercentrics.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-semibold"
                          >
                            Usercentrics
                          </a>
                          {" "}(para empresas de médio/grande porte)
                        </li>
                      </ul>
                      <p className="mt-4 text-sm">
                        <strong>Evite</strong> plugins gratuitos do WordPress que não oferecem bloqueio real ou registro de consentimento — eles dão falsa segurança.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-primary" />
                    Erros comuns ao implementar uma CMP (e como evitá-los)
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-destructive/10 border-l-4 border-destructive p-4">
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        ❌ Não testar o bloqueio de scripts
                      </h3>
                      <p>
                        Muitos acham que, porque o banner aparece, está tudo certo. Errou. Use o modo anônimo do navegador, recuse cookies e verifique no DevTools se scripts como GA4 ou Meta Pixel foram carregados. Se sim, há risco grave.
                      </p>
                    </div>

                    <div className="bg-destructive/10 border-l-4 border-destructive p-4">
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        ❌ Usar CMP apenas no desktop
                      </h3>
                      <p>
                        Seu site mobile também precisa estar coberto. Muitas CMPs têm problemas de exibição em dispositivos móveis — teste em vários tamanhos de tela.
                      </p>
                    </div>

                    <div className="bg-destructive/10 border-l-4 border-destructive p-4">
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        ❌ Deixar a CMP desatualizada
                      </h3>
                      <p>
                        Se você adiciona um novo pixel de TikTok, por exemplo, a CMP precisa saber disso para incluí-lo na lista de opções. Plataformas com escaneamento automático resolvem isso.
                      </p>
                    </div>

                    <div className="bg-destructive/10 border-l-4 border-destructive p-4">
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        ❌ Ignorar a experiência do usuário
                      </h3>
                      <p>
                        Um banner intrusivo, lento ou confuso aumenta a taxa de rejeição. Priorize soluções leves, rápidas e com design responsivo.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-primary" />
                    CMP vs. Política de Privacidade: como eles trabalham juntos
                  </h2>

                  <p className="mb-6">
                    A CMP não substitui sua política de privacidade — ela complementa.
                  </p>

                  <p className="mb-6">
                    Enquanto a política de privacidade é um documento abrangente que explica como você trata todos os dados (formulários, e-mails, pagamentos), a CMP se concentra especificamente no consentimento para cookies e trackers.
                  </p>

                  <p className="mb-6">
                    Mas há uma ligação essencial:
                  </p>

                  <ul className="list-none space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>A política de privacidade deve mencionar o uso da CMP</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>O banner de cookies deve linkar para a política de privacidade</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ambas devem usar linguagem consistente (ex: mesmas categorias de cookies)</span>
                    </li>
                  </ul>

                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary">
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        <strong>Dica prática:</strong> Use nossa ferramenta gratuita de geração de política de privacidade LGPD — ela já inclui cláusulas compatíveis com CMPs e cookies.
                      </p>
                      <Button 
                        onClick={() => navigate('/gerador-politica-privacidade')}
                        size="lg"
                        className="w-full sm:w-auto"
                      >
                        Gerar Política de Privacidade
                      </Button>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                    Caso real: Como uma loja de roupas evitou multa com CMP
                  </h2>

                  <Card className="bg-muted/50 border-muted">
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        Uma e-commerce de moda feminina, com faturamento de R$ 8 milhões/ano, usava Google Analytics, Meta Pixel e RD Station. Seu "aviso de cookies" era um simples pop-up com "OK".
                      </p>

                      <p className="mb-4">
                        Em 2024, um cliente fez uma solicitação formal de exclusão de dados e notou que, mesmo após pedir para sair da base, continuava recebendo remarketing no Instagram.
                      </p>

                      <p className="mb-4">
                        Ao investigar, descobriram que o pixel nunca foi bloqueado, mesmo sem consentimento explícito. Se a ANPD tivesse sido acionada, a multa poderia chegar a R$ 160 mil (2% do faturamento).
                      </p>

                      <p className="mb-4 font-semibold">
                        A solução? Implementaram uma CMP profissional em 48 horas. Hoje:
                      </p>

                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>68% dos visitantes aceitam cookies de marketing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>A taxa de conversão aumentou (pelo remarketing autorizado)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>E, mais importante: estão conformes</span>
                        </li>
                      </ul>

                      <p>
                        Esse caso mostra que a CMP não é custo — é investimento em segurança e performance.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                    O Que é CMP? Plataforma de Gestão de Consentimento para Sites e Lojas: mais do que compliance, é confiança
                  </h2>

                  <p className="mb-6">
                    Implementar uma CMP vai além de evitar multas. É um sinal de respeito ao seu público.
                  </p>

                  <p className="mb-6">
                    Em um mundo onde vazamentos de dados e publicidade invasiva são comuns, oferecer controle real sobre a privacidade se torna um diferencial competitivo.
                  </p>

                  <p className="mb-6">
                    Usuários que sentem que são tratados com transparência:
                  </p>

                  <ul className="list-none space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ficam mais tempo no site</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Confiam mais na marca</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Têm maior propensão a comprar</span>
                    </li>
                  </ul>

                  <p className="mb-6">
                    Ou seja: a mesma ferramenta que protege seu negócio da LGPD também potencializa seus resultados de marketing — desde que usada com ética e clareza.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Settings className="w-8 h-8 text-primary" />
                    Próximos passos: como implementar sua CMP em menos de 1 hora
                  </h2>

                  <ol className="list-decimal list-inside space-y-4 mb-6">
                    <li className="font-semibold">
                      Faça um inventário de todos os scripts do seu site
                      <span className="font-normal ml-2">(use CookieServe ou DevTools)</span>
                    </li>
                    <li className="font-semibold">
                      Escolha uma CMP com base nos critérios acima
                    </li>
                    <li className="font-semibold">
                      Instale o script universal fornecido pela plataforma
                    </li>
                    <li className="font-semibold">
                      Configure as categorias de cookies
                      <span className="font-normal ml-2">(essenciais, estatísticas, marketing)</span>
                    </li>
                    <li className="font-semibold">
                      Teste rigorosamente em modo anônimo
                      <span className="font-normal ml-2">— recuse tudo e verifique se nada carrega</span>
                    </li>
                    <li className="font-semibold">
                      Adicione o link de preferências no rodapé de todas as páginas
                    </li>
                  </ol>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Conclusão: A CMP não é luxo — é infraestrutura mínima da web moderna</h2>

                  <p className="mb-6">
                    Responder à pergunta "O Que é CMP? Plataforma de Gestão de Consentimento para Sites e Lojas" é o primeiro passo para entender que a privacidade digital não é mais um "departamento jurídico". É parte central da operação de qualquer negócio online.
                  </p>

                  <p className="mb-6">
                    Assim como você não deixa seu site sem certificado SSL (HTTPS), não deve deixá-lo sem gestão de consentimento válida.
                  </p>

                  <p className="mb-6">
                    A LGPD veio para ficar. E empresas que se antecipam, com ferramentas sérias e postura ética, colhem tranquilidade jurídica, reputação sólida e relacionamentos mais duradouros com seus clientes.
                  </p>

                  <Card className="bg-muted/50 border-muted">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Gostou deste guia?</h3>
                      <p className="mb-4">
                        Compartilhe com sua equipe, salve nos favoritos e explore outros conteúdos essenciais:
                      </p>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="/blog/politica-cookies-guia-completo" 
                            className="text-primary hover:underline flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            Como fazer aviso de cookies conforme LGPD: guia passo a passo
                          </a>
                        </li>
                        <li>
                          <a 
                            href="/blog/politica-privacidade-2026" 
                            className="text-primary hover:underline flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            Política de Privacidade: O Que É, Por Que Precisa e Modelo Gratuito
                          </a>
                        </li>
                        <li>
                          <a 
                            href="/blog/10-acoes-marketing-lgpd" 
                            className="text-primary hover:underline flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            10 Ações de Marketing que Mudam com a LGPD Hoje!
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes (FAQ)</h2>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">
                          1. CMP é obrigatória por lei no Brasil?
                        </h3>
                        <p>
                          A LGPD não cita "CMP" explicitamente, mas exige consentimento válido para cookies não essenciais. Como isso é tecnicamente inviável sem uma plataforma especializada, a CMP se tornou obrigatória na prática para qualquer site com trackers.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">
                          2. Posso usar uma CMP gratuita?
                        </h3>
                        <p>
                          Existem opções gratuitas, mas a maioria não oferece bloqueio real de scripts ou registro de consentimento — o que as torna não conformes. Invista em soluções que garantam compliance de verdade, mesmo que pagas.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">
                          3. A CMP precisa estar hospedada no Brasil?
                        </h3>
                        <p>
                          Não é obrigatório, mas é recomendado. Plataformas nacionais (como AdOpt) oferecem melhor suporte local, atualizações alinhadas à ANPD e servidores em território brasileiro — o que reduz riscos com transferência internacional de dados.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">
                          4. CMP substitui o DPO (Encarregado)?
                        </h3>
                        <p>
                          Não. O DPO é um papel legal exigido para muitas empresas pela LGPD. A CMP é uma ferramenta técnica. Ambos são necessários, mas com funções distintas.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">
                          5. Quanto tempo leva para implementar uma CMP?
                        </h3>
                        <p>
                          Em sites simples, menos de 1 hora. Em lojas virtuais complexas (Shopify Plus, VTEX), pode levar até 2 dias, dependendo da integração com scripts personalizados. A maioria das CMPs oferece suporte técnico gratuito na instalação.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <SocialShare title="O Que é CMP? Plataforma de Gestão de Consentimento para Sites e Lojas" />

                <RelatedArticles tags={["cmp", "cookies", "lgpd", "consentimento", "tecnologia"]} currentArticleId="5" />

                <section className="mb-12">
                  <AuthorBio />
                </section>
              </article>

              <aside className="lg:sticky lg:top-24 h-fit">
                <BlogSidebar />
              </aside>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PostOQueECMP;