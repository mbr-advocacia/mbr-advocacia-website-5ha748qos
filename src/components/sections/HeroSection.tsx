import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import heroData from '../../../content/data/hero.json'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      data-sb-object-id="content/data/hero.json"
    >
      {/* Subtle background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <FadeIn delay={100}>
          <div className="mb-8 font-serif text-5xl md:text-8xl tracking-widest text-foreground/90" data-sb-field-path="monogram">
            {heroData.monogram}
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight mb-8 text-foreground">
            <span data-sb-field-path="headline">{heroData.headline}</span>{' '}
            <span className="italic text-primary" data-sb-field-path="headlineAccent">{heroData.headlineAccent}</span>{' '}
            <span data-sb-field-path="headlineSuffix">{heroData.headlineSuffix}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={500}>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light" data-sb-field-path="subtitle">
            {heroData.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={700}>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-none tracking-widest uppercase text-xs transition-all duration-300 hover:scale-[1.02]"
          >
            <a href={heroData.ctaLink} data-sb-field-path="ctaLabel">{heroData.ctaLabel}</a>
          </Button>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in-up"
        style={{ animationDelay: '1s', animationFillMode: 'both' }}
      >
        <span className="text-[10px] uppercase tracking-widest mb-2 text-muted-foreground" data-sb-field-path="scrollLabel">
          {heroData.scrollLabel}
        </span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-[slide-down_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
