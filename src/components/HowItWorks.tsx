import { FileCheck, FormInput, Download, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar5 from "@/assets/avatars/avatar-5.jpg";
import avatar6 from "@/assets/avatars/avatar-6.jpg";
import avatar7 from "@/assets/avatars/avatar-7.jpg";
import avatar8 from "@/assets/avatars/avatar-8.jpg";

const steps = [
  {
    number: "01",
    icon: FileCheck,
    title: "Escolha a Política de Privacidade",
    description: "Selecione o tipo de documento legal que você precisa: Política de Privacidade, Termos de Uso, Cookies e muito mais.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    icon: FormInput,
    title: "Preencha os Dados do Seu Site",
    description: "Responda perguntas simples sobre seu site: nome da empresa, URL, email de contato e tipo de dados coletados.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    icon: Download,
    title: "Baixe e Use Sua Política",
    description: "Sua política está pronta! Copie o texto, baixe em PDF, DOC ou TXT e publique no seu site em segundos.",
    color: "from-orange-500 to-red-500"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs md:text-sm font-semibold text-primary">Simples e Rápido</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Como Gerar Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Política de Privacidade</span> em 3 Passos Simples
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Crie documentos legais profissionais em apenas 3 passos simples. 
            Sem complicação, sem custos, sem burocracia.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative group"
              >
                {/* Connection line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0">
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/50" />
                  </div>
                )}
                
                {/* Card */}
                <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 z-10">
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-lg">
                    <span className="text-lg md:text-xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${step.color} p-1 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4">
            <Button 
              variant="default"
              size="lg"
              className="text-sm md:text-base px-6 md:px-8 shadow-lg hover:shadow-xl transition-shadow group"
              onClick={() => window.location.href = '/gerador-politica-privacidade'}
            >
              Gerar Política de Privacidade Grátis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <img 
                  src={avatar5} 
                  alt="Usuário satisfeito" 
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                />
                <img 
                  src={avatar6} 
                  alt="Usuário satisfeito" 
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                />
                <img 
                  src={avatar7} 
                  alt="Usuário satisfeito" 
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                />
                <img 
                  src={avatar8} 
                  alt="Usuário satisfeito" 
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                />
              </div>
              <span className="font-medium">
                <span className="text-primary font-bold">+28.000</span> políticas geradas
              </span>
            </div>
          </div>
          
          <p className="text-xs md:text-sm text-muted-foreground mt-4">
            ✓ Sem cadastro necessário  ✓ 100% gratuito  ✓ Pronto em 2 minutos
          </p>
        </div>
      </div>
    </section>
  );
};