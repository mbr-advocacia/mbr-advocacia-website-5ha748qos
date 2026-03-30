import { FadeIn } from '@/components/ui/fade-in'
import { practiceAreas } from '@/lib/data'
import * as Icons from 'lucide-react'

export function PracticeAreasSection() {
  return (
    <section id="areas" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-primary mb-4 block">
            Especialidades
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Áreas de Atuação</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {practiceAreas.map((area, index) => {
            const Icon = Icons[area.icon as keyof typeof Icons] as React.ElementType

            return (
              <FadeIn key={area.id} delay={index * 100} direction="up">
                <div className="group border border-border bg-background p-10 hover:bg-[#FDFBF7] transition-colors duration-500 h-full flex flex-col">
                  <div className="mb-6 text-primary/70 group-hover:text-primary transition-colors">
                    {Icon && <Icon size={32} strokeWidth={1} />}
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-foreground">{area.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed flex-grow">
                    {area.description}
                  </p>
                  <div className="w-8 h-[1px] bg-primary mt-8 transition-all duration-300 group-hover:w-16" />
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
