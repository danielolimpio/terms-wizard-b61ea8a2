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

export const generateRefundPolicy = (data: PolicyFormData): string => {
  const currentDate = formatDate(data.language as LanguageCode);
  
  if (data.language === 'pt-BR') {
    return `POLÍTICA DE REEMBOLSO - ${data.siteName.toUpperCase()}

Última atualização: ${currentDate}

Esta Política de Reembolso estabelece as condições, prazos e procedimentos para reembolsos e devoluções da ${data.companyName || data.siteName}, em conformidade com o Código de Defesa do Consumidor (Lei nº 8.078/1990) e demais normas aplicáveis no Brasil.

1. DIREITO DE ARREPENDIMENTO (COMPRAS ONLINE)

1.1. Prazo Legal
Conforme o artigo 49 do Código de Defesa do Consumidor, você tem o direito de se arrepender da compra realizada fora do estabelecimento comercial (online, telefone, catálogo) no prazo de 7 (sete) dias corridos, contados a partir:
- Para produtos físicos: da data de recebimento do produto
- Para serviços: da data da contratação
- Para produtos digitais: da data da compra (antes do início do consumo)

1.2. Como Exercer o Direito
Para exercer o direito de arrependimento, entre em contato conosco através:
- E-mail: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}
- Site: ${data.siteUrl}

1.3. Produtos Físicos - Condições para Devolução
Para produtos físicos, é necessário que o produto esteja:
- Sem uso e em perfeitas condições
- Com etiquetas originais
- Na embalagem original
- Com todos os acessórios e manuais

1.4. Produtos Digitais
Para produtos digitais (e-books, cursos online, softwares, downloads):
- O reembolso só é possível antes do início do download ou acesso ao conteúdo
- Após o início do consumo do produto digital, não há direito ao arrependimento, exceto em casos de defeito ou informação enganosa
- Produtos personalizados ou sob encomenda não são elegíveis para reembolso

2. REEMBOLSO POR DEFEITO OU NÃO CONFORMIDADE

2.1. Prazos para Reclamação (CDC art. 26)
- Produtos não duráveis: 30 dias corridos
- Produtos duráveis: 90 dias corridos
- O prazo inicia na data da entrega para vícios aparentes
- Para vícios ocultos, o prazo inicia quando o defeito se manifestar

2.2. Opções do Consumidor (CDC art. 18)
Em caso de produto com defeito, você pode escolher entre:
- Substituição do produto por outro igual
- Restituição integral do valor pago
- Abatimento proporcional do preço

2.3. Prazo para Solução
Temos até 30 dias para sanar o vício. Caso não seja possível, você poderá optar por uma das alternativas acima.

3. FRETE DE DEVOLUÇÃO

3.1. Arrependimento
Em caso de arrependimento (compras online), o frete de devolução é por conta do consumidor, salvo se oferecermos frete grátis como cortesia.

3.2. Defeito ou Erro Nosso
Em caso de:
- Produto com defeito
- Produto diferente do pedido
- Erro na entrega
O frete de devolução será por nossa conta.

4. COMPRAS PRESENCIAIS (LOJA FÍSICA)

4.1. Direito de Arrependimento
O direito de arrependimento de 7 dias NÃO se aplica a compras realizadas presencialmente em nossa loja física.

4.2. Defeitos e Não Conformidade
Mantém-se o direito à troca, conserto ou reembolso por defeito ou não conformidade, conforme prazos e condições estabelecidos no CDC.

4.3. Política de Trocas Voluntárias
Como cortesia, oferecemos trocas voluntárias em até 30 dias para compras presenciais, desde que o produto esteja em perfeitas condições, com nota fiscal e etiquetas originais.

5. PROCESSO DE SOLICITAÇÃO DE REEMBOLSO

5.1. Como Solicitar
Para solicitar reembolso:
1. Entre em contato através do e-mail: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}
2. Informe número do pedido, motivo da devolução e dados para identificação
3. Aguarde nossas instruções para envio (se aplicável)

5.2. Análise da Solicitação
- Prazo para análise: até 7 dias úteis após recebimento da solicitação
- Para produtos físicos: prazo conta após recebimento do produto devolvido
- Você será notificado sobre a aprovação ou negativa

5.3. Processamento do Reembolso
- Reembolsos aprovados serão processados no mesmo meio de pagamento utilizado na compra
- Prazo para estorno: até 2 dias úteis após confirmação
- O prazo para aparecer na fatura pode variar conforme a operadora do cartão

6. CASOS EM QUE O REEMBOLSO PODE SER NEGADO

6.1. Produtos Físicos
- Produto usado, danificado pelo consumidor ou com sinais de mau uso
- Produto sem embalagem original ou com embalagem danificada
- Descumprimento dos prazos legais estabelecidos
- Produtos personalizados, sob encomenda ou feitos sob medida
- Produtos de higiene pessoal com lacre violado

6.2. Produtos Digitais
- Produtos já consumidos (downloads iniciados, cursos já acessados)
- Produtos personalizados ou customizados

6.3. Serviços
- Serviços já prestados ou iniciados, salvo em caso de defeito

7. INFORMAÇÕES OBRIGATÓRIAS AO CONSUMIDOR

7.1. Antes da Compra
Informamos claramente:
- Condições de reembolso e troca
- Prazos aplicáveis
- Formas de contato para solicitações
- Custos de frete quando aplicáveis

7.2. Direitos do Consumidor
- Direito de arrependimento em compras online (7 dias)
- Direito à garantia legal (30 ou 90 dias conforme o produto)
- Direito à informação clara e adequada
- Direito à proteção contra práticas abusivas

8. GARANTIA ADICIONAL

Além da garantia legal prevista no CDC, alguns produtos podem ter garantia adicional do fabricante. Nestes casos, a garantia adicional não substitui a garantia legal, sendo complementar a ela.

9. PRODUTOS PERSONALIZADOS E SOB ENCOMENDA

Produtos feitos especialmente para você, personalizados ou sob encomenda, não são elegíveis para devolução por arrependimento, apenas em casos de defeito ou não conformidade com o solicitado.

10. DISPOSIÇÕES GERAIS

10.1. Legislação Aplicável
Esta política está em conformidade com:
- Código de Defesa do Consumidor (Lei nº 8.078/1990)
- Marco Civil da Internet (Lei nº 12.965/2014)
- Demais normas aplicáveis no Brasil

10.2. Resolução de Conflitos
Em caso de dúvidas ou conflitos, procure nosso atendimento ao cliente. Não sendo possível resolver amigavelmente, você pode recorrer aos órgãos de defesa do consumidor ou ao Poder Judiciário.

10.3. Alterações nesta Política
Esta política pode ser alterada a qualquer tempo. Alterações entrarão em vigor imediatamente após publicação em nosso site. Recomendamos consultar periodicamente esta página.

CONTATO
Para dúvidas, reclamações ou solicitações relacionadas a esta Política de Reembolso:
- E-mail: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}
- Site: ${data.siteUrl}

Esta política é efetiva a partir de ${currentDate}.`;
  }

  // English version
  return `REFUND POLICY - ${data.siteName.toUpperCase()}

Last updated: ${currentDate}

This Refund Policy establishes the conditions, terms, and procedures for refunds and returns for ${data.companyName || data.siteName}, in compliance with applicable consumer protection laws.

1. RIGHT OF WITHDRAWAL (ONLINE PURCHASES)

1.1. Legal Period
For purchases made online, by phone, or catalog, you have the right to withdraw from the purchase within 7 (seven) calendar days from:
- Physical products: date of product delivery
- Services: date of contract
- Digital products: date of purchase (before consumption begins)

1.2. How to Exercise the Right
To exercise your right of withdrawal, contact us:
- Email: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}
- Website: ${data.siteUrl}

1.3. Physical Products - Return Conditions
For physical products, the item must be:
- Unused and in perfect condition
- With original tags
- In original packaging
- With all accessories and manuals

1.4. Digital Products
For digital products (e-books, online courses, software, downloads):
- Refund only possible before download or content access begins
- After consumption starts, no withdrawal right except for defects or misleading information
- Personalized or custom-made products are not eligible for refund

2. REFUND FOR DEFECTS OR NON-COMPLIANCE

2.1. Complaint Periods
- Non-durable products: 30 calendar days
- Durable products: 90 calendar days
- Period starts from delivery date for apparent defects
- For hidden defects, period starts when defect manifests

2.2. Consumer Options
In case of defective products, you can choose:
- Product replacement with an equivalent item
- Full refund of amount paid
- Proportional price reduction

2.3. Resolution Time
We have up to 30 days to fix the defect. If not possible, you may choose one of the alternatives above.

3. RETURN SHIPPING

3.1. Withdrawal
For withdrawal (online purchases), return shipping is at customer's expense, unless we offer free return shipping as courtesy.

3.2. Defect or Our Error
In case of:
- Defective product
- Wrong product delivered
- Delivery error
Return shipping will be at our expense.

4. IN-STORE PURCHASES

4.1. Right of Withdrawal
The 7-day withdrawal right does NOT apply to purchases made in physical stores.

4.2. Defects and Non-compliance
The right to exchange, repair, or refund for defects or non-compliance remains, according to legal terms and conditions.

5. REFUND REQUEST PROCESS

5.1. How to Request
To request a refund:
1. Contact us via email: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}
2. Provide order number, reason for return, and identification data
3. Await our shipping instructions (if applicable)

5.2. Request Analysis
- Analysis period: up to 7 business days after receiving request
- For physical products: period counts after receiving returned product
- You will be notified of approval or denial

5.3. Refund Processing
- Approved refunds will be processed using the same payment method
- Refund timeframe: up to 2 business days after confirmation
- Time to appear on statement may vary by card operator

6. CASES WHERE REFUND MAY BE DENIED

6.1. Physical Products
- Used, damaged, or showing signs of misuse
- Without original packaging or with damaged packaging
- Non-compliance with established legal deadlines
- Personalized, custom-made, or made-to-measure products
- Personal hygiene products with broken seal

6.2. Digital Products
- Already consumed products (downloads started, courses accessed)
- Personalized or customized products

6.3. Services
- Services already provided or started, except in case of defect

7. GENERAL PROVISIONS

7.1. Applicable Legislation
This policy complies with applicable consumer protection laws in ${data.country || 'your jurisdiction'}.

7.2. Conflict Resolution
For questions or conflicts, contact our customer service. If amicable resolution is not possible, you may resort to consumer protection agencies or courts.

CONTACT
For questions, complaints, or requests related to this Refund Policy:
- Email: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}
- Website: ${data.siteUrl}

This policy is effective as of ${currentDate}.`;
};

