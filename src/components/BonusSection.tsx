import { Gift, Sparkles, Users } from 'lucide-react';

const STEPS = [
  {
    icon: Users,
    title: 'Crie sua conta',
    description: 'Entre na comunidade em poucos passos e faça parte da nossa equipe de jogadores.',
  },
  {
    icon: Gift,
    title: 'Colete seu bônus',
    description: 'Seu bônus de boas-vindas fica disponível assim que você concluir o cadastro.',
  },
  {
    icon: Sparkles,
    title: 'Aproveite a experiência',
    description: 'Explore os jogos, acompanhe as novidades e aproveite tudo que a comunidade oferece.',
  },
];

export default function BonusSection() {
  return (
    <section id="bonus" className="bg-neutral-100 py-20 text-neutral-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Bônus de boas-vindas</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Colete seu bônus de boas-vindas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            Três passos simples para começar sua experiência na comunidade.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="group relative rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <span className="absolute right-6 top-6 text-5xl font-black text-neutral-100 transition-colors group-hover:text-amber-100">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-amber-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
