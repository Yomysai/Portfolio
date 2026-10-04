import { useState } from 'react';
import {
  Gamepad2, Zap, Users, Clock, MapPin, Phone, ArrowRight,
  Calendar, Check, ChevronRight, PartyPopper, Trophy, Sparkles, Instagram, Facebook
} from 'lucide-react';

const ACTIVITIES = [
  {
    name: 'Bowling',
    description: '12 pistes modernes, ambiance néon et musique. Parfait pour tous les niveaux.',
    price: '8€', duration: '1h', players: '1–6', image: 'https://images.pexels.com/photos/19191084/pexels-photo-19191084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: '🎳',
  },
  {
    name: 'Laser Game',
    description: 'Labyrinthe immersif de 800m², effets lumineux et stratégie d\'équipe.',
    price: '12€', duration: '30min', players: '2–20', image: 'https://images.pexels.com/photos/3869084/pexels-photo-3869084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: '🎯',
  },
  {
    name: 'Arcade & Bornes',
    description: 'Plus de 40 bornes d\'arcade rétro et modernes. Jeux de combat, course, danse.',
    price: '15€', duration: 'Illimité', players: '1+', image: 'https://images.pexels.com/photos/19385631/pexels-photo-19385631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: '🎮',
  },
  {
    name: 'Billard & Fléchettes',
    description: '8 tables de billard et zone fléchettes électronique dans un cadre convivial.',
    price: '10€', duration: '1h', players: '1–4', image: 'https://images.pexels.com/photos/12789438/pexels-photo-12789438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: '🎯',
  },
];

const PACKAGES = [
  {
    name: 'Découverte', price: '18€', popular: false, features: ['1 activité au choix', '1 boisson offerte', 'Durée: 1h', 'Idéal pour tester'],
  },
  {
    name: 'Fun & Games', price: '35€', popular: true, features: ['2 activités au choix', '1 boisson + 1 snack', 'Durée: 2h', 'Arcade illimitée incluse', 'Idéal entre amis'],
  },
  {
    name: 'Anniversaire', price: '22€/pers', popular: false, features: ['2 activités au choix', 'Gâteau + boissons', 'Salle privatisée 1h', 'Animateur dédié', 'Mini-gift pour le groupe'],
  },
];

const EVENTS = [
  { date: 'VEN 10 OCT', title: 'Soirée Néon Bowling', description: 'Bowling fluorescent, DJ et cocktails. À partir de 21h.', tag: 'Soirée' },
  { date: 'SAM 18 OCT', title: 'Tournoi Laser Game', description: 'Compétition par équipes de 5. Lots à gagner. Inscription 15€.', tag: 'Tournoi' },
  { date: 'DIM 26 OCT', title: 'Halloween Special', description: 'Arcade en mode horreur, costumes encouragés. Concours de déguisements.', tag: 'Événement' },
];

const GALLERY = [
  { url: 'https://images.pexels.com/photos/7429507/pexels-photo-7429507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Bowling moderne' },
  { url: 'https://images.pexels.com/photos/3869083/pexels-photo-3869083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Laser tag' },
  { url: 'https://images.pexels.com/photos/7429725/pexels-photo-7429725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Célébration bowling' },
  { url: 'https://images.pexels.com/photos/5952998/pexels-photo-5952998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Bowling ambiance' },
  { url: 'https://images.pexels.com/photos/3869074/pexels-photo-3869074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Laser tag gear' },
  { url: 'https://images.pexels.com/photos/7429511/pexels-photo-7429511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Bowling entre amis' },
];