export const generateTransparencyPolicy = (data: PolicyFormData): string => {
  const currentDate = formatDate(data.language as LanguageCode);
  
  const siteTypeText = data.siteType ? `
TIPO DE SITE
Este é um site do tipo: ${data.siteType}` : '';

  const responsibleText = data.legalResponsible ? `
RESPONSÁVEL LEGAL
Responsável pelo conteúdo: ${data.legalResponsible}
${data.cnpjCpf ? `Documento: ${data.cnpjCpf}` : ''}` : '';

  const addressText = (data.businessAddress || data.city || data.state) ? `
ENDEREÇO COMERCIAL
${data.businessAddress ? data.businessAddress : ''}
${data.city ? data.city : ''}${data.state ? `, ${data.state}` : ''}
${data.zipCode ? `CEP: ${data.zipCode}` : ''}` : '';

  const adsenseText = data.hasAdsense ? `
GOOGLE ADSENSE
Este site utiliza o Google AdSense para exibir anúncios. Os anúncios são selecionados com base no conteúdo da página e no histórico de navegação do usuário. Recebemos comissões pelos cliques e visualizações desses anúncios.` : '';

  const sponsoredContentText = data.hasSponsoredContent ? `
CONTEÚDO PATROCINADO E PUBLICIDADE
Este site pode publicar conteúdo patrocinado e publicitário. Todo conteúdo patrocinado é claramente identificado com as marcações "Conteúdo Patrocinado", "Publicidade" ou "Parceria Comercial". Nossa política editorial mantém independência mesmo em conteúdos patrocinados, garantindo que as opiniões expressas sejam sempre baseadas em nossa experiência e análise criteriosa.` : `
CONTEÚDO PATROCINADO E PUBLICIDADE
Este site não publica conteúdo patrocinado no momento.`;

  const affiliateText = data.hasAffiliatePrograms ? `
PROGRAMAS DE AFILIADOS
Este site participa de programas de afiliados e pode receber comissões por vendas realizadas através de links presentes no conteúdo. ${data.affiliatePartners ? `Principais parcerias: ${data.affiliatePartners}.` : ''} 

Importante: Este site pode receber uma pequena comissão por compras feitas através de links marcados como afiliados, sem custo adicional ao leitor. Essas comissões nos ajudam a manter o site e criar conteúdo de qualidade.

Todas as recomendações são baseadas em nossa experiência real com os produtos/serviços, pesquisa criteriosa e análise independente. A participação em programas de afiliados não influencia nosso processo editorial ou nossas recomendações.` : `
PROGRAMAS DE AFILIADOS
Este site não participa de programas de afiliados no momento.`;

  const freeProductsText = data.receivesFreeProducts ? `
PRODUTOS RECEBIDOS GRATUITAMENTE
Este site pode receber produtos gratuitos de marcas para análise e avaliação. ${data.freeProductsDisclosure ? `Método de divulgação: ${data.freeProductsDisclosure}` : 'Sempre informamos claramente quando um produto foi recebido gratuitamente.'}

Nossa política: "Recebemos este produto em parceria com a marca, mas nossa opinião é independente e baseada em nossa experiência real com o produto."` : `
PRODUTOS RECEBIDOS GRATUITAMENTE
Este site não recebe produtos gratuitos para avaliação no momento.`;

  const productsText = data.sellsProducts ? `
VENDA DE PRODUTOS E SERVIÇOS
Este site vende produtos e/ou serviços diretamente. ${data.productTypes ? `Tipos: ${data.productTypes}.` : ''} Todas as informações sobre produtos, preços, condições de venda e políticas de devolução estão claramente disponíveis antes da compra.` : `
VENDA DE PRODUTOS E SERVIÇOS
Este site não vende produtos ou serviços diretamente.`;

  const dataCollectionText = data.collectsUserData ? `
COLETA DE DADOS E PRIVACIDADE
Este site coleta dados de usuários ${data.dataTypes ? `do tipo: ${data.dataTypes}` : 'conforme descrito em nossa Política de Privacidade'}. ${data.sharesDataWithThirdParties ? `Compartilhamos dados com terceiros: ${data.thirdPartyServices || 'conforme necessário para operação do site'}.` : 'Não compartilhamos dados pessoais com terceiros, exceto quando exigido por lei.'}

${data.hasPrivacyPolicy && data.privacyPolicyUrl ? `Nossa Política de Privacidade completa está disponível em: ${data.privacyPolicyUrl}` : 'Estamos em conformidade com a LGPD e demais leis de proteção de dados aplicáveis.'}` : `
COLETA DE DADOS E PRIVACIDADE
Este site coleta apenas dados essenciais para funcionamento, respeitando integralmente a LGPD e demais leis de proteção de dados.`;

  const errorCorrectionText = data.correctsErrors ? `
CORREÇÃO DE ERROS E ATUALIZAÇÕES
Temos um compromisso firme com a precisão das informações. ${data.errorCorrectionProcess ? `Processo de correção: ${data.errorCorrectionProcess}` : 'Corrigimos erros assim que identificados e informamos claramente as atualizações realizadas.'}

${data.hasErrorReportingProcess ? `Como reportar erros: ${data.errorReportingMethod || 'Entre em contato através dos nossos canais oficiais.'}` : 'Encorajamos leitores a reportarem imprecisões através do nosso email de contato.'}` : `
CORREÇÃO DE ERROS E ATUALIZAÇÕES
Mantemos compromisso com a precisão das informações e corrigimos erros assim que identificados.`;

  const conflictText = data.revealsConflictsOfInterest ? `
CONFLITOS DE INTERESSE
Revelamos todos os conflitos de interesse que possam influenciar nosso conteúdo. ${data.conflictExamples ? `Exemplos incluem: ${data.conflictExamples}.` : 'Isso inclui relacionamentos pessoais, participações societárias, parcerias financeiras ou qualquer situação que possa comprometer nossa independência editorial.'}

Sempre que houver potencial conflito de interesse, informamos claramente aos leitores no início do conteúdo.` : `
CONFLITOS DE INTERESSE
Não possuímos conflitos de interesse que afetem nosso conteúdo editorial.`;

  const editorialSupportText = data.receivesEditorialSupport ? `
APOIO EDITORIAL E FINANCEIRO
${data.editorialSupportDetails ? data.editorialSupportDetails : 'Este site recebe apoio editorial e/ou financeiro de terceiros.'} Mantemos independência editorial mesmo quando há apoio financeiro, garantindo que nosso conteúdo seja sempre baseado em nossa experiência e análise criteriosa.` : `
APOIO EDITORIAL E FINANCEIRO
Este site opera de forma independente, sem apoio editorial ou financeiro externo.`;

  const aiText = data.usesAI ? `
USO DE INTELIGÊNCIA ARTIFICIAL
Este site utiliza inteligência artificial como ferramenta de apoio na criação de conteúdo. ${data.aiDisclosureMethod ? `Método de divulgação: ${data.aiDisclosureMethod}` : 'Sempre informamos quando IA foi utilizada na criação do conteúdo.'}

Importante: Todo conteúdo gerado com apoio de IA é revisado, validado e editado por nossa equipe editorial antes da publicação. A responsabilidade final pelo conteúdo é sempre humana.` : `
USO DE INTELIGÊNCIA ARTIFICIAL
Este site não utiliza inteligência artificial para geração de conteúdo.`;

  const commentsText = data.allowsComments ? `
COMENTÁRIOS E MODERAÇÃO
Este site permite comentários dos usuários. ${data.hasModeration ? 'Mantemos moderação ativa para garantir um ambiente respeitoso e construtivo.' : 'Os comentários são de responsabilidade dos usuários que os publicam.'} Reservamo-nos o direito de remover comentários que violem nossas diretrizes de comunidade.` : `
COMENTÁRIOS E MODERAÇÃO
Este site não permite comentários públicos.`;

  const publicationDatesText = data.showsPublicationDates ? `
DATAS DE PUBLICAÇÃO E ATUALIZAÇÃO
Informamos claramente as datas de publicação e última atualização de todos os nossos conteúdos, permitindo que os leitores avaliem a atualidade das informações.` : `
DATAS DE PUBLICAÇÃO E ATUALIZAÇÃO
Mantemos registro interno das datas de publicação e atualização de conteúdos.`;

  const editorialTeamText = data.hasEditorialTeam ? `
EQUIPE EDITORIAL
${data.editorialTeamDetails ? data.editorialTeamDetails : 'Este site conta com equipe editorial dedicada à criação e revisão de conteúdo.'} Todos os membros da equipe são identificados e suas qualificações estão disponíveis quando relevante para a credibilidade do conteúdo.` : `
EQUIPE EDITORIAL
O conteúdo deste site é produzido pelo responsável editorial principal.`;

  const contentTypesText = data.offersFreeAndPaidContent ? `
CONTEÚDO GRATUITO E PAGO
Este site oferece tanto conteúdo gratuito quanto pago. ${data.contentDifferentiation ? `Diferenciação: ${data.contentDifferentiation}` : 'Sempre informamos claramente qual conteúdo é gratuito e qual é pago antes do acesso.'}` : `
CONTEÚDO GRATUITO E PAGO
Todo o conteúdo deste site é gratuito para acesso.`;

  const otherRevenueText = data.otherRevenueStreams ? `
OUTRAS FONTES DE RECEITA
Além das fontes já mencionadas, este site pode ter as seguintes fontes de receita: ${data.otherRevenueStreams}` : '';

  if (data.language === 'pt-BR') {
    return `POLÍTICA DE TRANSPARÊNCIA - ${data.siteName.toUpperCase()}

Última atualização: ${currentDate}

Esta Política de Transparência demonstra nosso compromisso com a transparência, ética e responsabilidade em todas as nossas operações. É um documento que vai além das obrigações legais, estabelecendo nosso compromisso voluntário com a prestação de contas e comunicação aberta com todos os nossos usuários e stakeholders.

QUEM SOMOS

Site: ${data.siteName}
URL: ${data.siteUrl}
Email de contato: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}
${data.companyName ? `Empresa: ${data.companyName}` : ''}${siteTypeText}${responsibleText}${addressText}

NOSSA MISSÃO E VALORES

Nossa missão é fornecer informações precisas, confiáveis e úteis aos nossos usuários. Valorizamos:
- Transparência total em nossas operações
- Independência editorial
- Precisão e confiabilidade das informações
- Respeito aos direitos dos usuários
- Ética em todas as nossas práticas comerciais

FONTES DE RECEITA

Para manter este site funcionando e gratuito para os usuários, utilizamos as seguintes fontes de receita:${adsenseText}${sponsoredContentText}${affiliateText}${freeProductsText}${productsText}${otherRevenueText}

INDEPENDÊNCIA EDITORIAL

Mantemos total independência editorial. Nossas recomendações e opiniões são baseadas em:
- Pesquisa criteriosa e análise independente
- Experiência real com produtos e serviços
- Conhecimento técnico da equipe
- Feedback genuíno dos usuários

Importante: Incentivos financeiros NUNCA influenciam nossas recomendações ou opiniões editoriais.${conflictText}${editorialSupportText}${aiText}${dataCollectionText}${errorCorrectionText}${commentsText}${publicationDatesText}${editorialTeamText}${contentTypesText}

COMPROMISSO COM A VERDADE

- Verificamos todas as informações antes da publicação
- Citamos fontes confiáveis e verificáveis
- Corrigimos erros assim que identificados
- Mantemos atualização constante do conteúdo
- Respondemos dúvidas e questionamentos dos leitores

COMO NOS CONTATAR

Para dúvidas, sugestões, correções ou qualquer questão relacionada a esta Política de Transparência:

Email: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}
Site: ${data.siteUrl}

Esta política está em vigor desde ${currentDate} e pode ser atualizada periodicamente. Sempre informaremos sobre mudanças significativas.

CONCLUSÃO

Nossa transparência é um compromisso contínuo com nossos usuários. Acreditamos que a confiança se constrói através da abertura, honestidade e consistência em nossas ações. Se você tiver qualquer duvida sobre nossas práticas, não hesite em nos contatar.`;
  }

  // English version
  return `TRANSPARENCY POLICY - ${data.siteName.toUpperCase()}

Last updated: ${currentDate}

This Transparency Policy demonstrates our commitment to transparency, ethics, and responsibility in all our operations. It is a document that goes beyond legal obligations, establishing our voluntary commitment to accountability and open communication with all our users and stakeholders.

WHO WE ARE

Website: ${data.siteName}
URL: ${data.siteUrl}
Contact email: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}
${data.companyName ? `Company: ${data.companyName}` : ''}

OUR MISSION AND VALUES

Our mission is to provide accurate, reliable, and useful information to our users. We value:
- Complete transparency in our operations
- Editorial independence
- Accuracy and reliability of information
- Respect for user rights
- Ethics in all our business practices

REVENUE SOURCES

To keep this website running and free for users, we use the following revenue sources:
${data.hasAdsense ? 'Google AdSense advertising' : 'No advertising revenue'}
${data.hasAffiliatePrograms ? 'Affiliate programs partnerships' : 'No affiliate partnerships'}
${data.sellsProducts ? 'Direct product/service sales' : 'No direct sales'}

EDITORIAL INDEPENDENCE

We maintain complete editorial independence. Our recommendations and opinions are based on:
- Thorough research and independent analysis
- Real experience with products and services
- Team technical knowledge
- Genuine user feedback

Important: Financial incentives NEVER influence our editorial recommendations or opinions.

HOW TO CONTACT US

For questions, suggestions, corrections, or any matter related to this Transparency Policy:

Email: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}
Website: ${data.siteUrl}

    This policy has been in effect since ${currentDate} and may be updated periodically. We will always inform about significant changes.`;
};

