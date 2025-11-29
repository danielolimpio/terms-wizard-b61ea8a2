import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Mapeamento de URLs antigas para novas URLs (redirecionamentos 301)
const redirectMap: Record<string, string> = {
  // URLs antigas comuns que geram 404
  "/privacy-policy": "/politica-privacidade",
  "/terms-of-service": "/termos-uso",
  "/terms": "/termos-uso",
  "/cookie-policy": "/politica-cookies",
  "/cookies": "/politica-cookies",
  "/about": "/sobre",
  "/about-us": "/sobre",
  "/contact": "/contato",
  "/contact-us": "/contato",
  "/help": "/ajuda",
  "/support": "/ajuda",
  "/faq": "/ajuda",
  
  // URLs de geradores antigos
  "/generator/privacy": "/gerador-politica-privacidade",
  "/generator/terms": "/gerador-termos-uso",
  "/generator/cookies": "/gerador-politica-cookies",
  "/privacy-generator": "/gerador-politica-privacidade",
  "/terms-generator": "/gerador-termos-uso",
  "/cookie-generator": "/gerador-politica-cookies",
  
  // URLs de blog antigos
  "/posts": "/blog",
  "/articles": "/blog",
  "/news": "/blog",
  
  // Variações de URLs
  "/politica-de-privacidade": "/politica-privacidade",
  "/termos-de-uso": "/termos-uso",
  "/politica-de-cookies": "/politica-cookies",
  "/gerador": "/gerador-politica-privacidade",
  "/gerar": "/gerador-politica-privacidade",
  "/criar-politica": "/gerador-politica-privacidade",
  
  // URLs com trailing slash
  "/politicas/": "/politicas",
  "/blog/": "/blog",
  "/sobre/": "/sobre",
  "/contato/": "/contato",
  "/ajuda/": "/ajuda",
};

export const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Verifica se existe um redirecionamento para a URL atual
    const redirectTo = redirectMap[currentPath];
    
    if (redirectTo) {
      // Log para analytics
      console.log(`301 Redirect: ${currentPath} -> ${redirectTo}`);
      
      // Faz o redirecionamento preservando query params
      navigate(redirectTo + location.search, { replace: true });
      
      // Opcional: enviar para Google Analytics
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'redirect_301', {
          from_url: currentPath,
          to_url: redirectTo
        });
      }
    }
  }, [location.pathname, location.search, navigate]);

  return null;
};
