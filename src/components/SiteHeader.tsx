import { Crown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SITE_URL } from '@/lib/site';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Bônus', href: '#bonus' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-neutral-950/95 shadow-lg shadow-black/30 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400 text-neutral-950">
            <Crown className="h-5 w-5" strokeWidth={2.5} />
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-200 transition-colors hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-all hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/20 md:inline-block"
        >
          ENTRE AGORA
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-neutral-950 px-4 pb-6 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/5 py-4 text-base font-medium text-neutral-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-full bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-neutral-950"
          >
            ENTRE AGORA
          </a>
        </nav>
      )}
    </header>
  );
}
