'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

function CatalogueContent() {
  const searchParams  = useSearchParams();
  const initialCat    = searchParams.get('cat') || 'Tous';

  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [sortBy,         setSortBy]         = useState<'default'|'asc'|'desc'>('default');
  const [search,         setSearch]         = useState('');

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== 'Tous')
      list = list.filter((p) => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.wood.toLowerCase().includes(q));
    }
    if (sortBy === 'asc')  list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'desc') list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCategory, sortBy, search]);

  return (
    <div className="min-h-screen bg-white pt-[105px]">

      {/* Titre page */}
      <div className="border-b border-border py-14 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          <div className="w-8 h-px bg-ink" />
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink">Catalogue</h1>
        </div>
      </div>

      {/* Barre filtres — style WeWood : très épurée */}
      <div className="border-b border-border px-8 md:px-16 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          {/* Catégories */}
          <div className="flex items-center flex-wrap gap-1">
            {['Tous', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[11px] font-medium tracking-[0.15em] uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-ink text-white'
                    : 'text-stone hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Recherche + tri */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-b border-border bg-transparent pb-1.5 text-[13px] text-ink placeholder-mist focus:outline-none focus:border-ink transition-colors w-40"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="text-[11px] text-stone hover:text-ink tracking-[0.12em] uppercase bg-transparent focus:outline-none cursor-pointer transition-colors"
            >
              <option value="default">Trier</option>
              <option value="asc">Prix croissant</option>
              <option value="desc">Prix décroissant</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grille produits */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-14">
        <p className="text-[11px] text-mist tracking-widest uppercase mb-10">
          {filtered.length} produit{filtered.length > 1 ? 's' : ''}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-2">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-28">
            <p className="font-serif text-2xl text-stone mb-2">Aucun produit trouvé</p>
            <p className="text-[13px] text-mist">Essayez un autre filtre</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CataloguePage() {
  return <Suspense><CatalogueContent /></Suspense>;
}
