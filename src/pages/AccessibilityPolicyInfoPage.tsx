import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AccessibilityPolicyInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">♿</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Gerador Política de Acessibilidade
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Torne seu website inclusivo e acessível para todos os usuários
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">O que é uma Política de Acessibilidade?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Uma Política de Acessibilidade é um documento formal que demonstra o compromisso de uma organização em tornar seus produtos, serviços e conteúdo digital acessíveis para pessoas com deficiências, estabelecendo padrões, procedimentos e responsabilidades para garantir inclusão digital efetiva.
                </p>
                
                <p>
                  Esta política vai além de compliance técnico com regulamentações, representando commitment cultural para inclusão que beneficia não apenas pessoas com deficiências, mas todos os usuários através de better usability, clearer navigation, e more thoughtful design. É foundation para creating truly inclusive digital experiences.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Fundamentos da Acessibilidade Digital</h3>
                
                <p>
                  Acessibilidade digital baseia-se em quatro princípios fundamentais do WCAG (Web Content Accessibility Guidelines): Perceptible (information must be presentable em ways users can perceive), Operable (interface components must be operable by all users), Understandable (information e UI operation must be understandable), e Robust (content must be robust enough para be interpreted by assistive technologies).
                </p>

                <p>
                  Deficiências visuais incluem blindness, low vision, e color blindness, requiring features como screen reader compatibility, high contrast options, scalable fonts, e alternative text para images. Deficiências auditivas necessitam captions para videos, transcripts para audio content, e visual indicators para audio alerts.
                </p>

                <p>
                  Deficiências motoras podem affect mouse use, typing ability, ou fine motor control, requiring keyboard navigation alternatives, adjustable timeouts, e interface elements large enough para accurate selection. Cognitive disabilities benefit from clear language, consistent navigation, error prevention, e simplified complex processes.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Regulamentações e Compliance</h3>
                
                <p>
                  No Brasil, a Lei Brasileira de Inclusão (LBI 13.146/2015) estabelece direitos das pessoas com deficiência, incluindo acesso para informação e comunicação. Decreto 9.522/2018 regulamenta accessibility requirements para government websites, mas principles apply para all organizations committed para inclusão.
                </p>

                <p>
                  Internationally, Americans with Disabilities Act (ADA) nos EUA é increasingly applied para digital accessibility, com significant lawsuit activity against websites não-compliant. European Accessibility Act will require accessibility para various digital services starting 2025. Section 508 governs federal government accessibility nos EUA.
                </p>

                <p>
                  WCAG 2.1 Level AA é widely considered international standard para web accessibility, covering broad range de disabilities e assistive technologies. WCAG 2.2 introduz additional success criteria addressing mobile accessibility e cognitive disabilities. Organizations should target AA compliance como baseline com progress toward AAA onde feasible.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Setores de Alta Prioridade</h3>
                
                <p>
                  Government websites e public services have strongest legal obligations para accessibility, often with specific compliance timelines e penalties para non-compliance. Education institutions, particularly those receiving public funding, face significant legal requirements e ethical obligations para ensure equal access para students com disabilities.
                </p>

                <p>
                  Healthcare organizations must ensure accessibility para patient portals, appointment systems, e health information resources. Financial services face regulatory scrutiny regarding accessibility de online banking, insurance platforms, e financial planning tools. E-commerce sites increasingly face legal challenges when inaccessible para users com disabilities.
                </p>

                <p>
                  Large enterprises com significant web presence face reputational risks e legal exposure from inaccessible digital properties. SaaS platforms e business tools must consider accessibility para serve enterprise clients who may have legal obligations para use accessible software.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Benefícios Beyond Compliance</h3>
                
                <p>
                  Accessible design improves usability para all users, not just those com disabilities. Captions benefit users em noisy environments, keyboard navigation helps power users, clear contrast improves readability para everyone, e simple language benefits users com varying education levels e those using websites em non-native languages.
                </p>

                <p>
                  SEO benefits include improved semantic HTML structure, better heading hierarchy, descriptive link text, e alternative text para images - all factors que search engines value. Sites com better accessibility often have better search rankings due para cleaner code e improved user experience metrics.
                </p>

                <p>
                  Market expansion através de accessibility opens products para billions de people globally com disabilities, representing significant economic opportunity. Brand reputation benefits from demonstrating commitment para inclusion, particularly important para B2B sales e partnerships com organizations that prioritize accessibility.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Implementação Técnica</h3>
                
                <p>
                  Semantic HTML forms foundation de accessible websites - proper heading structure, meaningful link text, form labels, e appropriate HTML elements enable screen readers e other assistive technologies para interpret content correctly. ARIA (Accessible Rich Internet Applications) attributes provide additional context where HTML alone é insufficient.
                </p>

                <p>
                  Color e contrast considerations include meeting WCAG contrast ratios (4.5:1 para normal text, 3:1 para large text), não relying solely em color para convey information, e providing high contrast mode options. Visual focus indicators must be clearly visible para keyboard users navigating through interactive elements.
                </p>

                <p>
                  Keyboard accessibility requires all interactive elements para be reachable e operable through keyboard alone, logical tab order, visible focus indicators, e keyboard shortcuts para complex interactions. Touch interfaces need adequate target sizes (44x44 pixels minimum) e spacing para prevent accidental activation.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Testing e Quality Assurance</h3>
                
                <p>
                  Automated testing tools como axe, WAVE, ou Lighthouse accessibility audits podem identify many technical violations quickly e should be integrated into development workflows. However, automated tools catch only 20-30% de accessibility issues, making human testing essential para comprehensive assessment.
                </p>

                <p>
                  Manual testing should include keyboard-only navigation, screen reader testing (NVDA, JAWS, VoiceOver), color contrast verification, e usability testing com people com disabilities. Professional accessibility audits provide comprehensive evaluation e specific remediation recommendations.
                </p>

                <p>
                  Ongoing monitoring é crucial as websites evolve - new content, features, e design changes podem introduce accessibility barriers. Regular audits, user feedback collection, e accessibility testing integration into development processes maintain compliance over time.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Training e Culture</h3>
                
                <p>
                  Developer training should cover accessibility fundamentals, WCAG guidelines, assistive technology familiarity, e accessible coding practices. Designers need understanding de inclusive design principles, color/contrast requirements, e how design decisions impact users com disabilities.
                </p>

                <p>
                  Content creators require training em writing accessible content - clear language, proper heading structure, meaningful link text, e alternative text para images. Customer service teams should understand accessibility features e know como assist users com disabilities effectively.
                </p>

                <p>
                  Leadership commitment é essential para successful accessibility programs. This includes budget allocation para accessibility improvements, integration de accessibility requirements into project planning, e accountability measures para teams regarding accessibility deliverables.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Melhores Práticas</h3>
                
                <p>
                  Start accessibility consideration early em design e development process rather than retrofitting later. "Shift left" approach integrates accessibility requirements into planning, design, development, e testing phases, reducing cost e improving outcomes compared para post-launch remediation.
                </p>

                <p>
                  Involve users com disabilities em testing e feedback collection. Their insights provide invaluable perspective em real-world usability que automated tools e expert reviews cannot replicate. User feedback helps prioritize improvements e validates accessibility solutions.
                </p>

                <p>
                  Document accessibility features, known issues, e planned improvements transparently. Public accessibility statements demonstrate commitment while managing user expectations. Regular updates about progress show ongoing commitment para improvement e help build user trust em organization's accessibility efforts.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gerar Sua Política</CardTitle>
                  <CardDescription>
                    Crie uma política de acessibilidade personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => window.location.href = '/gerador-politica-acessibilidade'}
                  >
                    Gerar Política de Acessibilidade
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Padrões</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>WCAG 2.1 AA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Tecnologias assistivas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Navegação por teclado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Contraste adequado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tags Relacionadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['acessibilidade', 'inclusão', 'deficiência', 'WCAG'].map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
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