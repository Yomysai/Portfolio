import { useState } from 'react';
import {
  ShoppingBag, Heart, Search, MapPin, Phone, Clock, Star, ArrowRight,
  Truck, RefreshCw, ShieldCheck, Tag, Instagram, ChevronRight, Check, X
} from 'lucide-react';

const CATEGORIES = ['Nouveautés', 'Vestes', 'Robes', 'Accessoires', 'Chaussures', 'Soldes'];

const PRODUCTS = [
  { id: 1, name: 'Trench beige classique', price: '129€', oldPrice: null, image: 'https://images.pexels.com/photos/5531709/pexels-photo-5531709.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', category: 'Vestes', tag: 'Nouveau' },
  { id: 2, name: 'Robe fluide pastel', price: '79€', oldPrice: '99€', image: 'https://images.pexels.com/photos/8386651/pexels-photo-8386651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', category: 'Robes', tag: 'Promo' },
  { id: 3, name: 'Bottes en cuir camel', price: '159€', oldPrice: null, image: 'https://images.pexels.com/photos/27658532/pexels-photo-27658532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', category: 'Chaussures', tag: null },
  { id: 4, name: 'Sac structuré cognac', price: '89€', oldPrice: null, image: 'https://images.pexels.com/photos/27204277/pexels-photo-27204277.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', category: 'Accessoires', tag: null },
  { id: 5, name: 'Collection automne', price: '69€', oldPrice: '89€', image: 'https://images.pexels.com/photos/29906028/pexels-photo-29906028.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', category: 'Vestes', tag: 'Promo' },
  { id: 6, name: 'Escarpins blancs élégants', price: '119€', oldPrice: null, image: 'https://images.pexels.com/photos/26772101/pexels-photo-26772101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', category: 'Chaussures', tag: 'Nouveau' },
  { id: 7, name: 'Boutique sélection', price: '49€', oldPrice: null, image: 'https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', category: 'Robes', tag: null },
  { id: 8, name: 'Beauty & accessories', price: '39€', oldPrice: '59€', image: 'https://images.pexels.com/photos/3750640/pexels-photo-3750640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', category: 'Accessoires', tag: 'Promo' },
];

const PROMOTIONS = [
  { title: 'Nouvelle collection', subtitle: 'Automne / Hiver 2026', description: 'Découvrez nos pièces les plus tendances de la saison', image: 'https://images.pexels.com/photos/8619007/pexels-photo-8619007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', cta: 'Voir la collection' },
  { title: 'Soldes d\'automne', subtitle: 'Jusqu\'à -40%', description: 'Profitez de réductions sur une sélection de pièces', image: 'https://images.pexels.com/photos/8311880/pexels-photo-8311880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', cta: 'J\'en profite' },
];

