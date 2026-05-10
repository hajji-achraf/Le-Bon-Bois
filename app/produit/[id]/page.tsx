import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/products';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const whatsappMsg = encodeURIComponent(
    `Bonjour Le Bon Bois, je souhaite commander : ${product.name} (${product.price} MAD). Pouvez-vous me contacter ?`
  );

  return (
    <div className="min-h-screen bg-white pt-[93px]">

      {/* Fil d'ariane */}
      <div className="border-b border-border px-8 md:px-16 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[11px] text-stone tracking-wide">
          <Link href="/" className="hover:text-ink transition-colors">Accueil</Link>
          <span className="text-mist">/</span>
          <Link href="/catalogue" className="hover:text-ink transition-colors">Catalogue</Link>
          <span className="text-mist">/</span>
          <span className="text-ink">{product.name}</span>
        </div>
      </div>

      {/* Produit principal */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Image */}
        <div className="aspect-square overflow-hidden bg-smoke">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Infos */}
        <div className="flex flex-col justify-center">
          <p className="text-[11px] text-stone tracking-[0.25em] uppercase mb-3">
            {product.category}
          </p>

          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink leading-tight mb-4">
            {product.name}
          </h1>

          <p className="text-[13px] text-stone mb-6">
            {product.wood} &nbsp;·&nbsp; {product.dimensions}
          </p>

          <div className="h-px bg-border mb-6" />

          <p className="font-serif text-3xl font-medium text-ink mb-8">
            {product.price.toLocaleString('fr-FR')} MAD
          </p>

          <p className="text-[14px] text-stone leading-relaxed mb-8 max-w-md">
            {product.description}
          </p>

          {/* Caractéristiques */}
          <ul className="space-y-2 mb-10">
            {product.details.map((d) => (
              <li key={d} className="flex items-center gap-3 text-[13px] text-charcoal">
                <span className="w-3 h-px bg-oak shrink-0" />
                {d}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={`https://wa.me/212600000000?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-ink hover:bg-charcoal text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 transition-colors w-full md:w-auto"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.867L0 24l6.336-1.508A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.647-.494-5.173-1.358l-.371-.214-3.762.896.944-3.653-.235-.384A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Commander via WhatsApp
          </a>
        </div>
      </div>

      {/* Produits similaires */}
      {related.length > 0 && (
        <div className="border-t border-border px-8 md:px-16 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-8 h-px bg-ink" />
              <h2 className="font-serif text-2xl font-medium text-ink">Vous aimerez aussi</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.id} href={`/produit/${r.id}`} className="group block">
                  <div className="aspect-square overflow-hidden bg-smoke mb-4">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="border-b border-border pb-4">
                    <h3 className="font-serif text-[16px] font-medium text-ink group-hover:text-oak transition-colors mb-1">{r.name}</h3>
                    <p className="text-[13px] text-stone">{r.price.toLocaleString('fr-FR')} MAD</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
