'use client';

import { useState } from 'react';

const WA = 'https://wa.me/212600000000';
const IG = 'https://instagram.com/lebonbois';
const FB = 'https://facebook.com/lebonbois';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const msg = encodeURIComponent(
      `Bonjour Le Bon Bois,\n\nNom : ${data.name}\nEmail : ${data.email}\n\nMessage :\n${data.message}`
    );
    window.open(`${WA}?text=${msg}`, '_blank');
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="min-h-screen bg-white pt-[93px]">

      {/* En-tête page */}
      <div className="border-b border-border py-14 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          <div className="w-8 h-px bg-ink" />
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink">Contact</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* Gauche — infos */}
        <div>
          <p className="text-[14px] text-stone leading-relaxed mb-12 max-w-sm">
            Une question sur un produit, une commande particulière ou simplement envie
            d'échanger ? Nous sommes à votre écoute.
          </p>

          <div className="space-y-0 divide-y divide-border">
            {[
              { label: 'WhatsApp',  value: 'Réponse rapide · 9h–20h',        href: WA },
              { label: 'Instagram', value: '@lebonbois',                       href: IG },
              { label: 'Facebook',  value: 'Le Bon Bois',                      href: FB },
            ].map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-6 group"
              >
                <div>
                  <p className="text-[13px] font-semibold text-ink group-hover:text-oak transition-colors">{label}</p>
                  <p className="text-[12px] text-stone mt-0.5">{value}</p>
                </div>
                <svg className="w-4 h-4 text-mist group-hover:text-oak transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Droite — formulaire simple */}
        <div>
          <p className="text-[11px] text-stone tracking-[0.22em] uppercase font-medium mb-8">
            Envoyer un message
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] text-stone tracking-[0.15em] uppercase">Nom *</label>
                <input
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="border-b border-border bg-transparent pb-2.5 text-[14px] text-ink placeholder-mist focus:outline-none focus:border-ink transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] text-stone tracking-[0.15em] uppercase">Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="vous@email.com"
                  className="border-b border-border bg-transparent pb-2.5 text-[14px] text-ink placeholder-mist focus:outline-none focus:border-ink transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] text-stone tracking-[0.15em] uppercase">Message *</label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Votre message..."
                className="border-b border-border bg-transparent pb-2.5 text-[14px] text-ink placeholder-mist focus:outline-none focus:border-ink transition-colors resize-none"
              />
            </div>

            {sent && (
              <p className="text-[12px] text-oak font-medium">
                Message envoyé — nous vous répondrons rapidement.
              </p>
            )}

            <button
              type="submit"
              className="bg-ink hover:bg-charcoal text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