export const generateSecurityPolicy = (data: PolicyFormData): string => {
  const currentDate = formatDate(data.language as LanguageCode);
  
  if (data.language === 'pt-BR') {
    return `POLÍTICA DE SEGURANÇA - ${data.siteName.toUpperCase()}

Última atualização: ${currentDate}

Esta Política de Segurança estabelece nosso compromisso absoluto com a proteção de dados, sistemas e informações de nossos usuários. Implementamos medidas técnicas e organizacionais robustas, alinhadas às melhores práticas internacionais de cibersegurança, incluindo diretrizes do NIST, ISO/IEC 27001, LGPD e GDPR.

INTRODUÇÃO E COMPROMISSO COM A SEGURANÇA

A segurança da informação é nossa prioridade máxima. Protegemos seus dados com o mesmo rigor que protegeríamos os nossos próprios, implementando múltiplas camadas de segurança e mantendo vigilância constante contra ameaças digitais.

Site: ${data.siteName}
URL: ${data.siteUrl}
Email de contato: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}
${data.securityContactEmail ? `Email de segurança: ${data.securityContactEmail}` : ''}
${data.companyName ? `Empresa: ${data.companyName}` : ''}
${data.country ? `País: ${data.country}` : ''}

DADOS COLETADOS E FINALIDADES

${data.dataCollected ? `Tipos de dados coletados: ${data.dataCollected}` : 'Coletamos apenas dados essenciais para o funcionamento do serviço.'}

${data.dataCollectionPurpose ? `Finalidade da coleta: ${data.dataCollectionPurpose}` : 'Todos os dados são coletados com finalidades específicas e legítimas.'}

${data.collectsMinorData ? `PROTEÇÃO DE MENORES: Implementamos procedimentos especiais para proteção de dados de menores. ${data.minorDataConsent || 'Exigimos consentimento expresso dos responsáveis legais.'}` : 'Não coletamos intencionalmente dados de menores de idade.'}

MEDIDAS TÉCNICAS E ORGANIZACIONAIS DE PROTEÇÃO

Criptografia e Transmissão Segura:
${data.usesHttps ? '✓ Utilizamos protocolo HTTPS com certificado SSL/TLS válido' : '⚠ Recomendamos implementar HTTPS para segurança completa'}
✓ Criptografia de dados em trânsito e em repouso
✓ Protocolos de comunicação segura

Infraestrutura e Armazenamento:
${data.serverLocation ? `Localização dos servidores: ${data.serverLocation}` : 'Servidores localizados em datacenters seguros'}
${data.performsBackups ? `✓ Backups automatizados ${data.backupFrequency ? `(${data.backupFrequency})` : ''}` : '⚠ Recomendamos implementar backups regulares'}
${data.automaticUpdates ? '✓ Atualizações automáticas de segurança ativadas' : '⚠ Importante manter sistemas sempre atualizados'}

Proteção Contra Ameaças:
${data.usesFirewall ? '✓ Firewall e WAF (Web Application Firewall) configurados' : '⚠ Recomendamos implementar firewall robusto'}
${data.accessMonitoring ? '✓ Monitoramento contínuo de acessos e tentativas de intrusão' : 'Sistema de monitoramento em implementação'}
✓ Proteção contra malware, phishing e ataques DDoS
✓ Análise regular de vulnerabilidades

CONTROLE DE ACESSO E GESTÃO DE PRIVILÉGIOS

${data.teamAccessCount ? `Pessoas com acesso aos dados: ${data.teamAccessCount}` : 'Acesso restrito apenas aos funcionários autorizados'}

Medidas de Controle Implementadas:
${data.accessControl ? '✓ Controle de acesso baseado em funções (RBAC)' : '⚠ Recomendamos implementar controle granular de acesso'}
${data.strongAuthentication ? '✓ Autenticação multifatorial (2FA) para áreas críticas' : '⚠ Importante implementar autenticação forte'}
${data.securityTraining ? '✓ Treinamento regular em segurança da informação para equipe' : 'Programa de treinamento em desenvolvimento'}
✓ Princípio do menor privilégio aplicado
✓ Revisão periódica de permissões de acesso

USO DE SERVIÇOS DE TERCEIROS CONFIÁVEIS

${data.usesThirdPartyServices ? `Serviços de terceiros utilizados: ${data.thirdPartyServices || 'Plataformas confiáveis e certificadas'}` : 'Utilizamos apenas serviços próprios ou altamente confiáveis'}

${data.thirdPartyCompliance ? '✓ Todos os fornecedores são auditados quanto ao compliance' : 'Processo de auditoria de fornecedores em desenvolvimento'}
${data.dataProcessingAgreements ? '✓ Acordos de processamento de dados (DPA) assinados com todos os parceiros' : '⚠ Recomendamos formalizar DPAs com todos os terceiros'}
✓ Due diligence rigorosa na seleção de parceiros
✓ Monitoramento contínuo da segurança de terceiros

RESPOSTA A INCIDENTES DE SEGURANÇA

${data.hasIncidentPlan ? '✓ Plano de resposta a incidentes documentado e testado' : 'Plano de resposta em desenvolvimento'}

Procedimentos em Caso de Incidente:
- Detecção e análise imediata da ameaça
- Contenção e erradicação do problema
- Recuperação e restauração dos serviços
${data.incidentNotificationMethod ? `- Notificação via: ${data.incidentNotificationMethod}` : '- Notificação através de canais oficiais'}
${data.incidentNotificationTime ? `- Prazo de notificação: ${data.incidentNotificationTime}` : '- Notificação em até 72 horas conforme LGPD'}
- Análise post-incidente e melhorias

DIREITOS DO TITULAR E COMO EXERCÊ-LOS

${data.lgpdCompliance ? 'Este site está em total conformidade com a LGPD.' : 'Trabalhamos para conformidade total com a LGPD.'}

${data.providesDataRights ? 'Você tem direito a:' : 'Seus direitos incluem:'}
✓ Acesso aos seus dados pessoais
✓ Correção de informações incorretas
✓ Exclusão de dados (direito ao esquecimento)
✓ Portabilidade dos dados
✓ Revogação do consentimento

${data.hasDPO ? `Encarregado de Proteção de Dados (DPO): ${data.dpoContact || 'Disponível através dos canais de contato'}` : 'Responsável pela proteção de dados disponível para esclarecimentos'}

Como exercer seus direitos:
Email: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}
${data.securityContactEmail ? `Email de segurança: ${data.securityContactEmail}` : ''}
Prazo de resposta: até 15 dias úteis

TRANSPARÊNCIA E MELHORIAS CONTÍNUAS

${data.performsSecurityTests ? '✓ Realizamos testes de penetração e auditorias regulares' : 'Programa de testes de segurança em desenvolvimento'}
${data.acceptsSecurityReports ? `✓ Aceitamos relatórios de segurança responsável: ${data.securityContactEmail || data.contactEmail || 'Entre em contato conosco'}` : 'Canal para reportar vulnerabilidades disponível'}

${data.usesAIAutomation ? `USO DE INTELIGÊNCIA ARTIFICIAL: Utilizamos IA para automação de processos. ${data.aiRiskControl || 'Implementamos controles rigorosos para mitigar riscos relacionados ao uso de IA.'}` : ''}

COMPROMISSO CONTÍNUO

A segurança não é um destino, mas uma jornada contínua. Nos comprometemos a:
- Manter-nos atualizados com as últimas ameaças e soluções
- Investir constantemente em tecnologias de segurança
- Treinar nossa equipe regularmente
- Responder rapidamente a qualquer incidente
- Ser transparentes sobre nossas práticas

CONTATO E DPO

Para questões relacionadas à segurança:
Email: ${data.securityContactEmail || data.contactEmail || 'seguranca@' + data.siteUrl.replace('https://', '').replace('http://', '')}
${data.hasDPO && data.dpoContact ? `DPO: ${data.dpoContact}` : ''}

${data.hasPrivacyPolicy && data.privacyPolicyLink ? `Política de Privacidade: ${data.privacyPolicyLink}` : ''}

Esta política está em vigor desde ${currentDate} e é revisada periodicamente. Mudanças significativas serão comunicadas com antecedência.

A segurança de seus dados é nossa responsabilidade e seu direito. Conte conosco para proteger suas informações como o bem mais valioso que elas são.`;
  }

  // English version
  return `SECURITY POLICY - ${data.siteName.toUpperCase()}

Last updated: ${currentDate}

This Security Policy establishes our absolute commitment to protecting data, systems, and information of our users. We implement robust technical and organizational measures, aligned with international cybersecurity best practices, including NIST, ISO/IEC 27001, GDPR guidelines.

INTRODUCTION AND SECURITY COMMITMENT

Information security is our top priority. We protect your data with the same rigor we would protect our own, implementing multiple security layers and maintaining constant vigilance against digital threats.

Website: ${data.siteName}
URL: ${data.siteUrl}
Contact email: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}
${data.securityContactEmail ? `Security email: ${data.securityContactEmail}` : ''}

DATA COLLECTED AND PURPOSES

${data.dataCollected ? `Types of data collected: ${data.dataCollected}` : 'We collect only essential data for service operation.'}
${data.dataCollectionPurpose ? `Collection purpose: ${data.dataCollectionPurpose}` : 'All data is collected for specific and legitimate purposes.'}

TECHNICAL AND ORGANIZATIONAL PROTECTION MEASURES

Encryption and Secure Transmission:
${data.usesHttps ? '✓ We use HTTPS protocol with valid SSL/TLS certificate' : '⚠ We recommend implementing HTTPS for complete security'}
✓ Data encryption in transit and at rest
✓ Secure communication protocols

HOW TO CONTACT US

For security-related matters:
Email: ${data.securityContactEmail || data.contactEmail || 'security@' + data.siteUrl.replace('https://', '').replace('http://', '')}

This policy has been in effect since ${currentDate} and is reviewed periodically.`;
};

