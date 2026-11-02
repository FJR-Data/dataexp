'use client'

import { useState } from 'react'
import Link from 'next/link'
import DashboardMockup from '@/components/DashboardMockup'

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#precos', label: 'Preços' },
]

const SERVICES = [
  {
    badge: 'Discovery',
    title: 'Diagnóstico Embarcado',
    description:
      'Entro na rotina do seu time comercial para mapear processos, fontes de dados e decisões que precisam de número confiável.',
    features: [
      'Entrevistas com quem usa o dado no dia a dia',
      'Auditoria de qualidade do CRM',
      'Mapa de KPIs ligado a decisões reais',
      'Plano de deploy priorizado por impacto',
    ],
    cta: 'Solicitar Diagnóstico',
    href: '#contato',
  },
  {
    badge: 'Deploy',
    title: 'CRM + BI em Produção',
    description:
      'Integração e saneamento de dados de Salesforce ou Dynamics 365 e painéis Power BI conectados à fonte, em produção, não em slide.',
    features: [
      'Migração e mapeamento de dados de CRM',
      'Modelagem SQL e painéis Power BI',
      'Automação de rotinas e auditorias',
      'Documentação e handoff para o seu time',
    ],
    cta: 'Solicitar Proposta',
    href: '#contato',
  },
  {
    badge: 'IA',
    title: 'Agentes de IA & Automação',
    description:
      'Agentes de IA conectados ao seu CRM e BI via MCP e APIs, com testes de qualidade antes do go-live e humano no controle.',
    features: [
      'Casos de uso priorizados por ROI',
      'Integração via MCP, APIs e Python',
      'Avaliação de qualidade (evals) antes do go-live',
      'Governança: dados no seu ambiente, LGPD',
    ],
    cta: 'Falar sobre IA',
    href: '#contato',
  },
]

const TEMPLATES = [
  {
    title: 'Vendas & Marketing',
    description: 'Acompanhe métricas de vendas, funil de conversão e ROI de campanhas',
    icon: '📈',
  },
  {
    title: 'Financeiro',
    description: 'Visualize fluxo de caixa, receitas, despesas e projeções financeiras',
    icon: '💰',
  },
  {
    title: 'Operações',
    description: 'Monitore produtividade, eficiência e indicadores operacionais',
    icon: '⚙️',
  },
  {
    title: 'E-commerce',
    description: 'Análise de vendas online, comportamento do cliente e estoque',
    icon: '🛒',
  },
  {
    title: 'RH & Pessoas',
    description: 'Indicadores de desempenho, engajamento e desenvolvimento de equipes',
    icon: '👥',
  },
  {
    title: 'Personalizado',
    description: 'Desenvolvemos templates específicos para seu negócio',
    icon: '✨',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Discovery embarcado',
    description: 'Trabalho junto do seu time para entender o processo, as fontes de dados e a decisão que precisa melhorar.',
  },
  {
    number: '02',
    title: 'Protótipo com dado real',
    description: 'Primeira versão rodando sobre os seus dados, validada com quem vai usar, antes de escalar.',
  },
  {
    number: '03',
    title: 'Deploy no seu stack',
    description: 'Painéis, integrações e agentes em produção nas ferramentas que você já tem, sem lock-in.',
  },
  {
    number: '04',
    title: 'Handoff & métricas',
    description: 'Documentação, treinamento e indicadores de adoção e impacto para o seu time operar sozinho.',
  },
]

const INTEGRATIONS = [
  { name: 'Salesforce', color: 'text-sky-600' },
  { name: 'Dynamics 365', color: 'text-blue-700' },
  { name: 'Power BI', color: 'text-yellow-600' },
  { name: 'SQL', color: 'text-slate-700' },
  { name: 'Python', color: 'text-blue-600' },
  { name: 'Claude + MCP', color: 'text-orange-600' },
  { name: 'Tableau', color: 'text-indigo-600' },
  { name: 'Looker Studio', color: 'text-green-600' },
]

