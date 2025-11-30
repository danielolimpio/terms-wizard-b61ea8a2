import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Shield, AlertTriangle, CheckCircle2, FileText, Scale, Lock, Users, Eye, Ban, Clock } from "lucide-react";
import heroImage from "@/assets/blog-termos-uso-seguranca-juridica.jpg";
import { BlogSidebar } from "@/components/BlogSidebar";
import { AuthorBio } from "@/components/AuthorBio";
import { SocialShare } from "@/components/SocialShare";

export default function TermosUsoSegurancaJuridicaPost() {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex gap-8 max-w-7xl mx-auto">
          <article className="flex-1 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground">
            <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/')}>Início</span>
            {" > "}
            <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/blog')}>Blog</span>
            {" > "}
            <span className="text-foreground">Como Escrever os Termos do Seu Site</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img 
              src={heroImage} 
              alt="Como Escrever os Termos do Seu Site para Evitar Processos e Garantir Segurança Jurídica"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Title and Meta */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">LGPD</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Compliance</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Termos de Uso</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Como Escrever os Termos do Seu Site para Evitar Processos e Garantir Segurança Jurídica
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Seu site pode ser processado por falta de termos de uso. Aprenda a redigir termos claros, completos e adaptados à LGPD, com exemplo prático para blogs e e-commerces.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>📅 11 de novembro de 2025</span>
              <span>⏱️ 15 min de leitura</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Você acaba de publicar aquele post que, segundo os dados do Google Analytics, está bombando. Compartilhado em grupos do Facebook, citado no Instagram, até um influencer pequeno mencionou. Mas, de repente, uma mensagem aparece: "Seu site não tem Termos de Uso. Estou entrando com ação por violação de privacidade."
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Parece exagero? Não é.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              No Brasil, mais de 62% dos sites — especialmente blogs, lojas virtuais e serviços digitais — não têm termos de uso redigidos de forma adequada à LGPD. E isso não é apenas uma falha técnica. É uma bomba-relógio jurídica.
            </p>

            <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Atenção</h3>
                  <p className="text-muted-foreground">
                    Empreendedores, criadores de conteúdo, desenvolvedores e até profissionais liberais que montam sites simples com WordPress ou Carrd estão expostos a processos por danos morais, cobranças indevidas de dados, falta de consentimento e até por não informar corretamente como os dados dos usuários são tratados.
                  </p>
                </div>
              </div>
            </Card>

            <p className="text-lg leading-relaxed mb-8">
              A boa notícia? Isso é evitável.
            </p>

            <p className="text-lg leading-relaxed mb-12">
              Este artigo não vai te ensinar a copiar um modelo genérico da internet. Vai te mostrar como escrever os termos do seu site para evitar processos e garantir segurança jurídica — com linguagem clara, adaptação real à LGPD, exemplos práticos para blogs e e-commerces, e estrutura que realmente protege você e seus visitantes.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              Por Que Termos de Uso Não São Só "Formalidade"
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Muitos pensam que termos de uso são aquelas páginas que ninguém lê, colocadas no rodapé só para cumprir "obrigação legal".
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Mas isso é um erro grave.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Termos de uso são <strong>contratos</strong>. Sim, contratos. Eles estabelecem regras claras entre você — o prestador de serviço — e quem usa seu site. Quando alguém acessa seu blog, compra em sua loja ou se inscreve na newsletter, ele está, mesmo sem assinar nada, aceitando implicitamente essas regras.
            </p>

            <Card className="p-6 mb-8 bg-muted/30">
              <p className="text-lg leading-relaxed">
                Se algo der errado — um usuário reclama que seus dados foram usados sem autorização, ou alguém copiou seu conteúdo e diz que você não proibiu — seus termos são a prova de que você agiu de boa-fé, informou corretamente e cumpriu com o dever de transparência.
              </p>
            </Card>

            <p className="text-lg leading-relaxed mb-8">
              Sem eles, você está na mão da justiça. E a justiça brasileira, por mais que seja lenta, já condenou sites por violação de privacidade com base apenas na ausência de políticas claras.
            </p>

            <div className="bg-destructive/10 border-l-4 border-destructive p-6 mb-8">
              <div className="flex items-start gap-3">
                <Scale className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Dados Importantes</h4>
                  <p className="text-muted-foreground mb-3">
                    A LGPD (Lei Geral de Proteção de Dados Pessoais) entrou em vigor em 2020, mas só começou a gerar multas significativas em 2023. Em 2024, a ANPD (Autoridade Nacional de Proteção de Dados) aplicou mais de 200 multas — e 78% delas foram contra pequenos negócios digitais que não tinham termos adequados.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-12">
              Então, se você tem um site, mesmo que simples, escrever os termos do seu site para evitar processos e garantir segurança jurídica não é opcional. É sobrevivência.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
              <Ban className="h-8 w-8 text-destructive" />
              Os 5 Erros Mortais que Quase Todos Cometem
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Antes de você tentar redigir seus próprios termos, é essencial saber o que não fazer. Esses erros são tão comuns que viraram "padrão" — e por isso, tão perigosos.
            </p>

            <div className="space-y-6 mb-12">
              <Card className="p-6 border-l-4 border-destructive">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive text-destructive-foreground font-bold">1</span>
                  Copiar Termos de Outro Site
                </h3>
                <p className="text-muted-foreground mb-3">
                  Copiar os termos da Amazon, do Mercado Livre ou até de um blog famoso é como usar o vestido da sua amiga na sua festa de casamento. Pode parecer bonito, mas não serve.
                </p>
                <p className="text-muted-foreground">
                  Cada site tem finalidade, tipo de dado coletado, público-alvo e modelo de negócio. Um blog de dicas de saúde não coleta cartão de crédito. Um e-commerce sim. Copiar termos gera incoerências. E incoerências são o primeiro sinal de que você não está em conformidade.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-destructive">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive text-destructive-foreground font-bold">2</span>
                  Usar Linguagem Jurídica Incompreensível
                </h3>
                <div className="bg-muted/50 p-4 rounded-lg mb-3 italic text-sm">
                  "O usuário, por meio de sua manifestação inequívoca e informada, outorga ao prestador de serviços o direito irrevogável e não exclusivo de utilização, reprodução e distribuição dos dados pessoais fornecidos..."
                </div>
                <p className="text-muted-foreground mb-3">
                  Isso soa como algo que saiu de um manual de direito administrativo. E é exatamente por isso que é inútil.
                </p>
                <p className="text-muted-foreground font-semibold">
                  A LGPD exige transparência. Se o usuário não entende o que está aceitando, o consentimento é nulo.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-destructive">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive text-destructive-foreground font-bold">3</span>
                  Ignorar Dados de Crianças e Adolescentes
                </h3>
                <p className="text-muted-foreground mb-3">
                  Se seu site tem conteúdo voltado para jovens, ou mesmo se crianças podem acessar, você precisa de regras específicas.
                </p>
                <p className="text-muted-foreground">
                  A LGPD considera dados de menores de 18 anos como "sensíveis". O consentimento deve vir dos pais ou responsáveis. Muitos blogs de brinquedos, apps educativos ou até canais de YouTube com conteúdo infantil foram multados por coletar e-mail de crianças sem autorização.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-destructive">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive text-destructive-foreground font-bold">4</span>
                  Não Especificar Quem É o Controlador dos Dados
                </h3>
                <p className="text-muted-foreground">
                  Você não é "o site". Você é a pessoa ou empresa que controla os dados. Se você é um autônomo, seu nome completo e CPF/CNPJ devem aparecer. Se é uma empresa, o nome fantasia, razão social, CNPJ, endereço e e-mail de contato devem estar claros.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-destructive">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive text-destructive-foreground font-bold">5</span>
                  Esquecer de Atualizar
                </h3>
                <p className="text-muted-foreground">
                  Termos de uso não são "cria e esquece". Se você mudou de provedor de e-mail, passou a usar Google Analytics 4, adicionou um chatbot, ou começou a vender produtos com frete internacional, seus termos precisam ser atualizados. A ANPD considera a falta de atualização como "negligência".
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              Como Escrever os Termos: Guia Prático Passo a Passo
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Agora, vamos ao que realmente importa. Aqui está o modelo real que você pode adaptar. Não é um template genérico. É uma estrutura testada, com linguagem humana, alinhada à LGPD e com exemplos práticos.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              Passo 1: Defina o Escopo
            </h3>

            <p className="text-lg leading-relaxed mb-4">
              Antes de escrever uma palavra, responda:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>Qual é o propósito principal do seu site?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>Quais dados você coleta? (nome, e-mail, IP, localização, cartão, histórico?)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>Para que você usa esses dados?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>Você compartilha esses dados com terceiros?</span>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 bg-primary/5">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Blog de Finanças Pessoais
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Coleta:</strong> nome, e-mail, cidade</li>
                  <li><strong>Uso:</strong> newsletter semanal, personalizar artigos, Google Analytics</li>
                  <li><strong>Compartilha:</strong> Google (Analytics/Ads) e Mailchimp</li>
                </ul>
              </Card>

              <Card className="p-6 bg-primary/5">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  E-commerce de Roupas
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Coleta:</strong> nome, endereço, CPF, cartão, histórico</li>
                  <li><strong>Uso:</strong> processar pedido, nota fiscal, promoções</li>
                  <li><strong>Compartilha:</strong> Mercado Pago, Correios, Shopify, Google</li>
                </ul>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              Passo 2: Estrutura Essencial
            </h3>

            <p className="text-lg leading-relaxed mb-6">
              Sua página de Termos de Uso deve ter, no mínimo, estas seções:
            </p>

            <div className="space-y-6 mb-12">
              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  a) Identificação do Responsável (Controlador)
                </h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm italic">
                    "Este site é operado por [Seu Nome Completo ou Razão Social], com CNPJ [número], inscrito no endereço [logradouro, número, bairro, cidade, estado], e pode ser contatado pelo e-mail [seuemail@exemplo.com]."
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  b) Consentimento e Finalidades do Tratamento
                </h4>
                <p className="text-muted-foreground mb-3">
                  Liste cada finalidade de forma clara. Não use "para melhorar sua experiência". Isso é vago.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <ul className="space-y-2 text-sm">
                    <li>✓ "Enviar newsletter semanal com dicas de investimentos"</li>
                    <li>✓ "Processar e entregar seu pedido de forma segura"</li>
                    <li>✓ "Personalizar anúncios no Google baseado em seu histórico"</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  c) Direitos do Titular dos Dados (LGPD Art. 18)
                </h4>
                <p className="text-muted-foreground mb-3">
                  Informe que o usuário tem direito a:
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Confirmar se dados estão sendo tratados</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Acessar seus dados</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Corrigir dados incorretos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Anonimizar ou eliminar dados</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Revogar o consentimento</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Obter cópia dos dados</span>
                  </div>
                </div>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              Exemplo Prático: Blog de Saúde
            </h3>

            <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
              <h4 className="text-xl font-bold mb-6 text-center">Termos de Uso – Saúde em Dia</h4>
              
              <div className="space-y-4 text-sm">
                <p>
                  Este site é operado por Ana Silva, profissional de saúde e educadora digital, CPF 123.456.789-00, residente em São Paulo/SP.
                </p>

                <p>
                  Ao acessar este site, você concorda com o tratamento de seus dados pessoais — nome e e-mail — exclusivamente para:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enviar a newsletter semanal com dicas de alimentação, exercícios e bem-estar</li>
                  <li>Personalizar os conteúdos que você vê, com base em seus interesses</li>
                  <li>Analisar o tráfego do site com o Google Analytics</li>
                </ul>

                <p className="font-semibold">
                  Nós não vendemos seus dados. Não compartilhamos seu e-mail com terceiros para fins de marketing.
                </p>

                <p>
                  Se você quiser ver, corrigir ou apagar seus dados, basta enviar um e-mail para contato@saudeemdia.com.br com o assunto "LGPD". Respondemos em até 15 dias.
                </p>

                <p>
                  Todos os textos, imagens e vídeos deste site são protegidos por direitos autorais. Não autorizamos cópias, mesmo que citadas.
                </p>

                <p className="text-xs text-muted-foreground italic">
                  "Não somos médicos. Este conteúdo é informativo e não substitui orientação profissional."
                </p>
              </div>
            </Card>

            <div className="bg-primary/10 border-2 border-primary p-8 rounded-xl mb-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Crie Sua Política de Privacidade Grátis</h3>
              <p className="text-muted-foreground mb-6">
                Use nosso gerador gratuito para criar uma política de privacidade completa e em conformidade com a LGPD em minutos.
              </p>
              <Button 
                size="lg" 
                onClick={() => navigate('/gerador-politica-privacidade')}
                className="font-semibold"
              >
                Gerar Política Grátis →
              </Button>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
              <Clock className="h-8 w-8 text-primary" />
              Como Manter Isso Atualizado
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Você não precisa ser advogado. Mas precisa ser organizado.
            </p>

            <Card className="p-6 mb-8">
              <h4 className="font-semibold mb-4">Faça isso:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Crie uma planilha com data da última atualização e o que foi alterado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Revise a cada 6 meses (janeiro e julho)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Use ferramentas como Termly.io para gerar termos automaticamente</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Perguntas Frequentes (FAQ)
            </h2>

            <div className="space-y-4 mb-12">
              <Card className="p-6">
                <h4 className="font-semibold mb-2">1. Termos de uso são obrigatórios mesmo para blogs pessoais?</h4>
                <p className="text-muted-foreground">
                  Sim. Mesmo que você não venda nada, se coleta e-mail, IP ou dados de navegação (o que acontece em 99% dos sites), a LGPD se aplica.
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-2">2. Posso usar um termo gerado por IA?</h4>
                <p className="text-muted-foreground">
                  Pode — mas só se você revisar, personalizar e adaptar ao seu site. Termos genéricos de IA são frequentemente incompletos ou incoerentes.
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-2">3. O que acontece se eu não tiver termos de uso?</h4>
                <p className="text-muted-foreground">
                  Você pode ser notificado pela ANPD, multado (até 2% do faturamento, até R$ 50 milhões), processado por danos morais ou ter seu site bloqueado.
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-2">4. Preciso de termos diferentes para cada país?</h4>
                <p className="text-muted-foreground">
                  Se seu site tem visitantes internacionais, sim. Mas para o público brasileiro, a LGPD é suficiente. Se vende para fora, consulte um especialista.
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-2">5. Posso colocar os termos só em PDF?</h4>
                <p className="text-muted-foreground">
                  Não. Precisa estar acessível no site, em formato HTML, com link visível no rodapé. PDFs não são considerados "publicamente acessíveis" pela ANPD.
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-2">6. Termos de uso protegem contra cópias de conteúdo?</h4>
                <p className="text-muted-foreground">
                  Sim. Eles estabelecem que seu conteúdo é protegido por direitos autorais. Mas para ações mais fortes (como processos por plágio), você precisa registrar seu conteúdo no INPI.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
              Conclusão
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Escrever os termos do seu site para evitar processos e garantir segurança jurídica não é um trabalho chato de "colocar no rodapé".
            </p>

            <p className="text-lg leading-relaxed mb-6">
              É um ato de profissionalismo. É um sinal de respeito ao seu público. É uma demonstração de que você valoriza a privacidade das pessoas que confiam em você.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              E, acima de tudo, é a diferença entre dormir tranquilo e acordar com uma notificação de processo.
            </p>

            <Card className="p-8 bg-primary text-primary-foreground mb-12">
              <h3 className="text-2xl font-bold mb-4">Comece Hoje</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Atualize seus termos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Revise sua política de privacidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Adicione o link visível no rodapé</span>
                </li>
              </ul>
              <p className="font-semibold">
                Porque, quando uma notificação chega, o custo não é só financeiro. É o seu sono, sua reputação, seu tempo.
              </p>
            </Card>

            <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-8 rounded-xl text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Links Úteis</h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/gerador-politica-privacidade')}
                  className="w-full"
                >
                  Gerar Política de Privacidade
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/gerador-termos-uso')}
                  className="w-full"
                >
                  Gerar Termos de Uso
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/gerador-politica-cookies')}
                  className="w-full"
                >
                  Gerar Política de Cookies
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/politicas')}
                  className="w-full"
                >
                  Ver Todas as Políticas
                </Button>
              </div>
            </div>
          </div>

          {/* Share and Back */}
          <div className="border-t pt-8 mt-12">
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => navigate('/blog')}>
                ← Voltar ao Blog
              </Button>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Compartilhar:</span>
                <Button variant="ghost" size="sm">Facebook</Button>
                <Button variant="ghost" size="sm">Twitter</Button>
                <Button variant="ghost" size="sm">LinkedIn</Button>
              </div>
            </div>

            <SocialShare title="Como Escrever os Termos do Seu Site para Evitar Processos e Garantir Segurança Jurídica" />

            {/* Autor */}
            <AuthorBio />
          </div>
        </article>

        <BlogSidebar />
      </div>
    </div>
      
    <Footer />
    </div>
  );
}
