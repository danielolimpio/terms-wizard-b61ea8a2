import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { POLICY_TYPES } from "@/lib/policies";
import { FileText, Shield, Cookie, ScrollText, DollarSign, Eye, Lock, Ban, Copyright, FileWarning, MessageSquare, Accessibility, Leaf, ChevronRight } from "lucide-react";

const policyIcons: Record<string, { icon: any; color: string; bgColor: string }> = {
  'gerador-politica-privacidade': { icon: Shield, color: 'text-blue-500', bgColor: 'bg-blue-500/20' },
  'gerador-politica-cookies': { icon: Cookie, color: 'text-orange-500', bgColor: 'bg-orange-500/20' },
  'gerador-termos-uso': { icon: ScrollText, color: 'text-purple-500', bgColor: 'bg-purple-500/20' },
  'gerador-politica-reembolso': { icon: DollarSign, color: 'text-green-500', bgColor: 'bg-green-500/20' },
  'gerador-politica-transparencia': { icon: Eye, color: 'text-cyan-500', bgColor: 'bg-cyan-500/20' },
  'gerador-politica-seguranca': { icon: Lock, color: 'text-red-500', bgColor: 'bg-red-500/20' },
  'gerador-politica-antispam': { icon: Ban, color: 'text-yellow-500', bgColor: 'bg-yellow-500/20' },
  'gerador-politica-propriedade-intelectual': { icon: Copyright, color: 'text-indigo-500', bgColor: 'bg-indigo-500/20' },
  'gerador-politica-conteudo': { icon: FileWarning, color: 'text-pink-500', bgColor: 'bg-pink-500/20' },
  'gerador-politica-moderacao': { icon: MessageSquare, color: 'text-teal-500', bgColor: 'bg-teal-500/20' },
  'gerador-politica-acessibilidade': { icon: Accessibility, color: 'text-violet-500', bgColor: 'bg-violet-500/20' },
  'gerador-politica-sustentabilidade': { icon: Leaf, color: 'text-emerald-500', bgColor: 'bg-emerald-500/20' },
};

export function BlogSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="hidden lg:block w-80 sticky top-4 h-fit">
      <Card className="border-2 shadow-lg">
        <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10 border-b-2 border-primary/20">
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 bg-primary/20 rounded-lg">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            Crie Suas Políticas
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-base text-muted-foreground mb-6">
            Gere gratuitamente todas as políticas necessárias para seu site
          </p>
          
          {/* Mais Pesquisadas Section */}
          <div className="mb-6 pb-6 border-b-2 border-border">
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              Mais Pesquisadas
            </h3>
            <div className="space-y-2.5">
              <button
                onClick={() => navigate('/gerador-politica-privacidade')}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 bg-blue-500/20 border-transparent hover:border-blue-500/50 transition-all hover:scale-[1.02] group"
              >
                <Shield className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-sm font-medium text-foreground text-left leading-tight">Política de Privacidade</span>
              </button>
              <button
                onClick={() => navigate('/gerador-termos-uso')}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 bg-purple-500/20 border-transparent hover:border-purple-500/50 transition-all hover:scale-[1.02] group"
              >
                <ScrollText className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-sm font-medium text-foreground text-left leading-tight">Termos de Uso</span>
              </button>
              <button
                onClick={() => navigate('/gerador-politica-cookies')}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 bg-orange-500/20 border-transparent hover:border-orange-500/50 transition-all hover:scale-[1.02] group"
              >
                <Cookie className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-sm font-medium text-foreground text-left leading-tight">Política de Cookies</span>
              </button>
            </div>
          </div>
          
          {/* All Policies */}
          <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-primary" />
            Todas as Políticas
          </h3>
          <div className="space-y-2">
            {POLICY_TYPES.map((policy) => {
              const iconData = policyIcons[policy.slug] || { icon: FileText, color: 'text-gray-500', bgColor: 'bg-gray-500/20' };
              const IconComponent = iconData.icon;
              
              return (
                <button
                  key={policy.id}
                  onClick={() => navigate(`/${policy.slug}`)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl border-2 ${iconData.bgColor} border-transparent hover:border-${iconData.color.split('-')[1]}-500/50 transition-all hover:scale-[1.02] group`}
                >
                  <IconComponent className={`h-4 w-4 ${iconData.color} group-hover:scale-110 transition-transform flex-shrink-0`} />
                  <span className="text-sm font-medium text-foreground text-left leading-tight">{policy.name.replace('Modelo ', '')}</span>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
