import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { articles, type Article } from '@/lib/data'
import { FadeIn } from '@/components/ui/fade-in'

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const found = articles.find((a) => a.id === id)
    setArticle(found || null)
  }, [id])

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center container mx-auto px-6">
        <h1 className="text-3xl font-serif mb-4">Artigo não encontrado</h1>
        <Link to="/" className="text-primary hover:underline">
          Retornar ao início
        </Link>
      </div>
    )
  }

  return (
    <article className="pt-32 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <FadeIn>
          <Link
            to="/#artigos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Voltar
          </Link>

          <header className="mb-12">
            <span className="text-primary text-sm font-mono block mb-6">{article.date}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-8">
              {article.title}
            </h1>
            <div className="w-16 h-[1px] bg-primary" />
          </header>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="prose prose-lg md:prose-xl prose-stone max-w-none prose-p:font-light prose-p:leading-relaxed prose-headings:font-serif prose-a:text-primary">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-foreground/80 mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-border flex justify-between items-center">
            <div className="font-serif text-xl">MBR Advocacia</div>
            <Link
              to="/#contato"
              className="text-sm uppercase tracking-widest text-primary hover:text-foreground transition-colors"
            >
              Fale com um especialista
            </Link>
          </div>
        </FadeIn>
      </div>
    </article>
  )
}

export default ArticleDetail