export const generateCopyrightPolicy = (data: PolicyFormData): string => {
  const currentDate = formatDate(data.language as LanguageCode);
  
  if (data.language === 'pt-BR') {
    return `POLÍTICA DE PROPRIEDADE INTELECTUAL - ${data.siteName.toUpperCase()}

Última atualização: ${currentDate}

Esta Política de Propriedade Intelectual protege de forma abrangente todos os direitos autorais, marcas registradas, patentes e demais ativos de propriedade intelectual de ${data.siteName}, estabelecendo também procedimentos claros para lidar com violações, denúncias DMCA e uso não autorizado de conteúdo protegido.

INTRODUÇÃO

${data.siteName} respeita a propriedade intelectual de terceiros e espera que nossos usuários façam o mesmo. Esta política estabelece diretrizes claras sobre nossos direitos de propriedade intelectual e os procedimentos para reportar violações.

Website: ${data.siteName}
URL: ${data.siteUrl}
Email de contato: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}
${data.companyName ? `Empresa: ${data.companyName}` : ''}

NOSSOS DIREITOS DE PROPRIEDADE INTELECTUAL

${data.ownsOriginalContent ? `✓ Somos proprietários de conteúdo original` : 'Respeitamos e protegemos todo conteúdo original'}
${data.contentTypes ? `Tipos de conteúdo protegido: ${data.contentTypes}` : 'Todo conteúdo, design, textos, imagens, vídeos, áudios, códigos e materiais'}

MARCAS REGISTRADAS
${data.registeredTrademarks ? `✓ Possuímos marcas registradas: ${data.trademarksList || 'Conforme registro no INPI'}` : 'Todas as marcas e logomarcas utilizadas são protegidas por direitos autorais'}

PATENTES
${data.hasPatents ? `✓ Possuímos patentes registradas: ${data.patentsList || 'Conforme registros oficiais'}` : 'Não possuímos patentes registradas atualmente'}

CONTEÚDO GERADO POR USUÁRIOS

${data.allowsUserContent ? `Este site permite conteúdo gerado por usuários.` : 'Este site não permite upload de conteúdo por usuários.'}

${data.allowsUserContent && data.userContentRights ? `Direitos sobre conteúdo de usuários: ${data.userContentRights}` : ''}

${data.hasContentModeration ? `✓ Implementamos moderação de conteúdo: ${data.moderationProcess || 'Processo automatizado e manual de verificação'}` : 'Todo conteúdo é de nossa propriedade exclusiva'}

LICENCIAMENTO DE CONTEÚDO

${data.hasContentLicensing ? `Oferecemos licenciamento de conteúdo: ${data.licensingTypes || 'Consulte nossos termos de licenciamento'}` : 'Nosso conteúdo não está disponível para licenciamento'}

Todo uso não autorizado de nosso conteúdo é estritamente proibido, incluindo:
- Reprodução sem autorização prévia por escrito
- Distribuição comercial ou não comercial
- Modificação ou criação de obras derivadas
- Uso em outros sites ou plataformas sem permissão

PROCEDIMENTOS DMCA (DIGITAL MILLENNIUM COPYRIGHT ACT)

${data.acceptsDMCARequests ? 'Aceitamos e processamos denúncias DMCA de forma rápida e eficiente.' : 'Respeitamos direitos autorais conforme legislação aplicável'}

${data.acceptsDMCARequests ? `
AGENTE DMCA DESIGNADO:
Nome: ${data.dmcaAgentName || 'Responsável Legal'}
Email: ${data.dmcaAgentEmail || data.contactEmail || 'dmca@' + data.siteUrl.replace('https://', '').replace('http://', '')}
${data.dmcaAgentAddress ? `Endereço: ${data.dmcaAgentAddress}` : ''}

COMO REPORTAR VIOLAÇÃO DE DIREITOS AUTORAIS:

Para reportar violação de direitos autorais, envie uma notificação contendo:

1. Assinatura física ou eletrônica do proprietário dos direitos autorais
2. Identificação da obra protegida que foi violada
3. Identificação do material que viola direitos autorais
4. Informações de contato (endereço, telefone, email)
5. Declaração de boa-fé de que o uso não foi autorizado
6. Declaração de que as informações são precisas

Envie para: ${data.dmcaAgentEmail || data.contactEmail || 'dmca@' + data.siteUrl.replace('https://', '').replace('http://', '')}
` : ''}

CONTRA-NOTIFICAÇÃO DMCA

Se você acredita que seu conteúdo foi removido por engano, pode enviar uma contra-notificação contendo:
- Sua assinatura física ou eletrônica
- Identificação do conteúdo removido
- Declaração sob pena de perjúrio de que a remoção foi por engano
- Consentimento para jurisdição do tribunal federal

PROTEÇÃO DE PROPRIEDADE INTELECTUAL DE TERCEIROS

${data.protectsThirdPartyIP ? '✓ Respeitamos rigorosamente direitos de propriedade intelectual de terceiros' : 'Comprometemo-nos a respeitar direitos de terceiros'}

${data.ipViolationProcess ? `Processo para violações: ${data.ipViolationProcess}` : 'Investigamos prontamente qualquer alegação de violação e tomamos medidas apropriadas'}

NOTIFICAÇÃO DE VIOLAÇÕES

${data.providesIPNotice ? `Como notificamos sobre violações: ${data.ipNoticeMethod || 'Através de email e notificação no site'}` : 'Notificamos usuários sobre violações através de canais oficiais'}

Ao identificar possível violação:
1. Investigamos a alegação
2. Notificamos o usuário sobre a possível violação
3. Solicitamos esclarecimentos ou remoção do conteúdo
4. Tomamos ação apropriada conforme a situação

PENALIDADES POR VIOLAÇÃO

Violações desta política podem resultar em:
- Remoção imediata do conteúdo violador
- Suspensão temporária ou permanente da conta
- Ação legal para recuperação de danos
- Notificação às autoridades competentes quando aplicável

MODIFICAÇÕES DESTA POLÍTICA

Esta política pode ser atualizada periodicamente. Modificações significativas serão notificadas através de:
- Email para usuários cadastrados
- Aviso destacado no site
- Atualização da data de modificação

CONTATO PARA QUESTÕES DE PROPRIEDADE INTELECTUAL

Para questões relacionadas à propriedade intelectual:
Email geral: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}
${data.dmcaAgentEmail ? `Email DMCA: ${data.dmcaAgentEmail}` : ''}

CONCLUSÃO

A proteção da propriedade intelectual é fundamental para manter a inovação e a criatividade. Ao usar nossos serviços, você concorda em respeitar nossos direitos e os direitos de terceiros.

Esta política está em vigor desde ${currentDate} e constitui parte integral de nossos Termos de Uso.

Trabalhamos continuamente para proteger nossos ativos intelectuais e respeitar os direitos de terceiros, criando um ambiente digital seguro e respeitoso para todos.`;
  }

  // English version
  return `INTELLECTUAL PROPERTY POLICY - ${data.siteName.toUpperCase()}

Last updated: ${currentDate}

This Intellectual Property Policy comprehensively protects all copyrights, trademarks, patents, and other intellectual property assets of ${data.siteName}, also establishing clear procedures for handling violations, DMCA complaints, and unauthorized use of protected content.

INTRODUCTION

${data.siteName} respects the intellectual property of third parties and expects our users to do the same. This policy establishes clear guidelines about our intellectual property rights and procedures for reporting violations.

Website: ${data.siteName}
URL: ${data.siteUrl}
Contact email: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}

OUR INTELLECTUAL PROPERTY RIGHTS

${data.ownsOriginalContent ? `✓ We own original content` : 'We respect and protect all original content'}
${data.contentTypes ? `Types of protected content: ${data.contentTypes}` : 'All content, design, texts, images, videos, audio, code and materials'}

HOW TO CONTACT US

For intellectual property related matters:
General email: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}
${data.dmcaAgentEmail ? `DMCA email: ${data.dmcaAgentEmail}` : ''}

This policy has been in effect since ${currentDate} and constitutes an integral part of our Terms of Use.`;
};

