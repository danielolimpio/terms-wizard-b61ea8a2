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
import adsenseLogo from "@/assets/adsense.png";

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
            <CardTitle className="text-xl">Gerador {policyType.name.replace('Modelo ', '')}</CardTitle>
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
            <Label htmlFor="hasAdsense" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
              <img src={adsenseLogo} alt="Google AdSense" className="h-4 w-auto" />
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

          {policyType.id === 'security-policy' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Dados e Coleta</h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dataCollected">Que dados são coletados?</Label>
                    <Textarea
                      id="dataCollected"
                      placeholder="Ex: nome, email, IP, cookies, dados de navegação"
                      value={formData.dataCollected}
                      onChange={(e) => updateFormData('dataCollected', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dataCollectionPurpose">Finalidade da coleta</Label>
                    <Textarea
                      id="dataCollectionPurpose"
                      placeholder="Ex: cadastro, compras, newsletter, análise"
                      value={formData.dataCollectionPurpose}
                      onChange={(e) => updateFormData('dataCollectionPurpose', e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="collectsMinorData"
                      checked={formData.collectsMinorData}
                      onCheckedChange={(checked) => updateFormData('collectsMinorData', checked)}
                    />
                    <Label htmlFor="collectsMinorData" className="text-sm">
                      Coleta dados de menores de idade
                    </Label>
                  </div>

                  {formData.collectsMinorData && (
                    <div className="space-y-2">
                      <Label htmlFor="minorDataConsent">Como obtém consentimento dos responsáveis?</Label>
                      <Textarea
                        id="minorDataConsent"
                        placeholder="Descreva o processo de consentimento"
                        value={formData.minorDataConsent}
                        onChange={(e) => updateFormData('minorDataConsent', e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Medidas Técnicas</h4>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="usesHttps"
                      checked={formData.usesHttps}
                      onCheckedChange={(checked) => updateFormData('usesHttps', checked)}
                    />
                    <Label htmlFor="usesHttps" className="text-sm">
                      Usa criptografia (HTTPS/SSL)
                    </Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serverLocation">Localização dos servidores</Label>
                    <Input
                      id="serverLocation"
                      placeholder="Ex: AWS Brasil, Google Cloud"
                      value={formData.serverLocation}
                      onChange={(e) => updateFormData('serverLocation', e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="performsBackups"
                      checked={formData.performsBackups}
                      onCheckedChange={(checked) => updateFormData('performsBackups', checked)}
                    />
                    <Label htmlFor="performsBackups" className="text-sm">
                      Realiza backups regulares
                    </Label>
                  </div>

                  {formData.performsBackups && (
                    <div className="space-y-2">
                      <Label htmlFor="backupFrequency">Frequência dos backups</Label>
                      <Select value={formData.backupFrequency} onValueChange={(value) => updateFormData('backupFrequency', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a frequência" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diaria">Diária</SelectItem>
                          <SelectItem value="semanal">Semanal</SelectItem>
                          <SelectItem value="mensal">Mensal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="automaticUpdates"
                      checked={formData.automaticUpdates}
                      onCheckedChange={(checked) => updateFormData('automaticUpdates', checked)}
                    />
                    <Label htmlFor="automaticUpdates" className="text-sm">
                      Atualizações automáticas
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="usesFirewall"
                      checked={formData.usesFirewall}
                      onCheckedChange={(checked) => updateFormData('usesFirewall', checked)}
                    />
                    <Label htmlFor="usesFirewall" className="text-sm">
                      Usa firewall/WAF
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="accessMonitoring"
                      checked={formData.accessMonitoring}
                      onCheckedChange={(checked) => updateFormData('accessMonitoring', checked)}
                    />
                    <Label htmlFor="accessMonitoring" className="text-sm">
                      Monitora acessos
                    </Label>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Controle de Acesso</h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="teamAccessCount">Quantas pessoas têm acesso aos dados?</Label>
                    <Select value={formData.teamAccessCount} onValueChange={(value) => updateFormData('teamAccessCount', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 pessoas</SelectItem>
                        <SelectItem value="6-10">6-10 pessoas</SelectItem>
                        <SelectItem value="+10">Mais de 10 pessoas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="securityTraining"
                      checked={formData.securityTraining}
                      onCheckedChange={(checked) => updateFormData('securityTraining', checked)}
                    />
                    <Label htmlFor="securityTraining" className="text-sm">
                      Treinamento em segurança
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="accessControl"
                      checked={formData.accessControl}
                      onCheckedChange={(checked) => updateFormData('accessControl', checked)}
                    />
                    <Label htmlFor="accessControl" className="text-sm">
                      Controle baseado em permissões
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="strongAuthentication"
                      checked={formData.strongAuthentication}
                      onCheckedChange={(checked) => updateFormData('strongAuthentication', checked)}
                    />
                    <Label htmlFor="strongAuthentication" className="text-sm">
                      Autenticação forte (2FA)
                    </Label>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Terceiros e Conformidade</h4>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="usesThirdPartyServices"
                      checked={formData.usesThirdPartyServices}
                      onCheckedChange={(checked) => updateFormData('usesThirdPartyServices', checked)}
                    />
                    <Label htmlFor="usesThirdPartyServices" className="text-sm">
                      Usa serviços de terceiros
                    </Label>
                  </div>

                  {formData.usesThirdPartyServices && (
                    <div className="space-y-2">
                      <Label htmlFor="thirdPartyServices">Quais serviços?</Label>
                      <Textarea
                        id="thirdPartyServices"
                        placeholder="Ex: Google Analytics, Stripe, AWS"
                        value={formData.thirdPartyServices}
                        onChange={(e) => updateFormData('thirdPartyServices', e.target.value)}
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="thirdPartyCompliance"
                      checked={formData.thirdPartyCompliance}
                      onCheckedChange={(checked) => updateFormData('thirdPartyCompliance', checked)}
                    />
                    <Label htmlFor="thirdPartyCompliance" className="text-sm">
                      Terceiros são conformes LGPD/GDPR
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="dataProcessingAgreements"
                      checked={formData.dataProcessingAgreements}
                      onCheckedChange={(checked) => updateFormData('dataProcessingAgreements', checked)}
                    />
                    <Label htmlFor="dataProcessingAgreements" className="text-sm">
                      Acordos de processamento (DPA)
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="lgpdCompliance"
                      checked={formData.lgpdCompliance}
                      onCheckedChange={(checked) => updateFormData('lgpdCompliance', checked)}
                    />
                    <Label htmlFor="lgpdCompliance" className="text-sm">
                      Cumpre a LGPD
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasDPO"
                      checked={formData.hasDPO}
                      onCheckedChange={(checked) => updateFormData('hasDPO', checked)}
                    />
                    <Label htmlFor="hasDPO" className="text-sm">
                      Tem Encarregado (DPO)
                    </Label>
                  </div>

                  {formData.hasDPO && (
                    <div className="space-y-2">
                      <Label htmlFor="dpoContact">Contato do DPO</Label>
                      <Input
                        id="dpoContact"
                        placeholder="Nome ou email do DPO"
                        value={formData.dpoContact}
                        onChange={(e) => updateFormData('dpoContact', e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Incidentes e Testes</h4>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasIncidentPlan"
                      checked={formData.hasIncidentPlan}
                      onCheckedChange={(checked) => updateFormData('hasIncidentPlan', checked)}
                    />
                    <Label htmlFor="hasIncidentPlan" className="text-sm">
                      Tem plano de resposta a incidentes
                    </Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="incidentNotificationMethod">Como notifica usuários em caso de vazamento?</Label>
                    <Input
                      id="incidentNotificationMethod"
                      placeholder="Ex: email, aviso no site"
                      value={formData.incidentNotificationMethod}
                      onChange={(e) => updateFormData('incidentNotificationMethod', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="incidentNotificationTime">Prazo para notificação</Label>
                    <Input
                      id="incidentNotificationTime"
                      placeholder="Ex: até 72 horas"
                      value={formData.incidentNotificationTime}
                      onChange={(e) => updateFormData('incidentNotificationTime', e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="performsSecurityTests"
                      checked={formData.performsSecurityTests}
                      onCheckedChange={(checked) => updateFormData('performsSecurityTests', checked)}
                    />
                    <Label htmlFor="performsSecurityTests" className="text-sm">
                      Realiza testes de segurança
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="acceptsSecurityReports"
                      checked={formData.acceptsSecurityReports}
                      onCheckedChange={(checked) => updateFormData('acceptsSecurityReports', checked)}
                    />
                    <Label htmlFor="acceptsSecurityReports" className="text-sm">
                      Aceita relatórios de segurança
                    </Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="securityContactEmail">Email para questões de segurança</Label>
                    <Input
                      id="securityContactEmail"
                      type="email"
                      placeholder="seguranca@exemplo.com"
                      value={formData.securityContactEmail}
                      onChange={(e) => updateFormData('securityContactEmail', e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="usesAIAutomation"
                      checked={formData.usesAIAutomation}
                      onCheckedChange={(checked) => updateFormData('usesAIAutomation', checked)}
                    />
                    <Label htmlFor="usesAIAutomation" className="text-sm">
                      Usa IA em automação
                    </Label>
                  </div>

                  {formData.usesAIAutomation && (
                    <div className="space-y-2">
                      <Label htmlFor="aiRiskControl">Como controla riscos da IA?</Label>
                      <Textarea
                        id="aiRiskControl"
                        placeholder="Descreva os controles implementados"
                        value={formData.aiRiskControl}
                        onChange={(e) => updateFormData('aiRiskControl', e.target.value)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {policyType.id === 'copyright-policy' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Propriedade Intelectual</h4>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ownsOriginalContent"
                      checked={formData.ownsOriginalContent}
                      onCheckedChange={(checked) => updateFormData('ownsOriginalContent', checked)}
                    />
                    <Label htmlFor="ownsOriginalContent" className="text-sm">
                      Possui conteúdo original
                    </Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contentTypes">Tipos de conteúdo protegido</Label>
                    <Textarea
                      id="contentTypes"
                      placeholder="Ex: textos, imagens, vídeos, código, design"
                      value={formData.contentTypes}
                      onChange={(e) => updateFormData('contentTypes', e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="registeredTrademarks"
                      checked={formData.registeredTrademarks}
                      onCheckedChange={(checked) => updateFormData('registeredTrademarks', checked)}
                    />
                    <Label htmlFor="registeredTrademarks" className="text-sm">
                      Possui marcas registradas
                    </Label>
                  </div>

                  {formData.registeredTrademarks && (
                    <div className="space-y-2">
                      <Label htmlFor="trademarksList">Liste suas marcas</Label>
                      <Textarea
                        id="trademarksList"
                        placeholder="Nome das marcas registradas"
                        value={formData.trademarksList}
                        onChange={(e) => updateFormData('trademarksList', e.target.value)}
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasPatents"
                      checked={formData.hasPatents}
                      onCheckedChange={(checked) => updateFormData('hasPatents', checked)}
                    />
                    <Label htmlFor="hasPatents" className="text-sm">
                      Possui patentes
                    </Label>
                  </div>

                  {formData.hasPatents && (
                    <div className="space-y-2">
                      <Label htmlFor="patentsList">Liste suas patentes</Label>
                      <Textarea
                        id="patentsList"
                        placeholder="Número e descrição das patentes"
                        value={formData.patentsList}
                        onChange={(e) => updateFormData('patentsList', e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Conteúdo de Usuários</h4>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="allowsUserContent"
                      checked={formData.allowsUserContent}
                      onCheckedChange={(checked) => updateFormData('allowsUserContent', checked)}
                    />
                    <Label htmlFor="allowsUserContent" className="text-sm">
                      Permite conteúdo de usuários
                    </Label>
                  </div>

                  {formData.allowsUserContent && (
                    <div className="space-y-2">
                      <Label htmlFor="userContentRights">Direitos sobre conteúdo de usuários</Label>
                      <Textarea
                        id="userContentRights"
                        placeholder="Como são tratados os direitos sobre conteúdo enviado"
                        value={formData.userContentRights}
                        onChange={(e) => updateFormData('userContentRights', e.target.value)}
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasContentLicensing"
                      checked={formData.hasContentLicensing}
                      onCheckedChange={(checked) => updateFormData('hasContentLicensing', checked)}
                    />
                    <Label htmlFor="hasContentLicensing" className="text-sm">
                      Oferece licenciamento
                    </Label>
                  </div>

                  {formData.hasContentLicensing && (
                    <div className="space-y-2">
                      <Label htmlFor="licensingTypes">Tipos de licenciamento</Label>
                      <Textarea
                        id="licensingTypes"
                        placeholder="Creative Commons, licenças comerciais, etc."
                        value={formData.licensingTypes}
                        onChange={(e) => updateFormData('licensingTypes', e.target.value)}
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasContentModeration"
                      checked={formData.hasContentModeration}
                      onCheckedChange={(checked) => updateFormData('hasContentModeration', checked)}
                    />
                    <Label htmlFor="hasContentModeration" className="text-sm">
                      Tem moderação de conteúdo
                    </Label>
                  </div>

                  {formData.hasContentModeration && (
                    <div className="space-y-2">
                      <Label htmlFor="moderationProcess">Processo de moderação</Label>
                      <Textarea
                        id="moderationProcess"
                        placeholder="Como é feita a moderação"
                        value={formData.moderationProcess}
                        onChange={(e) => updateFormData('moderationProcess', e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Procedimentos DMCA</h4>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="acceptsDMCARequests"
                      checked={formData.acceptsDMCARequests}
                      onCheckedChange={(checked) => updateFormData('acceptsDMCARequests', checked)}
                    />
                    <Label htmlFor="acceptsDMCARequests" className="text-sm">
                      Aceita denúncias DMCA
                    </Label>
                  </div>

                  {formData.acceptsDMCARequests && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="dmcaAgentName">Nome do agente DMCA</Label>
                        <Input
                          id="dmcaAgentName"
                          placeholder="Nome do responsável legal"
                          value={formData.dmcaAgentName}
                          onChange={(e) => updateFormData('dmcaAgentName', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dmcaAgentEmail">Email do agente DMCA</Label>
                        <Input
                          id="dmcaAgentEmail"
                          type="email"
                          placeholder="dmca@exemplo.com"
                          value={formData.dmcaAgentEmail}
                          onChange={(e) => updateFormData('dmcaAgentEmail', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dmcaAgentAddress">Endereço do agente DMCA</Label>
                        <Textarea
                          id="dmcaAgentAddress"
                          placeholder="Endereço completo para correspondência legal"
                          value={formData.dmcaAgentAddress}
                          onChange={(e) => updateFormData('dmcaAgentAddress', e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="protectsThirdPartyIP"
                      checked={formData.protectsThirdPartyIP}
                      onCheckedChange={(checked) => updateFormData('protectsThirdPartyIP', checked)}
                    />
                    <Label htmlFor="protectsThirdPartyIP" className="text-sm">
                      Protege PI de terceiros
                    </Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ipViolationProcess">Processo para violações</Label>
                    <Textarea
                      id="ipViolationProcess"
                      placeholder="Como lidar com alegações de violação"
                      value={formData.ipViolationProcess}
                      onChange={(e) => updateFormData('ipViolationProcess', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Notificações</h4>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="providesIPNotice"
                      checked={formData.providesIPNotice}
                      onCheckedChange={(checked) => updateFormData('providesIPNotice', checked)}
                    />
                    <Label htmlFor="providesIPNotice" className="text-sm">
                      Notifica sobre violações
                    </Label>
                  </div>

                  {formData.providesIPNotice && (
                    <div className="space-y-2">
                      <Label htmlFor="ipNoticeMethod">Como notifica</Label>
                      <Input
                        id="ipNoticeMethod"
                        placeholder="Ex: email, notificação no site"
                        value={formData.ipNoticeMethod}
                        onChange={(e) => updateFormData('ipNoticeMethod', e.target.value)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          <Button type="submit" variant="google" size="lg" className="w-full">
            Gerar {policyType.name.replace('Modelo ', '')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};