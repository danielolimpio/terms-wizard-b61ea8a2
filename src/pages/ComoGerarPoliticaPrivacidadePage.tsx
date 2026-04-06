import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ComoGerarPoliticaPrivacidadePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Como Gerar Política de Privacidade Grátis | Passo a Passo Completo 2026</title>
        <meta 
          name="description" 
          content="✅ Aprenda como criar política de privacidade profissional grátis em 3 passos. Guia completo com tutorial passo a passo conforme LGPD e GDPR. Sem cadastro, gere agora!" 
        />
        <meta name="keywords" content="como gerar política de privacidade, criar política privacidade grátis, tutorial política privacidade, guia LGPD, passo a passo política de privacidade" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://politicadeprivacidade.org/como-gerar-politica-de-privacidade" />
      </Helmet>
      <Header />
      
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Como Gerar <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Política de Privacidade</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Aprenda passo a passo como criar uma política de privacidade profissional e completa para seu site
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Passo 1: Escolha o Gerador de Política de Privacidade
              </h2>
              <p className="text-muted-foreground mb-4">
                Acesse nosso gerador gratuito de política de privacidade. Não é necessário cadastro ou pagamento. 
                Nossa ferramenta é 100% gratuita e ilimitada.
              </p>
              <div className="flex items-start gap-3 bg-primary/10 rounded-lg p-4">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground text-sm">
                  <strong>Dica:</strong> Separe as informações do seu site antes de começar (nome da empresa, 
                  URL, email de contato, tipos de dados que você coleta).
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Passo 2: Preencha as Informações do Seu Site
              </h2>
              <p className="text-muted-foreground mb-4">
                Responda às perguntas simples sobre seu site. O formulário inclui:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Nome do site ou empresa</li>
                <li>URL do site (endereço completo)</li>
                <li>Email de contato para questões de privacidade</li>
                <li>Tipo de site (blog, e-commerce, aplicativo, etc.)</li>
                <li>Dados pessoais coletados (nome, email, endereço, etc.)</li>
                <li>Uso de cookies e ferramentas de analytics</li>
                <li>Integrações com terceiros (Google, Facebook, etc.)</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Passo 3: Gere e Baixe Sua Política
              </h2>
              <p className="text-muted-foreground mb-4">
                Clique em "Gerar Política" e pronto! Em segundos, sua política de privacidade estará pronta. 
                Você pode:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Copiar o texto</strong> com um clique e colar no seu site</li>
                <li><strong>Baixar em PDF</strong> para impressão ou arquivamento</li>
                <li><strong>Baixar em DOC</strong> para editar no Word ou Google Docs</li>
                <li><strong>Baixar em TXT</strong> para uso em plataformas simples</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Passo 4: Publique no Seu Site
              </h2>
              <p className="text-muted-foreground mb-4">
                Após gerar sua política, crie uma página específica no seu site (geralmente /politica-de-privacidade) 
                e adicione o conteúdo gerado. Certifique-se de:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Incluir um link para a política no rodapé do site</li>
                <li>Adicionar referência à política nos formulários de cadastro</li>
                <li>Manter a política sempre atualizada</li>
                <li>Incluir a data de última atualização</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-secondary rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Perguntas Frequentes
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Quanto tempo leva para gerar a política?
                  </h3>
                  <p className="text-muted-foreground">
                    Menos de 2 minutos! O processo é totalmente automatizado e instantâneo.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    A política gerada é válida juridicamente?
                  </h3>
                  <p className="text-muted-foreground">
                    Sim, nossos modelos são baseados na LGPD e GDPR. No entanto, sempre recomendamos consultar 
                    um advogado para adaptações específicas.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Preciso atualizar a política periodicamente?
                  </h3>
                  <p className="text-muted-foreground">
                    Sim, sempre que houver mudanças nas práticas de coleta de dados do seu site, você deve 
                    atualizar a política e informar os usuários.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Posso usar para e-commerce?
                  </h3>
                  <p className="text-muted-foreground">
                    Sim! Nossa política contempla lojas virtuais, incluindo coleta de dados de pagamento e envio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-card border border-border rounded-xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pronto para criar sua política de privacidade?
            </h2>
            <p className="text-muted-foreground mb-6">
              Gere gratuitamente sua política de privacidade profissional em menos de 2 minutos
            </p>
            <Button 
              size="lg" 
              className="text-base px-8"
              onClick={() => window.location.href = '/gerador-politica-privacidade'}
            >
              Gerar Política de Privacidade Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ✓ Sem cadastro ✓ 100% gratuito ✓ Pronto em 2 minutos
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComoGerarPoliticaPrivacidadePage;