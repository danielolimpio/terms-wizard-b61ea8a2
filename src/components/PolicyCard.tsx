import { PolicyType } from "@/types/policy";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface PolicyCardProps {
  policy: PolicyType;
  onGenerate?: (policyId: string) => void;
}

export const PolicyCard = ({ policy, onGenerate }: PolicyCardProps) => {
  const navigate = useNavigate();
  
  const categoryColors = {
    legal: "bg-blue-100 text-blue-800",
    privacy: "bg-purple-100 text-purple-800",
    business: "bg-green-100 text-green-800",
    technical: "bg-orange-100 text-orange-800"
  };

  const categoryLabels = {
    legal: "Jurídico",
    privacy: "Privacidade",
    business: "Negócios",
    technical: "Técnico"
  };

  const handleClick = () => {
    navigate(`/${policy.slug}`);
  };

  return (
    <Card className="card-professional group hover:scale-[1.02] transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="text-3xl mb-2">{policy.icon}</div>
          <Badge className={categoryColors[policy.category]} variant="secondary">
            {categoryLabels[policy.category]}
          </Badge>
        </div>
        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {policy.name}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {policy.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="flex flex-wrap gap-1">
          {policy.keywords.slice(0, 3).map((keyword, index) => (
            <span 
              key={index}
              className="inline-block px-2 py-1 text-xs bg-accent text-accent-foreground rounded-md"
            >
              {keyword}
            </span>
          ))}
          {policy.keywords.length > 3 && (
            <span className="inline-block px-2 py-1 text-xs text-muted-foreground">
              +{policy.keywords.length - 3} mais
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          variant="google" 
          className="w-full"
          onClick={handleClick}
        >
          Gerar {policy.name.replace('Modelo ', '')}
        </Button>
      </CardFooter>
    </Card>
  );
};