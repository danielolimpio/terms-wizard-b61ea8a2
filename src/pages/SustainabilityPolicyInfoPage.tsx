import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SustainabilityPolicyInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">🌱</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Gerador de Política de Sustentabilidade
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Demonstre compromisso com práticas sustentáveis e responsabilidade ambiental
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">O que é uma Política de Sustentabilidade?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Uma Política de Sustentabilidade é um documento estratégico que estabelece o compromisso formal de uma organização com práticas ambientalmente responsáveis, socialmente conscientes e economicamente viáveis, definindo metas específicas, procedimentos operacionais e métricas de accountability para minimizar impacto ambiental e maximizar contribuição positiva para sociedade.
                </p>
                
                <p>
                  Esta política vai além de simples declarações de intenção, estabelecendo framework actionable para sustainable business practices que integram considerations ambientais, sociais e de governance (ESG) em core business operations, decision-making processes, e strategic planning de longo prazo.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Os Três Pilares da Sustentabilidade</h3>
                
                <p>
                  Environmental sustainability focuses em reducing carbon footprint, minimizing waste generation, conserving natural resources, protecting biodiversity, e transitioning para renewable energy sources. This includes lifecycle assessment de products, supply chain environmental impact, e circular economy principles que maximize resource efficiency.
                </p>

                <p>
                  Social sustainability encompasses fair labor practices, diversity e inclusion initiatives, community engagement, human rights protection, employee wellbeing, e contribution para local economic development. Organizations must address social impact both internally (employees, stakeholders) e externally (communities, society).
                </p>

                <p>
                  Economic sustainability ensures business practices remain financially viable long-term while creating shared value para all stakeholders. This includes sustainable growth models, risk management, transparent financial reporting, e investment em innovation que drives both profitability e positive impact.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Digital Sustainability</h3>
                
                <p>
                  Para companies digitais, sustainability includes energy consumption de data centers, carbon footprint de cloud computing, sustainable software development practices que optimize resource usage, e digital waste reduction através de efficient coding, optimized databases, e responsible data storage practices.
                </p>

                <p>
                  Website sustainability involves optimizing performance para reduce energy consumption, choosing green hosting providers powered by renewable energy, minimizing data transfer through efficient design, e implementing features que encourage sustainable user behavior. Every website visit has carbon footprint que can be minimized through thoughtful technical decisions.
                </p>

                <p>
                  E-commerce sustainability addresses packaging reduction, sustainable shipping options, product lifecycle extension through repair/refurbishment programs, e reverse logistics para proper disposal ou recycling de products. Digital receipts, paperless transactions, e virtual services reduce physical resource consumption.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Regulamentações e Standards</h3>
                
                <p>
                  EU Taxonomy Regulation defines criteria para environmentally sustainable economic activities, affecting how companies report sustainability metrics. Corporate Sustainability Reporting Directive (CSRD) will require detailed ESG disclosures from thousands de companies. Similar regulations são emerging globally, making sustainability reporting mandatory rather than voluntary.
                </p>

                <p>
                  ISO 14001 provides framework para environmental management systems, while B Corp certification offers comprehensive assessment de social e environmental performance. Science-Based Targets initiative (SBTi) helps companies set emissions reduction targets aligned com climate science. These frameworks provide structure para policy development e implementation.
                </p>

                <p>
                  Task Force em Climate-related Financial Disclosures (TCFD) framework requires companies para disclose climate-related risks e opportunities. ESG rating agencies como MSCI, Sustainalytics, e CDP evaluate company sustainability performance, affecting investment decisions e access para capital.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Setores e Aplicações</h3>
                
                <p>
                  Technology companies face increasing pressure para address energy consumption de data centers, planned obsolescence de hardware, e-waste generation, e carbon footprint de manufacturing. Sustainable software development, green cloud computing, e circular design principles são becoming competitive differentiators.
                </p>

                <p>
                  Financial services sector é integrating ESG factors into investment decisions, lending criteria, e risk assessment. Sustainable finance products, green bonds, e climate risk disclosure são becoming standard offerings. Fintech companies podem leverage technology para promote sustainable financial behaviors.
                </p>

                <p>
                  E-commerce e retail companies must address packaging waste, transportation emissions, fast fashion impact, e consumer behavior influence. Circular business models, sustainable product options, e transparency about supply chain practices são increasingly expected by consumers e regulators.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Implementation Strategy</h3>
                
                <p>
                  Baseline assessment identifies current environmental e social impact através de comprehensive auditing de operations, supply chain, e product lifecycle. This includes carbon footprint calculation, waste audit, energy consumption analysis, e social impact assessment que provides foundation para goal setting e progress measurement.
                </p>

                <p>
                  Target setting should be science-based, measurable, e time-bound. Net-zero commitments, renewable energy transition goals, waste reduction targets, e social impact metrics provide clear direction para operational changes. Targets should be ambitious yet achievable, com interim milestones para track progress.
                </p>

                <p>
                  Operational integration requires embedding sustainability considerations into daily business processes, procurement decisions, product development, e strategic planning. This includes green procurement policies, sustainable design principles, employee training programs, e performance metrics that account para sustainability impact.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Stakeholder Engagement</h3>
                
                <p>
                  Employee engagement é crucial para successful implementation - staff must understand sustainability goals, know how their roles contribute para objectives, e be empowered para suggest improvements. Training programs, sustainability committees, e incentive structures align individual actions com organizational goals.
                </p>

                <p>
                  Supply chain engagement involves working com vendors e partners para improve their sustainability practices, often through procurement requirements, supplier audits, e collaborative improvement programs. Sustainable supply chains require long-term partnerships e shared commitment para continuous improvement.
                </p>

                <p>
                  Customer engagement através de transparency about sustainability efforts, sustainable product options, e education about environmental impact can drive demand para sustainable alternatives while building brand loyalty among environmentally conscious consumers.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Measurement e Reporting</h3>
                
                <p>
                  Key Performance Indicators (KPIs) should cover environmental metrics (carbon emissions, energy consumption, waste generation, water usage), social metrics (employee diversity, community investment, human rights compliance), e governance metrics (board diversity, ethical business practices, transparency).
                </p>

                <p>
                  Regular reporting através de sustainability reports, ESG disclosures, e stakeholder communications maintains accountability e demonstrates progress. Third-party verification adds credibility para sustainability claims e helps identify areas para improvement. Reporting should be transparent about both successes e challenges.
                </p>

                <p>
                  Data collection systems must be robust e reliable para support accurate reporting. This often requires investment em monitoring technology, data management systems, e staff training para ensure consistent e accurate measurement de sustainability metrics across all operations.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Business Benefits</h3>
                
                <p>
                  Cost savings através de energy efficiency, waste reduction, e resource optimization often provide immediate return em investment. Sustainable practices frequently identify operational inefficiencies que, quando addressed, reduce costs while improving environmental performance.
                </p>

                <p>
                  Brand differentiation e customer loyalty benefits são increasingly important as consumers, particularly younger demographics, prioritize sustainable brands. Sustainability can command premium pricing, improve customer retention, e attract new customers who value environmental responsibility.
                </p>

                <p>
                  Access para capital é improved através de strong ESG performance as investors increasingly consider sustainability factors em investment decisions. Sustainable companies often enjoy lower borrowing costs, better insurance rates, e preferential treatment from impact investors e ESG-focused funds.
                </p>

                <p>
                  Talent attraction e retention benefits include attracting top talent who want para work para purpose-driven organizations, improved employee engagement e productivity, e reduced turnover costs. Sustainability initiatives often boost employee morale e company culture.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gerar Sua Política</CardTitle>
                  <CardDescription>
                    Crie uma política de sustentabilidade personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => window.location.href = '/?policy=sustainability-policy'}
                  >
                    Gerar Política de Sustentabilidade
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pilares ESG</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">🌍</span>
                      <span>Environmental</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">👥</span>
                      <span>Social</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">⚖️</span>
                      <span>Governance</span>
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
                    {['sustentabilidade', 'meio ambiente', 'responsabilidade social'].map((tag) => (
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