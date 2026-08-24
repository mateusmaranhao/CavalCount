export function TrustBar() {
  return (
    <div className="relative z-20 border-y border-white/60 bg-white/40 backdrop-blur-md py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-between gap-8 md:flex-nowrap">
          <div className="flex items-center gap-4">
            <div className="flex text-caval-gold">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">★</span>
              ))}
            </div>
            <div className="text-sm font-semibold text-caval-dark/80">
              5,0 no Google <span className="mx-3 text-caval-beige font-light">|</span> 20 avaliações
            </div>
          </div>
          <div className="hidden h-px flex-1 bg-white/60 md:block" />
          <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest text-caval-dark/60 uppercase">
            <span className="w-2 h-2 rounded-full bg-indigo-400/50"></span>
            <span>Atendimento próximo e responsável</span>
          </div>
        </div>
      </div>
    </div>
  );
}
