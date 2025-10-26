import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[9999] max-w-md bg-card border border-border rounded-lg shadow-lg p-6 animate-in slide-in-from-bottom-5">
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Fechar"
      >
        <X className="h-4 w-4" />
      </button>
      
      <h3 className="text-lg font-semibold text-foreground mb-3">
        🍪 Políticas de Cookies
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4">
        Usamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa política de cookies.
      </p>
      
      <div className="flex flex-col gap-3 mb-4">
        <a 
          href="/nossa-privacidade" 
          className="text-sm text-primary hover:underline"
        >
          Política de Privacidade
        </a>
        <a 
          href="/nossos-termos" 
          className="text-sm text-primary hover:underline"
        >
          Termos de Uso
        </a>
        <a 
          href="/uso-cookies" 
          className="text-sm text-primary hover:underline"
        >
          Política de Cookies
        </a>
      </div>
      
      <div className="flex gap-2">
        <Button
          onClick={handleReject}
          variant="outline"
          size="sm"
          className="flex-1"
        >
          Rejeitar
        </Button>
        <Button
          onClick={handleAccept}
          variant="default"
          size="sm"
          className="flex-1"
        >
          Concordar
        </Button>
      </div>
    </div>
  );
};
