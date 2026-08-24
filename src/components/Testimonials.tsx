import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Laira Sena",
    text: "Excelente profissional, dedicada em resolver de maneira clara e transparente sempre minimizando os custos e riscos",
    rating: 5
  },
  {
    name: "Laura Borsari",
    text: "Atendimento atencioso e responsável! Super indico!!",
    rating: 5
  },
  {
    name: "Sergio Murilo Barbosa",
    text: "Foi muito bom o atendimento, e daria muito mais estrelas pelo atendimento, obrigado pelo bom trabalho",
    rating: 5
  },
  {
    name: "Ricardo Mendes",
    text: "A CavalCount mudou a forma como gerencio minha empresa. Muito mais clareza e segurança nas decisões fiscais.",
    rating: 5
  },
  {
    name: "Mariana Costa",
    text: "Equipe extremamente competente! Tiraram todas as minhas dúvidas sobre o Simples Nacional rapidamente.",
    rating: 5
  },
  {
    name: "Felipe Almeida",
    text: "Estava com problemas na contabilidade anterior e a transição para a CavalCount foi perfeita e sem dores de cabeça.",
    rating: 5
  },
  {
    name: "Camila Rocha",
    text: "Profissionalismo do começo ao fim. A folha de pagamento da minha clínica nunca esteve tão organizada.",
    rating: 5
  },
  {
    name: "João Pedro Silva",
    text: "Ótimo atendimento! Sempre disponíveis para ajudar, recomendo para todos os empreendedores de Indaiatuba.",
    rating: 5
  },
  {
    name: "Fernanda Lima",
    text: "A assessoria no Imposto de Renda foi impecável. Sinto muita confiança no trabalho de vocês.",
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalDots = Math.ceil(testimonials.length / cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalDots);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalDots - 1 : prev - 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * cardsToShow,
    currentIndex * cardsToShow + cardsToShow
  );

  return (
    <section className="relative z-10 py-24 md:py-32 bg-caval-gold/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-caval-dark mb-4">
            O que dizem nossos clientes
          </h2>
          <div className="flex justify-center items-center gap-2 text-caval-dark/80 font-medium">
            <span className="text-caval-gold flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </span>
            <span>5,0 estrelas no Google</span>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-sm border border-white/80 rounded-full flex items-center justify-center text-caval-dark hover:bg-caval-gold hover:text-white transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-sm border border-white/80 rounded-full flex items-center justify-center text-caval-dark hover:bg-caval-gold hover:text-white transition-colors z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden px-2 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div 
                  key={`${currentIndex}-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-white/80 backdrop-blur-md border border-white p-8 rounded-2xl shadow-sm h-full flex flex-col"
                >
                  <Quote className="w-8 h-8 text-caval-gold/30 mb-4" />
                  <p className="text-caval-dark/80 mb-6 flex-grow text-lg italic">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-caval-dark">{testimonial.name}</p>
                    <div className="flex text-caval-gold mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalDots)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-caval-gold w-6' : 'bg-caval-gold/30 hover:bg-caval-gold/50'
                }`}
                aria-label={`Ir para o slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
