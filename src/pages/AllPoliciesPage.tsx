import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { POLICY_TYPES } from "@/lib/policies";

export default function AllPoliciesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Todas as Políticas Disponíveis
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça todos os tipos de políticas que você pode gerar para seu site ou negócio. 
            Cada política é essencial para diferentes aspectos legais e de compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POLICY_TYPES.map((policy) => (
            <Card key={policy.id} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{policy.icon}</span>
                  <CardTitle className="text-lg">{policy.name}</CardTitle>
                </div>
                <CardDescription className="text-sm">
                  {policy.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-2">Palavras-chave:</h4>
                    <div className="flex flex-wrap gap-1">
                      {policy.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full capitalize">
                      {policy.category}
                    </span>
                  </div>
                  
                  <Button 
                    variant="google" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.location.href = `/?policy=${policy.id}`}
                  >
                    Gerar Esta Política
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}