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