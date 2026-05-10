import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-[105px]">

      {/* Bloc héro principal */}
      <div className="relative h-[92vh] min-h-[600px] overflow-hidden bg-smoke">
        <img
          src="/images/4.jpeg"
          alt="Le Bon Bois — Artisanat Marocain"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

        <div className="absolute bottom-12 left-10 md:left-16 max-w-lg">
          <p className="text-[11px] text-white/60 tracking-[0.35em] uppercase mb-3 font-medium">
            Nouvelle collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white leading-[1.1] mb-6">
            Le bois, élevé<br/>
            au rang d'art
          </h1>
          <Link
            href="/catalogue"
            className="inline-flex items-center gap-3 text-[11px] text-white tracking-[0.25em] uppercase font-semibold border-b border-white/50 pb-1 hover:border-white transition-colors"
          >
            Découvrir la collection
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bande texte défilante */}
      <div className="border-y border-border py-5 overflow-hidden">
        <div
          className="flex items-center gap-16 whitespace-nowrap w-max"
          style={{ animation: 'marquee 22s linear infinite' }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-16 text-[11px] text-stone tracking-[0.3em] uppercase font-medium">
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
