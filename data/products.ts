export type Category = 'Bureaux' | 'Tables' | 'Étagères' | 'Rangement';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  details: string[];
  image: string;
  images: string[];
  featured: boolean;
  wood: string;
  dimensions: string;
}

export const categories: Category[] = ['Bureaux', 'Tables', 'Étagères', 'Rangement'];

export const products: Product[] = [
  {
    id: 'table-basse-verre-bois',
    name: 'Table Basse Verre & Bois',
    category: 'Tables',
    price: 1490,
    description:
      'Table basse moderne alliant plateau en verre trempé et structure en bois massif. Un équilibre parfait entre élégance et robustesse pour votre salon.',
    details: [
      'Structure bois massif naturel',
      'Plateau verre trempé 8 mm',
      'Niveau inférieur de rangement',
      'Finition huile naturelle',
    ],
    image: '/images/1.jpeg',
    images: ['/images/1.jpeg'],
    featured: true,
    wood: 'Chêne massif',
    dimensions: '105 × 65 × 35 cm',
  },
  {
    id: 'table-basse-bois-noir',
    name: 'Table Basse Bois & Noir Mat',
    category: 'Tables',
    price: 1250,
    description:
      'Table basse au design contemporain avec structure bois massif et tiroir laqué noir mat. Style épuré et fonctionnel pour un intérieur moderne.',
    details: [
      'Structure chêne massif',
      'Tiroir laqué noir mat',
      'Niche de rangement ouverte',
      'Finition vernis satiné',
    ],
    image: '/images/2.jpeg',
    images: ['/images/2.jpeg'],
    featured: true,
    wood: 'Chêne',
    dimensions: '90 × 90 × 40 cm',
  },
  {
    id: 'table-basse-bois-metal',
    name: 'Table Basse Bois & Métal',
    category: 'Tables',
    price: 1180,
    description:
      'Table basse industrielle en bois naturel avec renforts métal laqué taupe. Deux niches de rangement ouvertes pour allier style et praticité.',
    details: [
      'Plateau chêne massif',
      'Renforts métal laqué taupe',
      'Double niche de rangement',
      'Style industriel moderne',
    ],
    image: '/images/3.jpeg',
    images: ['/images/3.jpeg'],
    featured: false,
    wood: 'Chêne',
    dimensions: '110 × 70 × 38 cm',
  },
  {
    id: 'fauteuil-bois-rangement',
    name: 'Fauteuil Structure Bois',
    category: 'Rangement',
    price: 2200,
    description:
      'Fauteuil lounge avec structure en bois sculpté, assise en tissu beige et rangement intégré sur les accoudoirs. Un meuble unique qui conjugue confort et design.',
    details: [
      'Structure bois massif sculpté',
      'Assise tissu beige haute densité',
      'Rangement intégré latéral',
      'Panneaux ajourés décoratifs',
    ],
    image: '/images/4.jpeg',
    images: ['/images/4.jpeg'],
    featured: true,
    wood: 'Bois massif',
    dimensions: '85 × 80 × 75 cm',
  },
  {
    id: 'bureau-moderne-bois',
    name: 'Bureau Moderne Bois & Blanc',
    category: 'Bureaux',
    price: 1350,
    description:
      'Bureau épuré en blanc avec tiroirs en bois naturel décalés en escalier. Design fonctionnel et élégant pour un espace de travail inspirant.',
    details: [
      'Structure laquée blanc mat',
      'Façades tiroirs en chêne naturel',
      '3 tiroirs spacieux',
      'Design asymétrique moderne',
    ],
    image: '/images/5.jpeg',
    images: ['/images/5.jpeg'],
    featured: true,
    wood: 'Chêne & MDF laqué',
    dimensions: '120 × 55 × 76 cm',
  },
  {
    id: 'table-basse-bois-anthracite',
    name: 'Table Basse Bois Anthracite',
    category: 'Tables',
    price: 1380,
    description:
      'Table basse premium avec pieds blocs en bois massif et plateau anthracite. Un design fort et contemporain qui s\'impose dans votre salon.',
    details: [
      'Pieds blocs bois massif',
      'Plateau laqué anthracite',
      'Structure robuste',
      'Finition premium',
    ],
    image: '/images/6.jpeg',
    images: ['/images/6.jpeg'],
    featured: false,
    wood: 'Noyer massif',
    dimensions: '120 × 70 × 42 cm',
  },
  {
    id: 'table-chevet-noyer',
    name: 'Table de Chevet Noyer',
    category: 'Rangement',
    price: 680,
    description:
      'Table de chevet en noyer massif avec tiroir à poignée encastrée et double étagère ouverte. Élégante et fonctionnelle pour votre chambre.',
    details: [
      'Noyer massif',
      '1 tiroir fermeture douce',
      '2 étagères ouvertes',
      'Poignée encastrée',
    ],
    image: '/images/7.jpeg',
    images: ['/images/7.jpeg'],
    featured: false,
    wood: 'Noyer',
    dimensions: '55 × 40 × 60 cm',
  },
  {
    id: 'table-chevet-scandinave',
    name: 'Table de Chevet Scandinave',
    category: 'Rangement',
    price: 520,
    description:
      'Table de chevet au design scandinave, laquée blanc avec pieds effilés en chêne. Légèreté visuelle et praticité avec tiroir et niche ouverte.',
    details: [
      'Laqué blanc mat',
      'Pieds effilés en chêne',
      '1 tiroir spacieux',
      'Niche de rangement ouverte',
    ],
    image: '/images/8.jpeg',
    images: ['/images/8.jpeg'],
    featured: false,
    wood: 'Chêne & MDF laqué',
    dimensions: '50 × 35 × 55 cm',
  },
];

export const featuredProducts = products.filter((p) => p.featured);
