import { FadeIn } from '@/components/ui/fade-in'
import aboutData from '../../../content/data/about.json'

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background" data-sb-object-id="content/data/about.json">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="up">
            <div className="relative">
              {/* Minimalist Frame */}
              <div className="absolute -inset-4 border border-primary/20 -z-10 translate-x-4 translate-y-4" />
              <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                <img
                  src={aboutData.photo}
                  alt={aboutData.photoAlt}
                  className="object-cover w-full h-full grayscale-[20%] transition-all duration-700 hover:grayscale-0"
                  data-sb-field-path="photo"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-primary mb-4 block" data-sb-field-path="sectionLabel">
                {aboutData.sectionLabel}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground" data-sb-field-path="name">
                {aboutData.name}
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
                {aboutData.paragraphs.map((paragraph, index) => (
                  <p key={index} data-sb-field-path={`paragraphs.${index}`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-border">
                <div className="font-serif text-2xl italic text-foreground" data-sb-field-path="tagline">
                  {aboutData.tagline}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
