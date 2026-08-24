import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { ValueProposition } from '../components/ValueProposition';
import { ServicesGrid } from '../components/ServicesGrid';
import { Differentials } from '../components/Differentials';
import { TargetAudience } from '../components/TargetAudience';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';
import { FinalCTA } from '../components/FinalCTA';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <>
      <SEO 
        title="CavalCount | Assessoria Contábil em Indaiatuba"
        description="Contabilidade estratégica para empresas em Indaiatuba. Gestão fiscal, contábil e folha de pagamento com foco em segurança e crescimento."
        canonicalUrl="https://cavalcount.com.br/"
      />
      <Hero />
      <TrustBar />
      <ValueProposition />
      <ServicesGrid />
      <Differentials />
      <TargetAudience />
      <About />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
