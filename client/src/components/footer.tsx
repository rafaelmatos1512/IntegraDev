import { Mail, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-gradient mb-4">
              IntegraDev.IA
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando negócios através da inteligência artificial e desenvolvimento de sistemas personalizados.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="text-blue-400 mr-3" size={20} />
                <span className="text-gray-300">contato@integradev.ia</span>
              </div>
              <div className="flex items-center">
                <Instagram className="text-pink-400 mr-3" size={20} />
                <span className="text-gray-300">@integradev.ia</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-red-400 mr-3" size={20} />
                <span className="text-gray-300">Rio de, SP - Brasil</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Agentes de IA</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sistemas Personalizados</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Integração WhatsApp</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Consultoria em IA</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 IntegraDev.IA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
