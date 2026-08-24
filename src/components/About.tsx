export function About() {
  return (
    <section id="sobre" className="relative z-10 py-24 md:py-32 bg-caval-gold/5 backdrop-blur-sm border-y border-white/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-caval-dark mb-8 md:text-5xl">
            Uma assessoria contábil para estar ao lado da sua empresa
          </h2>
          <div className="space-y-6 text-lg text-caval-dark/80 leading-relaxed mb-10">
            <p>
              A CavalCount Assessoria Contábil atua como parceira estratégica de empresas e empreendedores, oferecendo suporte especializado em gestão contábil, fiscal, folha de pagamento e Imposto de Renda.
            </p>
            <p>
              Nosso atendimento acompanha o ritmo do seu negócio: damos suporte desde empreendedores que estão começando sua jornada, incluindo MEIs, até empresas consolidadas nos regimes do Simples Nacional e Lucro Presumido.
            </p>
          </div>
          <a 
            href="/sobre/" 
            className="inline-flex h-14 items-center justify-center rounded-xl bg-white/60 backdrop-blur-md border border-white/80 px-8 text-base font-semibold text-caval-dark/80 transition-all hover:bg-white shadow-sm"
          >
            Conheça a CavalCount
          </a>
        </div>
      </div>
    </section>
  );
}
