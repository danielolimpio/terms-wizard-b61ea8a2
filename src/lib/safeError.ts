/**
 * Maps raw errors to safe, user-friendly messages.
 * Prevents leaking database schema, table names, or internal details.
 */
export function toSafeError(context: 'auth' | 'load' | 'save' | 'delete' | 'upload' | 'general' = 'general'): string {
  const messages: Record<string, string> = {
    auth: 'Falha na autenticação. Verifique suas credenciais.',
    load: 'Erro ao carregar os dados. Tente novamente.',
    save: 'Erro ao salvar. Tente novamente.',
    delete: 'Erro ao deletar. Tente novamente.',
    upload: 'Erro ao fazer upload. Tente novamente.',
    general: 'Ocorreu um erro. Tente novamente.',
  };
  return messages[context] || messages.general;
}
