import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";

const NossosTermosPage = () => {
  const breadcrumbItems = [
    { name: "O que são Termos de Uso?", url: "/nossos-termos" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>O que são Termos de Uso? | Guia Completo 2025</title>
        <meta name="description" content="Entenda o que são Termos de Uso, para que servem, quando são obrigatórios e o que deve conter. Guia completo para proteger seu negócio digital." />
        <meta name="keywords" content="termos de uso, termos de serviço, termos e condições, contrato digital, proteção legal" />
        <link rel="canonical" href="https://politicadeprivacidade.org/nossos-termos" />
      </Helmet>
      <StructuredData type="breadcrumb" items={breadcrumbItems} />
      <StructuredData type="faq" questions={[
        { question: "O que são Termos de Uso?", answer: "Termos de Uso é um contrato digital que define as regras, direitos e responsabilidades entre o site/app e seus usuários." },
        { question: "Termos de Uso são obrigatórios?", answer: "Embora não sejam obrigatórios por lei em todos os casos, são essenciais para proteger juridicamente o proprietário do site e definir limites de responsabilidade." },
        { question: "Qual a diferença entre Termos de Uso e Política de Privacidade?", answer: "Os Termos de Uso regulam as regras de uso do site. A Política de Privacidade trata especificamente da coleta e tratamento de dados pessoais." },
        { question: "O que deve conter nos Termos de Uso?", answer: "Deve conter regras de uso, propriedade intelectual, limitação de responsabilidade, condições de cancelamento, legislação aplicável e foro competente." }
      ]} />
      
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            O que são Termos de Uso?
          </h1>
          <p className="text-xl text-muted-foreground">
            Entenda a importância dos Termos de Uso para proteger seu negócio digital
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que são Termos de Uso?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Os <strong>Termos de Uso</strong> (também chamados de Termos de Serviço ou Termos e Condições) 
                são um contrato legal entre você e seus usuários que estabelece as regras, direitos e 
                responsabilidades de cada parte ao usar seu site ou aplicativo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Eles definem como seu serviço pode ser usado, o que é permitido e proibido, limitações de 
                responsabilidade, propriedade intelectual e como resolver disputas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Scale className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Para que Servem?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">🛡️ Proteção Legal</h3>
                  <p className="text-sm text-muted-foreground">
                    Protegem sua empresa contra processos judiciais e estabelecem limitações de responsabilidade 
                    sobre o uso do serviço.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">📋 Regras Claras</h3>
                  <p className="text-sm text-muted-foreground">
                    Definem comportamentos aceitáveis e proibidos, evitando conflitos e mal-entendidos 
                    com usuários.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">⚖️ Resolução de Disputas</h3>
                  <p className="text-sm text-muted-foreground">
                    Estabelecem como disputas serão resolvidas, incluindo jurisdição e métodos de mediação 
                    ou arbitragem.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">🔒 Propriedade Intelectual</h3>
                  <p className="text-sm text-muted-foreground">
                    Protegem seus direitos autorais, marcas registradas e conteúdo proprietário contra 
                    uso não autorizado.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Quando são Obrigatórios?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Os Termos de Uso são especialmente importantes e muitas vezes obrigatórios em:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✓ Plataformas de E-commerce</h4>
                  <p className="text-sm text-muted-foreground">
                    Vendas online, transações financeiras e relacionamento com clientes
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✓ Redes Sociais e Comunidades</h4>
                  <p className="text-sm text-muted-foreground">
                    Plataformas com conteúdo gerado por usuários e interações sociais
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✓ Serviços SaaS</h4>
                  <p className="text-sm text-muted-foreground">
                    Software como serviço e assinaturas recorrentes
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✓ Marketplaces</h4>
                  <p className="text-sm text-muted-foreground">
                    Plataformas que conectam compradores e vendedores
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✓ Aplicativos Mobile</h4>
                  <p className="text-sm text-muted-foreground">
                    Apps nas lojas Google Play e App Store exigem termos claros
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✓ Sites com Cadastro</h4>
                  <p className="text-sm text-muted-foreground">
                    Qualquer site que cria contas de usuário
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que Deve Conter?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Descrição do serviço:</strong> O que é oferecido e suas funcionalidades
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Elegibilidade:</strong> Quem pode usar (idade mínima, restrições geográficas)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Regras de uso:</strong> Comportamentos permitidos e proibidos
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Propriedade intelectual:</strong> Direitos sobre conteúdo e marcas
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Limitação de responsabilidade:</strong> Até onde sua empresa é responsável
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Cancelamento e suspensão:</strong> Condições para encerrar contas
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Modificações:</strong> Como e quando os termos podem ser alterados
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Lei aplicável e jurisdição:</strong> Qual legislação rege o acordo
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Diferença entre Termos de Uso e Política de Privacidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-primary/20 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3">Termos de Uso</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Regulam o USO do serviço</li>
                    <li>• Definem regras e responsabilidades</li>
                    <li>• Protegem a empresa legalmente</li>
                    <li>• Estabelecem direitos e obrigações</li>
                  </ul>
                </div>
                <div className="border-2 border-primary/20 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3">Política de Privacidade</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Regulam o tratamento de DADOS</li>
                    <li>• Explicam coleta e uso de informações</li>
                    <li>• Garantem conformidade com LGPD/GDPR</li>
                    <li>• Protegem a privacidade do usuário</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Crie seus Termos de Uso Agora
            </h2>
            <p className="text-white/90 mb-6">
              Proteja seu negócio com termos profissionais e completos
            </p>
            <Link to="/gerador-termos-uso">
              <Button variant="secondary" size="lg">
                Gerar Termos de Uso
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NossosTermosPage;
