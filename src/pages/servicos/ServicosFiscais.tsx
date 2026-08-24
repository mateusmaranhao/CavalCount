import { SEO } from '../../components/SEO';
import { FinalCTA } from '../../components/FinalCTA';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Calculator } from 'lucide-react';

export function ServicosFiscais() {
  return (
    <>
      <SEO 
        title="Serviços Fiscais em Indaiatuba | CavalCount"
        description="Apuração de tributos, acompanhamento e conformidade para empresas do Simples Nacional e Lucro Presumido em Indaiatuba."
        canonicalUrl="https://cavalcount.com.br/servicos/servicos-fiscais/"
      />
      
      {/* Breadcrumb & Hero */}
      <div className="bg-caval-dark text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-caval-gold/30 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <nav className="flex text-sm text-caval-beige/80 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li>
                <Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link>
              </li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-caval-beige font-medium" aria-current="page">Serviços Fiscais</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-caval-gold/20 text-caval-gold-light rounded-2xl flex items-center justify-center mb-6">
              <Calculator className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Serviços Fiscais em Indaiatuba</h1>
            <p className="text-xl text-caval-beige leading-relaxed">
              Apuração rigorosa de tributos e acompanhamento contínuo para garantir que a sua empresa atue em conformidade com a legislação fiscal.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12 text-lg text-caval-dark/80 leading-relaxed">
              <section>
                <h2 className="text-3xl font-bold text-caval-dark mb-6">Como nossos serviços fiscais ajudam o seu negócio</h2>
                <p className="mb-4">
                  A rotina fiscal de uma empresa é complexa e exige máxima atenção aos detalhes. A CavalCount oferece uma gestão fiscal estruturada para empresas do Simples Nacional e Lucro Presumido, garantindo a organização e a correta apuração das obrigações fiscais.
                </p>
                <p>
                  Nosso objetivo não é apenas emitir guias, mas fornecer um acompanhamento próximo para que você entenda o cenário da sua empresa, evitando surpresas e multas por descumprimento de prazos.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-caval-dark mb-6">O que está incluído?</h3>
                <ul className="space-y-4">
                  {[
                    "Apuração de tributos municipais, estaduais e federais.",
                    "Análise e acompanhamento do regime tributário (Simples Nacional e Lucro Presumido).",
                    "Entrega de obrigações acessórias dentro dos prazos legais.",
                    "Orientação sobre emissão de notas fiscais e retenções.",
                    "Organização e conformidade da rotina fiscal da empresa."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-caval-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-caval-gold/5 p-8 rounded-2xl border border-caval-gold/20">
                <h3 className="text-xl font-bold text-caval-dark mb-4">Problemas que evitamos para você</h3>
                <p>O descumprimento de prazos ou o cálculo incorreto de guias de impostos podem resultar em multas pesadas e restrições para a empresa. Nossa responsabilidade é garantir a total conformidade para que você tenha tranquilidade para gerenciar seu negócio sem temer autuações da Receita.</p>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white/60 backdrop-blur-md border border-white/80 p-8 rounded-2xl shadow-sm sticky top-32">
                <h3 className="text-xl font-bold text-caval-dark mb-4">Para quem é indicado?</h3>
                <p className="text-sm text-caval-dark/80 mb-6">Empresas e MEIs que precisam manter a regularidade fiscal, buscando segurança na apuração de impostos e entrega de declarações.</p>
                
                <h4 className="font-bold text-caval-dark mb-4 mt-8">Outros Serviços</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/servicos/servicos-contabeis" className="text-caval-gold font-medium hover:underline">Serviços Contábeis &rarr;</Link></li>
                  <li><Link to="/servicos/folha-de-pagamento" className="text-caval-gold font-medium hover:underline">Folha de Pagamento &rarr;</Link></li>
                  <li><Link to="/servicos/imposto-de-renda" className="text-caval-gold font-medium hover:underline">Imposto de Renda &rarr;</Link></li>
                </ul>

                <a href="https://wa.me/5519971468014" target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center w-full py-4 bg-caval-gold text-caval-dark font-bold rounded-xl hover:bg-caval-gold transition-colors">
                  Tirar dúvidas no WhatsApp
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
