import logo from "@/assets/logo.png";
import { FileText, HelpCircle, Phone, Info, Newspaper, Shield, FileCheck, Cookie, MapPin, Mail, Smartphone } from "lucide-react";

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
              Crie políticas legais profissionais de forma rápida e fácil 100% gratuitas para seu site!
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Políticas</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="/politicas" className="text-gray-300 hover:text-primary flex items-center gap-2">
                  <FileText size={16} />
                  Todas as Políticas
                </a>
              </li>
              <li>
                <a href="/politica-privacidade" className="text-gray-300 hover:text-primary flex items-center gap-2">
                  <Shield size={16} />
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos-uso" className="text-gray-300 hover:text-primary flex items-center gap-2">
                  <FileCheck size={16} />
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/politica-cookies" className="text-gray-300 hover:text-primary flex items-center gap-2">
                  <Cookie size={16} />
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Suporte</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="/ajuda" className="text-gray-300 hover:text-primary flex items-center gap-2">
                  <HelpCircle size={16} />
                  Ajuda
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-300 hover:text-primary flex items-center gap-2">
                  <Phone size={16} />
                  Contato
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-300 hover:text-primary flex items-center gap-2">
                  <Info size={16} />
                  Sobre
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-primary flex items-center gap-2">
                  <Newspaper size={16} />
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Endereço</h3>
            <ul className="space-y-2 text-base text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Av. Julia Freire, 1200 - Expedicionários<br />João Pessoa - PB/Brasil<br />CEP: 58.041-000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:contato@politicasdeprivacidade.org" className="hover:text-primary break-all">
                  contato@politicasdeprivacidade.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone size={16} className="flex-shrink-0" />
                <a href="tel:+5512982519116" className="hover:text-primary">
                  (12) 98251-9116
                </a>
              </li>
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