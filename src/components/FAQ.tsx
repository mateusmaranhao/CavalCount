import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "O que uma assessoria contábil faz?",
    a: "Uma assessoria contábil cuida de todas as obrigações fiscais, trabalhistas e contábeis da sua empresa, garantindo que você atue em conformidade com a lei. Além de emitir guias e folhas de pagamento, trabalhamos para organizar suas finanças e apoiar suas decisões empresariais."
  },
  {
    q: "A CavalCount atende MEI?",
    a: "Sim, atendemos MEIs e empreendedores que estão iniciando seus negócios. Apoiamos desde o processo de abertura e formalização até a organização mensal necessária para que você possa crescer com segurança."
  },
  {
    q: "Vocês atendem empresas do Simples Nacional e Lucro Presumido?",
    a: "Sim. Temos estrutura completa e equipe qualificada para atender empresas consolidadas, gerenciando as rotinas e particularidades tributárias do Simples Nacional e do Lucro Presumido."
  },
  {
    q: "Como funciona a troca de contador?",
    a: "A troca de contador é um processo simples. Nós cuidamos de toda a transição de forma organizada, solicitando os documentos ao contador anterior e assumindo a responsabilidade técnica da sua empresa sem interromper sua rotina."
  },
  {
    q: "A contabilidade pode ajudar minha empresa a pagar menos impostos?",
    a: "A nossa assessoria atua na busca por eficiência tributária. Isso significa que analisamos o cenário da sua empresa para garantir o enquadramento mais adequado dentro da legislação aplicável, evitando que você pague impostos desnecessários."
  },
  {
    q: "A CavalCount atende empresas em Indaiatuba?",
    a: "Sim, somos uma contabilidade localizada em Indaiatuba (SP) e possuímos profundo conhecimento do cenário e das legislações locais para atender as empresas da nossa região com excelência e proximidade."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-caval-dark md:text-4xl">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white/40 backdrop-blur-sm border border-white/60 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  <span className="font-semibold text-caval-dark pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-caval-dark/60 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-caval-dark/80 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
