'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.08)]' : ''}`}>

      {/* Barre promo ultra-fine */}
      <div className="border-b border-border bg-paper text-center py-2">
        <p className="text-[10px] text-stone tracking-[0.25em] uppercase font-medium">
          Livraison gratuite au Maroc &nbsp;·&nbsp; Artisanat 100 % marocain
        </p>
      </div>

      {/* Header principal — style WeWood : logo centré, nav split */}
      <div className="relative h-16 flex items-center justify-between px-8 md:px-12">

        {/* Nav gauche (desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/catalogue" className="text-[11px] text-charcoal hover:text-ink tracking-[0.2em] uppercase font-medium transition-colors">
            Catalogue
          </Link>
          <Link href="/catalogue?cat=Bureaux" className="text-[11px] text-charcoal hover:text-ink tracking-[0.2em] uppercase font-medium transition-colors">
            Bureaux
          </Link>
          <Link href="/catalogue?cat=Tables" className="text-[11px] text-charcoal hover:text-ink tracking-[0.2em] uppercase font-medium transition-colors">
            Tables
          </Link>
        </nav>

        {/* Logo centré — pointer-events-none pour ne pas bloquer le hamburger */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none group z-0">
          <span className="font-serif text-[22px] sm:text-[30px] font-black tracking-wide text-black">
            Le Bon Bois
          </span>
          <span className="text-[8px] tracking-[0.35em] uppercase text-mist font-medium mt-0.5">
            Artisanat Marocain
          </span>
        </Link>

        {/* Nav droite (desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/catalogue?cat=Rangement" className="text-[11px] text-charcoal hover:text-ink tracking-[0.2em] uppercase font-medium transition-colors">
            Rangement
          </Link>
          <Link href="/contact" className="text-[11px] text-charcoal hover:text-ink tracking-[0.2em] uppercase font-medium transition-colors">
            Contact
          </Link>
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] bg-ink hover:bg-charcoal text-white tracking-[0.18em] uppercase font-semibold px-4 py-2 transition-colors"
          >
            Commander
          </a>
        </nav>

        {/* Mobile hamburger — z-10 pour être au-dessus du logo, 44×44px zone de tap */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-10 flex flex-col justify-center items-center gap-[5px] w-11 h-11 ml-auto -mr-2 touch-manipulation"
          aria-label="Menu"
        >
          <span className={`block h-[1.5px] bg-ink transition-all duration-200 origin-center ${mobileOpen ? 'w-5 rotate-45 translate-y-[6.5px]' : 'w-5'}`} />
          <span className={`block h-[1.5px] bg-ink transition-all duration-200 ${mobileOpen ? 'opacity-0 w-5' : 'w-4'}`} />
          <span className={`block h-[1.5px] bg-ink transition-all duration-200 origin-center ${mobileOpen ? 'w-5 -rotate-45 -translate-y-[6.5px]' : 'w-5'}`} />
        </button>
      </div>

      {/* Ligne séparatrice */}
      <div className="h-px bg-border" />

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-border px-8 py-6 flex flex-col gap-4">
          {[
            { l: 'Catalogue',  h: '/catalogue' },
            { l: 'Bureaux',    h: '/catalogue?cat=Bureaux' },
            { l: 'Tables',     h: '/catalogue?cat=Tables' },
            { l: 'Rangement',  h: '/catalogue?cat=Rangement' },
            { l: 'Contact',    h: '/contact' },
          ].map(({ l, h }) => (
            <Link
              key={h}
              href={h}
              onClick={() => setMobileOpen(false)}
              className="text-[12px] text-charcoal hover:text-ink tracking-[0.2em] uppercase font-medium py-2 border-b border-border last:border-0 transition-colors"
            >
              {l}
            </Link>
          ))}
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-ink text-white text-[11px] font-semibold tracking-[0.2em] uppercase text-center py-3"
          >
            Commander via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
