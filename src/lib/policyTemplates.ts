import { PolicyFormData, LanguageCode } from '@/types/policy';

const formatDate = (locale: LanguageCode): string => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  const localeMap: Record<LanguageCode, string> = {
    'pt-BR': 'pt-BR',
    'en-US': 'en-US',
    'es-ES': 'es-ES',
    'fr-FR': 'fr-FR',
    'de-DE': 'de-DE',
    'it-IT': 'it-IT'
  };
  
  return date.toLocaleDateString(localeMap[locale], options);
};

export const generatePrivacyPolicy = (data: PolicyFormData): string => {
  const currentDate = formatDate(data.language as LanguageCode);
  const adsenseSection = data.hasAdsense ? `

GOOGLE ADSENSE
Este site utiliza o Google AdSense, um serviço de publicidade fornecido pelo Google. O AdSense usa cookies para exibir anúncios baseados nas visitas anteriores do usuário a este ou outros sites. Os usuários podem desativar os cookies de publicidade personalizada visitando as Configurações de anúncios do Google.

COOKIES DE TERCEIROS
Além dos nossos próprios cookies, também podemos usar vários cookies de terceiros para relatar estatísticas de uso do site e fornecer anúncios eficazes.` : '';

  if (data.language === 'pt-BR') {
    return `POLÍTICA DE PRIVACIDADE - ${data.siteName.toUpperCase()}

Última atualização: ${currentDate}

Esta Política de Privacidade descreve como ${data.siteName} ("nós", "nosso" ou "nossos") coleta, usa e protege as informações quando você visita nosso site ${data.siteUrl} (o "Serviço") operado por ${data.companyName || data.siteName}.

INFORMAÇÕES QUE COLETAMOS
Coletamos informações que você nos fornece diretamente, como quando você:
- Preenche formulários em nosso site
- Entra em contato conosco
- Se inscreve em nossos serviços
- Navega pelo nosso site

TIPOS DE DADOS COLETADOS
- Dados Pessoais: nome, endereço de e-mail, telefone
- Dados de Uso: informações sobre como você usa nosso site
- Dados Técnicos: endereço IP, tipo de navegador, sistema operacional

COMO USAMOS SUAS INFORMAÇÕES
Utilizamos as informações coletadas para:
- Fornecer e manter nosso Serviço
- Notificá-lo sobre mudanças em nosso Serviço
- Permitir que você participe de recursos interativos
- Fornecer suporte ao cliente
- Coletar análises ou informações valiosas para melhorar o Serviço

USO DE COOKIES
Nosso site utiliza cookies para melhorar sua experiência. Cookies são pequenos arquivos de texto que são colocados no seu computador pelos sites que você visita.${adsenseSection}

COMPARTILHAMENTO DE DADOS
Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem seu consentimento, exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.

SEGURANÇA DOS DADOS
Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.

SEUS DIREITOS (LGPD)
Você tem o direito de:
- Confirmar a existência de tratamento
- Acessar os dados
- Corrigir dados incompletos, inexatos ou desatualizados
- Anonimizar, bloquear ou eliminar dados desnecessários
- Solicitar a portabilidade dos dados
- Eliminar os dados pessoais tratados com o consentimento
- Obter informações sobre o compartilhamento
- Obter informações sobre a possibilidade de não fornecer consentimento
- Revogar o consentimento

RETENÇÃO DE DADOS
Manteremos suas informações pessoais apenas pelo tempo necessário para os fins estabelecidos nesta Política de Privacidade.

ALTERAÇÕES NESTA POLÍTICA
Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer mudanças publicando a nova Política de Privacidade nesta página.

CONTATO
Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
- Por e-mail: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}
- Neste site: ${data.siteUrl}

Esta política é efetiva a partir de ${currentDate}.`;
  }

  // Default to English for other languages (can be expanded)
  return `PRIVACY POLICY - ${data.siteName.toUpperCase()}

Last updated: ${currentDate}

This Privacy Policy describes how ${data.siteName} ("we", "our" or "us") collects, uses and protects information when you visit our website ${data.siteUrl} (the "Service") operated by ${data.companyName || data.siteName}.

INFORMATION WE COLLECT
We collect information you provide directly to us, such as when you:
- Fill out forms on our website
- Contact us
- Subscribe to our services  
- Browse our website

TYPES OF DATA COLLECTED
- Personal Data: name, email address, phone number
- Usage Data: information about how you use our website
- Technical Data: IP address, browser type, operating system

HOW WE USE YOUR INFORMATION
We use the collected information to:
- Provide and maintain our Service
- Notify you about changes to our Service
- Allow you to participate in interactive features
- Provide customer support
- Gather analytics or valuable information to improve the Service

USE OF COOKIES
Our website uses cookies to improve your experience. Cookies are small text files that are placed on your computer by websites that you visit.${adsenseSection}

DATA SHARING
We do not sell, trade, or transfer your personal information to third parties without your consent, except when necessary to provide our services or when required by law.

DATA SECURITY
We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure or destruction.

YOUR RIGHTS
You have the right to:
- Access your personal data
- Correct inaccurate or incomplete data
- Delete your personal data
- Object to processing
- Data portability
- Withdraw consent

DATA RETENTION
We will retain your personal information only for as long as necessary for the purposes set out in this Privacy Policy.

CHANGES TO THIS POLICY
We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

CONTACT US
If you have any questions about this Privacy Policy, please contact us:
- By email: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}
- On this website: ${data.siteUrl}

This policy is effective as of ${currentDate}.`;
};

