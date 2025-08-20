import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Central de Ajuda
            </h1>
            <p className="text-xl text-muted-foreground">
              Encontre respostas para as perguntas mais frequentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl mb-2">📚</div>
                <CardTitle className="text-lg">Guias</CardTitle>
                <CardDescription>
                  Aprenda a usar todas as funcionalidades
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl mb-2">💬</div>
                <CardTitle className="text-lg">Suporte</CardTitle>
                <CardDescription>
                  Entre em contato conosco
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl mb-2">🎯</div>
                <CardTitle className="text-lg">Tutoriais</CardTitle>
                <CardDescription>
                  Vídeos e tutoriais passo a passo
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Perguntas Frequentes</CardTitle>
                <CardDescription>
                  Respostas para as dúvidas mais comuns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Como gerar uma política?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        1. Escolha o tipo de política que deseja gerar<br/>
                        2. Preencha as informações solicitadas (nome do site, domínio, etc.)<br/>
                        3. Selecione o idioma desejado<br/>
                        4. Clique em "Gerar Política"<br/>
                        5. Faça o download ou copie o texto gerado
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>As políticas são gratuitas?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Sim! Nosso gerador de políticas é completamente gratuito. Você pode gerar, 
                        baixar e usar quantas políticas precisar sem custo algum.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>As políticas seguem a LGPD?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Sim, todas nossas políticas são elaboradas seguindo a Lei Geral de Proteção 
                        de Dados (LGPD) brasileira, além de outras regulamentações como GDPR 
                        (Europa) e CCPA (Califórnia).
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Posso personalizar as políticas?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        As políticas são geradas com base nas informações que você fornece. 
                        Após gerar, você pode editar o texto conforme suas necessidades específicas.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Em quais formatos posso baixar?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Você pode baixar as políticas em formato PDF, Word (.docx) ou TXT. 
                        Também oferecemos a opção de copiar o texto completo com um clique.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>Quais idiomas estão disponíveis?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Atualmente oferecemos políticas em português e inglês. Estamos trabalhando 
                        para adicionar mais idiomas em breve.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger>Como funciona o suporte ao Google AdSense?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Se você marcar a opção "Google AdSense", adicionamos automaticamente as 
                        cláusulas específicas sobre cookies publicitários e política de anúncios 
                        necessárias para compliance com o AdSense.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8">
                    <AccordionTrigger>Preciso de um advogado para revisar?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Embora nossas políticas sejam elaboradas seguindo as melhores práticas 
                        legais, recomendamos sempre a revisão por um advogado especializado, 
                        especialmente para casos específicos ou empresas de grande porte.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Como usar o Gerador</CardTitle>
                <CardDescription>
                  Guia passo a passo para gerar suas políticas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Escolha a Política</h4>
                      <p className="text-muted-foreground">
                        Selecione o tipo de política que você precisa na página inicial.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Preencha os Dados</h4>
                      <p className="text-muted-foreground">
                        Informe o nome do seu site, domínio e outras informações solicitadas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Personalize</h4>
                      <p className="text-muted-foreground">
                        Escolha o idioma, marque se usa Google AdSense e outras opções.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Gere e Baixe</h4>
                      <p className="text-muted-foreground">
                        Clique em gerar e baixe no formato desejado ou copie o texto.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}