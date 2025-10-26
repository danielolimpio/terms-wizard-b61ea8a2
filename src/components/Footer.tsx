import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="inline-block mb-4">
              <img src={logo} alt="Políticas de Privacidade" className="h-10" />
            </a>
            <p className="text-sm text-muted-foreground">
              Crie políticas legais profissionais de forma rápida e fácil.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Políticas</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/politicas" className="text-muted-foreground hover:text-primary">Todas as Políticas</a></li>
              <li><a href="/politica-privacidade" className="text-muted-foreground hover:text-primary">Política de Privacidade</a></li>
              <li><a href="/termos-uso" className="text-muted-foreground hover:text-primary">Termos de Uso</a></li>
              <li><a href="/politica-cookies" className="text-muted-foreground hover:text-primary">Política de Cookies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/ajuda" className="text-muted-foreground hover:text-primary">Ajuda</a></li>
              <li><a href="/contato" className="text-muted-foreground hover:text-primary">Contato</a></li>
              <li><a href="/sobre" className="text-muted-foreground hover:text-primary">Sobre</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-primary">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/nossa-privacidade" className="text-muted-foreground hover:text-primary">Nossa Privacidade</a></li>
              <li><a href="/nossos-termos" className="text-muted-foreground hover:text-primary">Nossos Termos</a></li>
              <li><a href="/uso-cookies" className="text-muted-foreground hover:text-primary">Uso de Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © 2025 | Todos direitos reservados | Desenvolvido por{" "}
            <a 
              href="https://danielolimpio.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              DanielOlimpio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};