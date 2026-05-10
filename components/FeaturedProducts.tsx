import Link from 'next/link';
import { featuredProducts } from '@/data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-8 md:px-16 bg-paper border-t border-border">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center gap-6">
            <div className="w-8 h-px bg-ink" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink">
              Sélection
            </h2>
          </div>
          <Link
            href="/catalogue"
            className="hidden md:flex items-center gap-2 text-[11px] text-stone hover:text-ink tracking-[0.22em] uppercase font-medium transition-colors"
          >
            Voir tout
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
