export interface Article {
  id: string
  title: string
  date: string
  excerpt: string
  content: string[]
}

export const practiceAreas = [
  {
    id: 'familia',
    title: 'Direito de Família',
    description:
      'Atuação sensível e técnica em divórcios, pensão alimentícia, guarda e convivência, sempre priorizando a resolução de conflitos de forma humanizada.',
    icon: 'Heart',
  },
  {
    id: 'sucessoes',
    title: 'Sucessões',
    description:
      'Planejamento sucessório, inventários extrajudiciais e judiciais, testamentos e partilha de bens com segurança e clareza para a família.',
    icon: 'Briefcase',
  },
  {
    id: 'previdenciario',
    title: 'Previdenciário',
    description:
      'Análise e planejamento de aposentadorias, benefícios por incapacidade e pensão por morte, garantindo seus direitos perante o INSS.',
    icon: 'Shield',
  },
  {
    id: 'civel',
    title: 'Cível e Contratos',
    description:
      'Elaboração e revisão de contratos, responsabilidade civil e litígios cíveis em geral, com foco na prevenção de riscos e proteção patrimonial.',
    icon: 'FileText',
  },
]

export const articles: Article[] = [
  {
    id: 'importancia-planejamento-sucessorio',
    title: 'A importância do Planejamento Sucessório na proteção familiar',
    date: '12 de Outubro, 2023',
    excerpt:
      'Entenda como o planejamento sucessório pode evitar conflitos familiares e reduzir custos tributários no momento de luto.',
    content: [
      'O planejamento sucessório é um conjunto de estratégias jurídicas voltadas para a organização do patrimônio de uma pessoa ainda em vida, com o objetivo de facilitar a transferência desses bens aos herdeiros após o seu falecimento.',
      'Muitas vezes visto como um tabu, pensar na sucessão de forma antecipada é, na verdade, um ato de amor e responsabilidade. Ao definir claramente como os bens serão distribuídos, evita-se a deflagração de disputas judiciais que podem destruir laços familiares.',
      'Além da preservação das relações, o planejamento sucessório eficiente permite uma significativa economia de recursos. Através de instrumentos como doação em vida com reserva de usufruto, holding familiar e testamentos, é possível otimizar a carga tributária que incidiria sobre um inventário tradicional.',
      'É fundamental buscar a orientação de um advogado especializado para analisar o caso concreto, mapear o patrimônio e entender a dinâmica familiar, construindo assim a melhor estratégia para cada realidade.',
    ],
  },
  {
    id: 'guarda-compartilhada-mitos-verdades',
    title: 'Guarda Compartilhada: Mitos e Verdades',
    date: '28 de Setembro, 2023',
    excerpt:
      'Desmistificando a guarda compartilhada e entendendo como ela realmente funciona na prática e no dia a dia da criança.',
    content: [
      'A guarda compartilhada tornou-se a regra geral no direito de família brasileiro, mas ainda gera muitas dúvidas e confusões entre os pais que estão em processo de separação.',
      'O maior mito sobre a guarda compartilhada é acreditar que a criança dividirá seu tempo exatamente meio a meio entre as duas casas. Na verdade, a guarda compartilhada diz respeito à tomada de decisões conjuntas sobre a vida do filho (educação, saúde, etc.), e não necessariamente à divisão milimétrica do tempo.',
      'A criança ainda terá um lar de referência (residência base), e o regime de convivência será estabelecido de acordo com o melhor interesse do menor e a rotina de ambos os genitores.',
      'Outro ponto importante: a guarda compartilhada não isenta automaticamente nenhum dos pais do pagamento de pensão alimentícia. A obrigação alimentar é calculada com base na necessidade da criança e na possibilidade de cada genitor, independentemente do tipo de guarda.',
    ],
  },
  {
    id: 'revisao-beneficios-inss',
    title: 'Quando e como solicitar a revisão de benefícios do INSS',
    date: '05 de Setembro, 2023',
    excerpt:
      'Saiba quais são as hipóteses em que é possível pedir a revisão do valor da sua aposentadoria ou pensão.',
    content: [
      'A revisão de benefícios previdenciários é um direito do segurado que acredita que o valor de sua aposentadoria ou pensão foi calculado de forma incorreta pelo INSS.',
      'Existem diversas teses de revisão possíveis, como a inclusão de tempo de serviço rural não computado, tempo de atividade especial (insalubridade/periculosidade), ou salários de contribuição que não constavam no sistema no momento da concessão.',
      'É crucial observar o prazo decadencial de 10 anos, contado a partir do primeiro dia do mês seguinte ao do recebimento da primeira prestação, para ingressar com o pedido de revisão.',
      'Antes de solicitar qualquer revisão, é imprescindível realizar um cálculo previdenciário com um advogado especialista. Em alguns casos, pedir a revisão sem a certeza matemática pode resultar na diminuição do benefício, sendo este um risco que deve ser evitado.',
    ],
  },
]
