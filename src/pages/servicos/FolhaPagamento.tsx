import { SEO } from '../../components/SEO';
import { FinalCTA } from '../../components/FinalCTA';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Users } from 'lucide-react';

export function FolhaPagamento() {
  return (
    <>
      <SEO 
        title="Folha de Pagamento em Indaiatuba | CavalCount"
        description="Gestão de folha de pagamento e rotinas trabalhistas em Indaiatuba. Segurança e redução de erros operacionais para a sua empresa."
        canonicalUrl="https://cavalcount.com.br/servicos/folha-de-pagamento/"
      />
      
      <div className="bg-caval-dark text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-[0%] left-[20%] w-[400px] h-[400px] bg-caval-dark/30 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <nav className="flex text-sm text-caval-beige/80 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li className="inline-flex items-center"><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-caval-beige font-medium" aria-current="page">Folha de Pagamento</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-caval-gold-light/20 text-caval-gold rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Folha de Pagamento em Indaiatuba</h1>
            <p className="text-xl text-caval-beige leading-relaxed">
              Gestão de rotinas trabalhistas e organização da folha para garantir a segurança da sua empresa e da sua equipe.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12 text-lg text-caval-dark/80 leading-relaxed">
              <section>
                <h2 className="text-3xl font-bold text-caval-dark mb-6">Organização e segurança para o seu RH</h2>
                <p className="mb-4">
                  Lidar com as rotinas trabalhistas demanda extrema precisão e atualização constante sobre a legislação. Nossa equipe cuida de toda a organização da folha de pagamento, processando os cálculos com segurança e acompanhando as obrigações acessórias relacionadas aos seus colaboradores.
                </p>
                <p>
                  Com a CavalCount, você reduz significativamente o risco de erros operacionais, evitando multas e passivos trabalhistas indesejados.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-caval-dark mb-6">Benefícios da nossa gestão</h3>
                <ul className="space-y-4">
                  {[
                    "Cálculo preciso e emissão da folha de pagamento mensal e adiantamentos.",
                    "Gestão de admissões, rescisões e férias.",
                    "Geração de encargos sociais (INSS, FGTS, etc).",
                    "Acompanhamento das obrigações trabalhistas.",
                    "Redução de passivos trabalhistas através da conformidade legal."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-caval-dark/90 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white/60 backdrop-blur-md border border-white/80 p-8 rounded-2xl shadow-sm sticky top-32">
                <h3 className="text-xl font-bold text-caval-dark mb-4">Para quem é indicado?</h3>
                <p className="text-sm text-caval-dark/80 mb-6">Empresas que possuem funcionários registrados e necessitam de terceirização confiável para lidar com as burocracias do departamento pessoal e da folha de pagamento.</p>
                
                <h4 className="font-bold text-caval-dark mb-4 mt-8">Outros Serviços</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/servicos/servicos-fiscais" className="text-caval-gold font-medium hover:underline">Serviços Fiscais &rarr;</Link></li>
                  <li><Link to="/servicos/servicos-contabeis" className="text-caval-gold font-medium hover:underline">Serviços Contábeis &rarr;</Link></li>
                  <li><Link to="/servicos/imposto-de-renda" className="text-caval-gold font-medium hover:underline">Imposto de Renda &rarr;</Link></li>
                </ul>

                <a href="https://wa.me/5519971468014" target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center w-full py-4 bg-caval-dark text-white font-bold rounded-xl hover:bg-caval-dark/90 transition-colors">
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