const EXPERIENCE = [
  {
    sector: 'Software B2B (CAD/BIM)',
    title: 'Operações comerciais e migração de CRM',
    text: 'Painéis de BI comercial, integração e saneamento de dados durante migração para Salesforce, e automação de rotinas de Sales Ops.',
  },
  {
    sector: 'Big tech',
    title: 'Auditorias automatizadas de CRM',
    text: 'Centralização de processos de Sales Ops em Dynamics 365, com auditorias de qualidade de dados documentadas e automatizadas.',
  },
  {
    sector: 'Varejo de autopeças',
    title: 'Classificação de catálogo e KPIs',
    text: 'Organização da busca de peças por clientes, agrupamento de peças por uso e similaridade, e KPIs internos com Python, SQL e Power BI.',
  },
  {
    sector: 'Bens de consumo',
    title: 'Otimização de verba de marketing',
    text: 'Realocação de budget entre categorias com dados de mercado (Kantar, Euromonitor): ROI 7,57% maior na alocação otimizada.',
  },
]

const PRICING = [
  {
    name: 'Básico',
    price: 'R$1.990',
    popular: false,
    features: [
      '1 template de dashboard',
      'Consultoria inicial (4h)',
      'Suporte por 30 dias',
      '1 revisão de implementação',
    ],
    cta: 'Contratar',
  },
  {
    name: 'Profissional',
    price: 'R$4.990',
    popular: true,
    features: [
      '3 templates de dashboard',
      'Consultoria completa (12h)',
      'Suporte por 90 dias',
      '3 revisões de implementação',
      'Treinamento para equipe (4h)',
    ],
    cta: 'Contratar',
  },
  {
    name: 'Empresarial',
    price: 'Personalizado',
    popular: false,
    features: [
      'Templates ilimitados',
      'Consultoria estratégica completa',
      'Suporte dedicado',
      'Implementação personalizada',
      'Programa de treinamento completo',
    ],
    cta: 'Solicitar Proposta',
  },
]

const FAQS = [
  {
    q: 'Quanto tempo leva para implementar um dashboard?',
    a: 'Para templates do catálogo, a implementação leva de 3 a 10 dias úteis após o diagnóstico inicial. Projetos personalizados têm prazo definido na proposta, geralmente entre 2 e 6 semanas.',
  },
  {
    q: 'O que significa trabalhar no modelo forward deployed?',
    a: 'Em vez de entregar um relatório e ir embora, o engenheiro trabalha junto do seu time, dentro das suas ferramentas, até a solução estar em produção e sendo usada. O foco é adoção e impacto medido, não horas de consultoria.',
  },
  {
    q: 'Funciona com as ferramentas que já usamos?',
    a: 'Sim. Trabalhamos sobre o seu stack: Salesforce ou Dynamics 365 no CRM, SQL e Python nos dados, Power BI, Tableau ou Looker Studio na visualização. Indicamos a melhor opção para o seu contexto durante o diagnóstico.',
  },
  {
    q: 'Como vocês usam IA com os dados da minha empresa?',
    a: 'Só com casos de uso aprovados por você, conectando o agente às suas fontes via MCP ou APIs, com testes de qualidade antes do go-live e revisão humana nas decisões críticas. Os dados permanecem no seu ambiente e nas contas de IA contratadas pela sua empresa.',
  },
  {
    q: 'Preciso ter uma equipe técnica para usar os dashboards?',
    a: 'Não. O treinamento incluído nos planos capacita qualquer colaborador a operar e interpretar os dashboards. Para manutenções técnicas, nosso suporte está disponível.',
  },
  {
    q: 'Como funciona o suporte após a entrega?',
    a: 'O suporte cobre dúvidas de uso, pequenos ajustes e atualizações de dados. Para o plano Empresarial, há um gerente de conta dedicado com SLA de resposta em até 4 horas.',
  },
  {
    q: 'Os dados da minha empresa ficam seguros?',
    a: 'Trabalhamos com as ferramentas que você já utiliza — seus dados permanecem no seu ambiente. Assinamos NDA e seguimos boas práticas de LGPD em todos os projetos.',
  },
]

const inputClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="flex min-h-screen flex-col">
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <a href="#" className="text-xl font-bold tracking-tight">
            DataInsight
          </a>

          {/* Desktop nav */}
          <nav className="hidden gap-6 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
            >
              Fale Conosco
            </a>
            <button
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              Menu
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t bg-background px-4 py-4 md:hidden">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Fale Conosco
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center gap-4">
                <span className="inline-flex w-fit items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Dados &amp; IA · Forward Deployed
                </span>
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  Dados e IA em produção, construídos dentro do seu time
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Um engenheiro embarcado na sua operação comercial: do CRM bagunçado ao Power BI
                  confiável e a agentes de IA que economizam horas do time, no stack que você já usa.
                </p>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Agendar Diagnóstico
                  </a>
                  <a
                    href="#como-funciona"
                    className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    Como funciona
                  </a>
                </div>

                {/* Metrics */}
                <div className="flex gap-8 pt-2">
                  {[
                    { value: '12 anos', label: 'Em tecnologia e dados' },
                    { value: 'CRM → IA', label: 'Ponta a ponta' },
                    { value: 'Seu stack', label: 'Sem lock-in' },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-2xl font-bold">{m.value}</div>
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <DashboardMockup />
            </div>
          </div>
        </section>

        {/* ── SERVIÇOS ── */}
        <section id="servicos" className="w-full bg-muted/30 py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Nossos Serviços
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Do diagnóstico ao agente de IA em produção
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <div key={s.title} className="flex flex-col rounded-xl border bg-background p-6 shadow-sm">
                  <span className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {s.badge}
                  </span>
                  <h3 className="mb-2 text-2xl font-semibold">{s.title}</h3>
                  <p className="mb-4 text-muted-foreground">{s.description}</p>
                  <ul className="mb-6 flex flex-col gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={s.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    {s.cta}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Processo
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Como funciona</h2>
              <p className="max-w-[600px] text-muted-foreground">
                O ciclo forward deployed: descobrir no campo, provar com dado real, colocar em produção e medir.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <div key={step.number} className="relative flex flex-col gap-3">
                  {i < STEPS.length - 1 && (
                    <div className="absolute right-0 top-5 hidden h-0.5 w-1/2 translate-x-full bg-border lg:block" />
                  )}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEMPLATES ── */}
        <section id="templates" className="w-full bg-muted/30 py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Templates
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Aceleradores para cada área
              </h2>
              <p className="max-w-[600px] text-muted-foreground">
                Templates de painéis que encurtam o deploy: partimos de um modelo testado e adaptamos aos seus dados.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {TEMPLATES.map((t) => (
                <div
                  key={t.title}
                  className="group flex flex-col gap-2 rounded-xl border bg-background p-6 transition-shadow hover:shadow-md"
                >
                  <div className="text-3xl">{t.icon}</div>
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.description}</p>
                  <a
                    href="#contato"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Ver Detalhes
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEGRAÇÕES ── */}
        <section className="w-full py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
              Trabalhamos sobre o stack que você já tem
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {INTEGRATIONS.map((tool) => (
                <span key={tool.name} className={`text-lg font-semibold ${tool.color}`}>
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIÊNCIA ── */}
        <section id="experiencia" className="w-full bg-muted/30 py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Experiência
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Problemas que já resolvemos em campo
              </h2>
              <p className="max-w-[640px] text-muted-foreground">
                Projetos conduzidos pelo fundador em empresas de diferentes setores. Nomes omitidos
                por confidencialidade.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {EXPERIENCE.map((e) => (
                <div key={e.title} className="flex flex-col gap-3 rounded-xl border bg-background p-6 shadow-sm">
                  <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {e.sector}
                  </span>
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PREÇOS ── */}
        <section id="precos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Preços
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Planos que se adaptam ao seu momento
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {PRICING.map((p) => (
                <div
                  key={p.name}
                  className={`relative flex flex-col rounded-xl border p-6 ${
                    p.popular ? 'border-primary bg-primary text-primary-foreground shadow-lg' : 'bg-background'
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary border border-background px-3 py-1 text-xs font-medium text-primary-foreground shadow">
                      Mais Popular
                    </span>
                  )}
                  <h3 className="mb-1 text-xl font-bold">{p.name}</h3>
                  <div className="mb-4 text-3xl font-bold">{p.price}</div>
                  <ul className="mb-6 flex flex-col gap-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <svg
                          className={`h-4 w-4 shrink-0 ${p.popular ? 'text-primary-foreground' : 'text-primary'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className={`mt-auto inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                      p.popular
                        ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Precisa de algo diferente?{' '}
              <a href="#contato" className="font-medium text-primary underline underline-offset-2">
                Fale conosco
              </a>{' '}
              para uma proposta personalizada.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="w-full bg-muted/30 py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                FAQ
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Perguntas frequentes</h2>
            </div>

            <div className="flex flex-col divide-y rounded-xl border bg-background">
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium hover:bg-muted/50"
                  >
                    {faq.q}
                    <svg
                      className={`h-4 w-4 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-sm text-muted-foreground">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTATO ── */}
        <section id="contato" className="w-full bg-primary py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center gap-4 text-primary-foreground">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Qual decisão do seu time comercial ainda depende de planilha manual?
                </h2>
                <p className="text-primary-foreground/80">
                  Trabalhamos com poucos projetos simultâneos para manter o modelo embarcado. Conte o
                  desafio e receba um diagnóstico inicial gratuito.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  {[
                    '✓ Diagnóstico gratuito sem compromisso',
                    '✓ Resposta em até 24 horas úteis',
                    '✓ Sem contrato de fidelidade',
                  ].map((item) => (
                    <p key={item} className="text-sm text-primary-foreground/90">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-primary-foreground p-6 text-foreground shadow-lg">
                <h3 className="mb-4 text-lg font-semibold">Solicite seu diagnóstico gratuito</h3>
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="flex flex-col gap-3"
                >
                  <input type="hidden" name="access_key" value="ce88bb9e-a2e2-4329-8add-25d15f9f74c8" />
                  <input type="hidden" name="subject" value="Novo contato — DataInsight" />
                  <input type="hidden" name="from_name" value="DataInsight Site" />
                  <input type="text" name="nome" placeholder="Nome completo" required className={inputClass} />
                  <input type="email" name="email" placeholder="E-mail profissional" required className={inputClass} />
                  <input type="tel" name="telefone" placeholder="WhatsApp / Telefone" className={inputClass} />
                  <textarea
                    name="mensagem"
                    rows={3}
                    placeholder="Ex.: forecast de vendas manual, CRM com dados duplicados, ideia de agente de IA (opcional)"
                    className={`${inputClass} resize-none`}
                  />
                  <div className="h-captcha" data-captcha="true" />
                  <button
                    type="submit"
                    className="mt-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Solicitar Diagnóstico Gratuito
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Seus dados são protegidos conforme a LGPD.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full border-t py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="mb-2 text-lg font-bold">DataInsight</p>
              <p className="text-sm text-muted-foreground">
                Dados e IA em produção, construídos dentro do seu time.
              </p>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold">Navegação</p>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold">Legal</p>
              <div className="flex flex-col gap-2">
                <Link href="/privacidade/" className="text-sm text-muted-foreground hover:text-foreground">
                  Política de Privacidade
                </Link>
                <Link href="/termos/" className="text-sm text-muted-foreground hover:text-foreground">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} DataInsight. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
