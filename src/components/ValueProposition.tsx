import { motion } from "motion/react";
import valueImage from '../assets/images/value_office.jpg'; // We will use a placeholder or generic image

export function ValueProposition() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-caval-gold/30/50 blur-[80px] rounded-full mix-blend-multiply opacity-50 translate-x-10 translate-y-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
              alt="Reunião de contabilidade" 
              className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-xl shadow-slate-200/50"
            />
            {/* Glassmorphic floating card */}
            <div className="absolute -bottom-8 -right-8 z-20 hidden md:block bg-white/70 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-caval-gold/20 rounded-full flex items-center justify-center text-caval-gold">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-caval-dark">Segurança Fiscal</p>
                  <p className="text-xs text-caval-dark/60">Conformidade garantida</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-caval-dark mb-6 leading-tight">
              Uma contabilidade que entende o seu negócio
            </h2>
            <div className="space-y-6 text-lg text-caval-dark/80 leading-relaxed">
              <p>
                Atendemos desde <strong>MEIs e empreendedores que estão começando</strong> até empresas estabelecidas nos regimes do <strong>Simples Nacional e Lucro Presumido</strong>.
              </p>
              <p>
                Acreditamos que a contabilidade deve ser uma parceira estratégica, e não apenas uma geradora de guias. Oferecemos um acompanhamento de perto, garantindo a organização das suas finanças e segurança fiscal.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Acompanhamento", 
                  "Organização", 
                  "Segurança fiscal", 
                  "Eficiência tributária", 
                  "Apoio ao empresário", 
                  "Proximidade"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-caval-gold/20 flex items-center justify-center text-caval-gold">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span className="font-medium text-caval-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
