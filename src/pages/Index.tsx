import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { PracticeAreasSection } from '@/components/sections/PracticeAreasSection'
import { ArticlesSection } from '@/components/sections/ArticlesSection'
import { FadeIn } from '@/components/ui/fade-in'
import { ContactForm } from '@/components/ContactForm'
import quoteData from '../../content/data/quote.json'
import contactData from '../../content/data/contact.json'

const Index = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />

      {/* Interstitial Quote Section */}
      <section className="py-24 bg-foreground text-background text-center px-6" data-sb-object-id="content/data/quote.json">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <span className="text-primary text-6xl font-serif leading-none opacity-50 block mb-6">
              "
            </span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light" data-sb-field-path="text">
              {quoteData.text}
            </h2>
          </div>
        </FadeIn>
      </section>

      <PracticeAreasSection />
      <ArticlesSection />

      {/* Contact Section */}
      <section id="contato" className="py-24 md:py-32 bg-secondary/30" data-sb-object-id="content/data/contact.json">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <span className="text-xs uppercase tracking-widest text-primary mb-4 block" data-sb-field-path="sectionLabel">
                {contactData.sectionLabel}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6" data-sb-field-path="heading">
                {contactData.heading}
              </h2>
              <p className="text-muted-foreground font-light" data-sb-field-path="description">
                {contactData.description}
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
