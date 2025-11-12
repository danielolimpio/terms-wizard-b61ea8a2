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
          <div className="space-y-2">
            {POLICY_TYPES.map((policy) => (
              <Button
                key={policy.id}
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 px-4"
                onClick={() => navigate(`/${policy.slug}`)}
              >
                <span className="mr-2 text-lg">{policy.icon}</span>
                <span className="text-base">{policy.name.replace('Modelo ', '')}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
