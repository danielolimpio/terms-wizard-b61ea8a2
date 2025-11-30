import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AuthorBio } from "@/components/AuthorBio";
import { 
  Cookie,
  Settings,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Code,
  Target,
  TrendingUp,
  Lock,
  FileText,
  Zap,
  BarChart3,
  Users,
  Eye,
  XCircle,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import blogImage from "@/assets/blog-google-consent-mode-v2.jpg";

const GoogleConsentModeV2Post = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Google Consent Mode V2: Como Implementar na Sua Loja ou Site em 2026 | Políticas de Privacidade</title>
        <meta 
          name="description" 
          content="Guia prático para implementar o Consent Mode V2 do Google com LGPD, sem perder conversões nem tráfego." 
        />
        <meta name="keywords" content="consent mode v2, google consent mode, lgpd, cookies, google analytics, google ads, cmp, consentimento" />
        <link rel="canonical" href="https://politicasdeprivacidade.com.br/blog/google-consent-mode-v2-implementar" />
        
        <meta property="og:title" content="Google Consent Mode V2: Como Implementar na Sua Loja ou Site em 2026" />
        <meta property="og:description" content="Guia prático para implementar o Consent Mode V2 do Google com LGPD, sem perder conversões nem tráfego." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://politicasdeprivacidade.com.br/blog/google-consent-mode-v2-implementar" />
        <meta property="og:image" content={blogImage} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google Consent Mode V2: Como Implementar na Sua Loja ou Site em 2026" />
        <meta name="twitter:description" content="Guia prático para implementar o Consent Mode V2 do Google com LGPD, sem perder conversões nem tráfego." />
        <meta name="twitter:image" content={blogImage} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Google Consent Mode V2: Como Implementar na Sua Loja ou Site em 2026",
            "description": "Guia prático para implementar o Consent Mode V2 do Google com LGPD, sem perder conversões nem tráfego.",
            "image": blogImage,
            "datePublished": "2025-01-30",
            "dateModified": "2025-01-30",
            "author": {
              "@type": "Person",
              "name": "Equipe Políticas de Privacidade"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Políticas de Privacidade",
              "logo": {
                "@type": "ImageObject",
                "url": "https://politicasdeprivacidade.com.br/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="gap-1">
              <Cookie className="w-3 h-3" />
              Cookies
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Settings className="w-3 h-3" />
              Implementação
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Shield className="w-3 h-3" />
              LGPD
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Google Consent Mode V2: Como Implementar na Sua Loja ou Site em 2026
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            Guia prático para implementar o Consent Mode V2 do Google com LGPD, sem perder conversões nem tráfego.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <time dateTime="2025-01-30">30 de janeiro de 2025</time>
            <Separator orientation="vertical" className="h-4" />
            <span>15 min de leitura</span>
          </div>

          <img 
            src={blogImage} 
            alt="Google Consent Mode V2 - Implementação em sites e lojas" 
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
          />
        </header>

        {/* Introdução */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-primary bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                Seu tráfego caiu? Sua taxa de conversão desapareceu? Pode ser o novo mundo do consentimento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Em janeiro de 2024, o Google deu um passo decisivo: o <strong>Consent Mode V2</strong> tornou-se obrigatório para qualquer site que use Google Ads, Google Analytics ou qualquer outro serviço do Google que dependa de cookies.
              </p>

              <p className="text-lg leading-relaxed">
                Muitos lojistas, marketers e criadores de conteúdo foram pegos de surpresa. De um dia para o outro, relatórios de conversão começaram a falhar. Campanhas pareciam menos eficazes. O remarketing perdeu precisão. E o pior: tudo isso aconteceu justamente porque os sites estavam mais alinhados à LGPD — ao bloquear pixels sem consentimento, como a lei exige.
              </p>

              <p className="text-lg leading-relaxed">
                A boa notícia? Existe uma solução técnica e legal: o <strong>Google Consent Mode V2</strong>. Ele permite que você respeite a privacidade dos usuários e, ao mesmo tempo, mantenha o desempenho de suas campanhas digitais.
              </p>

              <p className="text-lg leading-relaxed">
                Neste guia, você vai aprender, de forma clara e prática, como implementar o Google Consent Mode V2 na sua loja ou site em 2026, integrando-o perfeitamente à sua estratégia de conformidade com a LGPD — sem sacrificar dados, conversões ou orçamento publicitário.
              </p>

              <p className="font-semibold text-foreground">
                Este é o artigo que faltava para quem quer operar com ética, eficiência e segurança jurídica no novo ecossistema digital.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* O que é o Google Consent Mode V2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Cookie className="w-8 h-8 text-primary" />
            O que é o Google Consent Mode V2 (e por que ele mudou tudo em 2024)
          </h2>

          <div className="prose prose-lg max-w-none mb-6 space-y-4">
            <p className="text-lg leading-relaxed">
              O <strong>Consent Mode V2</strong> é uma API do Google que permite que seus scripts (Analytics, Ads, Tag Manager) ajustem seu comportamento com base na escolha do usuário sobre cookies.
            </p>

            <p className="text-lg leading-relaxed">
              Antes, era tudo ou nada:
            </p>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Se o usuário aceitasse cookies → tudo funcionava.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Se recusasse → nenhum dado era enviado, e suas métricas simplesmente desapareciam.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="prose prose-lg max-w-none mb-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Com o Consent Mode V2, o Google introduziu um conceito revolucionário: <strong>modelagem baseada em consentimento</strong>.
            </p>

            <p className="text-lg leading-relaxed">
              Mesmo quando o usuário recusa cookies de marketing, o Google continua a receber <strong>sinais anônimos</strong> (como cliques em anúncios, tempo de permanência estimado, tipo de dispositivo) para ajustar algoritmos de atribuição e remarketing — sem identificar o indivíduo.
            </p>
          </div>

          <Card className="bg-accent/50 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="w-5 h-5 text-primary" />
                Analogia simples
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-3">
                É como um restaurante perguntar: "Posso anotar seu nome para a reserva?"
              </p>
              <p>
                Se você disser "não", eles não sabem quem você é — mas ainda veem quantas pessoas entraram, quanto tempo ficaram e o que pediram, de forma agregada. Isso basta para melhorar o serviço, sem violar sua privacidade.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Por que é essencial */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            Por que o Consent Mode V2 é essencial para sites brasileiros em 2026
          </h2>

          <div className="prose prose-lg max-w-none mb-6 space-y-4">
            <p className="text-lg leading-relaxed">
              No Brasil, a LGPD exige consentimento explícito para cookies de marketing e analytics. Isso significa que, se você não tiver um mecanismo de gestão de consentimento (CMP) que bloqueie pixels até o aceite, você está em risco de multa.
            </p>

            <p className="text-lg leading-relaxed">
              Mas bloquear tudo também tem um custo: perda de dados de conversão, atribuição imprecisa e orçamentos publicitários mal otimizados.
            </p>

            <p className="text-lg leading-relaxed">
              O Consent Mode V2 resolve esse dilema. Ele permite que você:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  Conformidade Legal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Cumpra a LGPD com rigor (só carrega cookies se houver consentimento)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Preserve até 80% da precisão de atribuição</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Performance Otimizada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Mantenha modelos preditivos do Google Ads funcionando</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Continue usando remarketing, lookalikes e otimização avançada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-l-4 border-l-destructive bg-destructive/5">
            <CardContent className="pt-6">
              <p className="text-muted-foreground font-semibold">
                Ignorar essa integração em 2026 é como dirigir um carro com o freio de mão puxado: você está seguindo a lei, mas sabotando seu próprio desempenho.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Passo a Passo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Code className="w-8 h-8 text-primary" />
            Google Consent Mode V2: Como Implementar na Sua Loja ou Site em 2026 – Passo a Passo
          </h2>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg leading-relaxed">
              A implementação envolve duas partes: <strong>configuração técnica</strong> e <strong>integração com sua CMP</strong>. Vamos a elas.
            </p>
          </div>

          {/* Passo 1 */}
          <Card className="mb-6">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                Escolha uma CMP compatível com Consent Mode V2
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                Nem toda plataforma de gestão de consentimento oferece suporte nativo ao Consent Mode V2. Verifique se a sua CMP está na lista oficial do Google ou permite configuração personalizada.
              </p>

              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Soluções compatíveis no Brasil:
                </h4>
                <ul className="space-y-2 ml-7">
                  <li className="text-muted-foreground">• AdOpt</li>
                  <li className="text-muted-foreground">• Cookiebot</li>
                  <li className="text-muted-foreground">• Usercentrics</li>
                  <li className="text-muted-foreground">• OneTrust</li>
                </ul>
              </div>

              <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Evite plugins genéricos do WordPress que não mencionam Consent Mode V2 na documentação — eles provavelmente não enviam os sinais corretos ao Google.
                    </span>
                  </p>
                </CardContent>
              </Card>

              <a 
                href="/o-que-e-cmp" 
                className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
              >
                Leia nosso guia completo: O Que é CMP?
                <ArrowRight className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>

          {/* Passo 2 */}
          <Card className="mb-6">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                Ative o Consent Mode V2 no Google Tag Manager (GTM)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                Se você usa GTM (recomendado), siga este fluxo:
              </p>

              <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                <li>Acesse seu <strong>Google Tag Manager</strong></li>
                <li>Vá em <strong>"Configurações da Conta" → "Configurações de Consentimento"</strong></li>
                <li>Ative as opções:
                  <ul className="ml-8 mt-2 space-y-1">
                    <li>• <code className="bg-muted px-2 py-1 rounded text-sm">ad_storage</code> (para Google Ads)</li>
                    <li>• <code className="bg-muted px-2 py-1 rounded text-sm">analytics_storage</code> (para Google Analytics)</li>
                  </ul>
                </li>
                <li>Defina o estado inicial como <strong>"denied" (recusado)</strong> — isso garante que nada carregue antes do consentimento</li>
              </ol>

              <Card className="bg-accent/50 border-accent">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Essa configuração instrui todas as tags do Google a aguardar o sinal da CMP antes de armazenar cookies.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Passo 3 */}
          <Card className="mb-6">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                Configure sua CMP para enviar os sinais corretos
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg leading-relaxed">
                Sua CMP precisa enviar dois sinais ao GTM assim que o usuário fizer sua escolha:
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Se aceitar marketing:
                  </h4>
                  <Card className="bg-muted">
                    <CardContent className="pt-6">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`gtag('consent', 'update', {
  'ad_storage': 'granted',
  'analytics_storage': 'granted'
});`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Se recusar marketing (mas aceitar analytics, por exemplo):
                  </h4>
                  <Card className="bg-muted">
                    <CardContent className="pt-6">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`gtag('consent', 'update', {
  'ad_storage': 'denied',
  'analytics_storage': 'granted'
});`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                A maioria das CMPs modernas faz isso automaticamente — mas teste sempre.
              </p>
            </CardContent>
          </Card>

          {/* Passo 4 */}
          <Card className="mb-6">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                Valide a implementação
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg leading-relaxed">
                Use as ferramentas do Google para confirmar que está tudo funcionando:
              </p>

              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Eye className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Google Tag Assistant</strong> (Legacy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Google Analytics 4</strong> → Relatórios em tempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Google Ads</strong> → Ferramentas → Conversões → Diagnóstico</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed">
                Verifique se, ao recusar cookies, os eventos ainda são enviados no modo "sem armazenamento" (denied), e se, ao aceitar, os cookies são ativados normalmente.
              </p>

              <Card className="bg-accent/50 border-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Zap className="w-5 h-5 text-primary" />
                    Dica profissional
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Simule os cenários com o modo anônimo do navegador. Recuse cookies e veja se o GA4 ainda registra "sessões anônimas".
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </section>

        {/* Erros Comuns */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-primary" />
            Erros comuns (e como evitá-los)
          </h2>

          <div className="space-y-4">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Não definir o estado inicial como "denied"
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Se você deixa o estado como "granted" por padrão, os scripts carregam antes do consentimento — isso é ilegal sob a LGPD.
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Usar Consent Mode V2 sem uma CMP real
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                O Consent Mode não substitui uma plataforma de gestão de consentimento. Ele apenas comunica a escolha. Você ainda precisa de um banner LGPD-compliant com opções granulares.
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Ignorar o parâmetro wait_for_update
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Em sites lentos, o consentimento pode chegar depois que as tags já tentaram carregar. Adicione <code className="bg-muted px-2 py-1 rounded text-sm">wait_for_update: 500</code> (ms) na configuração inicial para dar tempo à CMP responder.
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Não testar em mobile
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Muitas CMPs falham em dispositivos móveis. Teste em iOS e Android — o comportamento pode variar por causa do Intelligent Tracking Prevention (ITP) da Apple.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefícios Reais */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary" />
            Benefícios reais: o que muda quando você implementa certo
          </h2>

          <div className="prose prose-lg max-w-none mb-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Empresas que integraram corretamente o Google Consent Mode V2 reportaram:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Recuperação de dados</h4>
                    <p className="text-sm text-muted-foreground">
                      Até 70% dos dados de conversão em cenários com 60% de recusa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Qualidade dos leads</h4>
                    <p className="text-sm text-muted-foreground">
                      Melhora na qualidade dos leads (remarketing mais preciso)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Redução de CPA</h4>
                    <p className="text-sm text-muted-foreground">
                      Redução de custo por aquisição em campanhas de tráfego pago
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Conformidade total</h4>
                    <p className="text-sm text-muted-foreground">
                      Conformidade garantida com LGPD e GDPR, mesmo em campanhas globais
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-accent/50 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Caso real
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                Uma loja de moda em São Paulo viu seu custo por conversão subir 35% após bloquear o Meta Pixel sem consentimento.
              </p>
              <p>
                Após implementar Consent Mode V2 + CMP, recuperou 82% da eficiência anterior — e zerou riscos legais.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Google Analytics 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-primary" />
            E o Google Analytics 4? Ele funciona com Consent Mode V2?
          </h2>

          <div className="prose prose-lg max-w-none mb-6 space-y-4">
            <p className="text-lg leading-relaxed">
              <strong>Sim — e é essencial.</strong> O GA4 foi projetado para funcionar em ambientes com privacidade reforçada.
            </p>

            <p className="text-lg leading-relaxed">
              Quando <code className="bg-muted px-2 py-1 rounded text-sm">analytics_storage</code> está como <strong>denied</strong>, o GA4:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Não armazena cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Não coleta IP</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <BarChart3 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Usa modelagem de eventos baseada em dados agregados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Continua a medir sessões, páginas vistas e eventos básicos de forma anônima</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg leading-relaxed">
              Isso é suficiente para entender tendências, funis e comportamentos — sem identificar indivíduos.
            </p>
          </div>

          <Card className="border-l-4 border-l-primary bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-muted-foreground font-semibold flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Importante:</strong> Ative o "Enhanced Measurement" no GA4, mas configure sua CMP para controlar cada evento (ex: scrolls, cliques em links externos).
                </span>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Por que não dá para adiar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-primary" />
            Google Consent Mode V2: Como Implementar na Sua Loja ou Site em 2026 – e por que não dá mais para adiar
          </h2>

          <div className="prose prose-lg max-w-none mb-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Em 2026, o ecossistema digital exige maturidade em privacidade. O Google não só exige Consent Mode V2 — ele recompensa quem o implementa bem com melhores algoritmos, preços mais baixos e acesso a recursos avançados.
            </p>

            <p className="text-lg leading-relaxed">
              Ao mesmo tempo, a ANPD intensifica fiscalizações em setores como e-commerce, SaaS e marketing digital. A combinação perfeita é:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Settings className="w-5 h-5 text-primary" />
                  CMP robusta
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Para LGPD
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Cookie className="w-5 h-5 text-primary" />
                  Consent Mode V2 ativo
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Para Google
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileText className="w-5 h-5 text-primary" />
                  Política clara
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Para transparência
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <p className="font-semibold text-lg mb-2">
                Essa tríade protege seu negócio juridicamente e financeiramente.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTAs */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Pronto para implementar?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Use nosso gerador gratuito de política de privacidade LGPD — já compatível com Consent Mode V2 e atualizado para 2026.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="/gerador-politica-privacidade" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Gerar Política de Privacidade
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Quer ir além?</strong> Leia também:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="/blog/politica-cookies-guia-completo" 
                      className="text-primary hover:underline flex items-center gap-2 text-sm"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Como fazer aviso de cookies conforme LGPD
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/blog/multas-lgpd-2025-valores-casos-reais" 
                      className="text-primary hover:underline flex items-center gap-2 text-sm"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Multas da LGPD em 2025: Valores, Casos Reais e Como Evitar Penalidades
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusão */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            Conclusão: Privacidade e performance não são inimigas — são parceiras
          </h2>

          <div className="prose prose-lg max-w-none mb-6 space-y-4">
            <p className="text-lg leading-relaxed">
              O <strong>Google Consent Mode V2: Como Implementar na Sua Loja ou Site em 2026</strong> não é apenas uma atualização técnica. É um marco na evolução do marketing digital ético.
            </p>

            <p className="text-lg leading-relaxed">
              Empresas que enxergam a LGPD como oportunidade — e não como obstáculo — estão construindo marcas mais confiáveis, campanhas mais eficientes e relacionamentos mais duradouros com seus clientes.
            </p>

            <p className="text-lg leading-relaxed">
              Respeitar a escolha do usuário não significa perder dados. Significa ganhar legitimidade. E, no longo prazo, ninguém vence sem ela.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Perguntas Frequentes (FAQ)
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  1. Preciso de Consent Mode V2 se meu site não usa Google Ads?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Se você usa Google Analytics 4, Google Tag Manager ou qualquer serviço do Google que dependa de cookies (incluindo YouTube com rastreamento), sim. O modo é exigido para todos os serviços do Google que tratam dados pessoais.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  2. Consent Mode V2 substitui minha política de privacidade?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Não. Ele é uma ferramenta técnica. Você ainda precisa de uma política de privacidade clara, um aviso de cookies LGPD-compliant e um canal para exercer direitos (como exclusão de dados).
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  3. Posso implementar manualmente sem Tag Manager?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Sim, mas é mais complexo. Você precisará injetar os comandos <code className="bg-muted px-2 py-1 rounded text-sm">gtag('consent', ...)</code> diretamente no código. O GTM simplifica e centraliza a gestão.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  4. O Consent Mode V2 funciona com Meta Pixel?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Não. O Meta tem seu próprio sistema (Advanced Matching + Aggregated Event Measurement). Você precisará configurar separadamente para Facebook/Instagram.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  5. Onde encontro a documentação oficial do Google sobre Consent Mode V2?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Acesse o{" "}
                <a 
                  href="https://developers.google.com/tag-platform/security/guides/consent" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Guia do Desenvolvedor do Google para Consent Mode
                  <ExternalLink className="w-3 h-3" />
                </a>
                {" "}— em inglês, mas com exemplos técnicos completos.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Disclaimer */}
        <Card className="mb-12 bg-muted/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground text-center">
              Este artigo foi elaborado com base em testes reais em lojas virtuais, orientações do Google e diretrizes da Autoridade Nacional de Proteção de Dados (ANPD). Tudo aqui é 100% gratuito, sem cadastro e sem obrigações — porque acreditamos que proteger a privacidade e fazer marketing eficaz devem andar juntos.
            </p>
          </CardContent>
        </Card>

        <AuthorBio />
      </article>

      <Footer />
    </div>
  );
};

export default GoogleConsentModeV2Post;