import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="relative z-20 bg-white/60 backdrop-blur-xl border-t border-white/40 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 bg-caval-dark rounded flex items-center justify-center">
                <div className="h-4 w-4 border-2 border-white rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-caval-dark">CAVALCOUNT</span>
            </Link>
            <p className="text-sm text-caval-dark/80 leading-relaxed mb-6">
              Assessoria contábil completa para empresas e empreendedores que buscam segurança, conformidade e crescimento.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-caval-dark mb-6 uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-4 text-sm text-caval-dark/80">
              <li><Link to="/" className="hover:text-caval-gold transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-caval-gold transition-colors">Sobre</Link></li>
              <li><Link to="/servicos" className="hover:text-caval-gold transition-colors">Serviços</Link></li>
              <li><Link to="/contato" className="hover:text-caval-gold transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-caval-dark mb-6 uppercase tracking-wider text-sm">Serviços</h4>
            <ul className="space-y-4 text-sm text-caval-dark/80">
              <li><Link to="/servicos/servicos-fiscais/" className="hover:text-caval-gold transition-colors">Serviços Fiscais</Link></li>
              <li><Link to="/servicos/servicos-contabeis/" className="hover:text-caval-gold transition-colors">Serviços Contábeis</Link></li>
              <li><Link to="/servicos/folha-de-pagamento/" className="hover:text-caval-gold transition-colors">Folha de Pagamento</Link></li>
              <li><Link to="/servicos/imposto-de-renda/" className="hover:text-caval-gold transition-colors">Imposto de Renda</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-caval-dark mb-6 uppercase tracking-wider text-sm">Atendimento</h4>
            <ul className="space-y-4 text-sm text-caval-dark/80">
              <li className="leading-relaxed">
                R. Melvin Jones, 386 - Jardim Nova Indaia,<br/>
                Indaiatuba - SP, 13344-511
              </li>
              <li>
                <a href="https://wa.me/5519971468014" target="_blank" rel="noopener noreferrer" className="hover:text-caval-gold transition-colors font-medium">
                  WhatsApp: (19) 97146-8014
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-caval-dark/60">
          <p>© 2026 CavalCount — Assessoria Contábil Empresarial. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-caval-gold transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
