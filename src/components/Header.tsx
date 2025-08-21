import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <>
      <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
        Início
      </a>
      <a href="/sobre" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Sobre
      </a>
      <a href="/politicas" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Todas as Políticas
      </a>
      <a href="/ajuda" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Ajuda
      </a>
      <a href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Blog
      </a>
      <a href="/contato" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Contato
      </a>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="text-xl md:text-2xl font-bold text-primary">📋</div>
          <a href="/" className="text-sm md:text-xl font-bold text-foreground hover:text-primary transition-colors">
            Gerador de Políticas
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <NavLinks />
                <div className="pt-4 border-t border-border space-y-2">
                  <Button 
                    variant="google-outline" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/ajuda'}
                  >
                    Ajuda
                  </Button>
                  <Button 
                    variant="google" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/'}
                  >
                    Gerar Política
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        )}

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-2 md:space-x-4">
          <Button variant="google-outline" size="sm" className="text-xs md:text-sm px-3 md:px-4" onClick={() => window.location.href = '/ajuda'}>
            Ajuda
          </Button>
          <Button variant="google" size="sm" className="text-xs md:text-sm px-3 md:px-4" onClick={() => window.location.href = '/'}>
            Gerar Política
          </Button>
        </div>
      </div>
    </header>
  );
};