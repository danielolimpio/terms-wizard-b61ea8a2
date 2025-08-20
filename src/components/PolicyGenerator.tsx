import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { PolicyFormData, AVAILABLE_LANGUAGES } from "@/types/policy";
import { PolicyType } from "@/types/policy";

interface PolicyGeneratorProps {
  policyType: PolicyType;
  onGenerate: (formData: PolicyFormData) => void;
}

export const PolicyGenerator = ({ policyType, onGenerate }: PolicyGeneratorProps) => {
  const [formData, setFormData] = useState<PolicyFormData>({
    siteName: "",
    siteUrl: "",
    hasAdsense: false,
    language: "pt-BR",
    contactEmail: "",
    companyName: "",
    country: "Brasil"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  const updateFormData = (field: keyof PolicyFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <span className="text-3xl">{policyType.icon}</span>
          <div>
            <CardTitle className="text-xl">Gerar {policyType.name}</CardTitle>
            <CardDescription>{policyType.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="siteName">Nome do Site *</Label>
              <Input
                id="siteName"
                placeholder="Meu Site Exemplo"
                value={formData.siteName}
                onChange={(e) => updateFormData('siteName', e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="siteUrl">URL do Site *</Label>
              <Input
                id="siteUrl"
                placeholder="https://meusite.com"
                value={formData.siteUrl}
                onChange={(e) => updateFormData('siteUrl', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nome da Empresa</Label>
              <Input
                id="companyName"
                placeholder="Minha Empresa Ltda"
                value={formData.companyName}
                onChange={(e) => updateFormData('companyName', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Email de Contato</Label>
              <Input
                id="contactEmail"
                type="email"
                placeholder="contato@meusite.com"
                value={formData.contactEmail}
                onChange={(e) => updateFormData('contactEmail', e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="language">Idioma</Label>
              <Select
                value={formData.language}
                onValueChange={(value) => updateFormData('language', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o idioma" />
                </SelectTrigger>
                <SelectContent>
                  {AVAILABLE_LANGUAGES.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="country">País</Label>
              <Input
                id="country"
                placeholder="Brasil"
                value={formData.country}
                onChange={(e) => updateFormData('country', e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasAdsense"
              checked={formData.hasAdsense}
              onCheckedChange={(checked) => updateFormData('hasAdsense', checked)}
            />
            <Label htmlFor="hasAdsense" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Meu site usa Google AdSense
            </Label>
          </div>

          <Button type="submit" variant="google" size="lg" className="w-full">
            Gerar {policyType.name}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};