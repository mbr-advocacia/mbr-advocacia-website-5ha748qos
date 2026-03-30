import { FadeIn } from '@/components/ui/fade-in'

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="up">
            <div className="relative">
              {/* Minimalist Frame */}
              <div className="absolute -inset-4 border border-primary/20 -z-10 translate-x-4 translate-y-4" />
              <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                <img
                  src="https://img.usecurling.com/ppl/large?gender=female&seed=mbr"
                  alt="Dra. Meriellin Barbosa Rodrigues"
                  className="object-cover w-full h-full grayscale-[20%] transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-primary mb-4 block">
                Quem Sou
              </span>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground">
                Dra. Meriellin Barbosa Rodrigues
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
                <p>
                  Com uma trajetória marcada pela excelência técnica e pela empatia profunda, a Dra.
                  Meriellin fundou a MBR Advocacia com um propósito claro: oferecer um atendimento
                  jurídico onde o cliente não é apenas um número de processo.
                </p>
                <p>
                  Especialista em resoluções complexas, sua abordagem combina o rigor da lei com a
                  sensibilidade necessária para lidar com questões delicadas, especialmente no
                  âmbito familiar e sucessório.
                </p>
                <p>
                  "Acredito que a verdadeira justiça começa na escuta atenta. Cada caso carrega uma
                  história, e nossa missão é proteger não apenas o patrimônio, mas a paz de espírito
                  dos nossos clientes."
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-border">
                <div className="font-serif text-2xl italic text-foreground">
                  Atuação Técnica e Humana
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