export const generateTermsOfUse = (data: PolicyFormData): string => {
  const currentDate = formatDate(data.language as LanguageCode);
  
  if (data.language === 'pt-BR') {
    return `TERMOS DE USO - ${data.siteName.toUpperCase()}

Última atualização: ${currentDate}

Bem-vindo ao ${data.siteName}. Estes Termos de Uso ("Termos") regem o uso do nosso site localizado em ${data.siteUrl} (o "Serviço") operado por ${data.companyName || data.siteName}.

ACEITAÇÃO DOS TERMOS
Ao acessar e usar este site, você aceita e concorda em cumprir os termos e condições deste acordo. Se você não concordar com qualquer parte destes termos, não deve usar nosso Serviço.

USO PERMITIDO
Você pode usar nosso site para:
- Visualizar e navegar pelo conteúdo
- Acessar informações públicas
- Interagir com recursos disponíveis
- Entrar em contato conosco através dos meios fornecidos

USO PROIBIDO
Você concorda em NÃO usar o site para:
- Violar qualquer lei local, estadual, nacional ou internacional
- Transmitir material que seja difamatório, ofensivo ou inadequado
- Tentar obter acesso não autorizado ao site ou sistemas relacionados
- Interferir ou interromper o site ou servidores conectados
- Coletar informações sobre outros usuários

PROPRIEDADE INTELECTUAL
O conteúdo deste site, incluindo textos, gráficos, logotipos, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade de ${data.companyName || data.siteName} e está protegido por leis de direitos autorais.

LIMITAÇÃO DE RESPONSABILIDADE
Em nenhuma circunstância ${data.companyName || data.siteName} será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos resultantes do uso ou incapacidade de usar o Serviço.

MODIFICAÇÕES DOS TERMOS
Reservamo-nos o direito, a nosso critério exclusivo, de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, tentaremos fornecer pelo menos 30 dias de aviso antes de quaisquer novos termos entrarem em vigor.

RESCISÃO
Podemos encerrar ou suspender seu acesso imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar os Termos.

LEI APLICÁVEL
Estes Termos serão interpretados e regidos de acordo com as leis do ${data.country || 'Brasil'}, sem levar em conta suas disposições sobre conflito de leis.

CONTATO
Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:
- Por e-mail: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}
- Neste site: ${data.siteUrl}

Estes termos são efetivos a partir de ${currentDate}.`;
  }

  return `TERMS OF USE - ${data.siteName.toUpperCase()}

Last updated: ${currentDate}

Welcome to ${data.siteName}. These Terms of Use ("Terms") govern the use of our website located at ${data.siteUrl} (the "Service") operated by ${data.companyName || data.siteName}.

ACCEPTANCE OF TERMS
By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by any part of these terms, you should not use our Service.

PERMITTED USE
You may use our website to:
- View and navigate content
- Access public information
- Interact with available features
- Contact us through provided means

PROHIBITED USE
You agree NOT to use the site to:
- Violate any local, state, national or international law
- Transmit material that is defamatory, offensive or inappropriate
- Attempt to gain unauthorized access to the site or related systems
- Interfere with or disrupt the site or connected servers
- Collect information about other users

INTELLECTUAL PROPERTY
The content on this site, including text, graphics, logos, images, audio clips, digital downloads and data compilations, is the property of ${data.companyName || data.siteName} and is protected by copyright laws.

LIMITATION OF LIABILITY
Under no circumstances shall ${data.companyName || data.siteName} be liable for any direct, indirect, incidental, special, consequential or punitive damages resulting from the use or inability to use the Service.

MODIFICATIONS TO TERMS
We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.

TERMINATION
We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.

GOVERNING LAW
These Terms shall be interpreted and governed in accordance with the laws of ${data.country || 'Brazil'}, without regard to its conflict of law provisions.

CONTACT US
If you have any questions about these Terms of Use, please contact us:
- By email: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}
- On this website: ${data.siteUrl}

These terms are effective as of ${currentDate}.`;
};

