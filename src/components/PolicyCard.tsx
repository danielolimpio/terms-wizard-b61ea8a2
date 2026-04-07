import { PolicyType } from "@/types/policy";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Lock, FileText, Cookie, RefreshCw, Search, Shield, Ban, 
  Copyright, ClipboardList, MessageSquare, Accessibility, Leaf,
  ArrowRight
} from "lucide-react";

interface PolicyCardProps {
  policy: PolicyType;
  onGenerate?: (policyId: string) => void;
}

const policyIconMap: Record<string, React.ElementType> = {
  'privacy-policy': Lock,
  'terms-of-use': FileText,
  'cookie-policy': Cookie,
  'refund-policy': RefreshCw,
  'transparency-policy': Search,
  'security-policy': Shield,
  'antispam-policy': Ban,
  'copyright-policy': Copyright,
  'content-policy': ClipboardList,
  'comment-moderation': MessageSquare,
  'accessibility-policy': Accessibility,
  'sustainability-policy': Leaf,
};

const policyIconColors: Record<string, string> = {
  'privacy-policy': 'from-blue-500 to-indigo-600',
  'terms-of-use': 'from-slate-500 to-slate-700',
  'cookie-policy': 'from-amber-500 to-orange-600',
  'refund-policy': 'from-emerald-500 to-teal-600',
  'transparency-policy': 'from-cyan-500 to-blue-600',
  'security-policy': 'from-red-500 to-rose-600',
  'antispam-policy': 'from-orange-500 to-red-500',
  'copyright-policy': 'from-violet-500 to-purple-600',
  'content-policy': 'from-yellow-500 to-amber-600',
  'comment-moderation': 'from-pink-500 to-rose-600',
  'accessibility-policy': 'from-teal-500 to-cyan-600',
  'sustainability-policy': 'from-green-500 to-emerald-600',
};

export const PolicyCard = ({ policy, onGenerate }: PolicyCardProps) => {
  const navigate = useNavigate();
  
  const categoryConfig = {
    legal: { label: "Jurídico", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", dot: "bg-blue-500" },
    privacy: { label: "Privacidade", bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", dot: "bg-purple-500" },
    business: { label: "Negócios", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500" },
    technical: { label: "Técnico", bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", dot: "bg-orange-500" },
  };

  const generatorRoutes: Record<string, string> = {
    'privacy-policy': '/gerador-politica-privacidade',
    'terms-of-use': '/gerador-termos-uso',
    'cookie-policy': '/gerador-politica-cookies',
    'refund-policy': '/gerador-politica-reembolso',
    'transparency-policy': '/gerador-politica-transparencia',
    'security-policy': '/gerador-politica-seguranca',
    'antispam-policy': '/gerador-politica-antispam',
    'copyright-policy': '/gerador-politica-propriedade-intelectual',
    'content-policy': '/gerador-politica-conteudo',
    'comment-moderation': '/gerador-politica-moderacao',
    'accessibility-policy': '/gerador-politica-acessibilidade',
    'sustainability-policy': '/gerador-politica-sustentabilidade',
  };

  const handleClick = () => {
    const route = generatorRoutes[policy.id] || `/${policy.slug}`;
    navigate(route);
  };

  const IconComponent = policyIconMap[policy.id] || FileText;
  const iconGradient = policyIconColors[policy.id] || 'from-gray-500 to-gray-700';
  const cat = categoryConfig[policy.category];

  return (
    <div className="group relative flex flex-col h-full rounded-2xl bg-card border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-400 ease-out overflow-hidden">
      {/* Top gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${iconGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
      
      {/* Card Header */}
      <div className="flex items-start justify-between p-5 pb-3">
        {/* Icon */}
        <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${iconGradient} shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
          <IconComponent className="h-6 w-6 text-white" strokeWidth={2} />
        </div>
        
        {/* Category Badge */}
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${cat.bg} ${cat.text} border ${cat.border}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
          {cat.label}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 pb-3">
        <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300 leading-snug">
          {policy.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {policy.description}
        </p>
      </div>

      {/* Tags */}
      <div className="px-5 pb-4">
        <div className="flex flex-wrap gap-1.5">
          {policy.keywords.slice(0, 3).map((keyword, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2.5 py-1 text-[11px] font-medium bg-muted text-muted-foreground rounded-lg border border-border/50 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {keyword}
            </span>
          ))}
          {policy.keywords.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 text-[11px] text-muted-foreground">
              +{policy.keywords.length - 3} mais
            </span>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-5 pb-5 mt-auto">
        <Button 
          variant="google" 
          className="w-full group/btn relative overflow-hidden rounded-xl h-11 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
          onClick={handleClick}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Gerar {policy.name.replace('Modelo ', '')}
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </span>
        </Button>
      </div>
    </div>
  );
};
