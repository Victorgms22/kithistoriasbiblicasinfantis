import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  BookOpen,
  Heart,
  Printer,
  Home,
  Clock,
  ShieldCheck,
  Download,
  Check,
  Sparkles,
  Plus,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-mockup.jpg";
import maeImg from "@/assets/mae-filho.jpg";
import bibliaImg from "@/assets/biblia-acao.jpg";
import bingoImg from "@/assets/bingo.jpg";
import memoriaImg from "@/assets/memoria.jpg";
import jogosImg from "@/assets/jogos.jpg";

// Replace with the real checkout link. UTM/query params from the visit are appended automatically.
const CHECKOUT_URL = "INSERIR_LINK_CHECKOUT_PRINCIPAL";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Histórias Bíblicas Infantis para Imprimir | Pequenos com Deus" },
      {
        name: "description",
        content:
          "Material digital em PDF com histórias bíblicas infantis para imprimir. Use em casa, na igreja ou na Escola Bíblica Infantil. A partir de R$ 19,90.",
      },
      { property: "og:title", content: "Histórias Bíblicas Infantis para Imprimir" },
      {
        property: "og:description",
        content: "Transforme o aprendizado da Palavra de Deus em momentos especiais com seus filhos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const bumps = [
  { name: "Bíblia em Ação – Versão Infantil", price: "9,90", img: bibliaImg, desc: "Material complementar para tornar o aprendizado bíblico mais participativo." },
  { name: "Bingo Bíblico Infantil", price: "7,90", img: bingoImg, desc: "Uma brincadeira educativa para compartilhar com crianças e familiares." },
  { name: "Jogo da Memória Bíblico", price: "7,90", img: memoriaImg, desc: "Cartas ilustradas para brincar e estimular a memória." },
  { name: "Jogos Bíblicos Infantis", price: "9,90", img: jogosImg, desc: "Atividades e desafios para complementar o aprendizado." },
];

const faq = [
  ["Como vou receber o material?", "Após a confirmação do pagamento, você receberá as instruções para acessar seus arquivos digitais."],
  ["O material é físico?", "Não. É um produto digital em PDF. Nenhum material físico será enviado."],
  ["Preciso imprimir o material?", "A proposta é permitir que você utilize os arquivos digitalmente ou imprima as páginas para realizar as atividades."],
  ["Para qual idade é indicado?", "O material é direcionado ao público infantil. Consulte a descrição do produto para verificar a faixa etária recomendada."],
  ["Posso utilizar na igreja ou Escola Bíblica Infantil?", "O uso deve respeitar as condições de licença disponibilizadas pelo vendedor."],
  ["Os materiais complementares estão incluídos?", "Não. Os materiais complementares são opcionais e podem ser adicionados separadamente no checkout."],
  ["Posso comprar somente o produto principal?", "Sim. Os materiais complementares são opcionais. Você pode adquirir somente Histórias Bíblicas Infantis para Imprimir."],
];

function useCheckoutUrl() {
  const [url, setUrl] = useState(CHECKOUT_URL);
  useEffect(() => {
    const qs = window.location.search;
    if (qs) setUrl(CHECKOUT_URL + (CHECKOUT_URL.includes("?") ? "&" : "?") + qs.slice(1));
  }, []);
  return url;
}

const ctaCls =
  "inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-extrabold tracking-wide text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring";
const ctaLight =
  "inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-extrabold tracking-wide text-accent-foreground transition hover:-translate-y-0.5 hover:bg-primary-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent";

