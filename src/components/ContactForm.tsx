import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase-mock'

const formSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const { error } = await supabase.from('contacts').insert([
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          created_at: new Date().toISOString(),
        },
      ])

      if (error) throw error

      toast({
        title: 'Mensagem enviada com sucesso.',
        description: 'Retornaremos o seu contato em breve.',
      })
      form.reset()
    } catch (error) {
      toast({
        title: 'Erro ao enviar mensagem.',
        description: 'Por favor, tente novamente mais tarde ou entre em contato pelo telefone.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Nome Completo"
                  className="border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary px-0 text-base bg-transparent h-12 transition-colors"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="E-mail"
                    type="email"
                    className="border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary px-0 text-base bg-transparent h-12 transition-colors"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Telefone / WhatsApp"
                    type="tel"
                    className="border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary px-0 text-base bg-transparent h-12 transition-colors"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Como podemos ajudar?"
                  className="border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary px-0 text-base bg-transparent min-h-[120px] resize-none transition-colors"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-none tracking-widest uppercase text-xs transition-all duration-300 hover:scale-[1.02]"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </form>
    </Form>
  )
}
