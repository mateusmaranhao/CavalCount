import { SEO } from '../components/SEO';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

export function Contato() {
  return (
    <>
      <SEO 
        title="Contato | CavalCount Assessoria Contábil"
        description="Fale com a CavalCount. Assessoria contábil em Indaiatuba para cuidar da sua empresa."
        canonicalUrl="https://cavalcount.com.br/contato/"
      />
      
      <div className="relative pt-32 pb-24 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[#FAF8F5]/85 backdrop-blur-[6px] -z-10" />
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-caval-gold/20/50 rounded-full blur-[120px] mix-blend-multiply -z-10"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-caval-dark mb-6 text-center">
              Fale com a CavalCount
            </h1>
            <p className="text-xl text-caval-dark/80 mb-16 text-center">
              Nossa equipe está pronta para ajudar sua empresa a crescer com segurança. Entre em contato conosco.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/60 backdrop-blur-md border border-white/80 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-caval-gold/20 text-caval-gold rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-caval-dark mb-4">Atendimento via WhatsApp</h2>
                <p className="text-caval-dark/80 mb-8">Fale diretamente com um especialista para tirar suas dúvidas de forma rápida.</p>
                <a 
                  href="https://wa.me/5519971468014" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full h-14 inline-flex items-center justify-center rounded-xl bg-caval-gold px-8 text-base font-semibold text-caval-dark shadow-lg shadow-caval-gold/30 transition-all hover:bg-caval-gold-light"
                >
                  (19) 97146-8014
                </a>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-white/80 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-caval-gold/20 text-caval-gold rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-caval-dark mb-4">Nosso Escritório</h2>
                <p className="text-caval-dark/80 mb-8">
                  R. Melvin Jones, 386 - Jardim Nova Indaia<br/>
                  Indaiatuba - SP, 13344-511
                </p>
                <a 
                  href="https://maps.google.com/?q=R.+Melvin+Jones,+386+-+Jardim+Nova+Indaia,+Indaiatuba+-+SP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full h-14 inline-flex items-center justify-center rounded-xl bg-caval-dark px-8 text-base font-semibold text-white shadow-lg transition-all hover:bg-caval-dark/90"
                >
                  Ver localização no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
