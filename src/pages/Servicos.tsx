import { SEO } from '../components/SEO';
import { ServicesGrid } from '../components/ServicesGrid';
import { FinalCTA } from '../components/FinalCTA';

export function Servicos() {
  return (
    <>
      <SEO 
        title="Serviços Contábeis em Indaiatuba | CavalCount"
        description="Conheça os serviços de contabilidade oferecidos pela CavalCount para MEIs, Simples Nacional e Lucro Presumido em Indaiatuba. Fiscais, contábeis e mais."
        canonicalUrl="https://cavalcount.com.br/servicos/"
      />
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#FAF8F5]/85 backdrop-blur-[6px] -z-10" />
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-caval-dark mb-6">
            Serviços de contabilidade em Indaiatuba
          </h1>
          <p className="text-xl text-caval-dark/80 max-w-3xl mx-auto leading-relaxed">
            A CavalCount oferece suporte completo e especializado para as diferentes necessidades contábeis, fiscais e trabalhistas da sua empresa. Atendemos desde microempreendedores até empresas estabelecidas no Lucro Presumido.
          </p>
        </div>
      </div>
      
      <ServicesGrid />

      <section className="py-24 bg-caval-gold/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-caval-dark mb-12">Qual serviço sua empresa precisa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="p-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-caval-gold-dark mb-3">Estou iniciando e preciso de orientação</h3>
              <p className="text-caval-dark/80 mb-6">Ideal para quem vai abrir uma empresa ou precisa regularizar um MEI. Orientamos sobre os primeiros passos, enquadramento e obrigações iniciais.</p>
            </div>
            <div className="p-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-caval-gold-dark mb-3">Quero segurança nas minhas rotinas mensais</h3>
              <p className="text-caval-dark/80 mb-6">Para empresas que já operam e precisam de garantia que as obrigações fiscais e trabalhistas (folha de pagamento) estão 100% corretas.</p>
            </div>
            <div className="p-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm md:col-span-2">
              <h3 className="text-xl font-bold text-caval-dark mb-3">Busco organização e dados para decisões</h3>
              <p className="text-caval-dark/80 mb-6">Focado no empresário que precisa de informações contábeis estruturadas para gerir melhor o negócio e tomar decisões baseadas em dados.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
