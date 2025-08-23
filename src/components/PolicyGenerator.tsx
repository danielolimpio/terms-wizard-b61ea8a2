import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
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
    country: "Brasil",
    
    // Transparency Policy fields
    siteType: "",
    legalResponsible: "",
    cnpjCpf: "",
    businessAddress: "",
    city: "",
    state: "",
    zipCode: "",
    hasSponsoredContent: false,
    hasAffiliatePrograms: false,
    affiliatePartners: "",
    receivesFreeProducts: false,
    freeProductsDisclosure: "",
    sellsProducts: false,
    productTypes: "",
    collectsUserData: false,
    dataTypes: "",
    sharesDataWithThirdParties: false,
    thirdPartyServices: "",
    hasPrivacyPolicy: false,
    privacyPolicyUrl: "",
    correctsErrors: false,
    errorCorrectionProcess: "",
    revealsConflictsOfInterest: false,
    conflictExamples: "",
    receivesEditorialSupport: false,
    editorialSupportDetails: "",
    usesAI: false,
    aiDisclosureMethod: "",
    allowsComments: false,
    hasModeration: false,
    hasErrorReportingProcess: false,
    errorReportingMethod: "",
    showsPublicationDates: false,
    hasEditorialTeam: false,
    editorialTeamDetails: "",
    offersFreeAndPaidContent: false,
    contentDifferentiation: "",
    otherRevenueStreams: ""
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

          {/* Campos específicos para Política de Transparência */}
          {policyType.id === 'transparency-policy' && (
            <>
              <div className="space-y-4 border-t pt-6">
                <h3 className="text-lg font-semibold text-foreground">Informações Específicas de Transparência</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="siteType">Tipo de Site *</Label>
                    <Select
                      value={formData.siteType}
                      onValueChange={(value) => updateFormData('siteType', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blog">Blog / Site de Conteúdo</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="agency">Agência de Marketing</SelectItem>
                        <SelectItem value="online-course">Cursos Online</SelectItem>
                        <SelectItem value="dropshipping">Dropshipping</SelectItem>
                        <SelectItem value="marketplace">Marketplace</SelectItem>
                        <SelectItem value="social-media">Redes Sociais</SelectItem>
                        <SelectItem value="institutional">Site Institucional</SelectItem>
                        <SelectItem value="youtube">Canal YouTube</SelectItem>
                        <SelectItem value="newsletter">Newsletter</SelectItem>
                        <SelectItem value="other">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="legalResponsible">Responsável Legal</Label>
                    <Input
                      id="legalResponsible"
                      placeholder="Nome completo do responsável"
                      value={formData.legalResponsible}
                      onChange={(e) => updateFormData('legalResponsible', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cnpjCpf">CNPJ ou CPF (opcional)</Label>
                    <Input
                      id="cnpjCpf"
                      placeholder="00.000.000/0000-00"
                      value={formData.cnpjCpf}
                      onChange={(e) => updateFormData('cnpjCpf', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessAddress">Endereço Comercial</Label>
                    <Input
                      id="businessAddress"
                      placeholder="Rua, Número, Bairro"
                      value={formData.businessAddress}
                      onChange={(e) => updateFormData('businessAddress', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      placeholder="Sua cidade"
                      value={formData.city}
                      onChange={(e) => updateFormData('city', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">Estado</Label>
                    <Input
                      id="state"
                      placeholder="SP"
                      value={formData.state}
                      onChange={(e) => updateFormData('state', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zipCode">CEP</Label>
                    <Input
                      id="zipCode"
                      placeholder="00000-000"
                      value={formData.zipCode}
                      onChange={(e) => updateFormData('zipCode', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Monetização e Parcerias</h4>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasSponsoredContent"
                      checked={formData.hasSponsoredContent}
                      onCheckedChange={(checked) => updateFormData('hasSponsoredContent', checked)}
                    />
                    <Label htmlFor="hasSponsoredContent" className="text-sm">
                      Publico conteúdo patrocinado ou anúncios
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasAffiliatePrograms"
                      checked={formData.hasAffiliatePrograms}
                      onCheckedChange={(checked) => updateFormData('hasAffiliatePrograms', checked)}
                    />
                    <Label htmlFor="hasAffiliatePrograms" className="text-sm">
                      Participo de programas de afiliados
                    </Label>
                  </div>

                  {formData.hasAffiliatePrograms && (
                    <div className="space-y-2">
                      <Label htmlFor="affiliatePartners">Principais Parcerias</Label>
                      <Input
                        id="affiliatePartners"
                        placeholder="Amazon, Hotmart, Monetizze, etc."
                        value={formData.affiliatePartners}
                        onChange={(e) => updateFormData('affiliatePartners', e.target.value)}
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="receivesFreeProducts"
                      checked={formData.receivesFreeProducts}
                      onCheckedChange={(checked) => updateFormData('receivesFreeProducts', checked)}
                    />
                    <Label htmlFor="receivesFreeProducts" className="text-sm">
                      Recebo produtos gratuitos para resenha
                    </Label>
                  </div>

                  {formData.receivesFreeProducts && (
                    <div className="space-y-2">
                      <Label htmlFor="freeProductsDisclosure">Como informo isso aos leitores?</Label>
                      <Textarea
                        id="freeProductsDisclosure"
                        placeholder="Descreva como você informa quando recebe produtos gratuitos"
                        value={formData.freeProductsDisclosure}
                        onChange={(e) => updateFormData('freeProductsDisclosure', e.target.value)}
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sellsProducts"
                      checked={formData.sellsProducts}
                      onCheckedChange={(checked) => updateFormData('sellsProducts', checked)}
                    />
                    <Label htmlFor="sellsProducts" className="text-sm">
                      Vendo produtos ou serviços diretamente
                    </Label>
                  </div>

                  {formData.sellsProducts && (
                    <div className="space-y-2">
                      <Label htmlFor="productTypes">Tipos de Produtos/Serviços</Label>
                      <Input
                        id="productTypes"
                        placeholder="Físicos, digitais, cursos, consultorias, etc."
                        value={formData.productTypes}
                        onChange={(e) => updateFormData('productTypes', e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Dados e Privacidade</h4>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="collectsUserData"
                      checked={formData.collectsUserData}
                      onCheckedChange={(checked) => updateFormData('collectsUserData', checked)}
                    />
                    <Label htmlFor="collectsUserData" className="text-sm">
                      Coleto dados de usuários
                    </Label>
                  </div>

                  {formData.collectsUserData && (
                    <div className="space-y-2">
                      <Label htmlFor="dataTypes">Tipos de Dados</Label>
                      <Input
                        id="dataTypes"
                        placeholder="E-mails, cookies, formulários, analytics, etc."
                        value={formData.dataTypes}
                        onChange={(e) => updateFormData('dataTypes', e.target.value)}
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sharesDataWithThirdParties"
                      checked={formData.sharesDataWithThirdParties}
                      onCheckedChange={(checked) => updateFormData('sharesDataWithThirdParties', checked)}
                    />
                    <Label htmlFor="sharesDataWithThirdParties" className="text-sm">
                      Compartilho dados com terceiros
                    </Label>
                  </div>

                  {formData.sharesDataWithThirdParties && (
                    <div className="space-y-2">
                      <Label htmlFor="thirdPartyServices">Quais Terceiros?</Label>
                      <Input
                        id="thirdPartyServices"
                        placeholder="Plataformas de e-mail, parceiros publicitários, etc."
                        value={formData.thirdPartyServices}
                        onChange={(e) => updateFormData('thirdPartyServices', e.target.value)}
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasPrivacyPolicy"
                      checked={formData.hasPrivacyPolicy}
                      onCheckedChange={(checked) => updateFormData('hasPrivacyPolicy', checked)}
                    />
                    <Label htmlFor="hasPrivacyPolicy" className="text-sm">
                      Tenho Política de Privacidade e LGPD
                    </Label>
                  </div>

                  {formData.hasPrivacyPolicy && (
                    <div className="space-y-2">
                      <Label htmlFor="privacyPolicyUrl">Link da Política</Label>
                      <Input
                        id="privacyPolicyUrl"
                        placeholder="https://meusite.com/privacidade"
                        value={formData.privacyPolicyUrl}
                        onChange={(e) => updateFormData('privacyPolicyUrl', e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Processos Editoriais</h4>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="usesAI"
                      checked={formData.usesAI}
                      onCheckedChange={(checked) => updateFormData('usesAI', checked)}
                    />
                    <Label htmlFor="usesAI" className="text-sm">
                      Uso IA para gerar conteúdo
                    </Label>
                  </div>

                  {formData.usesAI && (
                    <div className="space-y-2">
                      <Label htmlFor="aiDisclosureMethod">Como informo sobre o uso de IA?</Label>
                      <Textarea
                        id="aiDisclosureMethod"
                        placeholder="Descreva como você informa o uso de IA aos leitores"
                        value={formData.aiDisclosureMethod}
                        onChange={(e) => updateFormData('aiDisclosureMethod', e.target.value)}
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="allowsComments"
                      checked={formData.allowsComments}
                      onCheckedChange={(checked) => updateFormData('allowsComments', checked)}
                    />
                    <Label htmlFor="allowsComments" className="text-sm">
                      Permito comentários de usuários
                    </Label>
                  </div>

                  {formData.allowsComments && (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasModeration"
                        checked={formData.hasModeration}
                        onCheckedChange={(checked) => updateFormData('hasModeration', checked)}
                      />
                      <Label htmlFor="hasModeration" className="text-sm">
                        Tenho moderação ativa
                      </Label>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasErrorReportingProcess"
                      checked={formData.hasErrorReportingProcess}
                      onCheckedChange={(checked) => updateFormData('hasErrorReportingProcess', checked)}
                    />
                    <Label htmlFor="hasErrorReportingProcess" className="text-sm">
                      Tenho processo para correção de erros
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="showsPublicationDates"
                      checked={formData.showsPublicationDates}
                      onCheckedChange={(checked) => updateFormData('showsPublicationDates', checked)}
                    />
                    <Label htmlFor="showsPublicationDates" className="text-sm">
                      Informo datas de publicação e atualização
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasEditorialTeam"
                      checked={formData.hasEditorialTeam}
                      onCheckedChange={(checked) => updateFormData('hasEditorialTeam', checked)}
                    />
                    <Label htmlFor="hasEditorialTeam" className="text-sm">
                      Tenho equipe editorial
                    </Label>
                  </div>

                  {formData.hasEditorialTeam && (
                    <div className="space-y-2">
                      <Label htmlFor="editorialTeamDetails">Detalhes da Equipe</Label>
                      <Textarea
                        id="editorialTeamDetails"
                        placeholder="Nomes, cargos ou qualificações da equipe"
                        value={formData.editorialTeamDetails}
                        onChange={(e) => updateFormData('editorialTeamDetails', e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Outras Informações</h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="otherRevenueStreams">Outras Fontes de Receita</Label>
                    <Textarea
                      id="otherRevenueStreams"
                      placeholder="Consultorias, eventos, assinaturas, doações, etc."
                      value={formData.otherRevenueStreams}
                      onChange={(e) => updateFormData('otherRevenueStreams', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <Button type="submit" variant="google" size="lg" className="w-full">
            Gerar {policyType.name}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};