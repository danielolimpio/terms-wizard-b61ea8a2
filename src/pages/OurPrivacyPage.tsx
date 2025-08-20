import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function OurPrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Nossa Política de Privacidade
            </h1>
            <p className="text-xl text-muted-foreground">
              Como coletamos, usamos e protegemos suas informações pessoais
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informações que Coletamos</h2>
                <p>
                  Coletamos apenas as informações essenciais para fornecer nossos serviços:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Dados fornecidos nos formulários de geração de políticas (nome do site, domínio, etc.)</li>
                  <li>Informações de navegação através de cookies técnicos</li>
                  <li>Endereço IP para análise de tráfego e segurança</li>
                  <li>Dados de contato quando você nos envia mensagens</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Como Usamos suas Informações</h2>
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Gerar as políticas solicitadas de forma personalizada</li>
                  <li>Melhorar nossos serviços e funcionalidades</li>
                  <li>Responder às suas dúvidas e solicitações</li>
                  <li>Garantir a segurança da plataforma</li>
                  <li>Realizar análises estatísticas de uso</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Compartilhamento de Dados</h2>
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                  exceto nas seguintes situações:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Quando exigido por lei ou autoridade judicial</li>
                  <li>Para proteger nossos direitos legais</li>
                  <li>Com prestadores de serviços essenciais (hospedagem, analytics) sob contrato de confidencialidade</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies</h2>
                <p>
                  Utilizamos cookies essenciais para o funcionamento do site e cookies de análise 
                  para melhorar nossos serviços. Você pode gerenciar suas preferências de cookies 
                  nas configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Segurança</h2>
                <p>
                  Implementamos medidas técnicas e organizacionais adequadas para proteger suas 
                  informações contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Seus Direitos</h2>
                <p>Conforme a LGPD, você tem direito a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou inexatos</li>
                  <li>Solicitar a exclusão de dados desnecessários</li>
                  <li>Revogar seu consentimento</li>
                  <li>Portabilidade dos dados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Retenção de Dados</h2>
                <p>
                  Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades 
                  descritas nesta política, respeitando os prazos legais aplicáveis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contato</h2>
                <p>
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                  entre em contato conosco através do e-mail: contato@geradorpoliticas.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Alterações</h2>
                <p>
                  Esta política pode ser atualizada periodicamente. Recomendamos que você 
                  a revise regularmente para se manter informado sobre como protegemos suas informações.
                </p>
                <p className="mt-4">
                  <strong>Última atualização:</strong> Janeiro de 2024
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