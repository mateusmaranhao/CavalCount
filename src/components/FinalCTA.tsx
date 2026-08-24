export function FinalCTA() {
  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-caval-dark z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-caval-gold/30 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Sua empresa merece uma contabilidade que esteja ao seu lado.
          </h2>
          <p className="text-xl text-caval-beige mb-10 leading-relaxed">
            Fale com a CavalCount e descubra como podemos ajudar sua empresa a manter a rotina contábil organizada, cumprir suas obrigações e tomar decisões com mais segurança.
          </p>
          <a 
            href="https://wa.me/5519971468014" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-xl bg-caval-gold px-8 text-base font-semibold text-caval-dark shadow-lg shadow-caval-gold/30 transition-all hover:bg-caval-gold-light hover:scale-105 active:scale-95"
          >
            Falar com um especialista no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
