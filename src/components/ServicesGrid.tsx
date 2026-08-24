import { FileText, Calculator, Users, FileSpreadsheet } from 'lucide-react';

const services = [
  {
    title: "Serviços Fiscais",
    desc: "Apuração rigorosa de impostos e total conformidade com a legislação tributária.",
    slug: "servicos-fiscais",
    size: "large",
    icon: <Calculator className="h-6 w-6" />
  },
  {
    title: "Serviços Contábeis",
    desc: "Informações estruturadas para dar suporte real às decisões da sua empresa.",
    slug: "servicos-contabeis",
    size: "small",
    icon: <FileSpreadsheet className="h-6 w-6" />
  },
  {
    title: "Folha de Pagamento",
    desc: "Gestão completa de RH, rotinas trabalhistas e cálculos precisos para a sua equipe.",
    slug: "folha-de-pagamento",
    size: "small",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Imposto de Renda",
    desc: "Assessoria completa para declarações seguras, eficientes e dentro do prazo.",
    slug: "imposto-de-renda",
    size: "large",
    icon: <FileText className="h-6 w-6" />
  }
];

export function ServicesGrid() {
  return (
    <section id="servicos" className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-caval-dark md:text-5xl">
            Serviços contábeis para cuidar do seu negócio de ponta a ponta
          </h2>
          <p className="text-lg text-caval-dark/80">
            Estrutura completa e equipe especializada para atender as necessidades contábeis, fiscais e trabalhistas da sua empresa com segurança e responsabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, idx) => (
            <a
              href={`/servicos/${service.slug}/`}
              key={service.slug}
              className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl p-8 bg-white/40 backdrop-blur-md border border-white/60 shadow-sm transition-all hover:bg-white/60 hover:-translate-y-1 hover:shadow-md ${
                service.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-caval-gold/20 text-caval-gold shadow-inner">
                {service.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-caval-dark">{service.title}</h3>
              <p className="mb-8 leading-relaxed text-caval-dark/80">{service.desc}</p>
              <span className="mt-auto inline-flex items-center text-sm font-bold text-caval-gold transition-colors group-hover:text-indigo-700">
                Conhecer serviço <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

