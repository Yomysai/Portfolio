import { useState } from 'react';
import {
  UtensilsCrossed, Wine, Clock, MapPin, Phone, Star, ArrowRight,
  Calendar, Users, ChevronRight, Quote, Instagram, Facebook
} from 'lucide-react';

const MENU_CATEGORIES = [
  {
    name: 'Entrées',
    items: [
      { name: 'Tartare de saumon', description: 'Avocat, agrumes, aneth, tuile de sésame', price: '14€' },
      { name: 'Velouté de potiron', description: 'Châtaignes rôties, huile de noisette', price: '11€' },
      { name: 'Burrata des Pouilles', description: 'Tomates anciennes, basilic, pesto maison', price: '13€' },
      { name: 'Foie gras mi-cuit', description: 'Chutney de figues, pain brioché toasté', price: '18€' },
    ],
  },
  {
    name: 'Plats',
    items: [
      { name: 'Filet de bœuf, sauce poivre', description: 'Pommes grenailles confites, jus corsé', price: '28€' },
      { name: 'Risotto aux cèpes', description: 'Parmesan affiné 24 mois, huile de truffe', price: '22€' },
      { name: 'Saint-Jacques rôties', description: 'Purée de céleri, beurre noisette, œufs de truite', price: '26€' },
      { name: 'Magret de canard', description: 'Sauce aux fruits rouges, légumes de saison', price: '24€' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Fondant au chocolat', description: 'Cœur coulant, glace vanille de Madagascar', price: '9€' },
      { name: 'Tarte fine aux pommes', description: 'Caramel beurre salé, glace au lait ribot', price: '8€' },
      { name: 'Pavlova aux fruits rouges', description: 'Crème chantilly, coulis de framboise', price: '10€' },
      { name: 'Café gourmand', description: 'Sélection de mignardises et espresso', price: '9€' },
    ],
  },
];

const GALLERY = [
  { url: 'https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Plat gastronomique' },
  { url: 'https://images.pexels.com/photos/15419504/pexels-photo-15419504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ravioli crémeux' },
  { url: 'https://images.pexels.com/photos/15750727/pexels-photo-15750727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cocktail au bar' },
  { url: 'https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cave à vin' },
  { url: 'https://images.pexels.com/photos/24289165/pexels-photo-24289165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Crevettes gastronomiques' },
  { url: 'https://images.pexels.com/photos/10135116/pexels-photo-10135116.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Salle cosy' },
];

const TESTIMONIALS = [
  { name: 'Sophie L.', rating: 5, text: 'Une expérience culinaire exceptionnelle. Le cadre est magnifique et le service impeccable. Mon adresse préférée !', date: 'Il y a 2 semaines' },
  { name: 'Marc D.', rating: 5, text: 'Le risotto aux cèpes est tout simplement divin. Ambiance chaleureuse, parfaite pour un dîner en amoureux.', date: 'Il y a 1 mois' },
  { name: 'Julie & Thomas', rating: 5, text: 'Nous avons fêté notre anniversaire ici. Tout était parfait, du conseil en vin au dessert. Merci !', date: 'Il y a 3 semaines' },
];

export default function RestaurantDemo() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="bg-stone-50 font-sans">
      {/* Section hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/28575445/pexels-photo-28575445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Restaurant élégant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-900/50 to-stone-950/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 mb-6">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
              <span className="text-amber-200 text-xs font-semibold tracking-wide">CUISINE DE SAISON · DEPUIS 2015</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Le Jardin<br />
              <span className="italic text-amber-400">Gourmand</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              Une cuisine française revisitée, des produits de saison et une ambiance
              chaleureuse au cœur de la ville.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setReservationOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-xl transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-400/30"
              >
                <Calendar className="w-4 h-4" />
                Réserver une table
              </button>
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
              >
                Découvrir la carte
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Barre d'informations rapides */}
      <section className="bg-stone-900 py-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: 'Horaires', value: 'Mar–Dim · 12h–14h30 · 19h–22h30' },
            { icon: MapPin, label: 'Adresse', value: '24 rue des Lilas, 69001 Lyon' },
            { icon: Phone, label: 'Téléphone', value: '04 78 12 34 56' },
            { icon: Wine, label: 'Bar à vins', value: 'Sélection de 80 références' },
          ].map((info, i) => {
            const Icon = info.icon;
            return (
              <div key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-stone-500 font-medium uppercase tracking-wide">{info.label}</div>
                  <div className="text-sm text-white font-medium truncate">{info.value}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* À propos */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Chef en cuisine"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-stone-50 hidden sm:block">
              <img
                src="https://images.pexels.com/photos/2977515/pexels-photo-2977515.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Plat en préparation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-4">
              <UtensilsCrossed className="w-3.5 h-3.5" />
              NOTRE HISTOIRE
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-6">
              Une cuisine de terroir,<br />faite avec passion
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Fondé en 2015 par le Chef Antoine Mercier, Le Jardin Gourmand célèbre la cuisine
              française de saison. Nous travaillons avec des producteurs locaux pour vous offrir
              des plats frais, savoureux et créatifs.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Notre équipe vous accueille dans un cadre intime et chaleureux, parfait pour
              un dîner en amoureux, un repas en famille ou un événement professionnel.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '8', label: 'Ans d\'expérience' },
                { value: '100%', label: 'Fait maison' },
                { value: '4.9', label: 'Note Google' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-stone-100">
                  <div className="text-2xl font-bold text-amber-600">{stat.value}</div>
                  <div className="text-xs text-stone-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 bg-stone-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-semibold mb-4">
              <Wine className="w-3.5 h-3.5" />
              LA CARTE
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4">Notre menu de saison</h2>
            <p className="text-stone-400 text-lg">Des plats qui changent au rythme des saisons</p>
          </div>

          {/* Onglets de catégories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {MENU_CATEGORIES.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === i
                    ? 'bg-amber-400 text-stone-950'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Plats du menu */}
          <div className="space-y-4 animate-fade-in" key={activeCategory}>
            {MENU_CATEGORIES[activeCategory].items.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-amber-400/20 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-stone-400 text-sm">{item.description}</p>
                </div>
                <div className="text-amber-400 font-bold text-lg shrink-0 pt-0.5">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setReservationOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-xl transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              Réserver ma table
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold mb-4">
            GALERIE
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-4">L'ambiance & les plats</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                i === 0 ? 'col-span-2 row-span-2 h-full min-h-[300px]' : 'h-48 sm:h-56'
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Témoignages clients */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-4">
              <Star className="w-3.5 h-3.5 fill-current" />
              AVIS CLIENTS
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-4">Ils nous ont fait confiance</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/50">
                <Quote className="w-8 h-8 text-amber-400/30 mb-4" />
                <p className="text-stone-700 leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-stone-900">{t.name}</div>
                <div className="text-xs text-stone-400">{t.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Carte */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold mb-4">
              CONTACT
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-6">Nous trouver</h2>
            <p className="text-stone-600 text-lg mb-8">
              Réservez par téléphone ou en ligne. Nous vous accueillons du mardi au dimanche.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium uppercase">Adresse</div>
                  <div className="text-stone-900 font-semibold">24 rue des Lilas, 69001 Lyon</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium uppercase">Téléphone</div>
                  <div className="text-stone-900 font-semibold">04 78 12 34 56</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium uppercase">Horaires</div>
                  <div className="text-stone-900 font-semibold">Mar–Dim · 12h–14h30 · 19h–22h30</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-xl bg-stone-100 hover:bg-amber-400 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-stone-700" />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-stone-100 hover:bg-amber-400 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-stone-700" />
              </a>
            </div>
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
      </section>

      {/* Pied de page */}
      <footer className="bg-stone-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-3xl text-white mb-2">Le Jardin Gourmand</h3>
          <p className="text-stone-500 text-sm mb-6">Cuisine de saison · Lyon</p>
          <div className="flex justify-center gap-6 text-sm text-stone-400 mb-6">
            <a href="#menu" className="hover:text-amber-400 transition-colors">La carte</a>
            <button onClick={() => setReservationOpen(true)} className="hover:text-amber-400 transition-colors">Réservation</button>
            <a href="#" className="hover:text-amber-400 transition-colors">Galerie</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
          <p className="text-stone-600 text-xs">© 2026 Le Jardin Gourmand · Maquette démo DémoVitrine</p>
        </div>
      </footer>

      {/* Fenêtre de réservation */}
      {reservationOpen && <ReservationModal onClose={() => setReservationOpen(false)} />}
    </div>
  );
}

function ReservationModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '2' });

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="font-serif text-2xl text-stone-900 mb-2">Réservation envoyée !</h3>
            <p className="text-stone-600 mb-4">Nous vous confirmons par téléphone dans les plus brefs délais.</p>
            <button onClick={onClose} className="px-6 py-2.5 bg-stone-900 text-white font-semibold rounded-xl hover:bg-stone-800 transition-colors">
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-2xl text-stone-900">Réserver une table</h3>
              <button onClick={onClose} className="text-stone-400 hover:text-stone-900 transition-colors text-xl leading-none">
                ×
              </button>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Nom</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Téléphone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all"
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Date</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Heure</label>
                  <input
                    type="time"
                    required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Nombre de couverts</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all"
                >
                  {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
                    <option key={n} value={n}>{n} {n === '1' ? 'personne' : 'personnes'}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-xl transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                Confirmer la réservation
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