export default function LoisirsDemo() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="bg-slate-950 font-sans">
      {/* Section hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12789438/pexels-photo-12789438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Bowling néon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/80 via-blue-900/60 to-slate-950/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span className="text-cyan-200 text-xs font-bold tracking-wide">COMPLEXE DE LOISIRS · LILLE</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              PlayZone<br />
              <span className="italic text-cyan-400">Lille</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              Bowling, laser game, arcade et bien plus.
              Le rendez-vous fun pour vos sorties entre amis, en famille ou pour vos événements !
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/30"
              >
                <Calendar className="w-4 h-4" />
                Réserver une activité
              </button>
              <a
                href="#activites"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
              >
                Voir les activités
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques rapides */}
      <section className="bg-slate-900 py-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Gamepad2, value: '4', label: 'Activités différentes' },
            { icon: Users, value: '500+', label: 'Visiteurs / semaine' },
            { icon: Trophy, value: '12', label: 'Tournois / an' },
            { icon: Clock, value: '7/7', label: 'Ouvert tous les jours' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center">
                <Icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Activités */}
      <section id="activites" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-bold mb-4">
            <Gamepad2 className="w-3.5 h-3.5" />
            ACTIVITÉS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4">Choisissez votre fun</h2>
          <p className="text-slate-400 text-lg">Quelque chose pour tous les goûts et tous les âges</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ACTIVITIES.map((act, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5 hover:border-cyan-400/30 transition-all">
              <div className="relative h-56 overflow-hidden">
                <img src={act.image} alt={act.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-cyan-400/20 backdrop-blur-md flex items-center justify-center text-2xl">
                  {act.icon}
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-cyan-400 text-slate-950 font-bold text-sm">
                  {act.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-white mb-2">{act.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{act.description}</p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {act.duration}</span>
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {act.players}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formules tarifaires */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-bold mb-4">
              <Zap className="w-3.5 h-3.5" />
              FORMULES
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4">Nos formules tout-en-un</h2>
            <p className="text-slate-400 text-lg">Plus vous jouez, plus c'est avantageux</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-cyan-400/20 to-slate-900 border-2 border-cyan-400 scale-[1.02]'
                    : 'bg-slate-800/50 border border-white/5 hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold">
                    LE PLUS POPULAIRE
                  </div>
                )}
                <h3 className="font-serif text-2xl text-white mb-1">{pkg.name}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">{pkg.price}</div>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setBookingOpen(true)}
                  className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  Réserver
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Événements */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-bold mb-4">
            <PartyPopper className="w-3.5 h-3.5" />
            ÉVÉNEMENTS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4">Les prochains rendez-vous</h2>
          <p className="text-slate-400 text-lg">Soirées, tournois et événements spéciaux</p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {EVENTS.map((event, i) => (
            <div key={i} className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-cyan-400/30 transition-all cursor-pointer">
              <div className="flex items-center gap-4 sm:w-40 shrink-0">
                <div className="px-3 py-2 rounded-xl bg-cyan-400/10 text-cyan-400 font-bold text-sm whitespace-nowrap">
                  {event.date}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-serif text-xl text-white">{event.title}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 text-cyan-300 text-xs font-medium">{event.tag}</span>
                </div>
                <p className="text-slate-400 text-sm">{event.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* Galerie */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4">La PlayZone en photos</h2>
            <p className="text-slate-400 text-lg">L'ambiance, les jeux, les sourires</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl group cursor-pointer h-48 sm:h-64">
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-bold mb-4">
              CONTACT
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-6">Réservez votre session</h2>
            <p className="text-slate-400 text-lg mb-8">
              Contactez-nous pour réserver une activité, un anniversaire ou un événement de groupe.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: MapPin, label: 'Adresse', value: '45 boulevard de la Liberté, 59000 Lille' },
                { icon: Phone, label: 'Téléphone', value: '03 20 12 34 56' },
                { icon: Clock, label: 'Horaires', value: 'Lun–Jeu · 14h–23h · Ven–Dim · 10h–01h' },
              ].map((info, i) => {
                const Icon = info.icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium uppercase">{info.label}</div>
                      <div className="text-white font-semibold">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-cyan-400 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-cyan-400 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] bg-slate-800">
            <iframe
              title="Carte"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.04%2C50.62%2C3.08%2C50.65&layer=mapnik&marker=50.63%2C3.06"
              className="w-full h-full border-0 grayscale invert"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-slate-950 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-3xl text-white mb-2">PlayZone Lille</h3>
          <p className="text-slate-500 text-sm mb-6">Bowling · Laser Game · Arcade · Billard</p>
          <div className="flex justify-center gap-6 text-sm text-slate-400 mb-6">
            <a href="#activites" className="hover:text-cyan-400 transition-colors">Activités</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Formules</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Événements</a>
            <button onClick={() => setBookingOpen(true)} className="hover:text-cyan-400 transition-colors">Réserver</button>
          </div>
          <p className="text-slate-600 text-xs">© 2026 PlayZone Lille · Maquette démo DémoVitrine</p>
        </div>
      </footer>

      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
    </div>
  );
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', date: '', activity: '', people: '4' });

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto border border-white/10" onClick={(e) => e.stopPropagation()}>
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-cyan-400/20 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="font-serif text-2xl text-white mb-2">Réservation envoyée !</h3>
            <p className="text-slate-400 mb-4">On vous confirme tout par SMS dans quelques minutes.</p>
            <button onClick={onClose} className="px-6 py-2.5 bg-cyan-400 text-slate-950 font-bold rounded-xl hover:bg-cyan-300 transition-colors">
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-2xl text-white">Réserver une activité</h3>
              <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors text-xl leading-none">×</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Nom</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all text-white"
                  placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Téléphone</label>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all text-white"
                  placeholder="06 12 34 56 78" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Date</label>
                  <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Personnes</label>
                  <select value={form.people} onChange={(e) => setForm({ ...form, people: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all text-white">
                    {['1', '2', '3', '4', '5', '6', '8', '10+'].map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Activité</label>
                <select required value={form.activity} onChange={(e) => setForm({ ...form, activity: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all text-white">
                  <option value="">Sélectionnez...</option>
                  <option>Bowling</option>
                  <option>Laser Game</option>
                  <option>Arcade & Bornes</option>
                  <option>Billard & Fléchettes</option>
                  <option>Formule Fun & Games</option>
                  <option>Anniversaire</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl transition-all hover:scale-[1.01] flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
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
