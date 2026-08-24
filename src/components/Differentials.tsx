import { CheckCircle2 } from "lucide-react";

const differentials = [
  {
    title: "Atendimento próximo",
    description: "Relacionamento mais próximo com o cliente e comunicação clara e acessível."
  },
  {
    title: "Responsabilidade",
    description: "Compromisso integral com as obrigações fiscais e necessidades da sua empresa."
  },
  {
    title: "Organização",
    description: "Informações contábeis estruturadas para facilitar a rotina empresarial."
  },
  {
    title: "Eficiência tributária",
    description: "Busca por uma gestão tributária mais eficiente dentro da legislação aplicável."
  },
  {
    title: "Parceria",
    description: "A contabilidade deve funcionar como verdadeiro apoio às decisões do empresário."
  },
  {
    title: "Competência",
    description: "Atendimento profissional, cuidadoso e sempre atualizado."
  }
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative z-10 py-24 md:py-32 bg-caval-dark overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-caval-gold/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-caval-gold/20 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Por que empresas escolhem a CavalCount?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, idx) => (
            <div key={idx} className="flex gap-4 p-8 rounded-2xl bg-caval-dark/90/50 backdrop-blur-md border border-slate-700/50 hover:bg-caval-dark/90/80 transition-colors">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-caval-gold-light" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-caval-beige/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
