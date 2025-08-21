import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function RefundPolicyInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">💰</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Política de Reembolso
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Entenda tudo sobre políticas de reembolso e como elas protegem tanto empresas quanto consumidores
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">O que é uma Política de Reembolso?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Uma Política de Reembolso é um documento legal que estabelece as condições, prazos e procedimentos pelos quais uma empresa aceita devolver o dinheiro pago por um produto ou serviço. Este documento é fundamental para estabelecer uma relação transparente entre empresa e consumidor, definindo direitos e responsabilidades de ambas as partes.
                </p>
                
                <p>
                  Esta política serve como um contrato que protege tanto o negócio quanto o cliente, estabelecendo regras claras sobre quando, como e em que condições um reembolso pode ser solicitado e processado. É especialmente importante no e-commerce, onde o consumidor não pode examinar fisicamente o produto antes da compra.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Importância Legal e Comercial</h3>
                
                <p>
                  No Brasil, o Código de Defesa do Consumidor (CDC) garante o direito de arrependimento em compras online, permitindo que o consumidor desista da compra em até 7 dias corridos após o recebimento do produto. Uma política de reembolso bem estruturada vai além dessa exigência mínima, demonstrando compromisso com a satisfação do cliente.
                </p>

                <p>
                  Além da conformidade legal, uma política de reembolso clara e justa pode ser um diferencial competitivo, aumentando a confiança do consumidor e, consequentemente, as vendas. Estudos mostram que lojas com políticas de reembolso transparentes têm taxas de conversão até 30% maiores.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gerar Sua Política</CardTitle>
                  <CardDescription>
                    Crie uma política de reembolso personalizada para seu negócio
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => window.location.href = '/?policy=refund-policy'}
                  >
                    Gerar Política de Reembolso
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}