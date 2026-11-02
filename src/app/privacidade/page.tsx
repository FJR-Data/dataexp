import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e proteção de dados da DataInsight conforme a LGPD.',
  robots: { index: false, follow: false },
}

const LAST_UPDATE = '2 de novembro de 2026'

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="text-xl font-bold tracking-tight text-primary">
            DataInsight
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Política de Privacidade</h1>
        <p className="mb-10 text-sm text-muted-foreground">Última atualização: {LAST_UPDATE}</p>

        <div className="prose prose-gray max-w-none">
          <Section title="1. Quem somos">
            <p>
              A <strong>DataInsight</strong> é uma empresa especializada em consultoria de dados e
              fornecimento de templates de dashboards. Para fins desta política, atuamos como
              Controlador dos dados pessoais coletados através deste site.
            </p>
            <p>Para contato sobre privacidade: <strong>privacidade@datainsight.com.br</strong></p>
          </Section>

          <Section title="2. Dados que coletamos">
            <p>Coletamos apenas os dados que você nos fornece voluntariamente:</p>
            <ul>
              <li><strong>Nome completo</strong> — identificação no atendimento</li>
              <li><strong>E-mail profissional</strong> — comunicação e envio de proposta</li>
              <li><strong>Telefone / WhatsApp</strong> — contato comercial (opcional)</li>
              <li><strong>Mensagem</strong> — contexto da sua solicitação (opcional)</li>
            </ul>
            <p>
              Não coletamos dados sensíveis, dados de menores de 18 anos nem dados de pagamento
              através deste site.
            </p>
          </Section>

          <Section title="3. Como usamos seus dados">
            <p>Os dados coletados pelo formulário de contato são usados exclusivamente para:</p>
            <ul>
              <li>Responder à sua solicitação de diagnóstico ou proposta</li>
              <li>Enviar informações comerciais sobre os serviços da DataInsight</li>
              <li>Cumprir obrigações legais ou contratuais</li>
            </ul>
            <p>
              <strong>Base legal (LGPD, art. 7º):</strong> consentimento do titular (ao submeter o
              formulário) e legítimo interesse em responder a solicitações comerciais.
            </p>
          </Section>

          <Section title="4. Compartilhamento de dados">
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins
              comerciais. Seus dados podem ser processados por:
            </p>
            <ul>
              <li>
                <strong>Web3Forms (web3forms.com)</strong> — serviço que recebe o formulário de
                contato e o encaminha por e-mail. Consulte a{' '}
                <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer"
                  className="text-primary underline">
                  política de privacidade do Web3Forms
                </a>.
              </li>
              <li>
                <strong>hCaptcha (hcaptcha.com)</strong> — verificação anti-spam exibida no
                formulário. Consulte a{' '}
                <a href="https://www.hcaptcha.com/privacy" target="_blank" rel="noopener noreferrer"
                  className="text-primary underline">
                  política de privacidade do hCaptcha
                </a>.
              </li>
              <li>
                <strong>GitHub Pages</strong> — hospedagem deste site. Consulte a{' '}
                <a href="https://docs.github.com/pt/site-policy/privacy-policies/github-general-privacy-statement"
                  target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  declaração de privacidade do GitHub
                </a>.
              </li>
            </ul>
          </Section>

          <Section title="5. Armazenamento e retenção">
            <p>
              As mensagens recebidas ficam na nossa caixa de e-mail enquanto mantemos um
              relacionamento comercial ativo com você. O Web3Forms pode reter uma cópia da submissão
              pelo período definido em sua própria política e nas configurações do formulário. Dados de contatos que não evoluem para
              clientes são excluídos em até <strong>24 meses</strong> após o último contato.
            </p>
          </Section>

          <Section title="6. Seus direitos (LGPD)">
            <p>
              Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
            </p>
            <ul>
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar anonimização, bloqueio ou eliminação</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Solicitar portabilidade dos dados</li>
              <li>Apresentar reclamação à ANPD (Autoridade Nacional de Proteção de Dados)</li>
            </ul>
            <p>
              Para exercer qualquer direito, entre em contato pelo e-mail:{' '}
              <strong>privacidade@datainsight.com.br</strong>. Respondemos em até{' '}
              <strong>15 dias úteis</strong>.
            </p>
          </Section>

          <Section title="7. Cookies e rastreamento">
            <p>
              Este site é uma página estática e <strong>não utiliza cookies de rastreamento</strong>,
              pixels de marketing, Google Analytics ou qualquer tecnologia de rastreamento de
              comportamento. Os únicos recursos de terceiros são os necessários para o formulário de
              contato: o Web3Forms (envio) e o hCaptcha (anti-spam), que pode usar cookies próprios
              para a verificação.
            </p>
          </Section>

          <Section title="8. Segurança">
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso
              não autorizado, alteração, divulgação ou destruição. O tráfego deste site é protegido
              por HTTPS (TLS).
            </p>
          </Section>

          <Section title="9. Alterações nesta política">
            <p>
              Podemos atualizar esta política periodicamente. A data de última atualização ao topo
              desta página indica a versão vigente. Mudanças significativas serão comunicadas por
              e-mail para contatos ativos.
            </p>
          </Section>

          <Section title="10. Contato">
            <p>
              <strong>DataInsight</strong><br />
              E-mail: privacidade@datainsight.com.br<br />
              Encarregado de Dados (DPO): disponível no mesmo endereço de e-mail.
            </p>
          </Section>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DataInsight. Todos os direitos reservados. ·{' '}
        <Link href="/termos/" className="hover:underline">Termos de Uso</Link>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-xl font-semibold text-foreground">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground [&_a]:text-primary [&_li]:ml-4 [&_li]:list-disc [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  )
}
