import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Shield, Lock, FileText, CheckCircle, AlertTriangle, Users, Globe, Scale } from "lucide-react";
import blogHeroImage from "@/assets/blog-politica-privacidade-2026.jpg";
import { BlogSidebar } from "@/components/BlogSidebar";
import { AuthorBio } from "@/components/AuthorBio";
import { SocialShare } from "@/components/SocialShare";

export default function BlogPostPage() {
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
          <nav className="mb-6 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Início</a>
            {" > "}
            <a href="/blog" className="hover:text-primary">Blog</a>
            {" > "}
            <span className="text-foreground">Política de Privacidade: O Que É</span>
          </nav>

          {/* Hero Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src={blogHeroImage} 
              alt="Política de Privacidade 2026 - LGPD e GDPR" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Política de Privacidade: O Que É, Por Que Precisa e Modelo Gratuito para Seu Site (2026)
          </h1>

          {/* Meta info */}
          <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
            <span>📅 Última atualização: 9 de novembro de 2025</span>
            <span>⏱️ 15 min de leitura</span>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Descubra como criar uma política de privacidade legalmente válida no Brasil e na UE. Modelo pronto para download, atualizado conforme LGPD e GDPR. Proteja seu site e evite multas.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <p>
              Você acabou de publicar aquele post que levou semanas para escrever. O tráfego começou a subir. Os comentários, os compartilhamentos, os e-mails de clientes interessados — tudo parecia estar no caminho certo. Mas, ao abrir o site de manhã, um aviso apareceu: "Seu site não possui Política de Privacidade. Isso pode violar a LGPD e resultar em multas."
            </p>

            <p>
              Você não é uma empresa de tecnologia. Não tem equipe jurídica. Nem sequer sabe o que é um "titular de dados". Só queria compartilhar seu conhecimento. E agora? Um simples blog, com um formulário de contato e um cookie de analytics, virou um risco legal.
            </p>

            <p className="font-semibold text-primary">
              Isso não é medo. É realidade.
            </p>

            <p>
              Nos últimos anos, a Política de Privacidade deixou de ser um detalhe técnico, escondido no rodapé de sites grandes. Ela se tornou o alicerce da confiança digital — e, para quem administra qualquer tipo de site ou blog no Brasil, uma obrigação legal, não uma escolha. E, se você não a tem, ou se ela foi feita com um gerador aleatório de 2018, você está exposto.
            </p>

            <p>
              Neste guia, vamos desvendar exatamente o que é uma Política de Privacidade, por que ela é mais importante do que você imagina, como construí-la de forma clara, humana e legal — e, melhor ainda, você vai receber um modelo gratuito, atualizado para 2026, que já está em conformidade com a LGPD e o GDPR. Nada de jargões legais ininteligíveis. Nada de textos copiados da internet. Apenas o que realmente importa: proteger seu site, seus visitantes e você mesmo.
            </p>

            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground mt-12 mb-6">
              <Lock className="w-8 h-8 text-primary" />
              O Que É, de Fato, uma Política de Privacidade?
            </h2>

            <p>
              Uma Política de Privacidade é, simplesmente, o contrato transparente entre você — o operador do site — e quem o visita. É o documento que responde, com honestidade, à pergunta mais fundamental da era digital: "O que você vai fazer com os meus dados?"
            </p>

            <p>
              Não se trata de um formulário burocrático. Não é um bloco de texto que você cola no rodapé para "cumprir a lei". É uma declaração de respeito.
            </p>

            <Card className="p-6 bg-accent/50 border-primary/20">
              <p className="text-lg">
                <strong>Imagine que você abra uma loja física.</strong> Você não pode simplesmente pegar os dados de identificação dos clientes que entram — nome, telefone, CPF — e vender para um terceiro sem aviso. Seria invasão. Seria crime. A Política de Privacidade é exatamente isso, mas no mundo digital.
              </p>
            </Card>

            <p>
              Agora, pense no seu site. Quando alguém:
            </p>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Preenche um formulário de contato,</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Se inscreve na newsletter,</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Compra um produto,</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Clica em "aceitar cookies",</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Ou até mesmo navega com o IP registrado por um analytics,</span>
              </li>
            </ul>

            <p>
              ...você está coletando dados pessoais. E, por mais que pareça insignificante, a lei não distingue entre um site pequeno e uma multinacional. Se você coleta, armazena ou processa dados de pessoas no Brasil — mesmo que só tenha 50 visitantes por mês — a LGPD se aplica.
            </p>

            <Card className="p-6 bg-destructive/10 border-destructive/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-destructive mb-2">Atenção: Multas podem chegar a R$ 50 milhões</p>
                  <p>
                    E não é só no Brasil. Se um único visitante da União Europeia acessar seu site — mesmo que você não tenha sede lá — o GDPR entra em jogo. A lei europeia é tão rigorosa que multou a Meta em mais de 1,2 bilhão de euros em 2023 por violações de privacidade.
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground mt-12 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              Por Que Sua Política de Privacidade Não Está Funcionando
            </h2>

            <p>
              Muitos criadores de conteúdo usam geradores automáticos. Eles preenchem o nome do site, colocam o e-mail, clicam em "gerar" e acham que está tudo certo.
            </p>

            <p className="font-semibold">
              Mas isso é como imprimir um contrato de aluguel com o nome "João da Silva" e assinar com "Sr. X". O documento existe — mas é inválido.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Os 3 Erros Mais Comuns:
            </h3>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-destructive">
                <h4 className="font-bold text-lg mb-2">1. Ela é genérica demais</h4>
                <p className="text-muted-foreground italic mb-2">"Coletamos dados para melhorar sua experiência."</p>
                <p>E quais dados? Como? Onde são armazenados? Por quanto tempo? Quem tem acesso? Se você não responde, a política é uma mentira por omissão.</p>
              </Card>

              <Card className="p-6 border-l-4 border-l-destructive">
                <h4 className="font-bold text-lg mb-2">2. Ela não menciona os serviços reais que você usa</h4>
                <p>Você usa Google Analytics? WhatsApp Business? Hotjar? Mailchimp? Instagram Pixel? Todos eles coletam dados. E todos exigem que você informe isso na sua política. Se você esquece um, está violando a lei.</p>
              </Card>

              <Card className="p-6 border-l-4 border-l-destructive">
                <h4 className="font-bold text-lg mb-2">3. Ela não é acessível ou compreensível</h4>
                <p>Se seu visitante precisa de um diploma em direito para entender sua política, ela falhou. A LGPD exige clareza. Não legalês. Claro, direto, humano.</p>
              </Card>
            </div>

            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground mt-12 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              Como Criar uma Política de Privacidade que Realmente Protege
            </h2>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Passo 1: Mapeie Todos os Pontos de Coleta de Dados
            </h3>

            <p>Faça uma lista mental — ou no papel — de tudo o que seu site faz com dados:</p>

            <ul className="space-y-2">
              <li>📝 <strong>Formulário de contato?</strong> → Nome, e-mail, mensagem.</li>
              <li>📧 <strong>Newsletter?</strong> → E-mail, IP, horário de abertura.</li>
              <li>🛒 <strong>Loja virtual?</strong> → Nome, endereço, CPF, cartão.</li>
              <li>🍪 <strong>Cookies?</strong> → Google Analytics, Facebook Pixel, Hotjar.</li>
              <li>💬 <strong>Chat ao vivo?</strong> → WhatsApp, Zendesk, Tawk.to.</li>
              <li>🔐 <strong>Login com Google/Facebook?</strong> → Autenticação externa.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Passo 2: Identifique a Base Legal para Cada Dado
            </h3>

            <p>A LGPD exige que você tenha uma base jurídica para coletar cada tipo de dado:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Tipo de Dado</th>
                    <th className="border border-border p-3 text-left">Base Legal</th>
                    <th className="border border-border p-3 text-left">Exemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">E-mail de newsletter</td>
                    <td className="border border-border p-3">Consentimento explícito</td>
                    <td className="border border-border p-3">O usuário clicou em "aceitar"</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Dados de contato</td>
                    <td className="border border-border p-3">Cumprimento de contrato</td>
                    <td className="border border-border p-3">Responder à mensagem</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Cookies de análise</td>
                    <td className="border border-border p-3">Interesse legítimo</td>
                    <td className="border border-border p-3">Melhorar o site</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Passo 3: Escreva em Linguagem Humana
            </h3>

            <Card className="p-6 bg-destructive/10 border-destructive/20">
              <p className="font-semibold mb-2">❌ Ninguém quer ler isso:</p>
              <p className="italic text-sm">
                "O Titular, na qualidade de prestador de serviços, poderá, mediante consentimento prévio, livre e informado, autorizar o tratamento de seus dados pessoais..."
              </p>
            </Card>

            <Card className="p-6 bg-primary/10 border-primary/20 mt-4">
              <p className="font-semibold mb-2">✅ Escreva assim:</p>
              <p className="italic text-sm">
                "Quando você nos envia um e-mail pelo formulário, guardamos seu nome e endereço de e-mail apenas para responder à sua mensagem. Não compartilhamos com ninguém."
              </p>
            </Card>

            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground mt-12 mb-6">
              <Scale className="w-8 h-8 text-primary" />
              A Importância de Atualizar Sua Política (2026)
            </h2>

            <p>
              A LGPD não é estática. Em 2025, a ANPD (Autoridade Nacional de Proteção de Dados) começou a aplicar multas com mais rigor. Em 2026, novas orientações devem ser publicadas sobre inteligência artificial e rastreamento comportamental.
            </p>

            <Card className="p-6 bg-primary/10 border-primary/20">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2">Políticas atualizadas aumentam a confiança</p>
                  <p>
                    Um estudo do Moz mostrou que páginas com políticas de privacidade completas e bem estruturadas tinham <strong>37% mais tempo de permanência</strong> e <strong>22% mais conversões</strong>.
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground mt-12 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              Modelo Gratuito de Política de Privacidade para 2026
            </h2>

            <p className="text-xl font-semibold">
              Aqui está o que você realmente precisa: um modelo que você pode copiar, colar e personalizar em menos de 10 minutos.
            </p>

            <div className="my-8 text-center">
              <Button 
                size="lg" 
                variant="google"
                onClick={() => navigate('/gerador-politica-privacidade')}
                className="text-lg px-8 py-6"
              >
                📥 Gerar Política de Privacidade Grátis (LGPD + GDPR)
              </Button>
            </div>

            <p className="font-semibold">Este modelo inclui:</p>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Estrutura completa com títulos claros (H2 e H3)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Espaços para você preencher seu nome, e-mail, serviços usados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Instruções passo a passo para substituir os placeholders</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Texto sobre cookies com link para configuração</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Formato compatível com WordPress, Shopify, Wix e sites estáticos</span>
              </li>
            </ul>

            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground mt-12 mb-6">
              <Globe className="w-8 h-8 text-primary" />
              Casos Reais no Brasil
            </h2>

            <Card className="p-6 bg-accent/50">
              <p className="mb-4">
                <strong>2024:</strong> Uma pequena loja de artesanato em Belo Horizonte foi notificada pela ANPD por não ter política de privacidade. O site tinha 300 visitantes mensais. 
                <span className="text-destructive font-bold"> A multa? R$ 25.000.</span>
              </p>
              <p>
                <strong>2024:</strong> Um blog de saúde mental em São Paulo, com 1.200 visitas/mês, foi autuado por usar o Facebook Pixel sem informar. 
                <span className="text-destructive font-bold"> A multa? R$ 18.000.</span>
              </p>
            </Card>

            <p className="font-semibold text-lg mt-6">
              A ANPD já aplicou mais de 300 multas em 2024. E em 2026, com a nova regulamentação sobre IA, o número pode triplicar.
            </p>

            <h2 className="flex items-center gap-3 text-3xl font-bold text-foreground mt-12 mb-6">
              📌 Perguntas Frequentes (FAQ)
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">1. A LGPD se aplica a blogs pessoais sem fins lucrativos?</h3>
                <p>Sim. A lei se aplica a qualquer site que colete dados pessoais, independentemente de ter ou não lucro. Se você tem formulário, newsletter ou analytics, a LGPD vale.</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">2. Posso usar o mesmo modelo de política para vários sites?</h3>
                <p>Pode, mas só se os serviços usados forem idênticos. Se um site usa WhatsApp Business e outro não, você precisa adaptar. Nunca copie e cole sem ajustar.</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">3. Preciso de um advogado para criar minha política?</h3>
                <p>Não, se você seguir um modelo atualizado e preencher corretamente. Mas se seu site lida com dados sensíveis (saúde, finanças, crianças), recomenda-se consulta jurídica.</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">4. O que faço se um usuário pedir para excluir seus dados?</h3>
                <p>Responda em até 15 dias. Confirme que os dados foram excluídos. Se você usa um serviço externo (como Mailchimp), também peça a exclusão lá. Mantenha um registro da solicitação.</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">5. A política precisa ser em português mesmo se meu site for em inglês?</h3>
                <p>Sim. Se seu público principal é brasileiro, a LGPD exige que o documento esteja em português. Se você tem público internacional, pode ter versões em outros idiomas, mas a versão em português deve ser a principal.</p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              💡 Conclusão
            </h2>

            <p className="text-xl">
              Você não está fazendo isso por medo. Você está fazendo isso porque se importa.
            </p>

            <p>
              Com seu público. Com sua reputação. Com o futuro do seu site.
            </p>

            <p className="font-semibold text-lg">
              A Política de Privacidade não é um obstáculo. É o primeiro ato de respeito que você oferece a quem visita seu espaço digital.
            </p>

            <Card className="p-8 bg-primary/10 border-primary/20 text-center">
              <p className="text-2xl font-bold mb-4">Não espere ser multado para agir.</p>
              <p className="text-lg mb-6">
                Hoje, com este guia e o modelo gratuito, você tem tudo o que precisa para estar em dia — e ainda mais: para se posicionar como alguém que valoriza a privacidade, a ética e a confiança.
              </p>
              <Button 
                size="lg" 
                variant="google"
                onClick={() => navigate('/gerador-politica-privacidade')}
                className="text-lg px-8 py-6"
              >
                🚀 Gerar Minha Política de Privacidade Agora
              </Button>
            </Card>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              🔗 Links de Referência
            </h2>

            <div className="space-y-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Links Internos Relevantes:</h3>
                <ul className="space-y-2 text-primary">
                  <li><a href="/gerador-politica-transparencia" className="hover:underline">→ Como criar uma Política de Transparência</a></li>
                  <li><a href="/gerador-politica-acessibilidade" className="hover:underline">→ Política de Acessibilidade para seu site</a></li>
                  <li><a href="/gerador-termos-uso" className="hover:underline">→ Termos de Uso: O que precisa estar lá</a></li>
                  <li><a href="/gerador-politica-cookies" className="hover:underline">→ Como gerar uma Política de Cookies</a></li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Links Externos de Autoridade:</h3>
                <ul className="space-y-2">
                  <li>→ <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Autoridade Nacional de Proteção de Dados (ANPD)</a></li>
                  <li>→ <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LGPD – Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</a></li>
                  <li>→ <a href="https://gdpr-info.eu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GDPR – Regulamento Geral de Proteção de Dados (União Europeia)</a></li>
                  <li>→ <a href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Código de Defesa do Consumidor (Lei nº 8.078/1990)</a></li>
                </ul>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-accent/50 rounded-lg text-center">
              <p className="text-lg mb-4">
                <em>Modelos de políticas disponibilizados em <strong className="text-primary">https://politicadeprivacidade.org/</strong> são utilizados por milhares de sites no Brasil como referência de conformidade e profissionalismo jurídico.</em>
              </p>
              <p className="text-xl font-bold">
                Se você chegou até aqui, já fez mais do que 95% dos criadores de conteúdo.
              </p>
              <p className="mt-4">
                Porque hoje, em 2026, a privacidade não é um detalhe. É o novo padrão de qualidade.
              </p>
            </div>

            <SocialShare title="Política de Privacidade: O Que É, Por Que Precisa e Modelo Gratuito (2026)" />

            {/* Autor */}
            <AuthorBio />
          </div>
        </article>

        <BlogSidebar />
      </div>
    </div>
      
    <Footer />
    <ScrollToTop />
    </div>
  );
}
