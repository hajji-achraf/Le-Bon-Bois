import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-[93px]"> {/* hauteur promo(28px) + header(64px) + border(1px) */}

      {/* Hero plein écran — svh pour Safari iOS */}
      <div className="relative overflow-hidden bg-smoke"
           style={{ height: 'calc(100svh - 93px)', minHeight: '500px' }}>
        <img
          src="/images/4.jpeg"
          alt="Le Bon Bois — Artisanat Marocain"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />

        <div className="absolute bottom-8 left-5 right-5 md:left-16 md:right-auto max-w-lg">
          <p className="text-[10px] text-white/60 tracking-[0.3em] uppercase mb-3 font-medium">
            Nouvelle collection
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-[1.1] mb-5">
            Le bois, élevé<br/>
            au rang d'art
          </h1>
          <Link
            href="/catalogue"
            className="inline-flex items-center gap-3 text-[11px] text-white tracking-[0.22em] uppercase font-semibold border-b border-white/50 pb-1 hover:border-white transition-colors"
          >
            Découvrir la collection
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bande défilante — overflow-hidden empêche le scroll horizontal */}
      <div className="border-y border-border py-4 overflow-hidden w-full">
        <div
          className="flex items-center gap-12 whitespace-nowrap"
          style={{ animation: 'marquee 22s linear infinite', width: 'max-content' }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 text-[10px] text-stone tracking-[0.28em] uppercase font-medium shrink-0">
              <span>Artisanat Marocain</span>
              <span className="text-border">—</span>
              <span>Bois Naturel</span>
              <span className="text-border">—</span>
              <span>Fait à la Main</span>
              <span className="text-border">—</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
