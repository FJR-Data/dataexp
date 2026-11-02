import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://fjr-data.github.io/dataexp'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'DataInsight',
      url: SITE_URL,
      description:
        'Engenharia de dados e IA no modelo forward deployed: embarcada no time do cliente, do CRM ao BI e a agentes de IA em produção.',
      areaServed: 'BR',
      knowsLanguage: 'pt-BR',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: 'Portuguese',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'DataInsight',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#consultoria`,
      name: 'Discovery e Deploy Embarcado de Dados',
      provider: { '@id': `${SITE_URL}/#organization` },
      description:
        'Engenheiro embarcado no seu time para mapear dados de CRM e colocar em produção BI, integrações e KPIs que geram decisão.',
      serviceType: 'Forward Deployed Data Engineering',
      areaServed: 'BR',
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#agentes`,
      name: 'Agentes de IA e Automação',
      provider: { '@id': `${SITE_URL}/#organization` },
      description:
        'Agentes de IA e automações conectados ao seu CRM e BI via MCP e APIs, com avaliação de qualidade antes do go-live.',
      serviceType: 'AI Agent Deployment',
      areaServed: 'BR',
    },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'DataInsight - Dados e IA embarcados no seu time',
    template: '%s | DataInsight',
  },
  description:
    'Engenharia de dados e IA no modelo forward deployed: do CRM (Salesforce, Dynamics 365) ao Power BI e a agentes de IA em produção, no stack que você já usa.',
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/`,
    title: 'DataInsight - Dados e IA embarcados no seu time',
    description:
      'Do CRM ao BI e a agentes de IA em produção: engenharia de dados no modelo forward deployed, no stack que você já usa.',
    locale: 'pt_BR',
    siteName: 'DataInsight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataInsight - Dados e IA embarcados no seu time',
    description:
      'Do CRM ao BI e a agentes de IA em produção: engenharia de dados no modelo forward deployed.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/` },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        {/* Web3Forms hCaptcha — free plan sitekey, loaded only when needed */}
        <script src="https://web3forms.com/client/script.js" async defer />
      </body>
    </html>
  )
}
