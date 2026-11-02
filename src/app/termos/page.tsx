import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos e condições de uso dos serviços e templates da DataInsight.',
  robots: { index: false, follow: false },
}

const LAST_UPDATE = '19 de março de 2026'

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-background">
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
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Termos de Uso</h1>
        <p className="mb-10 text-sm text-muted-foreground">Última atualização: {LAST_UPDATE}</p>

        <div className="space-y-8">
          <Section title="1. Aceitação dos Termos">
            <p>
              Ao acessar este site ou contratar qualquer serviço da <strong>DataInsight</strong>,
              você concorda com estes Termos de Uso. Caso não concorde, por favor não utilize
              nossos serviços.
            </p>
          </Section>

          <Section title="2. Serviços oferecidos">
            <p>A DataInsight oferece:</p>
            <ul>
              <li>
                <strong>Discovery e deploy embarcado de dados</strong> — diagnóstico, integração de
                CRM, implementação de KPIs, painéis e treinamento de equipes, conforme proposta
                comercial acordada entre as partes.
              </li>
              <li>
                <strong>Agentes de IA e automações</strong> — desenvolvimento e implantação no
                ambiente do cliente, sujeitos aos termos dos provedores de IA e de software
                contratados pelo próprio cliente.
              </li>
              <li>
                <strong>Templates de dashboards</strong> — modelos pré-configurados para Power BI,
                Tableau e Looker Studio, entregues mediante licença de uso.
              </li>
            </ul>
            <p>
              Os detalhes de cada serviço (escopo, prazo, valor e condições específicas) são
              formalizados em proposta ou contrato separado.
            </p>
          </Section>

          <Section title="3. Licença de uso dos templates">
            <p>
              Ao adquirir um template, a DataInsight concede ao cliente uma{' '}
              <strong>licença pessoal, intransferível e não exclusiva</strong> para uso interno
              na empresa contratante. É vedado:
            </p>
            <ul>
              <li>Revender, sublicenciar ou distribuir os templates a terceiros</li>
              <li>Remover créditos ou marcas da DataInsight sem autorização expressa</li>
              <li>Utilizar os templates para criar produtos concorrentes</li>
            </ul>
            <p>
              Para uso em múltiplas empresas ou revenda, entre em contato para uma licença
              comercial adequada.
            </p>
          </Section>

          <Section title="4. Propriedade intelectual">
            <p>
              Todo o conteúdo deste site (textos, layouts, metodologias, templates e código)
              é de propriedade da DataInsight ou de seus licenciadores e está protegido pelas leis
              brasileiras de direito autoral (Lei nº 9.610/1998).
            </p>
          </Section>

          <Section title="5. Obrigações do cliente">
            <p>Ao contratar nossos serviços, o cliente se compromete a:</p>
            <ul>
              <li>Fornecer informações verdadeiras e completas</li>
              <li>Garantir que possui os direitos de acesso aos dados compartilhados conosco</li>
              <li>Cumprir os prazos de pagamento acordados em proposta</li>
              <li>Respeitar a confidencialidade das metodologias e entregáveis recebidos</li>
            </ul>
          </Section>

          <Section title="6. Limitação de responsabilidade">
            <p>
              A DataInsight não se responsabiliza por resultados de negócio específicos decorrentes
              do uso dos dashboards ou da implementação das recomendações de consultoria. As
              análises e recomendações são baseadas nos dados e informações fornecidos pelo cliente.
            </p>
            <p>
              A responsabilidade total da DataInsight em qualquer caso fica limitada ao valor pago
              pelo cliente no serviço em questão.
            </p>
          </Section>

          <Section title="7. Confidencialidade">
            <p>
              Ambas as partes comprometem-se a manter sigilo sobre as informações confidenciais
              trocadas durante a prestação dos serviços. Essa obrigação persiste por{' '}
              <strong>2 (dois) anos</strong> após o encerramento do contrato.
            </p>
          </Section>

          <Section title="8. Cancelamento e reembolso">
            <ul>
              <li>
                <strong>Consultoria:</strong> cancelamentos solicitados até 48h antes do início
                têm reembolso integral. Após o início, apenas as horas não realizadas são reembolsadas.
              </li>
              <li>
                <strong>Templates:</strong> por se tratarem de produtos digitais entregues por
                download, não há reembolso após o acesso ser concedido, exceto em caso de defeito
                comprovado no produto.
              </li>
            </ul>
          </Section>

          <Section title="9. Lei aplicável e foro">
            <p>
              Estes termos são regidos pela legislação brasileira. Eventuais disputas serão
              submetidas ao foro da comarca de São Paulo/SP, com renúncia a qualquer outro, por
              mais privilegiado que seja.
            </p>
          </Section>

          <Section title="10. Alterações">
            <p>
              Reservamos o direito de atualizar estes Termos a qualquer momento. A versão vigente
              é sempre a disponível nesta página, identificada pela data de última atualização.
              O uso continuado dos serviços após alterações constitui aceitação dos novos termos.
            </p>
          </Section>

          <Section title="11. Contato">
            <p>
              <strong>DataInsight</strong><br />
              E-mail: contato@datainsight.com.br
            </p>
          </Section>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DataInsight. Todos os direitos reservados. ·{' '}
        <Link href="/privacidade/" className="hover:underline">Política de Privacidade</Link>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold text-foreground">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground [&_li]:ml-4 [&_li]:list-disc [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  )
}
