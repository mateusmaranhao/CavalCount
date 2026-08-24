import { motion } from "motion/react";
import { Link } from "react-router-dom";

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
        <Link to="/servicos" className="hover:text-caval-gold transition-colors">Serviços</Link>
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