export const generateAntispamPolicy = (data: PolicyFormData): string => {
  const currentDate = formatDate(data.language as LanguageCode);
  
  if (data.language === 'pt-BR') {
    return `POLÍTICA ANTISPAM - ${data.siteName.toUpperCase()}

Última atualização: ${currentDate}

Esta Política Antispam estabelece as diretrizes e procedimentos do ${data.siteName} para prevenir, detectar e combater práticas de spam em nossa plataforma.

INTRODUÇÃO

${data.siteName} está comprometido em manter um ambiente digital limpo, seguro e livre de spam para todos os nossos usuários.

Website: ${data.siteName}
URL: ${data.siteUrl}
Email de contato: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}

O QUE CONSIDERAMOS SPAM

- Mensagens comerciais não solicitadas
- Conteúdo repetitivo ou duplicado
- Links maliciosos ou enganosos
- Tentativas de phishing ou fraude
- Abuso de recursos de comunicação

MEDIDAS DE PREVENÇÃO

Implementamos múltiplas camadas de proteção:
- Filtros automatizados de spam
- Verificação de email e captcha
- Limitação de taxa de envio
- Análise de comportamento suspeito
- Blacklists e whitelists

CONSEQUÊNCIAS

Usuários que praticarem spam estarão sujeitos a:
- Advertência e notificação
- Suspensão temporária de conta
- Bloqueio permanente
- Ação legal quando aplicável

DENÚNCIAS

Para reportar spam: ${data.contactEmail || 'abuse@' + data.siteUrl.replace('https://', '').replace('http://', '')}

Esta política está em vigor desde ${currentDate}.`;
  }

  return `ANTI-SPAM POLICY - ${data.siteName.toUpperCase()}

Last updated: ${currentDate}

This Anti-Spam Policy establishes ${data.siteName}'s guidelines and procedures to prevent, detect, and combat spam practices on our platform.

Contact: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}

This policy has been in effect since ${currentDate}.`;
};

