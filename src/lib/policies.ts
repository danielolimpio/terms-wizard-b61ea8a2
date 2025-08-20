import { PolicyType } from '@/types/policy';

export const POLICY_TYPES: PolicyType[] = [
  {
    id: 'privacy-policy',
    name: 'Política de Privacidade',
    description: 'Documenta como seus dados pessoais são coletados, usados e protegidos',
    keywords: ['política de privacidade', 'LGPD', 'GDPR', 'proteção de dados', 'cookies'],
    slug: 'politica-privacidade',
    icon: '🔒',
    category: 'privacy'
  },
  {
    id: 'terms-of-use',
    name: 'Termos de Uso',
    description: 'Define as regras e condições para usar seu site ou serviço',
    keywords: ['termos de uso', 'condições', 'regulamento', 'direitos', 'obrigações'],
    slug: 'termos-uso',
    icon: '📋',
    category: 'legal'
  },
  {
    id: 'cookie-policy',
    name: 'Política de Cookies',
    description: 'Explica como e por que seu site usa cookies',
    keywords: ['cookies', 'tracking', 'navegação', 'preferências', 'analytics'],
    slug: 'politica-cookies',
    icon: '🍪',
    category: 'technical'
  },
  {
    id: 'refund-policy',
    name: 'Política de Reembolso',
    description: 'Define condições e procedimentos para reembolsos',
    keywords: ['reembolso', 'devolução', 'cancelamento', 'estorno', 'garantia'],
    slug: 'politica-reembolso',
    icon: '💰',
    category: 'business'
  },
  {
    id: 'transparency-policy',
    name: 'Política de Transparência',
    description: 'Demonstra transparência nas operações e processos',
    keywords: ['transparência', 'ética', 'governança', 'responsabilidade'],
    slug: 'politica-transparencia',
    icon: '🔍',
    category: 'business'
  },
  {
    id: 'security-policy',
    name: 'Política de Segurança',
    description: 'Descreve medidas de segurança para proteger dados e sistemas',
    keywords: ['segurança', 'proteção', 'cibersegurança', 'dados'],
    slug: 'politica-seguranca',
    icon: '🛡️',
    category: 'technical'
  },
  {
    id: 'antispam-policy',
    name: 'Política de Antispam',
    description: 'Define regras contra spam e comunicações não solicitadas',
    keywords: ['antispam', 'email marketing', 'comunicação', 'spam'],
    slug: 'politica-antispam',
    icon: '🚫',
    category: 'legal'
  },
  {
    id: 'copyright-policy',
    name: 'Política de Propriedade Intelectual',
    description: 'Protege direitos autorais e propriedade intelectual',
    keywords: ['direitos autorais', 'propriedade intelectual', 'copyright', 'DMCA'],
    slug: 'politica-direitos-autorais',
    icon: '©️',
    category: 'legal'
  },
  {
    id: 'content-policy',
    name: 'Política de Conteúdo',
    description: 'Define diretrizes para conteúdo aceitável na plataforma',
    keywords: ['conteúdo', 'diretrizes', 'moderação', 'comunidade'],
    slug: 'politica-conteudo',
    icon: '📝',
    category: 'legal'
  },
  {
    id: 'comment-moderation',
    name: 'Política de Moderação de Comentários',
    description: 'Regras para moderação e aprovação de comentários',
    keywords: ['comentários', 'moderação', 'comunidade', 'interação'],
    slug: 'moderacao-comentarios',
    icon: '💬',
    category: 'legal'
  },
  {
    id: 'accessibility-policy',
    name: 'Política de Acessibilidade',
    description: 'Compromisso com acessibilidade digital para todos os usuários',
    keywords: ['acessibilidade', 'inclusão', 'deficiência', 'WCAG'],
    slug: 'politica-acessibilidade',
    icon: '♿',
    category: 'legal'
  },
  {
    id: 'sustainability-policy',
    name: 'Política de Sustentabilidade',
    description: 'Compromisso com práticas sustentáveis e responsabilidade social',
    keywords: ['sustentabilidade', 'meio ambiente', 'responsabilidade social'],
    slug: 'politica-sustentabilidade',
    icon: '🌱',
    category: 'business'
  }
];

export const getPolicyBySlug = (slug: string): PolicyType | undefined => {
  return POLICY_TYPES.find(policy => policy.slug === slug);
};

export const getPolicyById = (id: string): PolicyType | undefined => {
  return POLICY_TYPES.find(policy => policy.id === id);
};