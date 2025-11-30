import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, Shield, Cookie, RefreshCw, Eye, Lock, Mail, AlertCircle, Copyright, MessageSquare, Users, Accessibility, Leaf, HelpCircle, Phone, Info, Newspaper } from "lucide-react";

export default function SitemapPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Helmet>
        <title>Mapa do Site | Todas as Páginas do Gerador de Políticas</title>
        <meta 
          name="description" 
          content="Navegue por todas as seções do gerador de políticas legais. Acesso rápido a geradores, blog, ajuda e informações sobre LGPD e GDPR." 
        />
        <link rel="canonical" href="https://politicadeprivacidade.org/sitemap" />
      </Helmet>
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl mb-6 shadow-lg">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Mapa do Site
            </h1>
            <p className="text-lg text-muted-foreground">
              Veja todas as seções do site organizadas para facilitar sua navegação
            </p>
          </div>

          <div className="grid gap-8">
            {/* Páginas Principais */}
            <section className="bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <FileText className="text-primary h-6 w-6" />
                </div>
                Páginas Principais
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                <li>
                  <a href="/" className="text-primary hover:underline flex items-center gap-2">
                    Início
                  </a>
                </li>
                <li>
                  <a href="/sobre" className="text-primary hover:underline flex items-center gap-2">
                    <Info size={16} />
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="/politicas" className="text-primary hover:underline flex items-center gap-2">
                    <FileText size={16} />
                    Todas as Políticas
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-primary hover:underline flex items-center gap-2">
                    <Newspaper size={16} />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/ajuda" className="text-primary hover:underline flex items-center gap-2">
                    <HelpCircle size={16} />
                    Ajuda
                  </a>
                </li>
                <li>
                  <a href="/contato" className="text-primary hover:underline flex items-center gap-2">
                    <Phone size={16} />
                    Contato
                  </a>
                </li>
              </ul>
            </section>

            {/* Geradores de Políticas */}
            <section className="bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                Geradores de Políticas
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                <li>
                  <a href="/gerador-politica-privacidade" className="text-primary hover:underline flex items-center gap-2">
                    <Shield size={16} />
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/gerador-termos-uso" className="text-primary hover:underline flex items-center gap-2">
                    <FileText size={16} />
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="/gerador-politica-cookies" className="text-primary hover:underline flex items-center gap-2">
                    <Cookie size={16} />
                    Política de Cookies
                  </a>
                </li>
                <li>
                  <a href="/gerador-politica-reembolso" className="text-primary hover:underline flex items-center gap-2">
                    <RefreshCw size={16} />
                    Política de Reembolso
                  </a>
                </li>
                <li>
                  <a href="/gerador-politica-transparencia" className="text-primary hover:underline flex items-center gap-2">
                    <Eye size={16} />
                    Política de Transparência
                  </a>
                </li>
                <li>
                  <a href="/gerador-politica-seguranca" className="text-primary hover:underline flex items-center gap-2">
                    <Lock size={16} />
                    Política de Segurança
                  </a>
                </li>
                <li>
                  <a href="/gerador-politica-antispam" className="text-primary hover:underline flex items-center gap-2">
                    <Mail size={16} />
                    Política Antispam
                  </a>
                </li>
                <li>
                  <a href="/gerador-politica-propriedade-intelectual" className="text-primary hover:underline flex items-center gap-2">
                    <Copyright size={16} />
                    Política de Propriedade Intelectual
                  </a>
                </li>
                <li>
                  <a href="/gerador-politica-conteudo" className="text-primary hover:underline flex items-center gap-2">
                    <AlertCircle size={16} />
                    Política de Conteúdo
                  </a>
                </li>
                <li>
                  <a href="/gerador-politica-moderacao" className="text-primary hover:underline flex items-center gap-2">
                    <MessageSquare size={16} />
                    Política de Moderação de Comentários
                  </a>
                </li>
                <li>
                  <a href="/gerador-politica-acessibilidade" className="text-primary hover:underline flex items-center gap-2">
                    <Accessibility size={16} />
                    Política de Acessibilidade
                  </a>
                </li>
                <li>
                  <a href="/gerador-politica-sustentabilidade" className="text-primary hover:underline flex items-center gap-2">
                    <Leaf size={16} />
                    Política de Sustentabilidade
                  </a>
                </li>
              </ul>
            </section>

            {/* Páginas Informativas */}
            <section className="bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Info className="text-primary h-6 w-6" />
                </div>
                Páginas Informativas
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                <li>
                  <a href="/politica-privacidade" className="text-primary hover:underline flex items-center gap-2">
                    <Shield size={16} />
                    Nossa Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/termos-uso" className="text-primary hover:underline flex items-center gap-2">
                    <FileText size={16} />
                    Nossos Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="/politica-cookies" className="text-primary hover:underline flex items-center gap-2">
                    <Cookie size={16} />
                    Nossa Política de Cookies
                  </a>
                </li>
              </ul>
            </section>

            {/* Posts do Blog */}
            <section className="bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Newspaper className="text-primary h-6 w-6" />
                </div>
                Artigos do Blog
              </h2>
              <ul className="space-y-3">
                <li>
                  <a href="/blog/politica-privacidade-o-que-e-por-que-precisa-modelo-gratuito-2026" className="text-primary hover:underline">
                    Política de Privacidade: O Que É, Por Que Você Precisa e Modelo Gratuito para 2026
                  </a>
                </li>
                <li>
                  <a href="/blog/como-escrever-termos-do-seu-site-evitar-processos-garantir-seguranca-juridica" className="text-primary hover:underline">
                    Como Escrever os Termos de Uso do Seu Site, Evitar Processos e Garantir Segurança Jurídica
                  </a>
                </li>
                <li>
                  <a href="/blog/politica-cookies-guia-completo-lgpd-gdpr-banner-correto-2026" className="text-primary hover:underline">
                    Política de Cookies: Guia Completo LGPD e GDPR + Como Fazer o Banner Correto em 2026
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
