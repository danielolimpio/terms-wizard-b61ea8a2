import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Termos de Uso
            </h1>
            <p className="text-xl text-muted-foreground">
              Condições e regras para uso do Gerador de Políticas
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e usar o Gerador de Políticas, você concorda em cumprir estes 
                  Termos de Uso. Se você não concordar com algum termo, não deve usar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Descrição do Serviço</h2>
                <p>
                  O Gerador de Políticas é uma plataforma online que permite criar documentos 
                  legais personalizados para websites e negócios, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Políticas de Privacidade</li>
                  <li>Termos de Uso</li>
                  <li>Políticas de Cookies</li>
                  <li>Políticas de Reembolso</li>
                  <li>E outros documentos legais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Uso Adequado</h2>
                <p>Você concorda em usar nossos serviços apenas para fins legítimos e de acordo com:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Todas as leis aplicáveis</li>
                  <li>Estes Termos de Uso</li>
                  <li>Quaisquer políticas adicionais referenciadas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Proibições</h2>
                <p>É expressamente proibido:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Usar o serviço para atividades ilegais</li>
                  <li>Tentar hackear ou comprometer a segurança da plataforma</li>
                  <li>Reproduzir, distribuir ou criar obras derivadas sem autorização</li>
                  <li>Usar scripts automatizados para acessar o serviço</li>
                  <li>Sobrecarregar nossos servidores com solicitações excessivas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo do site, incluindo textos, gráficos, logos, ícones e software, 
                  é propriedade do Gerador de Políticas e protegido por leis de direitos autorais.
                </p>
                <p>
                  Os documentos gerados pela plataforma podem ser usados livremente por você, 
                  mas os templates e tecnologia permanecem nossa propriedade.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Isenção de Responsabilidade</h2>
                <p>
                  Nossos serviços são fornecidos "como estão". Embora nos esforcemos para 
                  fornecer informações precisas e atualizadas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Não garantimos que os documentos atendam a todas as suas necessidades legais específicas</li>
                  <li>Recomendamos sempre a revisão por um advogado qualificado</li>
                  <li>Não somos responsáveis por danos decorrentes do uso dos documentos gerados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitação de Responsabilidade</h2>
                <p>
                  Em nenhuma circunstância seremos responsáveis por danos indiretos, 
                  incidentais, especiais ou consequenciais decorrentes do uso de nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disponibilidade do Serviço</h2>
                <p>
                  Embora nos esforcemos para manter o serviço disponível 24/7, não garantimos 
                  disponibilidade ininterrupta. Podemos suspender o serviço temporariamente 
                  para manutenção ou atualizações.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modificações</h2>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As alterações entrarão em vigor imediatamente após a publicação no site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Rescisão</h2>
                <p>
                  Podemos encerrar ou suspender seu acesso ao serviço imediatamente, 
                  sem aviso prévio, por qualquer motivo, incluindo violação destes termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Lei Aplicável</h2>
                <p>
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa será 
                  resolvida nos tribunais competentes do Brasil.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contato</h2>
                <p>
                  Para dúvidas sobre estes termos, entre em contato conosco através do 
                  e-mail: contato@politicasprivacidade.com
                </p>
                <p className="mt-4">
                  <strong>Última atualização:</strong> Janeiro de 2025
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
