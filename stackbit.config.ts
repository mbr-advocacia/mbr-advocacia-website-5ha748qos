import { defineStackbitConfig } from '@stackbit/types'
import { GitContentSource } from '@stackbit/cms-git'

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '22',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content/data'],
      models: [
        {
          name: 'HeroSection',
          type: 'data',
          filePath: 'content/data/hero.json',
          fields: [
            { name: 'monogram', type: 'string', label: 'Monograma (Logo)' },
            { name: 'headline', type: 'string', label: 'Título principal' },
            { name: 'headlineAccent', type: 'string', label: 'Palavra em destaque' },
            { name: 'headlineSuffix', type: 'string', label: 'Final do título' },
            { name: 'subtitle', type: 'text', label: 'Subtítulo' },
            { name: 'ctaLabel', type: 'string', label: 'Texto do botão' },
            { name: 'ctaLink', type: 'string', label: 'Link do botão' },
            { name: 'scrollLabel', type: 'string', label: 'Texto do indicador de rolagem' },
          ],
        },
        {
          name: 'AboutSection',
          type: 'data',
          filePath: 'content/data/about.json',
          fields: [
            { name: 'sectionLabel', type: 'string', label: 'Rótulo da seção' },
            { name: 'name', type: 'string', label: 'Nome da advogada' },
            { name: 'photo', type: 'image', label: 'Foto de perfil' },
            { name: 'photoAlt', type: 'string', label: 'Texto alternativo da foto' },
            { name: 'paragraphs', type: 'list', label: 'Parágrafos', items: { type: 'string' } },
            { name: 'tagline', type: 'string', label: 'Frase de destaque' },
          ],
        },
        {
          name: 'QuoteSection',
          type: 'data',
          filePath: 'content/data/quote.json',
          fields: [
            { name: 'text', type: 'text', label: 'Citação' },
          ],
        },
        {
          name: 'PracticeAreasSection',
          type: 'data',
          filePath: 'content/data/practice-areas.json',
          fields: [
            { name: 'sectionLabel', type: 'string', label: 'Rótulo da seção' },
            { name: 'heading', type: 'string', label: 'Título' },
            {
              name: 'areas',
              type: 'list',
              label: 'Áreas de atuação',
              items: {
                type: 'object',
                fields: [
                  { name: 'id', type: 'string', label: 'ID' },
                  { name: 'title', type: 'string', label: 'Título da área' },
                  { name: 'description', type: 'text', label: 'Descrição' },
                  { name: 'icon', type: 'string', label: 'Ícone (nome Lucide)' },
                ],
              },
            },
          ],
        },
        {
          name: 'ArticlesSection',
          type: 'data',
          filePath: 'content/data/articles.json',
          fields: [
            { name: 'sectionLabel', type: 'string', label: 'Rótulo da seção' },
            { name: 'heading', type: 'string', label: 'Título' },
            { name: 'viewAllLabel', type: 'string', label: 'Texto "Ver todos"' },
            { name: 'readLabel', type: 'string', label: 'Texto "Ler artigo"' },
            {
              name: 'articles',
              type: 'list',
              label: 'Artigos',
              items: {
                type: 'object',
                fields: [
                  { name: 'id', type: 'string', label: 'ID do artigo' },
                  { name: 'title', type: 'string', label: 'Título' },
                  { name: 'date', type: 'string', label: 'Data' },
                  { name: 'excerpt', type: 'text', label: 'Resumo' },
                  { name: 'content', type: 'list', label: 'Parágrafos', items: { type: 'text' } },
                ],
              },
            },
          ],
        },
        {
          name: 'ContactSection',
          type: 'data',
          filePath: 'content/data/contact.json',
          fields: [
            { name: 'sectionLabel', type: 'string', label: 'Rótulo da seção' },
            { name: 'heading', type: 'string', label: 'Título' },
            { name: 'description', type: 'text', label: 'Descrição' },
            { name: 'submitLabel', type: 'string', label: 'Texto do botão enviar' },
            { name: 'submittingLabel', type: 'string', label: 'Texto enviando' },
          ],
        },
        {
          name: 'Header',
          type: 'data',
          filePath: 'content/data/header.json',
          fields: [
            { name: 'logoText', type: 'string', label: 'Texto do logo' },
            { name: 'logoSubtitle', type: 'string', label: 'Subtítulo do logo' },
            { name: 'logoSubtitle2', type: 'string', label: 'Segunda linha do subtítulo' },
          ],
        },
        {
          name: 'Footer',
          type: 'data',
          filePath: 'content/data/footer.json',
          fields: [
            { name: 'logoText', type: 'string', label: 'Texto do logo' },
            { name: 'tagline', type: 'text', label: 'Descrição do escritório' },
            { name: 'quickLinksTitle', type: 'string', label: 'Título links rápidos' },
            { name: 'connectTitle', type: 'string', label: 'Título conecte-se' },
            { name: 'instagramUrl', type: 'url', label: 'URL Instagram' },
            { name: 'linkedinUrl', type: 'url', label: 'URL LinkedIn' },
            { name: 'copyrightName', type: 'string', label: 'Nome no copyright' },
            { name: 'oab', type: 'string', label: 'Número OAB' },
            {
              name: 'offices',
              type: 'list',
              label: 'Escritórios',
              items: {
                type: 'object',
                fields: [
                  { name: 'city', type: 'string', label: 'Cidade' },
                  { name: 'address', type: 'string', label: 'Endereço completo' },
                ],
              },
            },
          ],
        },
      ],
    }),
  ],
})