export const generateContentPolicy = (data: PolicyFormData): string => {
  const currentDate = formatDate(data.language as LanguageCode);
  
  if (data.language === 'pt-BR') {
    return `POLÍTICA DE CONTEÚDO - ${data.siteName.toUpperCase()}

Última atualização: ${currentDate}

Esta Política de Conteúdo estabelece as diretrizes sobre que tipos de conteúdo são permitidos em ${data.siteName}.

INTRODUÇÃO

Website: ${data.siteName}
URL: ${data.siteUrl}
Email: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}

CONTEÚDO PERMITIDO

- Conteúdo original e autêntico
- Informações precisas e verificáveis
- Discussões respeitosas e construtivas
- Materiais educativos e informativos

CONTEÚDO PROIBIDO

- Conteúdo ilegal ou que viole direitos autorais
- Material ofensivo, discriminatório ou de ódio
- Spam, desinformação ou fake news
- Conteúdo violento ou explícito inadequado
- Assédio, bullying ou ameaças

MODERAÇÃO

Implementamos moderação através de:
- Sistemas automatizados de detecção
- Revisão manual por moderadores
- Denúncias da comunidade
- Análise de contexto e intenção

CONSEQUÊNCIAS

Violações podem resultar em:
- Remoção de conteúdo
- Advertência ao usuário
- Suspensão de conta
- Banimento permanente

APPEALS

Usuários podem contestar decisões através de: ${data.contactEmail || 'appeals@' + data.siteUrl.replace('https://', '').replace('http://', '')}

Esta política está em vigor desde ${currentDate}.`;
  }

  return `CONTENT POLICY - ${data.siteName.toUpperCase()}

Last updated: ${currentDate}

This Content Policy establishes guidelines about what types of content are allowed on ${data.siteName}.

Contact: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}

This policy has been in effect since ${currentDate}.`;
};

