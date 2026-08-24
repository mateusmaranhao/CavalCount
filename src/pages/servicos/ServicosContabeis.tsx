import { SEO } from '../../components/SEO';
import { FinalCTA } from '../../components/FinalCTA';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, FileSpreadsheet } from 'lucide-react';

export function ServicosContabeis() {
  return (
    <>
      <SEO 
        title="Serviços Contábeis em Indaiatuba | CavalCount"
        description="Organização contábil, informações para tomada de decisão e demonstrações para empresas em Indaiatuba. Segurança e suporte ao seu negócio."
        canonicalUrl="https://cavalcount.com.br/servicos/servicos-contabeis/"
      />
      
      <div className="bg-caval-dark text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-caval-gold/20 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <nav className="flex text-sm text-caval-beige/80 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li className="inline-flex items-center"><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-caval-beige font-medium" aria-current="page">Serviços Contábeis</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-caval-gold/20 text-caval-gold-light rounded-2xl flex items-center justify-center mb-6">
              <FileSpreadsheet className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Serviços Contábeis em Indaiatuba</h1>
            <p className="text-xl text-caval-beige leading-relaxed">
              Transformamos os dados da sua empresa em informações estruturadas e demonstrações confiáveis para apoiar suas decisões.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12 text-lg text-caval-dark/80 leading-relaxed">
              <section>
                <h2 className="text-3xl font-bold text-caval-dark mb-6">Contabilidade como ferramenta de gestão</h2>
                <p className="mb-4">
                  A organização contábil vai além de atender às exigências do governo; ela é fundamental para o acompanhamento da saúde financeira do seu negócio. Na CavalCount, prestamos um serviço focado em organizar o histórico da sua empresa, oferecendo suporte contínuo para o seu crescimento.
                </p>
                <p>
                  Com as demonstrações pertinentes sempre em dia, sua empresa ganha segurança perante instituições financeiras, parceiros e fisco, além de fornecer a você, empresário, uma visão clara do seu patrimônio.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-caval-dark mb-6">O que fazemos pela sua empresa</h3>
                <ul className="space-y-4">
                  {[
                    "Classificação e escrituração da movimentação contábil.",
                    "Elaboração de demonstrações contábeis (Balanço Patrimonial, DRE, etc).",
                    "Acompanhamento patrimonial para tomada de decisões.",
                    "Organização de documentos e conformidade.",
                    "Apoio ao empresário com análises baseadas em dados."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-caval-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white/60 backdrop-blur-md border border-white/80 p-8 rounded-2xl shadow-sm sticky top-32">
                <h3 className="text-xl font-bold text-caval-dark mb-4">Para quem é indicado?</h3>
                <p className="text-sm text-caval-dark/80 mb-6">Empresários que entendem a importância de manter a escrituração contábil em dia para buscar investimentos, linhas de crédito ou apenas manter o negócio blindado e organizado.</p>
                
                <h4 className="font-bold text-caval-dark mb-4 mt-8">Outros Serviços</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/servicos/servicos-fiscais" className="text-caval-gold font-medium hover:underline">Serviços Fiscais &rarr;</Link></li>
                  <li><Link to="/servicos/folha-de-pagamento" className="text-caval-gold font-medium hover:underline">Folha de Pagamento &rarr;</Link></li>
                  <li><Link to="/servicos/imposto-de-renda" className="text-caval-gold font-medium hover:underline">Imposto de Renda &rarr;</Link></li>
                </ul>

                <a href="https://wa.me/5519971468014" target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center w-full py-4 bg-caval-gold text-caval-dark font-bold rounded-xl hover:bg-caval-gold transition-colors">
                  Falar com especialista
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <FinalCTA />
    </>
  );
}
