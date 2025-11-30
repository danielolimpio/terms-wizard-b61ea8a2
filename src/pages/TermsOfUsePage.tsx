import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FileText, Scale, Shield, AlertTriangle, Users, Lock, Cookie, Copyright } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <Scale className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Termos de Uso
            </h1>
            <p className="text-xl text-muted-foreground">
              Condições e regras para uso do Gerador de Políticas
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-6">
                    <strong>Última atualização:</strong> 7 de novembro de 2025
                  </p>

                  <p className="text-base text-foreground leading-relaxed mb-6">
                    Bem-vindo(a) ao nosso site. Estes Termos de Uso ("Termos") regem o acesso e utilização do serviço online disponibilizado em{" "}
                    <a href="https://politicadeprivacidade.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                      https://politicadeprivacidade.org/
                    </a>{" "}
                    (doravante denominado "Site"). Ao acessar, navegar ou utilizar qualquer funcionalidade deste Site, você declara que leu, entendeu e concorda integralmente com todos os termos, condições e obrigações descritos abaixo.
                  </p>

                  <p className="text-base text-foreground leading-relaxed">
                    Este documento é um contrato legal entre você e o proprietário do Site. Caso não concorde com qualquer parte destes Termos, recomendamos que interrompa imediatamente o uso do Site e não retorne até que sua decisão seja reconsiderada.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">1. ACEITAÇÃO DOS TERMOS DE USO</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    O simples acesso a este Site já constitui aceitação plena e irrestrita destes Termos de Uso, bem como das demais políticas aqui referenciadas, incluindo a Política de Privacidade e a Política de Cookies. Recomendamos que você leia este documento com atenção antes de continuar navegando, pois ele define seus direitos e deveres como usuário.
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    Ao utilizar nossos serviços, você afirma ser maior de 18 anos, possuir capacidade legal para celebrar contratos e estar ciente das implicações legais decorrentes do uso do Site.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">2. ALTERAÇÕES NESTE DOCUMENTO</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Nos reservamos o direito de modificar, atualizar ou substituir estes Termos de Uso a qualquer momento, conforme necessário, seja por mudanças na legislação, nas funcionalidades do Site ou nas práticas de segurança e privacidade.
                  </p>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Quando houver alterações significativas — especialmente aquelas que afetem diretamente seus direitos como usuário — faremos esforços razoáveis para notificá-lo com antecedência mínima de 30 dias, por meio de aviso destacado no Site ou por e-mail, caso você tenha se cadastrado.
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    O uso contínuo do Site após a publicação da nova versão dos Termos será considerado como aceitação tácita das modificações.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">3. USO PERMITIDO DO SITE</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">Você está autorizado a usar este Site para os seguintes fins:</p>
                  <ul className="list-disc list-inside space-y-3 ml-4 text-base text-foreground leading-relaxed">
                    <li>Navegar livremente pelas páginas públicas;</li>
                    <li>Ler, baixar ou compartilhar conteúdos para uso pessoal e não comercial;</li>
                    <li>Interagir com ferramentas, formulários ou recursos disponíveis;</li>
                    <li>Entrar em contato conosco por meio dos canais oficiais fornecidos.</li>
                  </ul>
                  <p className="text-base text-foreground leading-relaxed mt-4">Todos os direitos não expressamente concedidos neste documento são reservados.</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">4. USO PROIBIDO E RESTRIÇÕES</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Você se compromete a não utilizar o Site de forma que viole qualquer lei federal, estadual, municipal ou internacional aplicável. É expressamente proibido:
                  </p>
                  <ul className="list-disc list-inside space-y-3 ml-4 text-base text-foreground leading-relaxed">
                    <li>Utilizar o Site para atividades ilegais, fraudulentas, enganosas ou maliciosas;</li>
                    <li>Publicar, transmitir ou distribuir conteúdos difamatórios, ofensivos, obscenos, ameaçadores ou que incitem violência ou discriminação;</li>
                    <li>Realizar tentativas de acesso não autorizado a sistemas, servidores, bancos de dados ou áreas restritas do Site;</li>
                    <li>Empregar bots, spiders, scrapers ou quaisquer ferramentas automatizadas para coletar dados sem permissão;</li>
                    <li>Interferir, interromper ou sobrecarregar o funcionamento técnico do Site;</li>
                    <li>Copiar, reproduzir, revender ou explorar qualquer parte do Site para fins comerciais sem autorização prévia;</li>
                    <li>Coletar ou armazenar dados pessoais de outros usuários sem consentimento;</li>
                    <li>Fazer uso indevido da marca, logotipo ou identidade visual do Site.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Copyright className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">5. PROPRIEDADE INTELECTUAL</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Todo o conteúdo presente neste Site — incluindo textos, artigos, vídeos, imagens, gráficos, logotipos, marcas registradas, códigos-fonte, designs e compilações de dados — é de propriedade exclusiva do proprietário do Site ou de seus parceiros e licenciadores.
                  </p>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Esse conteúdo encontra-se protegido pelas leis brasileiras de direitos autorais (Lei nº 9.610/1998) e propriedade industrial (Lei nº 9.279/1996), bem como por tratados internacionais.
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    Você recebe uma licença limitada, não exclusiva, intransferível e revogável para acessar e utilizar o conteúdo exclusivamente para fins pessoais, educacionais ou informativos. Qualquer outro uso — incluindo reprodução, modificação, distribuição ou venda — é estritamente proibido sem autorização por escrito.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">6. LIMITAÇÃO DE RESPONSABILIDADE</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    O conteúdo disponibilizado neste Site tem natureza meramente informativa, educacional ou ilustrativa. Ele não constitui, sob qualquer hipótese, aconselhamento jurídico, financeiro, médico, técnico ou profissional de qualquer tipo.
                  </p>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Não garantimos que as informações sejam sempre precisas, completas, atualizadas ou livres de erros. O uso das informações aqui contidas é de inteira responsabilidade do usuário.
                  </p>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Em nenhuma circunstância o proprietário do Site será responsabilizado por danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso ou incapacidade de uso do Site, mesmo que tenhamos sido informados da possibilidade de tais danos.
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    Isso inclui, mas não se limita a: perda de lucros, dados, reputação, oportunidades comerciais ou interrupção de negócios.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">7. LINKS PARA SITES DE TERCEIROS</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Este Site pode conter links para plataformas externas, redes sociais, serviços de pagamento, anunciantes ou parceiros afiliados. Esses links são fornecidos apenas como conveniência aos usuários.
                  </p>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Não temos controle sobre o conteúdo, as políticas de privacidade, a segurança ou as práticas desses sites e, portanto, não assumimos qualquer responsabilidade por eles.
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    A inclusão de um link não implica endosso, patrocínio ou recomendação formal. Recomendamos que você revise os termos e políticas de cada site visitado antes de fornecer dados ou realizar transações.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Cookie className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">8. COOKIES E TECNOLOGIAS DE RASTREAMENTO</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Utilizamos cookies, pixels, tags e outras tecnologias de rastreamento para melhorar sua experiência de navegação, analisar padrões de tráfego, personalizar conteúdos e exibir anúncios relevantes.
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    Ao continuar navegando, você concorda com o uso dessas tecnologias. Para saber mais sobre como elas funcionam e como gerenciá-las, consulte nossa{" "}
                    <a href="/politica-cookies" className="text-primary hover:underline">
                      Política de Cookies
                    </a>
                    .
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Lock className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">9. TRATAMENTO DE DADOS PESSOAIS</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Eventuais dados pessoais coletados (como nome, e-mail, IP, navegador) são tratados com base nos princípios da legalidade, necessidade e transparência, conforme previsto na <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    Para mais detalhes sobre como seus dados são coletados, usados, armazenados e protegidos, consulte nossa{" "}
                    <a href="/politica-privacidade" className="text-primary hover:underline">
                      Política de Privacidade
                    </a>
                    .
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">10. RESTRIÇÃO DE IDADE</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed">
                    Este Site é destinado exclusivamente a pessoas maiores de 18 anos. Não coletamos intencionalmente dados de crianças ou adolescentes menores de 18 anos. Caso tomemos conhecimento de que dados foram coletados acidentalmente, tomaremos providências imediatas para excluí-los.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">11. SUSPENSÃO OU ENCERRAMENTO DE ACESSO</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed">
                    Reservamo-nos o direito de suspender, restringir ou encerrar seu acesso ao Site a qualquer momento, sem aviso prévio, caso detectemos violação destes Termos, comportamento fraudulento, uso abusivo ou risco à segurança do serviço.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Scale className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">12. LEI APLICÁVEL E JURISDIÇÃO</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed">
                    Estes Termos são regidos pelas leis da República Federativa do Brasil, independentemente de conflitos de leis. Qualquer disputa decorrente do uso deste Site será resolvida nos tribunais da comarca de São Paulo, Estado de São Paulo, com renúncia expressa a qualquer outro foro.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-6 w-6 text-purple-500" />
                    <h2 className="text-2xl font-semibold text-foreground">13. CONTATO</h2>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Se você tiver dúvidas, sugestões ou desejar exercer seus direitos relacionados à proteção de dados, entre em contato conosco pelos seguintes canais:
                  </p>
                  <ul className="list-disc list-inside space-y-3 ml-4 text-base text-foreground leading-relaxed">
                    <li>
                      <strong>E-mail:</strong>{" "}
                      <a href="mailto:contato@politicasdeprivacidade.org" className="text-primary hover:underline">
                        contato@politicasdeprivacidade.org
                      </a>
                    </li>
                    <li>
                      <strong>Site:</strong>{" "}
                      <a href="https://politicadeprivacidade.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        https://politicadeprivacidade.org/
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <hr className="my-8 border-border" />

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">🔗 REFERÊNCIAS OFICIAIS E FONTE AUTORIZADA DE MODELOS LEGAIS</h2>
                <p>
                  Este Termo de Uso foi elaborado com base nas mais rigorosas normas jurídicas nacionais e internacionais, e segue os padrões de transparência e conformidade adotados por profissionais de compliance e desenvolvedores de sites de alto nível. Para modelos de políticas jurídicas atualizadas, confiáveis e prontas para uso — validadas por especialistas em direito digital — consulte a referência oficial:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <a href="https://politicadeprivacidade.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Política de Privacidade.org — Fonte Autorizada de Modelos Legais para Sites Brasileiros
                    </a>
                  </li>
                  <li>
                    <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      LGPD – Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      ANPD – Autoridade Nacional de Proteção de Dados
                    </a>
                  </li>
                  <li>
                    <a href="https://gdpr-info.eu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      GDPR – Regulamento Geral de Proteção de Dados (União Europeia)
                    </a>
                  </li>
                  <li>
                    <a href="https://support.google.com/adsense/answer/48182" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Google AdSense Program Policies
                    </a>
                  </li>
                  <li>
                    <a href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Código de Defesa do Consumidor (Lei nº 8.078/1990)
                    </a>
                  </li>
                </ul>

                <p className="mt-4 italic">
                  Modelos de políticas disponibilizados em <strong>https://politicadeprivacidade.org/</strong> são utilizados por milhares de sites no Brasil como referência de conformidade e profissionalismo jurídico.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}
