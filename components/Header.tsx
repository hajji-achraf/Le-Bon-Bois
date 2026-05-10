'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { l: 'Accueil',   h: '/' },
  { l: 'Catalogue', h: '/catalogue' },
  { l: 'Bureaux',   h: '/catalogue?cat=Bureaux' },
  { l: 'Tables',    h: '/catalogue?cat=Tables' },
  { l: 'Rangement', h: '/catalogue?cat=Rangement' },
  { l: 'Contact',   h: '/contact' },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* Bloquer le scroll du body quand le menu est ouvert */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.08)]' : ''}`}>

        {/* Barre promo */}
        <div className="border-b border-border bg-paper text-center py-2 px-4">
          <p className="text-[10px] text-stone tracking-[0.2em] uppercase font-medium leading-tight">
            Livraison gratuite au Maroc &nbsp;·&nbsp; Artisanat 100 % marocain
          </p>
        </div>

        {/* Barre principale */}
        <div className="relative h-16 flex items-center justify-between px-5 md:px-12">

          {/* Nav gauche desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(1, 4).map(({ l, h }) => (
              <Link key={h} href={h} className="text-[11px] text-charcoal hover:text-ink tracking-[0.2em] uppercase font-medium transition-colors">
                {l}
              </Link>
            ))}
          </nav>

          {/* Logo centré */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 z-0 flex flex-col items-center leading-none"
          >
            <span className="font-serif text-[20px] sm:text-[28px] font-black tracking-wide text-black whitespace-nowrap">
              Le Bon Bois
            </span>
            <span className="text-[7px] tracking-[0.3em] uppercase text-mist font-medium mt-0.5 hidden sm:block">
              Artisanat Marocain
            </span>
          </Link>

          {/* Nav droite desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(4).map(({ l, h }) => (
              <Link key={h} href={h} className="text-[11px] text-charcoal hover:text-ink tracking-[0.2em] uppercase font-medium transition-colors">
                {l}
              </Link>
            ))}
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] bg-ink hover:bg-charcoal text-white tracking-[0.18em] uppercase font-semibold px-4 py-2 transition-colors"
            >
              Commander
            </a>
          </nav>

          {/* Bouton hamburger mobile — z-10 au-dessus du logo, 44×44px */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-10 flex flex-col justify-center items-center gap-[5px] min-w-[44px] min-h-[44px] ml-auto touch-manipulation"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`block h-[1.5px] w-5 bg-ink transition-all duration-200 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block h-[1.5px] w-4 bg-ink transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] w-5 bg-ink transition-all duration-200 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>

        <div className="h-px bg-border" />
      </header>

      {/* Menu mobile — en dehors du header pour éviter les problèmes d'overflow */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Fond sombre cliquable pour fermer */}
          <div
            className="absolute inset-0 bg-ink/30"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panneau menu */}
          <div className="absolute top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-white shadow-2xl flex flex-col overflow-y-auto">

            {/* En-tête panneau */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <span className="font-serif text-[18px] font-black text-black">Le Bon Bois</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-charcoal touch-manipulation"
                aria-label="Fermer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Liens de navigation */}
            <nav className="flex flex-col px-6 py-4">
              <p className="text-[10px] text-stone tracking-[0.25em] uppercase font-medium mb-3">Navigation</p>
              {navLinks.map(({ l, h }) => (
                <Link
                  key={h}
                  href={h}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-border last:border-0 text-[14px] font-medium text-charcoal hover:text-ink active:text-ink touch-manipulation"
                >
                  {l}
                  <svg className="w-4 h-4 text-mist shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              ))}
            </nav>

            {/* Contact */}
            <div className="px-6 py-5 border-t border-border">
              <p className="text-[10px] text-stone tracking-[0.25em] uppercase font-medium mb-4">Nous contacter</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-3 px-4 bg-[#25D366] text-white text-[13px] font-semibold touch-manipulation"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.867L0 24l6.336-1.508A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.647-.494-5.173-1.358l-.371-.214-3.762.896.944-3.653-.235-.384A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Commander sur WhatsApp
                </a>
                <a
                  href="https://instagram.com/lebonbois"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-3 px-4 border border-border text-[13px] font-medium text-charcoal touch-manipulation"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 text-stone">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                  @lebonbois
                </a>
                <a
                  href="https://facebook.com/lebonbois"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-3 px-4 border border-border text-[13px] font-medium text-charcoal touch-manipulation"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 text-stone">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Le Bon Bois
                </a>
              </div>
            </div>

            {/* Infos bas */}
            <div className="mt-auto px-6 py-5 border-t border-border bg-paper">
              <p className="text-[11px] text-stone leading-relaxed">
                Artisanat marocain · Bois naturel<br/>
                Livraison partout au Maroc
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
