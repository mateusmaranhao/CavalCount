import { SEO } from '../components/SEO';
import { FinalCTA } from '../components/FinalCTA';

export function Sobre() {
  return (
    <>
      <SEO 
        title="Sobre a CavalCount | Assessoria Contábil em Indaiatuba"
        description="Conheça a CavalCount, sua parceira estratégica em serviços contábeis, fiscais e folha de pagamento em Indaiatuba."
        canonicalUrl="https://cavalcount.com.br/sobre/"
      />
      
      <div className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#FAF8F5]/85 backdrop-blur-[6px] -z-10" />
        <div className="absolute top-[0%] left-[-10%] w-[600px] h-[600px] bg-caval-gold/20 rounded-full blur-[120px] mix-blend-multiply -z-10"></div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-caval-dark mb-6">
            Sobre a CavalCount
          </h1>
          <p className="text-xl text-caval-dark/80 max-w-3xl mx-auto leading-relaxed">
            Nós somos a assessoria contábil que atua ao lado da sua empresa em Indaiatuba, oferecendo um suporte próximo, responsável e altamente profissional.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-12 text-lg text-caval-dark/80 leading-relaxed">
            <p>
              A <strong>CavalCount Assessoria Contábil</strong> nasceu com o propósito de atuar como uma parceira verdadeira para empresas e empreendedores. Nossa missão é ir além da emissão de guias, oferecendo um suporte robusto em gestão contábil, fiscal, folha de pagamento e Imposto de Renda.
            </p>
            <p>
              Entendemos que cada etapa do negócio possui suas particularidades. Por isso, nosso atendimento atua de maneira próxima e personalizada, seja para orientar empreendedores que estão começando sua jornada (incluindo MEIs), seja para assessorar empresas estabelecidas nos regimes do Simples Nacional e Lucro Presumido.
            </p>
            <p>
              Nosso compromisso é estruturar a rotina da sua empresa, garantindo conformidade com a legislação e buscando a melhor eficiência tributária. Acreditamos que a contabilidade é uma ferramenta de gestão capaz de fornecer segurança e dados valiosos para as decisões empresariais.
            </p>
            
            <div className="bg-white/60 backdrop-blur-md border border-white/80 p-10 rounded-3xl shadow-sm my-16">
              <h2 className="text-2xl font-bold text-caval-dark mb-8 text-center">Qualidade, responsabilidade, dedicação e parceria</h2>
              <p className="text-center mb-8">
                Esses são os valores que pautam o nosso trabalho diário e que refletem o reconhecimento dos nossos clientes. Com base em nossas avaliações públicas, a CavalCount é reconhecida por entregar um atendimento ágil e comprometido, garantindo a tranquilidade que o empresário precisa.
              </p>
              <div className="flex justify-center text-caval-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-3xl">★</span>
                ))}
              </div>
              <p className="text-center font-bold text-caval-dark">5,0 estrelas no Google</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
