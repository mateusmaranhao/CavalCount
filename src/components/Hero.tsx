import { motion } from "motion/react";
import heroImage from '../assets/images/hero_office_1787322512310.jpg';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32 flex items-center min-h-[90vh]">
      {/* Background Image with Light Frosted Glass Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Escritório corporativo moderno"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#FAF8F5]/85 backdrop-blur-[6px]" />
        {/* Subtle Glowing Orbs from theme */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-caval-gold/30/50 rounded-full blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-caval-gold-light/30/50 rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          {/* Element 1: Eyebrow (Contextual SEO) */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-caval-gold/20/60 border border-caval-gold-light/40/60 backdrop-blur-sm rounded-full mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-caval-gold"></span>
            <span className="text-[11px] font-bold tracking-wider text-caval-gold-dark uppercase">
              Contabilidade em Indaiatuba — SP
            </span>
          </motion.div>

          {/* Element 2: H1 */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-caval-dark md:text-6xl lg:text-7xl"
          >
            Assessoria contábil em Indaiatuba para empresas que querem <span className="text-caval-gold">crescer com segurança.</span>
          </motion.h1>

          {/* Element 3: H2 acting as promise */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-2xl font-semibold leading-snug text-caval-dark/90 md:text-3xl"
          >
            Mais segurança para suas decisões. Menos preocupação com a contabilidade.
          </motion.h2>

          {/* Element 4: Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-caval-dark/80"
          >
            Conte com uma assessoria contábil completa para cuidar das obrigações fiscais, contábeis, folha de pagamento e Imposto de Renda da sua empresa.
          </motion.p>

          {/* Element 5: CTAs (Primary + Secondary) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="https://wa.me/5519971468014" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-caval-gold px-8 text-base font-semibold text-caval-dark shadow-lg shadow-caval-gold/20 transition-all hover:bg-caval-gold-dark active:scale-[0.98]"
            >
              Falar com um especialista
            </a>
            <a 
              href="#servicos" 
              className="inline-flex h-14 items-center justify-center rounded-xl bg-white/60 backdrop-blur-md border border-white/80 px-8 text-base font-semibold text-caval-dark/80 transition-all hover:bg-white/80 shadow-sm"
            >
              Conheça nossos serviços
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