export const generateCommentModerationPolicy = (data: PolicyFormData): string => {
  const currentDate = formatDate(data.language as LanguageCode);
  
  if (data.language === 'pt-BR') {
    return `POLÍTICA DE MODERAÇÃO DE COMENTÁRIOS - ${data.siteName.toUpperCase()}

Última atualização: ${currentDate}

Esta política define como moderamos comentários em ${data.siteName} para manter discussões saudáveis e construtivas.

INTRODUÇÃO

Website: ${data.siteName}
URL: ${data.siteUrl}
Email: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}

DIRETRIZES DE COMENTÁRIOS

Encorajamos:
- Discussões respeitosas e civilizadas
- Feedback construtivo
- Diversidade de opiniões
- Contribuições relevantes ao tópico

Não permitimos:
- Linguagem ofensiva ou discriminatória
- Ataques pessoais ou assédio
- Spam ou autopromoção excessiva
- Informações falsas deliberadas
- Conteúdo ilegal

PROCESSO DE MODERAÇÃO

${data.hasContentModeration ? `Utilizamos moderação ativa: ${data.moderationProcess || 'Combinação de filtros automatizados e revisão manual'}` : 'Moderamos comentários conforme necessário'}

Tipos de moderação:
- Pré-moderação para novos usuários
- Pós-moderação para usuários estabelecidos
- Análise de denúncias da comunidade
- Verificação automatizada de conteúdo

AÇÕES DE MODERAÇÃO

- Advertência ao usuário
- Edição ou remoção de comentário
- Suspensão temporária
- Banimento permanente

RECURSOS E APPEALS

Para contestar uma decisão: ${data.contactEmail || 'moderacao@' + data.siteUrl.replace('https://', '').replace('http://', '')}

Esta política está em vigor desde ${currentDate}.`;
  }

  return `COMMENT MODERATION POLICY - ${data.siteName.toUpperCase()}

Last updated: ${currentDate}

This policy defines how we moderate comments on ${data.siteName}.

Contact: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}

This policy has been in effect since ${currentDate}.`;
};

