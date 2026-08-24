import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-4 bg-white/40 backdrop-blur-lg border-b border-white/40 md:px-12 md:py-6">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-8 w-8 bg-caval-dark rounded flex items-center justify-center">
          <div className="h-4 w-4 border-2 border-white rotate-45"></div>
        </div>
        <span className="text-xl font-bold tracking-tight text-caval-dark">CAVALCOUNT</span>
      </Link>
      <div className="hidden md:flex items-center gap-10 text-sm font-medium text-caval-dark/80">
        <div className="relative group">
          <Link to="/servicos" className="flex items-center gap-1 hover:text-caval-gold transition-colors py-2">
            Serviços <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
          </Link>
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-60 p-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-caval-gold/10 flex flex-col gap-1">
              <Link to="/servicos" className="px-4 py-2.5 hover:bg-caval-gold/10 hover:text-caval-gold rounded-xl transition-colors font-semibold">Visão Geral</Link>
              <div className="h-px w-full bg-caval-gold/10 my-1"></div>
              <Link to="/servicos/servicos-fiscais" className="px-4 py-2.5 hover:bg-caval-gold/10 hover:text-caval-gold rounded-xl transition-colors">Serviços Fiscais</Link>
              <Link to="/servicos/servicos-contabeis" className="px-4 py-2.5 hover:bg-caval-gold/10 hover:text-caval-gold rounded-xl transition-colors">Serviços Contábeis</Link>
              <Link to="/servicos/folha-de-pagamento" className="px-4 py-2.5 hover:bg-caval-gold/10 hover:text-caval-gold rounded-xl transition-colors">Folha de Pagamento</Link>
              <Link to="/servicos/imposto-de-renda" className="px-4 py-2.5 hover:bg-caval-gold/10 hover:text-caval-gold rounded-xl transition-colors">Imposto de Renda</Link>
            </div>
          </div>
        </div>
        <Link to="/sobre" className="hover:text-caval-gold transition-colors">Quem Somos</Link>
        <Link to="/contato" className="hover:text-caval-gold transition-colors">Contato</Link>
        <a 
          href="https://wa.me/5519971468014" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-2.5 bg-caval-dark text-white rounded-full hover:bg-caval-dark/90 transition-colors shadow-sm"
        >
          Falar com Especialista
        </a>
      </div>
    </nav>
  );
}
