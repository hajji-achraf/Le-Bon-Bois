'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  const whatsappMsg = encodeURIComponent(
    `Bonjour, je suis intéressé(e) par : ${product.name} (${product.price} MAD). Pouvez-vous me contacter ?`
  );

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link href={`/produit/${product.id}`} className="relative overflow-hidden aspect-square bg-smoke block">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-600 ease-out ${
            hovered ? 'opacity-0 scale-[1.03]' : 'opacity-100 scale-100'
          }`}
        />
        <img
          src={product.images[1] ?? product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-600 ease-out ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
          }`}
        />

        {/* Bouton Commander — glisse depuis le bas au hover */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <a
            href={`https://wa.me/212600000000?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2.5 w-full bg-ink hover:bg-charcoal text-white text-[11px] font-semibold tracking-[0.2em] uppercase py-4 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.867L0 24l6.336-1.508A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.647-.494-5.173-1.358l-.371-.214-3.762.896.944-3.653-.235-.384A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Commander
          </a>
        </div>
      </Link>

      {/* Info — épuré style WeWood */}
      <div className="pt-4 pb-6 border-b border-border">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/produit/${product.id}`} className="font-serif text-[16px] font-medium text-ink hover:text-oak transition-colors leading-snug block mb-1">
              {product.name}
            </Link>
            <p className="text-[11px] text-stone tracking-wide">
              {product.wood} &nbsp;·&nbsp; {product.dimensions}
            </p>
          </div>
          <span className="font-serif text-[15px] font-medium text-ink whitespace-nowrap pt-0.5">
            {product.price.toLocaleString('fr-FR')} MAD
          </span>
        </div>
      </div>
    </div>
  );
}
