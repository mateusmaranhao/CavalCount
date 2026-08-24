import { SEO } from '../../components/SEO';
import { FinalCTA } from '../../components/FinalCTA';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, FileText } from 'lucide-react';

export function ImpostoRenda() {
  return (
    <>
      <SEO 
        title="Imposto de Renda em Indaiatuba | CavalCount"
        description="Assessoria completa para elaboração e entrega da declaração de Imposto de Renda em Indaiatuba. Segurança e conformidade para o seu patrimônio."
        canonicalUrl="https://cavalcount.com.br/servicos/imposto-de-renda/"
      />
      
      <div className="bg-caval-dark text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-caval-gold/20 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <nav className="flex text-sm text-caval-beige/80 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li className="inline-flex items-center"><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-caval-beige font-medium" aria-current="page">Imposto de Renda</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-caval-gold/20 text-caval-gold-light rounded-2xl flex items-center justify-center mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Imposto de Renda em Indaiatuba</h1>
            <p className="text-xl text-caval-beige leading-relaxed">
              Assessoria contábil para garantir que sua declaração seja elaborada e transmitida com total segurança.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12 text-lg text-caval-dark/80 leading-relaxed">
              <section>
                <h2 className="text-3xl font-bold text-caval-dark mb-6">Tranquilidade na hora de declarar</h2>
                <p className="mb-4">
                  A declaração do Imposto de Renda pode gerar dúvidas e preocupações. Nossa assessoria atua para analisar a sua documentação, organizar as informações e elaborar a sua declaração dentro do prazo estipulado pela Receita Federal, evitando malhas finas e inconsistências.
                </p>
                <p>
                  Com o acompanhamento da CavalCount, você garante conformidade com as normas vigentes, assegurando que o seu patrimônio seja declarado da maneira correta.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-caval-dark mb-6">Como atuamos</h3>
                <ul className="space-y-4">
                  {[
                    "Análise detalhada da documentação.",
                    "Elaboração da declaração do Imposto de Renda.",
                    "Acompanhamento e entrega dentro do prazo legal.",
                    "Orientação para o enquadramento correto das informações patrimoniais e financeiras."
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
                <p className="text-sm text-caval-dark/80 mb-6">Pessoas Físicas e empresários que precisam cumprir a obrigatoriedade da entrega da declaração do Imposto de Renda com segurança e suporte profissional.</p>
                
                <h4 className="font-bold text-caval-dark mb-4 mt-8">Outros Serviços</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/servicos/servicos-fiscais" className="text-caval-gold font-medium hover:underline">Serviços Fiscais &rarr;</Link></li>
                  <li><Link to="/servicos/servicos-contabeis" className="text-caval-gold font-medium hover:underline">Serviços Contábeis &rarr;</Link></li>
                  <li><Link to="/servicos/folha-de-pagamento" className="text-caval-gold font-medium hover:underline">Folha de Pagamento &rarr;</Link></li>
                </ul>

                <a href="https://wa.me/5519971468014" target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center w-full py-4 bg-caval-gold text-caval-dark font-bold rounded-xl hover:bg-caval-gold-light transition-colors">
                  Falar com um especialista
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