export default function CommerceDemo() {
  const [activeCategory, setActiveCategory] = useState('Nouveautés');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

  const toggleFav = (id: number) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const filteredProducts = activeCategory === 'Nouveautés'
    ? PRODUCTS
    : activeCategory === 'Soldes'
    ? PRODUCTS.filter(p => p.tag === 'Promo')
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-stone-50 font-sans">
      {/* Barre supérieure */}
      <div className="bg-rose-950 text-white text-center py-2.5 text-xs font-medium">
        Livraison offerte dès 80€ d'achat · Retours gratuits sous 14 jours
      </div>

      {/* Section hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-rose-50">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5531542/pexels-photo-5531542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Boutique de mode"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-950/70 via-rose-900/30 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <Tag className="w-3.5 h-3.5 text-rose-200" />
              <span className="text-white text-xs font-semibold tracking-wide">BOUTIQUE DE MODE · LYON</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Maison<br />
              <span className="italic text-rose-300">Camélia</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
              Prêt-à-porter féminin et accessoires sélectionnés avec soin.
              Des pièces intemporelles pour une garde-robe qui vous ressemble.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-rose-50 text-rose-950 font-bold rounded-xl transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <ShoppingBag className="w-4 h-4" />
                Découvrir la boutique
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('promos')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition-all"
              >
                Voir les promotions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-white py-8 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: 'Livraison offerte', desc: 'Dès 80€ d\'achat' },
            { icon: RefreshCw, title: 'Retours gratuits', desc: 'Sous 14 jours' },
            { icon: ShieldCheck, title: 'Paiement sécurisé', desc: 'CB / PayPal' },
            { icon: MapPin, title: 'Magasin à Lyon', desc: '24 rue Mercière' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-stone-900">{item.title}</div>
                  <div className="text-xs text-stone-500">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Promotions */}
      <section id="promos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {PROMOTIONS.map((promo, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer">
              <img src={promo.image} alt={promo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/80 via-rose-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-rose-300 text-xs font-semibold mb-2 uppercase tracking-wide">{promo.subtitle}</div>
                <h3 className="font-serif text-3xl text-white mb-2">{promo.title}</h3>
                <p className="text-white/70 text-sm mb-4">{promo.description}</p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-rose-300 transition-colors">
                  {promo.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Produits */}
      <section id="produits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold mb-3">
                <ShoppingBag className="w-3.5 h-3.5" />
                COLLECTION
              </div>
              <h2 className="font-serif text-4xl text-stone-900">Nos produits</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <Search className="w-4 h-4" />
              <span>{filteredProducts.length} articles</span>
            </div>
          </div>

          {/* Filtre par catégorie */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-rose-950 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grille de produits */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.tag && (
                    <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${
                      product.tag === 'Promo' ? 'bg-rose-600 text-white' : 'bg-white text-rose-950'
                    }`}>
                      {product.tag}
                    </span>
                  )}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleFav(product.id); }}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-all"
                  >
                    <Heart className={`w-4.5 h-4.5 transition-all ${favorites.includes(product.id) ? 'fill-rose-600 text-rose-600' : 'text-stone-400'}`} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full py-2.5 bg-rose-950/95 backdrop-blur-sm text-white text-sm font-semibold rounded-lg hover:bg-rose-900 transition-colors flex items-center justify-center gap-1.5">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Ajouter au panier
                    </button>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-stone-900 mb-1 group-hover:text-rose-700 transition-colors">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-stone-900 font-bold text-sm">{product.price}</span>
                  {product.oldPrice && <span className="text-stone-400 text-xs line-through">{product.oldPrice}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold mb-4">
            <Instagram className="w-3.5 h-3.5" />
            @maisoncamelia
          </div>
          <h2 className="font-serif text-4xl text-stone-900 mb-4">Suivez-nous sur Instagram</h2>
          <p className="text-stone-600 mb-10">Nouveautés, looks et coulisses de la boutique</p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
            {PRODUCTS.slice(0, 6).map((p, i) => (
              <a key={i} href="#" className="relative aspect-square rounded-lg overflow-hidden group">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-rose-950/0 group-hover:bg-rose-950/30 transition-colors flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Informations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold mb-4">
                BOUTIQUE
              </div>
              <h2 className="font-serif text-4xl text-stone-900 mb-6">Venez nous rendre visite</h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: MapPin, label: 'Adresse', value: '24 rue Mercière, 69002 Lyon' },
                  { icon: Phone, label: 'Téléphone', value: '04 78 56 78 90' },
                  { icon: Clock, label: 'Horaires', value: 'Lun–Sam · 10h–19h · Fermé le dimanche' },
                ].map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-rose-600" />
                      </div>
                      <div>
                        <div className="text-xs text-stone-500 font-medium uppercase">{info.label}</div>
                        <div className="text-stone-900 font-semibold">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-950 text-white font-semibold rounded-xl hover:bg-rose-900 transition-colors">
                <Instagram className="w-4 h-4" />
                Suivre @maisoncamelia
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] bg-stone-200">
              <iframe
                title="Carte"
                src="https://www.openstreetmap.org/export/embed.html?bbox=4.82%2C45.75%2C4.86%2C45.78&layer=mapnik&marker=45.76%2C4.84"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-rose-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl text-white mb-2">Maison Camélia</h3>
              <p className="text-rose-200/60 text-sm">Prêt-à-porter féminin & accessoires · Lyon</p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <span className="text-white font-semibold mb-2">Boutique</span>
              {CATEGORIES.map((cat) => (
                <a key={cat} href="#" className="text-rose-200/60 hover:text-white transition-colors">{cat}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <span className="text-white font-semibold mb-2">Informations</span>
              <a href="#" className="text-rose-200/60 hover:text-white transition-colors">Livraison & retours</a>
              <a href="#" className="text-rose-200/60 hover:text-white transition-colors">Guide des tailles</a>
              <a href="#" className="text-rose-200/60 hover:text-white transition-colors">CGV</a>
              <a href="#" className="text-rose-200/60 hover:text-white transition-colors">Mentions légales</a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-rose-200/40 text-xs">© 2026 Maison Camélia · Maquette démo DémoVitrine</p>
          </div>
        </div>
      </footer>

      {/* Aperçu rapide produit */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden max-h-[90vh] flex flex-col sm:flex-row" onClick={(e) => e.stopPropagation()}>
            <div className="sm:w-1/2 aspect-square sm:aspect-auto bg-stone-100">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
            </div>
            <div className="sm:w-1/2 p-8 flex flex-col justify-between relative">
              <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors">
                <X className="w-4 h-4 text-stone-600" />
              </button>
              <div>
                {selectedProduct.tag && (
                  <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-4 ${
                    selectedProduct.tag === 'Promo' ? 'bg-rose-600 text-white' : 'bg-white text-rose-950 border border-rose-200'
                  }`}>
                    {selectedProduct.tag}
                  </span>
                )}
                <h3 className="font-serif text-2xl text-stone-900 mb-2">{selectedProduct.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-stone-900">{selectedProduct.price}</span>
                  {selectedProduct.oldPrice && <span className="text-stone-400 line-through">{selectedProduct.oldPrice}</span>}
                </div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                  <span className="text-xs text-stone-500 ml-1">(24 avis)</span>
                </div>
                <div className="space-y-2 mb-6">
                  {['Coton biologique certifié', 'Coupe ajustée', 'Disponible en 4 tailles', 'Made in France'].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-stone-600">
                      <Check className="w-4 h-4 text-rose-600" /> {f}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mb-6">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button key={size} className="w-10 h-10 rounded-lg border border-stone-200 hover:border-rose-400 hover:bg-rose-50 text-sm font-medium text-stone-700 transition-all">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full py-3.5 bg-rose-950 hover:bg-rose-900 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Ajouter au panier
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => { toggleFav(selectedProduct.id); }}
                  className="w-full py-3 border border-stone-200 hover:border-rose-400 text-stone-700 font-medium rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(selectedProduct.id) ? 'fill-rose-600 text-rose-600' : ''}`} />
                  {favorites.includes(selectedProduct.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
