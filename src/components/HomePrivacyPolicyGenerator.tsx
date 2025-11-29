import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { AVAILABLE_LANGUAGES } from "@/types/policy";
import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import adsenseLogo from "@/assets/adsense.png";

export const HomePrivacyPolicyGenerator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    siteName: "",
    siteUrl: "",
    companyName: "",
    contactEmail: "",
    language: "pt-BR",
    country: "Brasil",
    hasAdsense: false,
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert("Você precisa aceitar os Termos e Condições para continuar.");
      return;
    }
    // Navegar para a página do gerador com os dados preenchidos
    const params = new URLSearchParams({
      siteName: formData.siteName,
      siteUrl: formData.siteUrl,
      companyName: formData.companyName,
      contactEmail: formData.contactEmail,
      language: formData.language,
      country: formData.country,
      hasAdsense: String(formData.hasAdsense),
    });
    navigate(`/gerador-politica-privacidade?${params.toString()}`);
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card border-2 border-border rounded-2xl shadow-2xl p-6 md:p-10">
          {/* Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Gerador Política de Privacidade
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Documenta como seus dados pessoais são coletados, usados e protegidos
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Site Name and URL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="siteName" className="text-base font-semibold">
                  Nome do Site <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="siteName"
                  placeholder="Meu Site Exemplo"
                  value={formData.siteName}
                  onChange={(e) => setFormData({ ...formData, siteName: e.target.value })}
                  required
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="siteUrl" className="text-base font-semibold">
                  URL do Site <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="siteUrl"
                  placeholder="https://meusite.com"
                  value={formData.siteUrl}
                  onChange={(e) => setFormData({ ...formData, siteUrl: e.target.value })}
                  required
                  className="h-12 text-base"
                />
              </div>
            </div>

            {/* Row 2: Company Name and Contact Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-base font-semibold">
                  Nome da Empresa
                </Label>
                <Input
                  id="companyName"
                  placeholder="Minha Empresa Ltda"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactEmail" className="text-base font-semibold">
                  Email de Contato
                </Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="contato@meusite.com"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="h-12 text-base"
                />
              </div>
            </div>

            {/* Row 3: Language and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="language" className="text-base font-semibold">
                  Idioma
                </Label>
                <Select
                  value={formData.language}
                  onValueChange={(value) => setFormData({ ...formData, language: value })}
                >
                  <SelectTrigger className="h-12 text-base">
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
                <Label htmlFor="country" className="text-base font-semibold">
                  País
                </Label>
                <Input
                  id="country"
                  placeholder="Brasil"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="h-12 text-base"
                />
              </div>
            </div>

            {/* Google AdSense Checkbox */}
            <div className="flex items-center space-x-3 bg-muted/50 rounded-lg p-4">
              <Checkbox
                id="hasAdsense"
                checked={formData.hasAdsense}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, hasAdsense: checked as boolean })
                }
              />
              <Label 
                htmlFor="hasAdsense" 
                className="text-base font-medium cursor-pointer flex items-center gap-2"
              >
                <img src={adsenseLogo} alt="Google AdSense" className="h-5 w-auto" />
                Meu site usa Google AdSense
              </Label>
            </div>

            {/* Terms Acceptance Checkbox */}
            <div className="flex items-start space-x-3 pt-2">
              <Checkbox
                id="acceptTerms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, acceptTerms: checked as boolean })
                }
                className="mt-1"
                required
              />
              <Label 
                htmlFor="acceptTerms" 
                className="text-sm cursor-pointer leading-relaxed"
              >
                Compreendo e aceito os{" "}
                <a 
                  href="/termos-de-uso" 
                  target="_blank" 
                  className="text-primary hover:underline font-medium"
                >
                  Termos e Condições
                </a>
                {" "}do PoliticaDePrivacidade.org
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="google"
              size="xl"
              className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              disabled={!formData.acceptTerms}
            >
              Gerar Política de Privacidade →
            </Button>

            {/* Disclaimer */}
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Isenção de responsabilidade:</span>{" "}
                esta política gerada é de natureza geral. Incentivamos você a procurar aconselhamento jurídico 
                independente para adaptá-lo às suas próprias práticas de negócios. O PoliticaDePrivacidade.org 
                não se responsabiliza pelo uso ou pelas ações tomadas, com base no conteúdo deste site.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
