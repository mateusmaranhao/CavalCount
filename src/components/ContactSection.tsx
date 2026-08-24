import { MapPin, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="relative z-10 py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-caval-dark mb-4">
            Onde estamos
          </h2>
          <p className="text-caval-dark/80 max-w-2xl mx-auto">
            Venha tomar um café com a gente ou fale com um especialista agora mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-10 lg:pr-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-caval-gold/10 text-caval-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-caval-dark text-xl mb-2">Nosso Endereço</h3>
                <p className="text-caval-dark/80 leading-relaxed text-lg">
                  R. Melvin Jones, 386 - Jardim Nova Indaia<br />
                  Indaiatuba - SP, 13344-511
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-caval-gold/10 text-caval-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-caval-dark text-xl mb-2">WhatsApp</h3>
                <p className="text-caval-dark/80 leading-relaxed text-lg mb-3">
                  Atendimento rápido para tirar suas dúvidas.
                </p>
                <a 
                  href="https://wa.me/5519971468014" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-caval-gold text-white font-bold rounded-xl hover:bg-caval-gold-dark transition-colors shadow-sm"
                >
                  (19) 97146-8014
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-white/50 h-[450px] w-full bg-white relative z-10">
            <iframe 
              src="https://maps.google.com/maps?q=R.%20Melvin%20Jones,%20386%20-%20Jardim%20Nova%20Indaia,%20Indaiatuba%20-%20SP,%2013344-511&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da CavalCount"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
