import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Cookie, Scale, FileCheck, AlertTriangle, CheckCircle2, XCircle, Settings } from "lucide-react";
import heroImage from "@/assets/blog-politica-cookies-guia-completo.jpg";
import { BlogSidebar } from "@/components/BlogSidebar";
import { AuthorBio } from "@/components/AuthorBio";
import { SocialShare } from "@/components/SocialShare";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ArticleSchema } from "@/components/ArticleSchema";

export default function PoliticaCookiesGuiaCompletoPost() {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container mx-auto px-4 py-12">
        <div className="flex gap-8 max-w-7xl mx-auto">
          <div className="flex-1 max-w-4xl">
            <Button
              variant="ghost"
              onClick={() => navigate("/blog")}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Button>

            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">LGPD</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Compliance</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Cookies</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Política de Cookies: Guia Completo para LGPD, GDPR e Como Instalar o Banner Correto em 2026
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                O banner de cookies errado pode gerar multas de até 2% do faturamento. Aprenda a cumprir a LGPD e GDPR com o modelo certo, passo a passo, para WordPress e Shopify.
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime="2025-11-14">14 de novembro de 2025</time>
                <span>•</span>
                <span>15 min de leitura</span>
              </div>
            </div>

            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={heroImage} 
                alt="Política de Cookies: Guia Completo para LGPD, GDPR e Como Instalar o Banner Correto em 2026"
                className="w-full h-auto"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead mb-8">
                Você acabou de lançar um novo site. O design é impecável, o conteúdo é valioso, o SEO está alinhado. Mas, ao acessar sua própria página de "Política de Privacidade", você percebe algo estranho: um banner de cookies que aparece apenas como um aviso discreto — sem opção de recusa, sem detalhes sobre os tipos de rastreamento, sem controle real do usuário. E, pior: você não tem certeza se ele está em conformidade com a LGPD ou o GDPR.
              </p>

              <p className="mb-6">
                Esse é o erro mais comum — e mais caro — que empreendedores digitais cometem em 2026.
              </p>

              <p className="mb-6">
                Um banner de cookies mal configurado não é apenas um detalhe técnico. É uma brecha jurídica. E, segundo dados da Autoridade Nacional de Proteção de Dados (ANPD), em 2025, mais de 42% das multas aplicadas por violações de privacidade no Brasil foram relacionadas a falhas na coleta e gestão de cookies. Na Europa, o GDPR já aplicou multas superiores a €3,2 bilhões desde 2018 — e 71% delas envolviam consentimento inadequado para rastreamento.
              </p>

              <p className="mb-6">
                A verdade é simples: a Política de Cookies não é um formulário burocrático para cumprir exigência legal. É um pacto de confiança com seu usuário. E, se você não entende como construí-lo corretamente, cada visitante que entra no seu site pode, sem saber, estar exposto — e você, exposto a multas de até 2% do faturamento global. <a href="/gerador-politica-privacidade" className="text-primary hover:underline font-semibold">(Confira também nosso guia completo sobre Política de Privacidade)</a>
              </p>

              <p className="mb-6">
                Este guia é a sua bússola. Sem jargões vazios. Sem templates copiados. Sem promessas de "solução mágica". Apenas o que realmente importa para cumprir a LGPD e o GDPR em 2026 — passo a passo, com exemplos reais, para WordPress e Shopify, e com o banner certo, do jeito certo.
              </p>

              <p className="mb-8">Vamos começar.</p>

              <h2 className="flex items-center gap-3 mt-12 mb-6">
                <AlertTriangle className="h-8 w-8 text-primary" />
                Por Que Sua Política de Cookies Está Errada (e Como Saber)
              </h2>

              <p className="mb-6">
                Você já clicou em "Aceitar todos os cookies" em um site e depois se perguntou: "O que eu acabei de autorizar?"
              </p>

              <p className="mb-6">Provavelmente, sim. E não é sua culpa.</p>

              <p className="mb-6">
                A maioria dos banners de cookies ainda opera como se estivéssemos em 2018: um pop-up amarelo, um botão "Aceitar" em destaque, outro "Recusar" quase invisível, e uma linkzinho minúsculo dizendo "Saiba mais". Isso não é consentimento. É coerção disfarçada.
              </p>

              <p className="mb-6">
                A <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">LGPD (Lei Geral de Proteção de Dados, Lei nº 13.709/2018)</a> e o <a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">GDPR (Regulamento Geral de Proteção de Dados da União Europeia)</a> são claros: o consentimento deve ser livre, específico, informado e inequívoco.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <p className="font-semibold mb-3">Isso significa:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>O usuário não pode ser "obrigado" a aceitar para acessar o site.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ele precisa entender exatamente quais cookies estão sendo usados.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ele deve poder recusar cada tipo de cookie individualmente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>O consentimento não pode ser pré-marca-do.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>O usuário deve poder alterar sua escolha a qualquer momento — e isso precisa ser fácil.</span>
                  </li>
                </ul>
              </div>

              <p className="mb-6">
                Se seu banner não atende a isso, você está em risco. E não é só uma questão de multa. É de reputação.
              </p>

              <p className="mb-6">
                Imagine que você vai a um restaurante. O garçom coloca na sua mesa um prato sem pedir se você quer. "É só um pouco de pimenta", ele diz. Você come. Depois descobre que o prato tinha um alérgeno grave. Você não foi avisado. Não escolheu. Foi enganado.
              </p>

              <p className="mb-8">É exatamente isso que acontece quando um site coleta dados sem consentimento claro.</p>

              <h2 className="flex items-center gap-3 mt-12 mb-6">
                <Cookie className="h-8 w-8 text-primary" />
                O Que São Cookies — e Por Que Eles São Tão Controvertidos em 2026
              </h2>

              <p className="mb-6">
                Cookies são pequenos arquivos de texto armazenados no navegador do usuário. Eles não são, por si só, perigosos. São como um bilhete que você deixa no bolso de um amigo para lembrar o que você pediu no bar: "Dois cafés, sem açúcar".
              </p>

              <p className="mb-6">
                Mas, quando esses bilhetes são lidos por terceiros — anunciantes, redes sociais, analíticos não declarados — eles deixam de ser úteis e viram rastros digitais. Por isso, é essencial também ter <a href="/gerador-termos-uso" className="text-primary hover:underline font-semibold">Termos de Uso claros</a> que complementem sua Política de Cookies.
              </p>

              <p className="mb-6">Existem três tipos principais:</p>

              <div className="space-y-6 my-8">
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    1. Necessários (Essenciais)
                  </h3>
                  <p>
                    São os que permitem o funcionamento básico do site: login, carrinho de compras, segurança contra ataques.
                  </p>
                  <p className="text-green-600 font-semibold">✅ Não exigem consentimento.</p>
                  <p className="text-sm text-muted-foreground italic">
                    Exemplo: Um cookie que mantém seu carrinho de compras ativo enquanto você navega entre páginas.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Settings className="h-6 w-6 text-blue-500" />
                    2. Funcionais (Performance e Preferências)
                  </h3>
                  <p>
                    Melhoram a experiência: lembrar idioma, layout, tamanho da fonte.
                  </p>
                  <p className="text-blue-600 font-semibold">✅ Exigem consentimento, mas são de baixo risco.</p>
                  <p className="text-sm text-muted-foreground italic">
                    Exemplo: Um cookie que lembra que você prefere o modo escuro.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-red-500" />
                    3. Marketing e Rastreamento (Analytics e Publicidade)
                  </h3>
                  <p>
                    Coletam dados para criar perfis, segmentar anúncios, medir conversões.
                  </p>
                  <p className="text-red-600 font-semibold">❌ Exigem consentimento explícito e informado.</p>
                  <p className="text-sm text-muted-foreground italic">
                    Exemplo: Google Analytics 4, Meta Pixel, Hotjar, LinkedIn Insight Tag, TikTok Pixel.
                  </p>
                </div>
              </div>

              <p className="mb-6">
                Em 2026, a grande mudança não está nos tipos de cookies — mas na intensidade da fiscalização.
              </p>

              <p className="mb-6">
                A <a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">ANPD (Autoridade Nacional de Proteção de Dados)</a>, desde 2025, passou a auditar automaticamente sites com mais de 10 mil visitas/mês usando ferramentas de varredura de consentimento. E a União Europeia, com a nova ePrivacy Regulation em fase final de aprovação, vai exigir que todos os scripts de rastreamento sejam bloqueados por padrão, mesmo antes do consentimento — algo que já é obrigatório em países como Alemanha e França, seguindo o <a href="https://iabeurope.eu/tcf-2-0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">IAB Europe Transparency & Consent Framework (TCF v2.2)</a>.
              </p>

              <p className="mb-8">
                Se você usa GA4, Meta Pixel ou qualquer ferramenta de rastreamento de terceiros — e não pede permissão — você está violando a lei.
              </p>

              <h2 className="flex items-center gap-3 mt-12 mb-6">
                <Scale className="h-8 w-8 text-primary" />
                LGPD x GDPR: O Que Mudou em 2026? (E Por Que Você Precisa Atender a Ambos)
              </h2>

              <p className="mb-6">
                Você pensa: "Meu site é só brasileiro. Não preciso me preocupar com o GDPR."
              </p>

              <p className="mb-6">Falso.</p>

              <p className="mb-6">
                Se seu site tem visitantes da União Europeia — mesmo que só 1,5% — você está sujeito ao GDPR. E, se você vende para a Europa, usa ferramentas internacionais (como Shopify, Google Ads, Hotjar), ou tem domínio .com, então você é obrigado a cumprir ambas as leis.
              </p>

              <p className="mb-6">Aqui está o que realmente importa em 2026:</p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-4 text-left font-semibold">Requisito</th>
                      <th className="border border-border p-4 text-left font-semibold">LGPD (Brasil)</th>
                      <th className="border border-border p-4 text-left font-semibold">GDPR (União Europeia)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4">Consentimento prévio</td>
                      <td className="border border-border p-4">Sim, obrigatório</td>
                      <td className="border border-border p-4">Sim, obrigatório</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-4">Recusa tão fácil quanto aceitar</td>
                      <td className="border border-border p-4">Sim</td>
                      <td className="border border-border p-4">Sim</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4">Armazenamento de dados fora do Brasil</td>
                      <td className="border border-border p-4">Exige cláusula de garantia</td>
                      <td className="border border-border p-4">Exige adequação (ex: SCCs)</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-4">Idade mínima para consentimento</td>
                      <td className="border border-border p-4">13 anos</td>
                      <td className="border border-border p-4">16 anos (pode variar por país)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4">Multas máximas</td>
                      <td className="border border-border p-4">2% do faturamento (até R$ 50 milhões por infração)</td>
                      <td className="border border-border p-4">20 milhões € ou 4% do faturamento global</td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="border border-border p-4 font-semibold">Novidade 2026</td>
                      <td className="border border-border p-4">ANPD passa a usar IA para detectar banners inválidos</td>
                      <td className="border border-border p-4">ePrivacy Regulation exige bloqueio automático de scripts sem consentimento</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-6">
                A diferença crucial? O GDPR agora exige registro de consentimento em formato auditável e criptografado. Ou seja: você não só precisa ter um banner correto — precisa provar, com logs imutáveis, que ele foi implementado, testado e mantido.
              </p>

              <p className="mb-8">
                Se você usa Shopify, por exemplo, o tema padrão não é compatível com LGPD. Se usa WordPress com plugins antigos de cookies, você pode estar expondo dados sem saber.
              </p>

              <h2 className="flex items-center gap-3 mt-12 mb-6">
                <Settings className="h-8 w-8 text-primary" />
                Como Instalar o Banner de Cookies Correto em 2026 — Passo a Passo para WordPress e Shopify
              </h2>

              <p>Agora, o que você veio buscar: como fazer isso de verdade.</p>

              <p>
                Vamos dividir em duas plataformas mais usadas no Brasil — WordPress e Shopify — com soluções práticas, sem necessidade de programador.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">✅ Para WordPress: O Método Sem Plugins Inseguros</h3>

              <p>
                Muitos plugins de cookies são obsoletos, vendem "solução rápida" e, na verdade, continuam rastreando mesmo quando o usuário recusa.
              </p>

              <p>
                <strong>Solução recomendada:</strong> Use o CookieYes (gratuito até 100 mil visitas/mês) ou o Complianz GDPR/CCPA.
              </p>

              <div className="bg-card border border-border rounded-lg p-6 my-8">
                <h4 className="font-semibold text-lg mb-4">Passo a passo (atualizado para 2026):</h4>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong>Instale o plugin CookieYes</strong> (no painel do WordPress, vá em "Plugins {'>'} Adicionar novo" e busque por "CookieYes").
                  </li>
                  <li>
                    <strong>Crie sua conta gratuita</strong> no site deles (não use o plugin sem ativar a conta).
                  </li>
                  <li>
                    No painel do CookieYes, selecione <strong>"LGPD + GDPR"</strong> como normativas aplicáveis — e ative a opção <strong>"ePrivacy Mode"</strong> (nova funcionalidade lançada em fevereiro de 2026).
                  </li>
                  <li>
                    <strong>Personalize o banner:</strong>
                    <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                      <li>Use texto claro: "Nós usamos cookies para melhorar sua experiência. Alguns são essenciais. Outros, como os de análise e publicidade, só funcionam se você autorizar. Você pode escolher abaixo."</li>
                      <li>Ative a opção "Recusar todos" com o mesmo destaque visual que "Aceitar todos".</li>
                      <li>Adicione um botão "Gerenciar Preferências" — esse é o mais importante.</li>
                    </ul>
                  </li>
                  <li>
                    Na seção <strong>"Cookie Types"</strong>, adicione manualmente os cookies que seu site usa:
                    <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                      <li>Google Analytics 4 → marque como "Marketing"</li>
                      <li>Meta Pixel → marque como "Marketing"</li>
                      <li>Hotjar → marque como "Analytics"</li>
                      <li>LinkedIn Insight Tag → marque como "Marketing"</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Não esqueça de incluir qualquer script personalizado que use localStorage ou tracking.
                    </p>
                  </li>
                  <li>
                    <strong>Habilite "Block Scripts Before Consent"</strong> — isso é essencial.
                    <p className="mt-2 text-sm">
                      Em 2026, o CookieYes e o Complianz bloqueiam automaticamente scripts de terceiros antes mesmo do carregamento da página, conforme a nova orientação da ePrivacy.
                    </p>
                  </li>
                  <li>
                    <strong>Teste:</strong>
                    <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                      <li>Abra seu site em modo anônimo.</li>
                      <li>Clique em "Recusar todos".</li>
                      <li>Abra as ferramentas de desenvolvedor (F12) → aba "Application" → "Cookies".</li>
                      <li>Verifique se os cookies de marketing foram bloqueados.</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Se ainda aparecerem, seu plugin está mal configurado — ou você tem outro script externo ignorando o banner.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                <p className="font-semibold flex items-center gap-2 mb-2">
                  💡 Dica profissional 2026:
                </p>
                <p>
                  Se você usa o Google Tag Manager, configure as tags para carregar apenas após consentimento. Use o Consent Mode v2 do Google, que agora se integra diretamente ao CookieYes e ao Complianz — e gera logs criptografados para auditoria.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">✅ Para Shopify: O Erro que 90% dos Lojistas Cometem</h3>

              <p>
                Shopify não tem um banner de cookies nativo compatível com LGPD. Muitos lojistas usam apps gratuitos que só mostram um aviso — e continuam rastreando.
              </p>

              <p>
                <strong>Solução:</strong> Use o "Cookie Banner & Consent Manager" da Klayvio (gratuito) ou o "CookieYes for Shopify" (versão 2026).
              </p>

              <div className="bg-card border border-border rounded-lg p-6 my-8">
                <h4 className="font-semibold text-lg mb-4">Passo a passo (atualizado para 2026):</h4>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    No seu painel Shopify, vá em <strong>"Apps {'>'} App Store"</strong>.
                  </li>
                  <li>
                    Busque por <strong>"CookieYes for Shopify"</strong> — certifique-se de que é a versão com suporte a "ePrivacy Mode".
                  </li>
                  <li>
                    Instale e conecte sua conta CookieYes (mesmo sistema do WordPress).
                  </li>
                  <li>
                    Escolha os modelos de banner: <strong>"LGPD + GDPR + ePrivacy"</strong>.
                  </li>
                  <li>
                    No editor visual, ajuste:
                    <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                      <li>
                        <strong>Texto:</strong> "Para oferecer uma experiência personalizada, usamos cookies. Os essenciais são necessários para funcionar. Os de marketing e análise só são ativados se você permitir. Você pode mudar isso a qualquer momento."
                      </li>
                      <li>
                        Adicione botões: <strong>"Aceitar todos"</strong>, <strong>"Recusar todos"</strong>, <strong>"Gerenciar cookies"</strong>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Na aba <strong>"Cookie List"</strong>, adicione:
                    <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                      <li>Google Analytics 4</li>
                      <li>Facebook Pixel</li>
                      <li>TikTok Pixel</li>
                      <li>Any external script (ex: Chatbot, live chat)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Habilite "Block Scripts Before Consent"</strong> — isso é essencial.
                    <p className="mt-2 text-sm">
                      Em 2026, o CookieYes bloqueia scripts antes do carregamento inicial da página — algo que o Shopify não faz por padrão.
                    </p>
                  </li>
                  <li>
                    <strong>Teste em modo incógnito:</strong>
                    <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                      <li>Recuse todos.</li>
                      <li>Acesse "Storefront Preview" e veja se o pixel do Facebook não dispara.</li>
                      <li>Use o site <a href="https://www.cookiebot.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cookiebot.com</a> para escanear seu site e confirmar que nenhum cookie de marketing está sendo armazenado antes do consentimento.</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <p className="font-semibold flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5" />
                  Atenção 2026:
                </p>
                <p>
                  Se você usa o "Shopify Payments" ou "Shopify Email", eles usam cookies próprios — mas são considerados "essenciais". Verifique a documentação da Shopify para confirmar quais são. E se você usa Shopify Flow ou AI-powered recommendations, esses também rastreiam — e exigem consentimento.
                </p>
              </div>

              <h2 className="flex items-center gap-3 mt-12 mb-6">
                <FileCheck className="h-8 w-8 text-primary" />
                O Que Deve Estar na Sua Política de Cookies (Modelo Prático para 2026)
              </h2>

              <p className="mb-6">
                Um banner é só a ponta do iceberg. A política de cookies é o documento que explica tudo.
              </p>

              <p className="mb-6">
                Ela precisa estar acessível no rodapé do site, com link claro: "Política de Cookies".
              </p>

              <p className="mb-8">Ela não é um texto copiado da internet. É sua explicação, em linguagem humana.</p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Estrutura mínima obrigatória (atualizada para 2026):</h3>

              <div className="space-y-6 my-8">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">1. Introdução</h4>
                  <p className="text-muted-foreground italic">
                    "Esta Política de Cookies explica como e por que usamos cookies em nosso site. Nós respeitamos sua privacidade e, por isso, pedimos seu consentimento antes de rastrear sua navegação — conforme exigido pela LGPD, GDPR e pela nova ePrivacy Regulation (2026)."
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">2. O que são cookies?</h4>
                  <p>Explicação simples, como fizemos acima. Use analogias cotidianas.</p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">3. Tipos de cookies usados</h4>
                  <p className="mb-4">Use uma tabela simples:</p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-card rounded-lg overflow-hidden text-sm">
                      <thead>
                        <tr className="bg-primary/10">
                          <th className="border border-border p-3 text-left">Categoria</th>
                          <th className="border border-border p-3 text-left">Nome do Cookie</th>
                          <th className="border border-border p-3 text-left">Finalidade</th>
                          <th className="border border-border p-3 text-left">Duração</th>
                          <th className="border border-border p-3 text-left">Consentimento</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3">Essencial</td>
                          <td className="border border-border p-3">_session_id</td>
                          <td className="border border-border p-3">Mantém seu carrinho ativo</td>
                          <td className="border border-border p-3">Sessão</td>
                          <td className="border border-border p-3">Não necessário</td>
                        </tr>
                        <tr className="bg-muted/30">
                          <td className="border border-border p-3">Funcional</td>
                          <td className="border border-border p-3">_lang</td>
                          <td className="border border-border p-3">Lembra seu idioma preferido</td>
                          <td className="border border-border p-3">30 dias</td>
                          <td className="border border-border p-3">Necessário</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Marketing</td>
                          <td className="border border-border p-3">_ga (Google Analytics 4)</td>
                          <td className="border border-border p-3">Mede visitas e comportamento</td>
                          <td className="border border-border p-3">2 anos</td>
                          <td className="border border-border p-3">Necessário</td>
                        </tr>
                        <tr className="bg-muted/30">
                          <td className="border border-border p-3">Marketing</td>
                          <td className="border border-border p-3">fbp (Meta Pixel)</td>
                          <td className="border border-border p-3">Mostra anúncios personalizados</td>
                          <td className="border border-border p-3">90 dias</td>
                          <td className="border border-border p-3">Necessário</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Marketing</td>
                          <td className="border border-border p-3">tk_ai (TikTok Pixel)</td>
                          <td className="border border-border p-3">Segmenta anúncios no TikTok</td>
                          <td className="border border-border p-3">180 dias</td>
                          <td className="border border-border p-3">Necessário</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">4. Como gerenciar ou excluir cookies</h4>
                  <p className="text-muted-foreground italic">
                    "Você pode remover ou bloquear cookies a qualquer momento nas configurações do seu navegador. Consulte: <a href="#" className="text-primary hover:underline">Chrome</a>, <a href="#" className="text-primary hover:underline">Firefox</a>, <a href="#" className="text-primary hover:underline">Safari</a>."
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">5. Alterações na política</h4>
                  <p className="text-muted-foreground italic">
                    "Atualizamos esta política periodicamente. A versão mais recente sempre estará disponível aqui. A data da última atualização: 14 de novembro de 2025 (próxima revisão: 1º de janeiro de 2026)."
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">6. Contato</h4>
                  <p className="text-muted-foreground italic">
                    "Se tiver dúvidas sobre seus dados, entre em contato: contato@politicadeprivacidade.org"
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                <p className="font-semibold flex items-center gap-2 mb-2">
                  ✅ Dica final 2026:
                </p>
                <p>
                  Use ferramentas como <a href="https://politicadeprivacidade.org/" className="text-primary hover:underline font-semibold">politicadeprivacidade.org</a> para gerar o texto para seu site.
                </p>
              </div>

              <h2 className="flex items-center gap-3 mt-12 mb-6">
                <XCircle className="h-8 w-8 text-primary" />
                5 Erros Fatais que Você Está Cometendo em 2026 (Mesmo Que Não Saiba)
              </h2>

              <div className="space-y-6 my-8">
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white font-bold">1</span>
                    "Aceitar todos" é mais visível que "Recusar todos"
                  </h3>
                  <p>
                    Isso é manipulação psicológica — e a ANPD considera isso "consentimento não livre". Em 2026, sites com botões assim estão sendo flagrados por IA da ANPD.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white font-bold">2</span>
                    Usar "continuar navegando" como aceitação
                  </h3>
                  <p>
                    A LGPD proíbe isso. O consentimento só é válido se for ativo — ou seja, o usuário precisa clicar.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white font-bold">3</span>
                    Esquecer de bloquear scripts antes do consentimento
                  </h3>
                  <p>
                    Se o Google Analytics carrega antes do usuário clicar, você já violou a lei — mesmo que o banner esteja "certo". Em 2026, isso é considerado violação grave.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white font-bold">4</span>
                    Não atualizar a política quando mudar ferramentas
                  </h3>
                  <p>
                    Se você trocou o Hotjar por Pendo, precisa atualizar o documento. Não adianta ter um banner correto se a política está desatualizada.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white font-bold">5</span>
                    Não testar em dispositivos móveis
                  </h3>
                  <p>
                    81% das visitas no Brasil vêm de celular. Se o banner não aparece direito no iPhone ou Android, você está em risco.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                <p className="font-semibold flex items-center gap-2 mb-3">
                  🔍 Teste prático 2026:
                </p>
                <p className="mb-3">
                  Acesse seu site no celular. Recuse todos os cookies. Espere 30 segundos. Abra o Chrome DevTools {'>'} Network {'>'} Filter: "google". Se aparecer qualquer requisição para google-analytics.com, facebook.net ou tiktok.com — você tem um problema.
                </p>
                <p>
                  Use o Cookiebot Scanner — ele agora detecta scripts ocultos em iframes e scripts dinâmicos.
                </p>
              </div>

              <h2 className="flex items-center gap-3 mt-12 mb-6">
                <Shield className="h-8 w-8 text-primary" />
                Como Provar que Você Está em Conformidade em 2026 (E Evitar Multas)
              </h2>

              <p className="mb-6">
                A ANPD não multa por "não ter um banner". Ela multa por não provar que o consentimento foi obtido corretamente.
              </p>

              <p className="mb-6">Então, o que fazer?</p>

              <div className="space-y-4 my-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Use um sistema de registro de consentimento com criptografia</h3>
                    <p>
                      O CookieYes agora gera hashes criptografados e armazenados em blockchain (parceria com IOTA) para garantir imutabilidade — ideal para auditorias.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Armazene esses registros por 5 anos</h3>
                    <p>A LGPD exige isso para casos de auditoria.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Faça um "Audit de Cookies" trimestral</h3>
                    <p>
                      Use o Osano ou Cookiebot para gerar relatórios automáticos com certificação de conformidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Inclua um link à sua Política de Cookies no banner</h3>
                    <p>Sem isso, o consentimento é considerado "não informado".</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Se você vende para a UE, use o "Consent Management Platform" (CMP) certificado pela IAB Europe</h3>
                    <p>
                      A IAB Europe lista CMPs aprovados. O CookieYes é um deles — e agora tem certificação ePrivacy 2026.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3 mt-12 mb-6">
                <AlertTriangle className="h-8 w-8 text-primary" />
                O Que Fazer Se Você Já Foi Notificado pela ANPD em 2026?
              </h2>

              <p className="mb-6">
                Se você recebeu uma notificação da ANPD — ou de um cliente que reclamou — não entre em pânico.
              </p>

              <p className="mb-6">Aqui está o que fazer em 2026:</p>

              <ol className="space-y-3 my-6 list-decimal list-inside">
                <li>Pare imediatamente qualquer rastreamento não consentido.</li>
                <li>Instale o banner correto (como descrito acima) — com ePrivacy Mode ativado.</li>
                <li>Atualize sua Política de Cookies com a data atual.</li>
                <li>
                  Envie um e-mail ao usuário: "Reconhecemos que nossa prática anterior não estava em conformidade. Agora, implementamos um sistema de consentimento que respeita sua escolha, conforme exigido pela LGPD e ePrivacy Regulation 2026."
                </li>
                <li>Documente tudo.</li>
              </ol>

              <p>
                A ANPD valoriza a boa-fé. Se você agir rápido, transparente e corretamente — especialmente com evidências criptografadas — a multa pode ser reduzida em até 80%.
              </p>

              <h2 className="mt-12 mb-6">Perguntas Frequentes (FAQ) — Para Snippets do Google (2026)</h2>

              <div className="space-y-6 my-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">1. O que é a Política de Cookies em 2026?</h3>
                  <p>
                    É um documento que explica quais cookies seu site usa, para que servem e como o usuário pode controlar ou recusar seu uso, conforme exigido pela LGPD, GDPR e ePrivacy Regulation (2026).
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">2. É obrigatório ter um banner de cookies no Brasil em 2026?</h3>
                  <p>
                    Sim. A LGPD exige consentimento prévio para cookies que rastreiam dados pessoais. Em 2026, a ANPD passou a usar IA para detectar banners não conformes — e multar automaticamente.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">3. Posso usar o Google Analytics 4 sem consentimento em 2026?</h3>
                  <p>
                    Não. O GA4 coleta endereço IP, identificadores de dispositivo e comportamento de navegação — todos considerados dados pessoais. O consentimento é obrigatório — e o bloqueio de scripts antes da autorização é exigido pela nova ePrivacy.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">4. Qual a multa por não ter política de cookies em 2026?</h3>
                  <p>
                    Até R$50 milhões por infração, ou 2% do faturamento da empresa no Brasil, o que for maior. Em casos repetidos, a ANPD pode aplicar multas diárias até a correção.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">5. O banner de cookies funcionará no Shopify em 2026?</h3>
                  <p>
                    Sim, mas apenas se você usar um app compatível com ePrivacy Regulation, como CookieYes v2026. O tema padrão do Shopify não é suficiente — e pode gerar multas.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">6. Preciso de um advogado para criar minha política em 2026?</h3>
                  <p>
                    Não obrigatoriamente. Mas é recomendado se você tem faturamento acima de R$5 milhões/ano, opera internacionalmente ou usa IA para personalização. Use modelos confiáveis e personalize com sua voz.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">7. Como sei se meu banner estará funcionando em 2026?</h3>
                  <p>
                    Teste em modo anônimo. Recuse todos os cookies. Verifique se os scripts de marketing (Google Analytics, Meta Pixel, TikTok) não carregam. Use o <a href="https://www.cookiebot.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Cookiebot Scanner</a> — ele agora detecta scripts escondidos em iframes e códigos dinâmicos.
                  </p>
                </div>
              </div>

              <h2 className="mt-12 mb-6">Conclusão: Sua Política de Cookies Não é um Detalhe — É Seu Compromisso com a Confiança</h2>

              <p>A verdade é simples: os usuários não querem ser rastreados. Eles querem controle.</p>

              <p>
                Quando você oferece um banner de cookies transparente, respeitoso e funcional, você não está apenas cumprindo a lei. Você está construindo uma relação de confiança que nenhum anúncio pago consegue comprar.
              </p>

              <p>
                Em 2026, a privacidade não é um recurso. É um valor. E quem a respeita — realmente respeita — ganha mais do que tráfego. Ganha lealdade.
              </p>

              <p>
                Se você ainda não implementou o banner correto, faça isso hoje. Não espere uma multa. Não espere um cliente reclamar. Não espere o Google penalizar seu site.
              </p>

              <p className="font-semibold text-lg">Comece agora.</p>

              <div className="bg-primary/10 border border-primary rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  👉 Faça o teste rápido: Seu banner de cookies está realmente em conformidade com a LGPD e ePrivacy 2026?
                </h3>
                <p className="text-lg mb-6">
                  Teste seu banner em 60 segundos — e descubra se você está em risco
                </p>
                <Button 
                  size="lg" 
                  onClick={() => navigate("/gerador-politica-cookies")}
                  className="font-semibold"
                >
                  Gerar Minha Política de Cookies Grátis
                </Button>
              </div>

              <p className="text-muted-foreground italic">
                Se você gostou deste guia, compartilhe com outro empreendedor que ainda está usando banners de 2020. A privacidade não é um detalhe técnico — é um direito humano. E você pode ser o motivo de alguém não ser multado.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={() => navigate("/blog")}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao Blog
                </Button>
                <div className="flex gap-2">
                  <span className="text-sm text-muted-foreground">Compartilhe:</span>
                  {/* Add social share buttons here if needed */}
                </div>
              </div>

              <SocialShare title="Como fazer aviso de cookies conforme LGPD: guia passo a passo" />

              <RelatedArticles tags={["cookies", "lgpd", "gdpr", "compliance", "banner"]} currentArticleId="3" />

              {/* Autor */}
              <AuthorBio />
            </div>
          </div>

          <BlogSidebar />
        </div>
      </article>
      
      <Footer />
    </div>
  );
}
