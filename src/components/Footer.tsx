import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="mt-16 border-t-2 border-gray-800 bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="inline-block mb-4">
              <img src={logo} alt="Políticas de Privacidade" className="h-14" />
            </a>
            <p className="text-base text-gray-300">
              Crie políticas legais profissionais de forma rápida e fácil 100% gratuitos para seu site!
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Políticas</h3>
            <ul className="space-y-2 text-base">
              <li><a href="/politicas" className="text-gray-300 hover:text-primary">Todas as Políticas</a></li>
              <li><a href="/politica-privacidade" className="text-gray-300 hover:text-primary">Política de Privacidade</a></li>
              <li><a href="/termos-uso" className="text-gray-300 hover:text-primary">Termos de Uso</a></li>
              <li><a href="/politica-cookies" className="text-gray-300 hover:text-primary">Política de Cookies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Suporte</h3>
            <ul className="space-y-2 text-base">
              <li><a href="/ajuda" className="text-gray-300 hover:text-primary">Ajuda</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-primary">Contato</a></li>
              <li><a href="/sobre" className="text-gray-300 hover:text-primary">Sobre</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-primary">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Legal</h3>
            <ul className="space-y-2 text-base">
              <li><a href="/politica-privacidade" className="text-gray-300 hover:text-primary">Política de Privacidade</a></li>
              <li><a href="/termos-uso" className="text-gray-300 hover:text-primary">Termos de Uso</a></li>
              <li><a href="/politica-cookies" className="text-gray-300 hover:text-primary">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-base text-gray-400">
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