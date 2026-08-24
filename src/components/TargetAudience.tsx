export function TargetAudience() {
  const audiences = [
    {
      title: "Estou começando meu negócio",
      desc: "Preciso de orientação para organizar minha empresa desde o início e garantir a formalidade.",
      cta: "Quero abrir/organizar minha empresa"
    },
    {
      title: "Já tenho uma empresa",
      desc: "Quero uma contabilidade que acompanhe minha rotina e cuide das minhas obrigações mensais.",
      cta: "Quero falar com um especialista"
    },
    {
      title: "Quero mais segurança tributária",
      desc: "Preciso entender melhor minha situação fiscal e buscar eficiência dentro da legislação.",
      cta: "Quero conversar sobre minha empresa"
    }
  ];

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-caval-dark md:text-5xl">
            Para quem é a CavalCount?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, idx) => (
            <div key={idx} className="flex flex-col h-full p-8 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold text-caval-dark mb-4">{item.title}</h3>
              <p className="text-caval-dark/80 mb-8 leading-relaxed flex-grow">
                {item.desc}
              </p>
              <a 
                href="https://wa.me/5519971468014" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex w-full h-12 items-center justify-center rounded-xl bg-caval-dark px-6 text-sm font-semibold text-white transition-colors hover:bg-caval-dark/90"
              >
                {item.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
