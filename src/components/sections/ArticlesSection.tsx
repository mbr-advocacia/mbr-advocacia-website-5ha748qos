import { FadeIn } from '@/components/ui/fade-in'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import articlesData from '../../../content/data/articles.json'

export function ArticlesSection() {
  return (
    <section id="artigos" className="py-24 md:py-32 bg-background" data-sb-object-id="content/data/articles.json">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest text-primary mb-4 block" data-sb-field-path="sectionLabel">
              {articlesData.sectionLabel}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground" data-sb-field-path="heading">
              {articlesData.heading}
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <Link
              to="#artigos"
              className="text-sm tracking-wide hover:text-primary transition-colors flex items-center gap-2"
              data-sb-field-path="viewAllLabel"
            >
              {articlesData.viewAllLabel} <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articlesData.articles.map((article, index) => (
            <FadeIn key={article.id} delay={index * 150} direction="up">
              <Link to={`/artigo/${article.id}`} className="group block h-full">
                <article
                  className="flex flex-col h-full border-t border-border pt-8"
                  data-sb-field-path={`articles.${index}`}
                >
                  <span className="text-xs text-muted-foreground mb-4 font-mono" data-sb-field-path=".date">
                    {article.date}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl mb-4 group-hover:text-primary transition-colors line-clamp-3" data-sb-field-path=".title">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground font-light mb-8 flex-grow line-clamp-3" data-sb-field-path=".excerpt">
                    {article.excerpt}
                  </p>
                  <div className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 mt-auto">
                    {articlesData.readLabel}{' '}
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
