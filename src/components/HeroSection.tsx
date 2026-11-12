import { ArrowRight, ShieldCheck } from 'lucide-react';
import SlotReels from '@/components/SlotReels';
import { SITE_URL } from '@/lib/site';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-neutral-950 pb-20 pt-32 text-white sm:pt-36 lg:pb-28"
    >
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-red-600/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up text-center lg:text-left">
          <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            Seu bônus está <span className="text-amber-400">esperando!</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg lg:mx-0">
            Aproveite sua experiência, colete seu bônus de boas-vindas e fique por dentro de tudo
            o que acontece na comunidade.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-glow group inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-base font-bold text-neutral-950 transition-all hover:-translate-y-0.5 hover:bg-amber-300 sm:w-auto"
            >
              ENTRE AGORA
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-amber-300 hover:text-amber-300 sm:w-auto"
            >
              Descubra nossas novidades
            </a>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-neutral-400 lg:justify-start">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Acesse agora e confira!
          </p>
        </div>

        <div className="animate-fade-up mx-auto w-full max-w-md [animation-delay:150ms] lg:max-w-none">
          <SlotReels />
        </div>
      </div>
    </section>
  );
}
