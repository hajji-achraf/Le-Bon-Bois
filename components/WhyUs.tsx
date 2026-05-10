const reasons = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.727 12.727.707.707M3 12H4m16 0h1M4.22 19.78l.707-.707m12.727-12.727.707-.707M12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7z"/>
      </svg>
    ),
    title: 'Bois Naturel',
    desc: 'Chêne, noyer, pin — essences nobles issues de forêts gérées durablement, sélectionnées pour leur beauté et leur longévité.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17 21l4-4-5.83-5.58M7 3H4a1 1 0 0 0-1 1v3m17 0V4a1 1 0 0 0-1-1h-3M3 21v-3m18 3v-3M3 7v10m18-10v10"/>
      </svg>
    ),
    title: 'Fait à la Main',
    desc: 'Chaque pièce est façonnée à la main par nos maîtres artisans marocains, selon des techniques transmises de génération en génération.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
      </svg>
    ),
    title: 'Livraison Maroc',
    desc: 'Vos meubles sont emballés avec soin et livrés à domicile partout au Maroc. Montage disponible sur demande.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-8 md:px-16 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto">

        {/* Split layout : texte gauche + raisons droite */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Gauche */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-8 h-px bg-ink" />
              <p className="text-[11px] text-stone tracking-[0.25em] uppercase font-medium">
                Notre savoir-faire
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink leading-tight mb-8">
              Un meuble<br/>
              qui dure<br/>
              toute une vie
            </h2>
            <p className="text-[14px] text-stone leading-relaxed max-w-sm">
              Chez Le Bon Bois, chaque meuble est une oeuvre. Nous choisissons
              les meilleures essences, travaillées avec patience et précision,
              pour vous offrir des pièces uniques qui embellissent votre intérieur
              pendant des décennies.
            </p>
          </div>

          {/* Droite — 3 raisons */}
          <div className="space-y-0 divide-y divide-border">
            {reasons.map((r, i) => (
              <div key={r.title} className="flex items-start gap-6 py-8 group">
                <div className="text-stone group-hover:text-oak transition-colors mt-0.5 shrink-0">
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-serif text-[17px] font-semibold text-ink mb-2">{r.title}</h3>
                  <p className="text-[13px] text-stone leading-relaxed">{r.desc}</p>
                </div>
                <span className="ml-auto shrink-0 font-serif text-[11px] text-mist pt-1">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
