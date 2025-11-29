import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { POLICY_TYPES } from "@/lib/policies";
import { FileText } from "lucide-react";

export function BlogSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="hidden lg:block w-80 sticky top-4 h-fit">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <FileText className="h-5 w-5 text-primary" />
            Crie Suas Políticas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base text-muted-foreground mb-4">
            Gere gratuitamente todas as políticas necessárias para seu site
          </p>
          
          {/* Mais Pesquisadas Section */}
          <div className="mb-6 pb-6 border-b border-border">
            <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
              Mais Pesquisadas
            </h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-2.5 px-3 border-primary/50 bg-primary/5 flex items-center gap-2"
                onClick={() => navigate('/gerador-politica-privacidade')}
              >
                <span className="text-lg shrink-0">🔒</span>
                <span className="text-sm font-semibold leading-tight">Política de Privacidade Grátis</span>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-2.5 px-3 flex items-center gap-2"
                onClick={() => navigate('/gerador-termos-uso')}
              >
                <span className="text-lg shrink-0">📋</span>
                <span className="text-sm leading-tight">Gerador de Termos de Uso</span>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-2.5 px-3 flex items-center gap-2"
                onClick={() => navigate('/gerador-politica-cookies')}
              >
                <span className="text-lg shrink-0">🍪</span>
                <span className="text-sm leading-tight">Política de Cookies</span>
              </Button>
            </div>
          </div>
          
          {/* All Policies */}
          <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
            Todas as Políticas
          </h3>
          <div className="space-y-2">
            {POLICY_TYPES.map((policy) => (
              <Button
                key={policy.id}
                variant="outline"
                className="w-full justify-start text-left h-auto py-2.5 px-3 flex items-center gap-2"
                onClick={() => navigate(`/${policy.slug}`)}
              >
                <span className="text-lg shrink-0">{policy.icon}</span>
                <span className="text-sm leading-tight">{policy.name.replace('Modelo ', '')}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