export const generateCookiePolicy = (data: PolicyFormData): string => {
  const currentDate = formatDate(data.language as LanguageCode);
  const adsenseSection = data.hasAdsense ? `

COOKIES DO GOOGLE ADSENSE
Este site utiliza o Google AdSense que pode definir cookies para:
- Exibir anúncios relevantes
- Medir a eficácia dos anúncios
- Relatório sobre interações com anúncios

Você pode optar por não receber anúncios personalizados visitando: https://www.google.com/settings/ads` : '';

  if (data.language === 'pt-BR') {
    return `POLÍTICA DE COOKIES - ${data.siteName.toUpperCase()}

Última atualização: ${currentDate}

Esta Política de Cookies explica como ${data.siteName} usa cookies e tecnologias similares quando você visita nosso site ${data.siteUrl}.

O QUE SÃO COOKIES
Cookies são pequenos arquivos de texto que são colocados no seu dispositivo quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, bem como fornecer informações aos proprietários do site.

TIPOS DE COOKIES QUE USAMOS

1. COOKIES ESSENCIAIS
Estes cookies são necessários para que o site funcione corretamente. Eles incluem:
- Cookies de sessão para navegação
- Cookies de segurança
- Cookies de funcionalidade básica

2. COOKIES DE DESEMPENHO
Estes cookies coletam informações sobre como os visitantes usam um site:
- Páginas mais visitadas
- Mensagens de erro
- Tempo de carregamento das páginas

3. COOKIES DE FUNCIONALIDADE
Estes cookies permitem que o site se lembre das escolhas que você faz:
- Nome de usuário
- Idioma preferido
- Região onde você está localizado

4. COOKIES DE PUBLICIDADE
Estes cookies são usados para fornecer anúncios mais relevantes para você:
- Rastrear visitas em sites
- Exibir anúncios direcionados
- Medir a eficácia da publicidade${adsenseSection}

COMO CONTROLAR COOKIES
Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão no seu computador e configurar a maioria dos navegadores para impedir que sejam colocados.

CONFIGURAÇÕES DO NAVEGADOR
- Chrome: Configurações > Privacidade e segurança > Cookies
- Firefox: Opções > Privacidade e Segurança
- Safari: Preferências > Privacidade
- Edge: Configurações > Cookies e permissões do site

COOKIES DE TERCEIROS
Podemos também usar cookies de terceiros de parceiros confiáveis, como:
- Google Analytics para análise de tráfego
- Redes sociais para compartilhamento de conteúdo
- Serviços de publicidade online

ATUALIZAÇÃO DESTA POLÍTICA
Podemos atualizar esta Política de Cookies ocasionalmente. Quando o fizermos, revisaremos a data de "última atualização" no topo desta política.

CONTATO
Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato:
- E-mail: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}
- Site: ${data.siteUrl}

Esta política é efetiva a partir de ${currentDate}.`;
  }

  return `COOKIE POLICY - ${data.siteName.toUpperCase()}

Last updated: ${currentDate}

This Cookie Policy explains how ${data.siteName} uses cookies and similar technologies when you visit our website ${data.siteUrl}.

WHAT ARE COOKIES
Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.

TYPES OF COOKIES WE USE

1. ESSENTIAL COOKIES
These cookies are necessary for the website to function properly. They include:
- Session cookies for navigation
- Security cookies
- Basic functionality cookies

2. PERFORMANCE COOKIES
These cookies collect information about how visitors use a website:
- Most visited pages
- Error messages
- Page loading times

3. FUNCTIONALITY COOKIES
These cookies allow the website to remember choices you make:
- Username
- Preferred language
- Region you are located in

4. ADVERTISING COOKIES
These cookies are used to provide more relevant advertisements to you:
- Track visits across websites
- Display targeted advertisements
- Measure advertising effectiveness${adsenseSection}

HOW TO CONTROL COOKIES
You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.

BROWSER SETTINGS
- Chrome: Settings > Privacy and security > Cookies
- Firefox: Options > Privacy & Security
- Safari: Preferences > Privacy
- Edge: Settings > Cookies and site permissions

THIRD-PARTY COOKIES
We may also use third-party cookies from trusted partners, such as:
- Google Analytics for traffic analysis
- Social networks for content sharing
- Online advertising services

UPDATES TO THIS POLICY
We may update this Cookie Policy from time to time. When we do, we will revise the "last updated" date at the top of this policy.

CONTACT
If you have questions about our Cookie Policy, please contact us:
- Email: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}
- Website: ${data.siteUrl}

This policy is effective as of ${currentDate}.`;
};