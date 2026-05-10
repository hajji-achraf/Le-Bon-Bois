import Link from 'next/link';

const cats = [
  { name: 'Bureaux',   image: '/images/5.jpeg',       href: '/catalogue?cat=Bureaux',   dark: true  },
  { name: 'Tables',    image: '/images/6.jpeg',        href: '/catalogue?cat=Tables',    dark: true  },
  { name: 'Rangement', image: '/images/7.jpeg',        href: '/catalogue?cat=Rangement', dark: true  },
];

export default function Categories() {
  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center gap-6">
            <div className="w-8 h-px bg-ink" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink">
              Collections
            </h2>
          </div>
          <Link
            href="/catalogue"
            className="hidden md:flex items-center gap-2 text-[11px] text-stone hover:text-ink tracking-[0.22em] uppercase font-medium transition-colors"
          >
            Tout voir
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {cats.map((cat) =>
            cat.dark ? (
              /* Carte normale : image plein cadre avec gradient sombre */
              <Link
                key={cat.name}
                href={cat.href}
                className="group relative overflow-hidden aspect-[2/3] bg-smoke block"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-[19px] font-semibold text-white leading-none mb-2">
                    {cat.name}
                  </h3>
                  <div className="flex items-center gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="w-4 h-px bg-white/70" />
                    <span className="text-[10px] text-white/70 tracking-[0.22em] uppercase font-medium">
                      Explorer
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              /* Carte Étagères : fond ink + image centrée (fond blanc) */
              <Link
                key={cat.name}
                href={cat.href}
                className="group relative overflow-hidden aspect-[2/3] bg-ink flex flex-col block"
              >
                {/* Image centrée, contenue, avec padding */}
                <div className="flex-1 flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>

                {/* Bande texte en bas */}
                <div className="px-5 pb-5 pt-2 border-t border-white/10">
                  <h3 className="font-serif text-[19px] font-semibold text-white leading-none mb-2">
                    {cat.name}
                  </h3>
                  <div className="flex items-center gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="w-4 h-px bg-white/50" />
                    <span className="text-[10px] text-white/50 tracking-[0.22em] uppercase font-medium">
                      Explorer
                    </span>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
