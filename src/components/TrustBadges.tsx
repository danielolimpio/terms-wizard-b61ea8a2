import { CheckCircle } from "lucide-react";
import lgpdSeal from "@/assets/seals/lgpd.png";
import gdprSeal from "@/assets/seals/gdpr.webp";
import isoSeal from "@/assets/seals/iso-27001.png";
import ccpaSeal from "@/assets/seals/ccpa.png";
import eprivacySeal from "@/assets/seals/eprivacy.png";
import bestPracticesSeal from "@/assets/seals/best-practices.webp";

const badges = [
  {
    image: lgpdSeal,
    title: "LGPD",
    subtitle: "Compliant",
    description: "Lei Geral de Proteção de Dados"
  },
  {
    image: gdprSeal,
    title: "GDPR",
    subtitle: "Ready",
    description: "General Data Protection Regulation"
  },
  {
    image: isoSeal,
    title: "ISO 27001",
    subtitle: "Aligned",
    description: "Segurança da Informação"
  },
  {
    image: ccpaSeal,
    title: "CCPA",
    subtitle: "Compatible",
    description: "California Consumer Privacy Act"
  },
  {
    image: eprivacySeal,
    title: "ePrivacy",
    subtitle: "2026",
    description: "Regulamento de Privacidade Eletrônica"
  },
  {
    image: bestPracticesSeal,
    title: "Best",
    subtitle: "Practices",
    description: "Melhores Práticas Jurídicas"
  }
];

export const TrustBadges = () => {
  return (
    <section className="py-8 md:py-12 px-4 bg-gradient-to-b from-muted/30 to-background border-y border-border">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Conformidade e Certificações
          </p>
          <h3 className="text-lg md:text-2xl font-bold text-foreground">
            Documentos em Conformidade com as Principais Regulamentações
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => {
            return (
              <div 
                key={index}
                className="group relative bg-card border border-border rounded-xl p-4 hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Seal Image */}
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <img 
                    src={badge.image} 
                    alt={`${badge.title} ${badge.subtitle}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Badge title */}
                <div className="text-center">
                  <h4 className="text-sm md:text-base font-bold text-foreground">
                    {badge.title}
                  </h4>
                  <p className="text-xs font-semibold text-primary">
                    {badge.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {badge.description}
                  </p>
                </div>
                
                {/* Checkmark badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-background">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Atualizado para 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Templates Validados</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>Conformidade Global</span>
          </div>
        </div>
      </div>
    </section>
  );
};