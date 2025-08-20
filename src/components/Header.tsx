import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="text-xl md:text-2xl font-bold text-primary">📋</div>
          <h1 className="text-sm md:text-xl font-bold text-foreground">
            Gerador de Políticas
          </h1>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6">
          <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="/politicas" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Todas as Políticas
          </a>
          <a href="/sobre" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Sobre
          </a>
        </nav>

        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="google-outline" size="sm" className="text-xs md:text-sm px-2 md:px-4" onClick={() => window.location.href = '/ajuda'}>
            Ajuda
          </Button>
          <Button variant="google" size="sm" className="text-xs md:text-sm px-2 md:px-4" onClick={() => window.location.href = '/'}>
            Gerar Política
          </Button>
        </div>
      </div>
    </header>
  );
};