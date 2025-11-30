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
import { 
  ShieldAlert, 
  Users, 
  Mail, 
  Share2, 
  Lock, 
  FileText,
  AlertTriangle,
  CheckCircle2,
  UserCheck,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/blog-10-acoes-marketing-lgpd.jpg";

const Post10AcoesMarketingLGPD = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>10 Ações de Marketing que Mudam com a LGPD Hoje! - Políticas de Privacidade</title>
        <meta 
          name="description" 
          content="Descubra os 10 processos de marketing que a LGPD exige repensar para garantir conformidade e proteger dados dos seus usuários." 
        />
        <meta name="keywords" content="LGPD, marketing digital, proteção de dados, consentimento, e-mail marketing, conformidade, ANPD" />
        <link rel="canonical" href="https://politicadeprivacidade.org/blog/10-acoes-marketing-lgpd" />
        
        <meta property="og:title" content="10 Ações de Marketing que Mudam com a LGPD Hoje!" />
        <meta property="og:description" content="Descubra os 10 processos de marketing que a LGPD exige repensar para garantir conformidade e proteger dados dos seus usuários." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={heroImage} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "10 Ações de Marketing que Mudam com a LGPD Hoje!",
            "description": "Descubra os 10 processos de marketing que a LGPD exige repensar para garantir conformidade e proteger dados dos seus usuários.",
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
                    alt="Profissional analisando estratégias de marketing digital em conformidade com LGPD" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                <header className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">
                    10 Ações de Marketing que Mudam com a LGPD Hoje!
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
                    <span>15 min de leitura</span>
                  </div>

                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Descubra os 10 processos de marketing que a LGPD exige repensar para garantir conformidade e proteger dados dos seus usuários.
                  </p>
                </header>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <ShieldAlert className="w-8 h-8 text-primary" />
                    LGPD não é um "checklist" — é uma nova forma de fazer marketing
                  </h2>

                  <p className="mb-6">
                    Se você chegou até aqui, provavelmente já atualizou sua política de privacidade, instalou um gerenciador de cookies e, talvez, até contratou um encarregado (DPO). Parabéns! Mas atenção: essa é apenas a ponta do iceberg.
                  </p>

                  <p className="mb-6">
                    A Lei Geral de Proteção de Dados (LGPD) não se limita a ajustes técnicos ou documentos jurídicos. Ela exige uma mudança cultural profunda, especialmente nas áreas que mais lidam com dados pessoais: marketing, vendas e comunicação.
                  </p>

                  <p className="mb-6">
                    Muitos profissionais ainda tratam a LGPD como uma burocracia a ser cumprida — quando, na verdade, ela representa uma oportunidade única de reconstruir relações com o público com base em transparência, respeito e confiança.
                  </p>

                  <p className="mb-6">
                    Aqui, não vamos falar de teoria. Vamos mergulhar nas <strong>10 ações de marketing que mudam com a LGPD hoje!</strong> — práticas corriqueiras que, se mantidas do jeito antigo, podem gerar multas, perda de reputação ou até a indisponibilidade de canais de comunicação.
                  </p>

                  <p className="mb-6">
                    Se você lidera uma equipe de marketing, gerencia uma agência ou simplesmente quer operar seu negócio online com segurança jurídica, este guia é para você.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    Por que a LGPD transforma o marketing — e não só o jurídico?
                  </h2>

                  <p className="mb-6">
                    Antes da LGPD, era comum pensar: "Se o cliente deixou o e-mail, está tudo certo para usar como quiser." Hoje, essa lógica está obsoleta.
                  </p>

                  <p className="mb-6">
                    A lei estabelece que todo dado pessoal pertence ao titular — e não à empresa que o coletou. Isso significa que cada uso, compartilhamento ou armazenamento precisa de uma base legal clara, como consentimento, cumprimento de obrigação legal ou interesse legítimo.
                  </p>

                  <p className="mb-6">
                    O marketing, por natureza, é uma máquina de coleta, segmentação e ativação de dados. Logo, toda campanha, lista, CTA ou parceria precisa ser repensada à luz da LGPD.
                  </p>

                  <p className="mb-6">
                    E sim: isso muda tudo — desde o primeiro lead até o remarketing de um carrinho abandonado.
                  </p>

                  <p className="mb-6 font-semibold">
                    Vamos aos 10 pontos críticos que você precisa revisar agora.
                  </p>
                </section>

                <section className="mb-12">
                  <Card className="bg-primary/5 border-primary/20 mb-8">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Share2 className="w-6 h-6 text-primary" />
                        1. Compartilhar listas com fornecedores, freelancers ou parceiros
                      </h3>

                      <p className="mb-4">
                        Uma das práticas mais comuns — e perigosas — é repassar listas de contatos a terceiros sem controle. Um corretor imobiliário recebe leads de um site, um freelancer acessa o CRM de um cliente, um vendedor autônomo leva contatos para outra empresa...
                      </p>

                      <div className="bg-destructive/10 border-l-4 border-destructive p-4 mb-4">
                        <p className="font-semibold flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5" />
                          Problema:
                        </p>
                        <p className="mt-2">
                          O titular dos dados nunca autorizou esse compartilhamento. Ele confiou seus dados à sua empresa, não a uma rede de pessoas conectadas a ela.
                        </p>
                      </div>

                      <p className="mb-4">
                        A LGPD exige que, ao compartilhar dados com terceiros (classificados como "encarregados" ou "agentes de tratamento"), você tenha um contrato de processamento de dados que defina responsabilidades, finalidades e medidas de segurança.
                      </p>

                      <div className="bg-primary/10 border-l-4 border-primary p-4">
                        <p className="font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Dica prática:
                        </p>
                        <p className="mt-2">
                          Nunca envie listas por WhatsApp, e-mail ou pen drive. Use plataformas com controles de acesso e, sempre que possível, mantenha os dados dentro do seu próprio ecossistema (ex: integrar ferramentas via API, sem exportar CSVs).
                        </p>
                        <p className="mt-2">
                          Se seu modelo de negócios depende de compartilhamento, deixe isso explícito na política de privacidade — e, de preferência, peça consentimento específico para essa finalidade.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20 mb-8">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Users className="w-6 h-6 text-primary" />
                        2. Usar listas de e-mails para campanhas no Facebook (match e lookalike)
                      </h3>

                      <p className="mb-4">
                        Upload de listas no Facebook Ads para criar públicos personalizados ou lookalikes é uma prática poderosa. Mas de onde veio essa lista?
                      </p>

                      <p className="mb-4">
                        Se os e-mails foram coletados em um formulário com consentimento apenas para "receber novidades por e-mail", não há base legal para usá-los no Facebook — a menos que você tenha obtido autorização explícita para "uso em campanhas de redes sociais".
                      </p>

                      <p className="mb-4">
                        O próprio Meta, desde a GDPR, endureceu as regras e agora exige que anunciantes comprovem a origem legítima dos dados. Em caso de denúncia, sua conta pode ser suspensa.
                      </p>

                      <div className="bg-primary/10 border-l-4 border-primary p-4">
                        <p className="font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Dica prática:
                        </p>
                        <p className="mt-2">
                          Crie CTAs específicos: "Aceito receber comunicações por e-mail e em redes sociais". Ou, melhor ainda, use pixels e eventos de conversão para segmentar usuários que já interagiram com seu site — sem precisar de listas externas.
                        </p>
                        <p className="mt-2">
                          Saiba mais sobre como os cookies se relacionam com a LGPD em nosso{" "}
                          <a 
                            href="/blog/politica-cookies-guia-completo" 
                            className="text-primary hover:underline font-semibold"
                          >
                            guia completo
                          </a>.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20 mb-8">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Mail className="w-6 h-6 text-primary" />
                        3. Comprar listas frias para disparo de e-mail, SMS ou WhatsApp
                      </h3>

                      <p className="mb-4">
                        Comprar leads está com os dias contados — e não só por ética, mas por lei.
                      </p>

                      <p className="mb-4">
                        Disparar mensagens para pessoas que nunca interagiram com sua marca fere o princípio da finalidade e, muitas vezes, da necessidade. Pior: se esses dados incluírem informações sensíveis (como renda ou localização), o risco é ainda maior.
                      </p>

                      <p className="mb-4">
                        Além da LGPD, há outras normas em jogo: o Marco Civil da Internet, o CDC (Código de Defesa do Consumidor) e, no caso de SMS/WhatsApp, a resolução da Anatel que proíbe disparos não solicitados.
                      </p>

                      <div className="bg-primary/10 border-l-4 border-primary p-4">
                        <p className="font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Dica prática:
                        </p>
                        <p className="mt-2">
                          Invista em atração orgânica. Um e-book de qualidade, um webinar útil ou uma newsletter com valor real geram leads quentes, qualificados e consentidos — e, ironicamente, com taxas de conversão muito maiores.
                        </p>
                        <p className="mt-2">
                          Ferramentas como Mailchimp, RD Station e ActiveCampaign já alertam contra o uso de listas compradas. Não ignore esses avisos.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20 mb-8">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Share2 className="w-6 h-6 text-primary" />
                        4. Trocar listas com parceiros para envio de newsletters
                      </h3>

                      <p className="mb-4">
                        "Vamos trocar bases? Você me envia seus contatos, eu te envio os meus!" Parece inofensivo, mas é ilegal se não houver consentimento explícito para essa finalidade.
                      </p>

                      <p className="mb-4">
                        O titular deu seus dados à sua empresa, não à sua parceira. Mesmo que a parceria seja estratégica, o dado não é seu para repassar.
                      </p>

                      <div className="bg-primary/10 border-l-4 border-primary p-4">
                        <p className="font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Dica prática:
                        </p>
                        <p className="mt-2">
                          Em vez de trocar listas, crie campanhas conjuntas com landing pages próprias. Assim, cada usuário se cadastra diretamente com a outra marca — com consentimento claro e separado.
                        </p>
                        <p className="mt-2">
                          Isso não só garante conformidade, como melhora a qualidade do lead para ambos os lados.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20 mb-8">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Lock className="w-6 h-6 text-primary" />
                        5. Acesso irrestrito da agência aos dados dos clientes
                      </h3>

                      <p className="mb-4">
                        Sua agência de marketing tem acesso total ao CRM, e-mail marketing e analytics do cliente? Cuidado.
                      </p>

                      <p className="mb-4">
                        A LGPD exige que o acesso a dados seja limitado ao mínimo necessário para a execução da tarefa (princípio da necessidade). Um estagiário não precisa ver o histórico completo de compras de um cliente VIP.
                      </p>

                      <div className="bg-primary/10 border-l-4 border-primary p-4">
                        <p className="font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Dica prática:
                        </p>
                        <p className="mt-2">
                          Use perfis de usuário com permissões granulares. Plataformas como HubSpot, Google Analytics 4 e Klaviyo permitem definir níveis de acesso. Além disso, exija um contrato de confidencialidade e processamento de dados com toda agência que tocar nos dados do seu cliente.
                        </p>
                        <p className="mt-2">
                          Lembre-se: se um funcionário da agência vazar dados, sua empresa responde solidariamente.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20 mb-8">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <UserCheck className="w-6 h-6 text-primary" />
                        6. Contratar freelancers sem contrato de proteção de dados
                      </h3>

                      <p className="mb-4">
                        Freelancers são fundamentais no ecossistema digital — mas também são grandes vetores de risco.
                      </p>

                      <p className="mb-4">
                        Imagine: um designer acessa seu Mailchimp para ajustar um template. Um redator baixa uma planilha de leads para personalizar mensagens. Um desenvolvedor copia o banco de dados para "testar localmente".
                      </p>

                      <p className="mb-4">
                        Se não houver um termo de confidencialidade e processamento de dados, você não tem como responsabilizá-los — e, pior, não protege os titulares.
                      </p>

                      <div className="bg-primary/10 border-l-4 border-primary p-4">
                        <p className="font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Dica prática:
                        </p>
                        <p className="mt-2">
                          Tenha um modelo padrão de contrato para todos os prestadores de serviço que lidam com dados. Inclua cláusulas sobre:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Proibição de cópia ou armazenamento não autorizado</li>
                          <li>Prazo de exclusão dos dados após o fim do contrato</li>
                          <li>Notificação imediata em caso de vazamento</li>
                        </ul>
                        <p className="mt-2">
                          Essa simples medida pode evitar dores de cabeça imensas.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20 mb-8">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <FileText className="w-6 h-6 text-primary" />
                        7. CTAs genéricos como "Deixe seu contato para receber novidades"
                      </h3>

                      <p className="mb-4">
                        "Preencha seu e-mail para receber dicas exclusivas!" Soa inofensivo, mas esconde um problema grave: falta de clareza.
                      </p>

                      <p className="mb-4">
                        A LGPD exige que o consentimento seja livre, informado e inequívoco. Isso significa que o usuário precisa saber exatamente para quê seus dados serão usados.
                      </p>

                      <p className="mb-4">
                        Um CTA vago abre espaço para interpretações — e não serve como base legal sólida.
                      </p>

                      <div className="bg-primary/10 border-l-4 border-primary p-4">
                        <p className="font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Dica prática:
                        </p>
                        <p className="mt-2">
                          Seja específico:
                        </p>
                        <ul className="list-none mt-2 space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>"Receba nosso e-book gratuito sobre LGPD para e-commerces (enviamos por e-mail)."</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>"Aceito receber ofertas por WhatsApp (máximo de 2 mensagens por mês)."</span>
                          </li>
                        </ul>
                        <p className="mt-2">
                          Melhor ainda: use checkboxes separados para cada canal (e-mail, SMS, WhatsApp, redes sociais), conforme o guia de consentimento da ANPD.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20 mb-8">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Users className="w-6 h-6 text-primary" />
                        8. Coleta de dados em eventos presenciais sem consentimento claro
                      </h3>

                      <p className="mb-4">
                        A LGPD não se aplica só ao digital. Se você coleta dados em feiras, workshops ou atendimento presencial, as mesmas regras valem.
                      </p>

                      <p className="mb-4">
                        Fichas de papel sem aviso de privacidade? Tablets com formulários que não explicam o uso dos dados? QR Codes que levam a um formulário vago?
                      </p>

                      <p className="mb-4">
                        Tudo isso é não conformidade.
                      </p>

                      <div className="bg-primary/10 border-l-4 border-primary p-4">
                        <p className="font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Dica prática:
                        </p>
                        <p className="mt-2">
                          Use formulários digitais com política de privacidade incorporada. Um QR Code pode levar a uma landing page com:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Explicação clara da finalidade</li>
                          <li>Link para a política de privacidade</li>
                          <li>Checkbox de consentimento (se aplicável)</li>
                        </ul>
                        <p className="mt-2">
                          Assim, você automatiza o opt-in, alimenta seu CRM e documenta o consentimento — tudo em um único passo.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20 mb-8">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Mail className="w-6 h-6 text-primary" />
                        9. Manter listas antigas "por vaidade" ou "para estatística"
                      </h3>

                      <p className="mb-4">
                        Quantos contatos você tem no seu CRM? 10 mil? 50 mil?
                      </p>

                      <p className="mb-4">
                        Se a maioria nunca abriu um e-mail, essa métrica é enganosa — e perigosa.
                      </p>

                      <p className="mb-4">
                        Listas inativas não só prejudicam sua taxa de entrega (e reputação com provedores), como representam um risco legal. A LGPD exige que dados sejam excluídos quando não forem mais necessários.
                      </p>

                      <div className="bg-primary/10 border-l-4 border-primary p-4">
                        <p className="font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Dica prática:
                        </p>
                        <p className="mt-2">
                          Faça uma higienização urgente:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Envie uma campanha de reengajamento: "Ainda quer receber nossas mensagens?"</li>
                          <li>Quem não responder em 30 dias: arquive ou exclua.</li>
                          <li>Documente o processo como parte da sua governança de dados.</li>
                        </ul>
                        <p className="mt-2">
                          Menos dados, mas mais relevantes e consentidos, é o novo padrão de excelência.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20 mb-8">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <ShieldAlert className="w-6 h-6 text-primary" />
                        10. Expor dados pessoais de colaboradores em organogramas ou sites públicos
                      </h3>

                      <p className="mb-4">
                        Muitas agências exibem, em seus sites ou recepções, organogramas com nomes, cargos, e-mails e até celulares pessoais de colaboradores.
                      </p>

                      <p className="mb-4">
                        Se o funcionário não autorizou o uso do celular pessoal para contato profissional — e isso não está no contrato de trabalho —, você está tratando dado pessoal sem base legal.
                      </p>

                      <p className="mb-4">
                        Isso pode gerar problemas trabalhistas e até violar o direito à privacidade.
                      </p>

                      <div className="bg-primary/10 border-l-4 border-primary p-4">
                        <p className="font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Dica prática:
                        </p>
                        <p className="mt-2">
                          Use apenas e-mails corporativos e ramais fixos em materiais públicos. Se for necessário incluir contato direto, obtenha autorização por escrito do colaborador — e permita que ele revogue a qualquer momento.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    LGPD como vantagem competitiva: não é só sobre evitar multas
                  </h2>

                  <p className="mb-6">
                    Repensar essas <strong>10 ações de marketing que mudam com a LGPD hoje!</strong> não é apenas uma questão de conformidade. É uma chance de:
                  </p>

                  <ul className="list-none space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Construir relacionamentos mais sólidos com seu público</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Reduzir churn com comunicações mais relevantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Aumentar a confiança da marca em um mercado cada vez mais consciente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Diferenciar-se da concorrência que ainda opera no "jeitinho"</span>
                    </li>
                  </ul>

                  <p className="mb-6">
                    Empresas que enxergam a LGPD como parte da estratégia, e não como um custo, estão colhendo frutos reais: maior engajamento, menor taxa de descadastro e até preferência de compra.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-primary" />
                    Próximos passos: como manter seu marketing alinhado à LGPD
                  </h2>

                  <ol className="list-decimal list-inside space-y-4 mb-6">
                    <li className="font-semibold">
                      Faça um data mapping: 
                      <span className="font-normal ml-2">mapeie todos os pontos em que seu marketing coleta, usa ou compartilha dados.</span>
                    </li>
                    <li className="font-semibold">
                      Revise seus formulários e CTAs: 
                      <span className="font-normal ml-2">garantam clareza, granularidade e fácil revogação.</span>
                    </li>
                    <li className="font-semibold">
                      Capacite sua equipe: 
                      <span className="font-normal ml-2">marketing, vendas e atendimento precisam entender os princípios da LGPD.</span>
                    </li>
                    <li className="font-semibold">
                      Use tecnologia a seu favor: 
                      <span className="font-normal ml-2">ferramentas como gerenciadores de consentimento, CRMs com governança e plataformas de e-mail marketing com compliance embutida são aliadas.</span>
                    </li>
                  </ol>

                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary">
                    <CardContent className="pt-6">
                      <p className="text-lg mb-4">
                        Quer um modelo pronto? Baixe nosso template gratuito de política de privacidade LGPD/GDPR — usado por mais de 50 mil sites.
                      </p>
                      <Button 
                        onClick={() => navigate('/gerador-politica-privacidade')}
                        size="lg"
                        className="w-full sm:w-auto"
                      >
                        Gerar Política de Privacidade Gratuita
                      </Button>
                    </CardContent>
                  </Card>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                    Conclusão: O marketing ético é o marketing do futuro
                  </h2>

                  <p className="mb-6">
                    As <strong>10 ações de marketing que mudam com a LGPD hoje!</strong> não são obstáculos. São sinais de maturidade.
                  </p>

                  <p className="mb-6">
                    Quem adapta seus processos agora estará muito à frente quando o mercado exigir ainda mais transparência — como já acontece na Europa com a GDPR.
                  </p>

                  <p className="mb-6">
                    Mais do que evitar multas (que podem chegar a 2% do faturamento, até R$ 50 milhões), você está protegendo a reputação da sua marca e o direito fundamental à privacidade de cada pessoa que confia em você.
                  </p>

                  <p className="mb-6 font-semibold">
                    E isso, no final das contas, é o que constrói negócios duradouros.
                  </p>

                  <Card className="bg-muted/50 border-muted">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Gostou deste conteúdo?</h3>
                      <p className="mb-4">
                        Compartilhe com sua equipe de marketing, salve nos favoritos e explore outros artigos do nosso blog:
                      </p>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="/blog/politica-privacidade-2026" 
                            className="text-primary hover:underline flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            Como criar uma política de privacidade LGPD-compatível em 2025
                          </a>
                        </li>
                        <li>
                          <a 
                            href="/blog/politica-cookies-guia-completo" 
                            className="text-primary hover:underline flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            Política de Cookies: Guia Completo para Conformidade
                          </a>
                        </li>
                        <li>
                          <a 
                            href="/blog/termos-uso-seguranca-juridica" 
                            className="text-primary hover:underline flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            Termos de Uso: Segurança Jurídica para seu Site
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
                          1. A LGPD se aplica a campanhas de marketing off-line?
                        </h3>
                        <p>
                          Sim. A lei abrange qualquer tratamento de dados pessoais, independentemente do meio (digital ou físico). Feiras, cadastros em papel ou atendimento presencial também precisam de conformidade.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">
                          2. Posso usar interesse legítimo para disparar e-mails de marketing?
                        </h3>
                        <p>
                          Em alguns casos, sim — mas com restrições. O interesse legítimo não se aplica a comunicações diretas com fins promocionais para pessoas físicas, segundo orientação da ANPD. O consentimento é a base mais segura.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">
                          3. Preciso pedir novo consentimento para minha base antiga?
                        </h3>
                        <p>
                          Se os dados foram coletados antes da LGPD (vigente desde setembro/2020) sem clareza sobre finalidades, sim. Recomenda-se uma campanha de reconsentimento com opt-in explícito.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">
                          4. Quem fiscaliza o uso de dados em marketing?
                        </h3>
                        <p>
                          A Autoridade Nacional de Proteção de Dados (ANPD) é o órgão responsável. Além disso, o Ministério Público e Procon podem atuar em casos de abuso contra consumidores.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">
                          5. O que é "Privacy by Design" e como aplicar no marketing?
                        </h3>
                        <p>
                          É o conceito de integrar a privacidade desde a concepção de produtos e campanhas. No marketing, significa: coletar só o necessário, pedir consentimento granular, permitir fácil exclusão e documentar tudo. Saiba mais no{" "}
                          <a 
                            href="https://www.gov.br/anpd/pt-br" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            guia da ANPD sobre boas práticas
                          </a>.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <SocialShare title="10 Ações de Marketing que Mudam com a LGPD Hoje!" />

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

export default Post10AcoesMarketingLGPD;