function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`px-5 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}

function Heading({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && <p className="mb-3 text-xs font-extrabold tracking-[0.2em] text-secondary">{eyebrow}</p>}
      <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-lg text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Index() {
  const checkout = useCheckoutUrl();
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-warm px-5 pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-10 text-center font-serif text-xl font-bold text-primary md:text-left">
            Pequenos com Deus <span className="text-accent">✦</span>
          </p>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-extrabold tracking-[0.2em] text-secondary">EDUCAÇÃO CRISTÃ INFANTIL</p>
              <h1 className="text-3xl font-bold leading-[1.15] text-primary md:text-5xl">
                Histórias Bíblicas Infantis para Imprimir
              </h1>
              <p className="mt-4 font-serif text-xl text-secondary md:text-2xl">
                transforme o aprendizado da Palavra de Deus em momentos especiais com seus filhos!
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                Apresente às crianças histórias incríveis da Bíblia de maneira leve, educativa e divertida. Um material
                digital para utilizar em casa, na igreja ou na Escola Bíblica Infantil.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4">
                <p className="text-foreground">
                  A partir de <span className="font-serif text-3xl font-bold text-primary">R$ 19,90</span>
                </p>
                <a href="#ofertas" className={ctaCls}>QUERO CONHECER O MATERIAL</a>
                <p className="text-sm text-muted-foreground">Material digital em PDF • Pronto para imprimir</p>
              </div>
            </div>
            <img src={heroImg} width={1200} height={1008} alt="Coleção impressa de Histórias Bíblicas Infantis com capa e páginas ilustradas" className="w-full rounded-3xl shadow-soft" />
          </div>
        </div>
      </section>

      {/* Benefit bar */}
      <div className="border-y border-border bg-card px-5 py-6">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 md:grid-cols-4">
          {[
            [BookOpen, "Histórias bíblicas"],
            [Heart, "Valores cristãos"],
            [Printer, "Pronto para imprimir"],
            [Home, "Aprenda em família"],
          ].map(([Icon, t]) => {
            const I = Icon as typeof BookOpen;
            return (
              <div key={t as string} className="flex items-center justify-center gap-3 text-sm font-bold text-foreground">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-muted text-secondary"><I size={18} /></span>
                {t as string}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contents */}
      <Section>
        <Heading title="Uma maneira especial de apresentar a Bíblia às crianças" desc="Conheça o material principal e veja como ele pode tornar os momentos de aprendizado mais interessantes." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Histórias bíblicas infantis", "Material educativo para crianças", "Conteúdo para momentos em família", "Atividades para complementar o aprendizado", "Arquivos digitais em PDF", "Material para imprimir"].map((t) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sage text-primary-foreground"><Check size={16} /></span>
              <span className="font-semibold">{t}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Emotional */}
      <Section className="bg-muted">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={maeImg} loading="lazy" width={1008} height={1200} alt="Mãe lendo uma história bíblica ilustrada com o filho" className="w-full rounded-3xl object-cover shadow-soft md:max-h-[560px]" />
          <div>
            <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl">
              As primeiras histórias que uma criança aprende podem acompanhar seu coração por toda a vida
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Mais do que uma atividade, crie oportunidades para conversar sobre fé, amor, bondade, coragem e os ensinamentos da Palavra de Deus.
            </p>
            <ul className="mt-8 space-y-4">
              {["Incentive o contato com as histórias bíblicas", "Crie momentos especiais entre pais e filhos", "Ensine valores cristãos desde a infância", "Estimule a curiosidade e a imaginação"].map((t) => (
                <li key={t} className="flex gap-3 font-semibold"><Heart className="mt-0.5 shrink-0 fill-blush text-secondary" size={20} />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Problems */}
      <Section>
        <Heading title="Ensinar a Bíblia às crianças pode ser mais simples e divertido" desc="Tenha um material digital organizado para ajudar a criar momentos de aprendizado cristão." />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [Clock, "Economize tempo", "Tenha um material pronto para utilizar."],
            [BookOpen, "Aprendizado cristão", "Apresente histórias e ensinamentos bíblicos de forma acessível."],
            [Home, "Use em diferentes momentos", "Ideal para atividades em casa, na igreja e na Escola Bíblica Infantil."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Clock;
            return (
              <div key={t as string} className="rounded-2xl bg-card p-8 shadow-soft">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground"><I size={24} /></span>
                <h3 className="mt-6 text-xl font-bold text-primary">{t as string}</h3>
                <p className="mt-2 text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Complementary products */}
      <Section className="bg-muted">
        <Heading eyebrow="OPCIONAIS NO CHECKOUT" title="Conheça os materiais complementares" desc="Além das histórias, você pode adicionar outros materiais para ampliar as possibilidades de aprendizado e diversão." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bumps.map((b) => (
            <article key={b.name} className="overflow-hidden rounded-2xl bg-card shadow-soft">
              <img src={b.img} loading="lazy" width={816} height={816} alt={`Mockup do ${b.name}`} className="aspect-square w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary">{b.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Produtos adicionais, vendidos separadamente e oferecidos opcionalmente no checkout.
        </p>
      </Section>

      {/* Banner */}
      <section className="bg-primary px-5 py-20 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <Sparkles className="mx-auto mb-6 text-accent" />
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">Pequenos momentos de aprendizado podem cultivar grandes valores para a vida.</h2>
          <p className="mt-5 text-lg opacity-85">Compartilhe histórias, converse sobre a Palavra e construa lembranças especiais com as crianças.</p>
        </div>
      </section>

      {/* Offer */}
      <Section id="ofertas" className="bg-warm scroll-mt-4">
        <Heading title="Comece hoje essa jornada de aprendizado bíblico" desc="Garanta seu material principal e escolha os complementos que deseja adicionar no checkout." />
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border-2 border-accent bg-card p-8 shadow-soft md:p-10">
            <span className="rounded-full bg-accent px-4 py-1 text-xs font-extrabold tracking-wider text-accent-foreground">PRODUTO PRINCIPAL</span>
            <h3 className="mt-5 text-2xl font-bold text-primary md:text-3xl">Histórias Bíblicas Infantis para Imprimir</h3>
            <p className="mt-2 text-muted-foreground">Seu primeiro passo para ensinar histórias bíblicas de maneira divertida.</p>
            <p className="mt-6 font-serif text-5xl font-bold text-primary">R$ 19,90</p>
            <ul className="mt-6 space-y-3">
              {["Material digital em PDF", "Histórias bíblicas infantis", "Conteúdo educativo", "Acesso digital após confirmação do pagamento", "Pronto para imprimir"].map((f) => (
                <li key={f} className="flex gap-3"><Check className="shrink-0 text-sage" size={20} />{f}</li>
              ))}
            </ul>
            <a href={checkout} className={`${ctaCls} mt-8 w-full`}>QUERO GARANTIR MEU MATERIAL</a>
            <p className="mt-3 text-center text-xs text-muted-foreground">Pagamento seguro • Produto digital</p>
          </div>
          <div>
            <p className="mb-4 font-semibold text-foreground">No checkout, você também poderá adicionar materiais complementares com condições especiais:</p>
            <div className="space-y-3">
              {bumps.map((b) => (
                <div key={b.name} className="flex items-center gap-4 rounded-2xl border border-dashed border-secondary/40 bg-card p-3">
                  <img src={b.img} loading="lazy" width={64} height={64} alt="" className="h-16 w-16 rounded-xl object-cover" />
                  <div className="flex-1">
                    <p className="font-bold text-primary">{b.name}</p>
                    <p className="text-xs text-muted-foreground">Opcional</p>
                  </div>
                  <p className="flex items-center gap-1 whitespace-nowrap font-bold text-secondary"><Plus size={14} />R$ {b.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Trust */}
      <Section>
        <Heading title="Sua compra protegida" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [ShieldCheck, "Compra segura", "Pagamento realizado por uma plataforma de checkout segura."],
            [Download, "Acesso digital", "Receba as instruções de acesso após a confirmação do pagamento."],
            [Heart, "Educação cristã", "Um material pensado para apoiar o aprendizado bíblico infantil."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Clock;
            return (
              <div key={t as string} className="text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-muted text-primary"><I size={26} /></span>
                <h3 className="mt-4 text-lg font-bold text-primary">{t as string}</h3>
                <p className="mt-2 text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted">
        <Heading title="Dúvidas Frequentes" />
        <Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-3">
          {faq.map(([q, a], i) => (
            <AccordionItem key={q} value={`i${i}`} className="rounded-2xl border-none bg-card px-6">
              <AccordionTrigger className="text-left font-bold text-primary hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Final CTA */}
      <section className="bg-primary px-5 py-20 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">Comece a construir momentos especiais de fé e aprendizado!</h2>
          <p className="mt-5 text-lg opacity-85">Apresente às crianças histórias que ensinam valores, despertam a curiosidade e aproximam a família da Palavra de Deus.</p>
          <a href="#ofertas" className={`${ctaLight} mt-8`}>QUERO MEU MATERIAL</a>
        </div>
      </section>

      <footer className="border-t border-primary-foreground/15 bg-primary px-5 py-8 text-sm text-primary-foreground/80">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-serif text-base font-bold text-primary-foreground">Pequenos com Deus</p>
          <nav className="flex flex-wrap justify-center gap-5">
            <a href="#" className="hover:text-accent">Política de Privacidade</a>
            <a href="#" className="hover:text-accent">Termos de Uso</a>
            <a href="#" className="hover:text-accent">Contato</a>
          </nav>
          <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
        </div>
      </footer>
    </main>
  );
}
