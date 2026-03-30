import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { PracticeAreasSection } from '@/components/sections/PracticeAreasSection'
import { ArticlesSection } from '@/components/sections/ArticlesSection'
import { FadeIn } from '@/components/ui/fade-in'
import { ContactForm } from '@/components/ContactForm'

const Index = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />

      {/* Interstitial Quote Section */}
      <section className="py-24 bg-foreground text-background text-center px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <span className="text-primary text-6xl font-serif leading-none opacity-50 block mb-6">
              "
            </span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light">
              O direito não é apenas sobre leis, é sobre pessoas, patrimônios e legados construídos
              com uma vida de esforço.
            </h2>
          </div>
        </FadeIn>
      </section>

      <PracticeAreasSection />
      <ArticlesSection />

      {/* Contact Section */}
      <section id="contato" className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <span className="text-xs uppercase tracking-widest text-primary mb-4 block">
                Fale Conosco
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
                Agende uma Consulta
              </h2>
              <p className="text-muted-foreground font-light">
                Preencha o formulário abaixo e nossa equipe entrará em contato para agendar seu
                atendimento.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-background p-8 md:p-12 shadow-elevation border border-border/50">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
