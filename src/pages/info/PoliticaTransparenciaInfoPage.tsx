import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, FileText, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const PoliticaTransparenciaInfoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            O que é Política de Transparência?
          </h1>
          <p className="text-xl text-muted-foreground">
            Entenda como demonstrar clareza e abertura em suas práticas empresariais
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Eye className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que é Política de Transparência?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A <strong>Política de Transparência</strong> é um documento que demonstra o compromisso da sua 
                empresa com a abertura e clareza em suas operações, processos e tomadas de decisão. Ela comunica 
                aos stakeholders como a organização opera e como trata questões importantes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Este documento vai além das obrigações legais básicas, mostrando proativamente como a empresa 
                se compromete com práticas éticas, responsáveis e abertas ao escrutínio público.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Para que Serve?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">🤝 Construção de Confiança</h3>
                  <p className="text-sm text-muted-foreground">
                    Demonstra honestidade e abertura, criando um relacionamento de confiança com clientes, 
                    parceiros e investidores.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">🎯 Diferencial Competitivo</h3>
                  <p className="text-sm text-muted-foreground">
                    Empresas transparentes se destacam no mercado e atraem consumidores conscientes.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">📊 Prestação de Contas</h3>
                  <p className="text-sm text-muted-foreground">
                    Estabelece responsabilidade pelos impactos sociais, ambientais e econômicos das operações.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">🛡️ Proteção da Reputação</h3>
                  <p className="text-sm text-muted-foreground">
                    Previne crises ao demonstrar compromisso com práticas éticas antes de problemas surgirem.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Quem Deve Ter?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A Política de Transparência é especialmente importante para:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🏢 Empresas Públicas</h4>
                  <p className="text-sm text-muted-foreground">
                    Organizações com ações na bolsa que devem prestar contas a acionistas
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🏦 Instituições Financeiras</h4>
                  <p className="text-sm text-muted-foreground">
                    Bancos, fintechs e empresas que lidam com recursos de terceiros
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🌍 ONGs e Sem Fins Lucrativos</h4>
                  <p className="text-sm text-muted-foreground">
                    Organizações que dependem de doações e devem mostrar uso de recursos
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🏭 Indústrias com Impacto Ambiental</h4>
                  <p className="text-sm text-muted-foreground">
                    Empresas que precisam demonstrar práticas sustentáveis
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💻 Plataformas Digitais</h4>
                  <p className="text-sm text-muted-foreground">
                    Redes sociais e serviços que gerenciam dados de milhões de usuários
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🏗️ Empresas de Grande Porte</h4>
                  <p className="text-sm text-muted-foreground">
                    Corporações com impacto significativo na sociedade
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">O que Deve Conter?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Governança corporativa:</strong> Estrutura de gestão, conselho e tomada de decisões
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Práticas financeiras:</strong> Como recursos são geridos e investidos
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Responsabilidade social:</strong> Impactos na comunidade e iniciativas sociais
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Impacto ambiental:</strong> Pegada de carbono, práticas sustentáveis e metas ambientais
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Ética empresarial:</strong> Código de conduta e valores organizacionais
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Tratamento de dados:</strong> Como informações de usuários são coletadas e usadas
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Relatórios e auditorias:</strong> Frequência e forma de divulgação de informações
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Canal de denúncias:</strong> Como reportar irregularidades e violações éticas
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <div>
                    <strong>Compromissos públicos:</strong> Metas de diversidade, inclusão e responsabilidade
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Benefícios da Transparência</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <p className="text-muted-foreground">
                    <strong>Maior confiança dos consumidores:</strong> 94% dos consumidores são mais leais a marcas transparentes
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <p className="text-muted-foreground">
                    <strong>Atração de investimentos:</strong> Investidores preferem empresas com práticas claras e éticas
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <p className="text-muted-foreground">
                    <strong>Melhor reputação de marca:</strong> Transparência aumenta a percepção positiva do público
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <p className="text-muted-foreground">
                    <strong>Conformidade regulatória:</strong> Facilita atendimento a exigências legais e normativas
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <p className="text-muted-foreground">
                    <strong>Cultura organizacional forte:</strong> Funcionários valorizam empresas transparentes e éticas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Crie sua Política de Transparência
            </h2>
            <p className="text-white/90 mb-6">
              Demonstre compromisso com práticas éticas e abertas
            </p>
            <Link to="/gerador-politica-transparencia">
              <Button variant="secondary" size="lg">
                Gerar Política de Transparência
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaTransparenciaInfoPage;