export const generateAccessibilityPolicy = (data: PolicyFormData): string => {
  const currentDate = formatDate(data.language as LanguageCode);
  
  if (data.language === 'pt-BR') {
    return `POLÍTICA DE ACESSIBILIDADE - ${data.siteName.toUpperCase()}

Última atualização: ${currentDate}

${data.siteName} está comprometido em garantir acessibilidade digital para pessoas com deficiência.

INTRODUÇÃO

Website: ${data.siteName}
URL: ${data.siteUrl}
Email: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}

NOSSO COMPROMISSO

Nos esforçamos continuamente para melhorar a acessibilidade do nosso site e aderir aos padrões WCAG 2.1 nível AA.

RECURSOS DE ACESSIBILIDADE

Nosso site implementa:
- Navegação por teclado
- Textos alternativos para imagens
- Contraste adequado de cores
- Tamanhos de fonte ajustáveis
- Estrutura semântica HTML
- Compatibilidade com leitores de tela

TECNOLOGIAS ASSISTIVAS

O site é compatível com:
- Leitores de tela (NVDA, JAWS, VoiceOver)
- Navegação por teclado
- Software de reconhecimento de voz
- Ampliadores de tela

FEEDBACK E ASSISTÊNCIA

Estamos constantemente trabalhando para melhorar. Se encontrar barreiras de acessibilidade:

Email: ${data.contactEmail || 'acessibilidade@' + data.siteUrl.replace('https://', '').replace('http://', '')}

Descreva:
- Qual página você estava acessando
- Qual problema encontrou
- Qual tecnologia assistiva estava usando

MELHORIAS CONTÍNUAS

Realizamos:
- Auditorias regulares de acessibilidade
- Testes com usuários reais
- Treinamento de equipe
- Atualizações baseadas em feedback

Esta política está em vigor desde ${currentDate}.`;
  }

  return `ACCESSIBILITY POLICY - ${data.siteName.toUpperCase()}

Last updated: ${currentDate}

${data.siteName} is committed to ensuring digital accessibility for people with disabilities.

Contact: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}

This policy has been in effect since ${currentDate}.`;
};

export const generateSustainabilityPolicy = (data: PolicyFormData): string => {
  const currentDate = formatDate(data.language as LanguageCode);
  
  if (data.language === 'pt-BR') {
    return `POLÍTICA DE SUSTENTABILIDADE - ${data.siteName.toUpperCase()}

Última atualização: ${currentDate}

${data.siteName} está comprometido com práticas sustentáveis e responsabilidade ambiental.

INTRODUÇÃO

Website: ${data.siteName}
URL: ${data.siteUrl}
Email: ${data.contactEmail || 'contato@' + data.siteUrl.replace('https://', '').replace('http://', '')}

NOSSOS COMPROMISSOS

Sustentabilidade Digital:
- Otimização de código para menor consumo energético
- Hospedagem em servidores verdes
- Redução de transferência de dados desnecessária
- Cache eficiente e CDN otimizado

Práticas Operacionais:
- Redução de pegada de carbono
- Uso eficiente de recursos
- Reciclagem e descarte responsável
- Parcerias com fornecedores sustentáveis

RESPONSABILIDADE SOCIAL

${data.companyName ? `${data.companyName} se compromete com:` : 'Nos comprometemos com:'}
- Transparência nas operações
- Ética nos negócios
- Respeito aos direitos humanos
- Contribuição para comunidade local

OBJETIVOS DE DESENVOLVIMENTO

Metas de curto prazo (1-2 anos):
- Redução de 25% no consumo energético
- 100% energia renovável
- Neutralização de carbono

Metas de longo prazo (3-5 anos):
- Carbon negative operations
- Zero desperdício
- Impacto positivo líquido

TRANSPARÊNCIA E REPORTING

Publicamos relatórios anuais sobre:
- Métricas de sustentabilidade
- Progresso em metas
- Impacto ambiental
- Iniciativas implementadas

ENGAJAMENTO

Como você pode contribuir:
- Use nossos serviços de forma consciente
- Forneça feedback sobre sustentabilidade
- Participe de nossas iniciativas
- Compartilhe boas práticas

Para sugestões de sustentabilidade: ${data.contactEmail || 'sustentabilidade@' + data.siteUrl.replace('https://', '').replace('http://', '')}

Esta política está em vigor desde ${currentDate}.`;
  }

  return `SUSTAINABILITY POLICY - ${data.siteName.toUpperCase()}

Last updated: ${currentDate}

${data.siteName} is committed to sustainable practices and environmental responsibility.

Contact: ${data.contactEmail || 'contact@' + data.siteUrl.replace('https://', '').replace('http://', '')}

This policy has been in effect since ${currentDate}.`;
};