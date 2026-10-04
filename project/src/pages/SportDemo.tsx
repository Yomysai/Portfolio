import { useState } from 'react';
import {
  Heart, Zap, Users, Clock, MapPin, Phone, Star, ArrowRight,
  Check, ChevronRight, Activity, Sparkles, Calendar, Award, Instagram, Flame
} from 'lucide-react';

const CLASSES = [
  { name: 'Pilates Reformer', level: 'Tous niveaux', duration: '55min', coach: 'Sarah', image: 'https://images.pexels.com/photos/11036670/pexels-photo-11036670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', time: 'Lun 09:00 · Mer 18:30 · Ven 10:00' },
  { name: 'Yoga Vinyasa', level: 'Intermédiaire', duration: '60min', coach: 'Léa', image: 'https://images.pexels.com/photos/8436455/pexels-photo-8436455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', time: 'Mar 12:00 · Jeu 19:00 · Sam 09:30' },
  { name: 'HIIT Training', level: 'Avancé', duration: '45min', coach: 'Marc', image: 'https://images.pexels.com/photos/34756712/pexels-photo-34756712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', time: 'Lun 19:00 · Mer 07:00 · Ven 18:30' },
  { name: 'Renforcement', level: 'Tous niveaux', duration: '50min', coach: 'Julie', image: 'https://images.pexels.com/photos/38641885/pexels-photo-38641885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', time: 'Mar 18:30 · Jeu 09:00 · Sam 11:00' },
];

const COACHES = [
  { name: 'Sarah Mercier', role: 'Coach Pilates & Posture', image: 'https://images.pexels.com/photos/13451904/pexels-photo-13451904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Marc Dubois', role: 'Coach HIIT & Musculation', image: 'https://images.pexels.com/photos/5420945/pexels-photo-5420945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Léa Chen', role: 'Coach Yoga & Bien-être', image: 'https://images.pexels.com/photos/39214354/pexels-photo-39214354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

const PLANS = [
  {
    name: 'Découverte', price: '39€', period: '/mois', popular: false, features: [
      'Accès à la salle libre', '2 cours collectifs / mois', 'Vestiaires & douches', 'Application mobile',
    ],
  },
  {
    name: 'Premium', price: '69€', period: '/mois', popular: true, features: [
      'Accès illimité 7j/7', 'Cours collectifs illimités', '1 séance coaching / mois', 'Sauna & espace détente', 'Application mobile', 'Invité gratuit le week-end',
    ],
  },
  {
    name: 'Coaching', price: '129€', period: '/mois', popular: false, features: [
      'Tout le forfait Premium', '4 séances coaching / mois', 'Plan nutrition personnalisé', 'Bilan corporel mensuel', 'Suivi WhatsApp dédié',
    ],
  },
];

const SCHEDULE = [
  { day: 'Lundi', slots: '07:00 – 22:00' },
  { day: 'Mardi', slots: '07:00 – 22:00' },
  { day: 'Mercredi', slots: '07:00 – 22:00' },
  { day: 'Jeudi', slots: '07:00 – 22:00' },
  { day: 'Vendredi', slots: '07:00 – 21:00' },
  { day: 'Samedi', slots: '08:00 – 18:00' },
  { day: 'Dimanche', slots: '09:00 – 13:00' },
];

export default function SportDemo() {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="bg-white font-sans">
      {/* Section hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/36833355/pexels-photo-36833355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Studio de Pilates"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-teal-900/50 to-emerald-950/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/20 backdrop-blur-sm border border-emerald-400/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span className="text-emerald-200 text-xs font-bold tracking-wide">STUDIO SPORT & BIEN-ÊTRE · BORDEAUX</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Vitalys<br />
              <span className="italic text-emerald-400">Studio</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              Pilates, yoga, HIIT et renforcement.
              Un studio moderne pour transformer votre corps et votre esprit,
              encadré par des coachs passionnés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setSignupOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold rounded-xl transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-400/30"
              >
                <Flame className="w-4 h-4" />
                Essai gratuit
              </button>
              <a
                href="#tarifs"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
              >
                Voir les tarifs
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-3">
                {[13451904, 5420945, 39214354].map((id, i) => (
                  <img key={i} src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=100&w=100`} alt="Membre" className="w-10 h-10 rounded-full border-2 border-emerald-950 object-cover" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" />)}
                </div>
                <div className="text-sm text-white/70">Déjà 300+ membres satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="bg-emerald-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: '300+', label: 'Membres actifs' },
            { icon: Activity, value: '4', label: 'Disciplines' },
            { icon: Award, value: '3', label: 'Coachs diplômés' },
            { icon: Clock, value: '7/7', label: 'Ouvert toute la semaine' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center">
                <Icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-emerald-200/60">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cours */}
      <section id="cours" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-4">
            <Activity className="w-3.5 h-3.5" />
            NOS COURS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-4">Trouvez votre discipline</h2>
          <p className="text-stone-600 text-lg">Des cours pour tous les niveaux et tous les objectifs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CLASSES.map((cls, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-56 overflow-hidden">
                <img src={cls.image} alt={cls.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-white mb-1">{cls.name}</h3>
                    <span className="text-emerald-300 text-xs font-medium">{cls.level}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-emerald-400 text-emerald-950 text-xs font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {cls.duration}
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white flex items-center justify-between">
                <div>
                  <div className="text-sm text-stone-500 mb-0.5">Coach {cls.coach}</div>
                  <div className="text-xs text-stone-400">{cls.time}</div>
                </div>
                <button
                  onClick={() => setSignupOpen(true)}
                  className="px-4 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-semibold transition-colors flex items-center gap-1.5"
                >
                  Réserver
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coachs */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-4">
              <Users className="w-3.5 h-3.5" />
              L'ÉQUIPE
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-4">Vos coachs</h2>
            <p className="text-stone-600 text-lg">Des professionnels diplômés à votre écoute</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {COACHES.map((coach, i) => (
              <div key={i} className="group text-center">
                <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/5]">
                  <img src={coach.image} alt={coach.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
                </div>
                <h3 className="font-serif text-xl text-stone-900 mb-1">{coach.name}</h3>
                <p className="text-emerald-700 text-sm font-medium">{coach.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-4">
            <Zap className="w-3.5 h-3.5" />
            ABONNEMENTS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-4">Choisissez votre formule</h2>
          <p className="text-stone-600 text-lg">Sans engagement · résiliable à tout moment</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-all ${
                plan.popular
                  ? 'bg-gradient-to-b from-emerald-50 to-white border-2 border-emerald-400 scale-[1.02] shadow-xl'
                  : 'bg-white border border-stone-200 hover:border-emerald-300 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-400 text-white text-xs font-bold">
                  LE PLUS CHOISI
                </div>
              )}
              <h3 className="font-serif text-2xl text-stone-900 mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-emerald-600">{plan.price}</span>
                <span className="text-stone-400 text-sm">{plan.period}</span>
              </div>
              <div className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-stone-600">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setSignupOpen(true)}
                className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-white'
                    : 'bg-stone-900 hover:bg-stone-800 text-white'
                }`}
              >
                S'inscrire
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Horaires + Contact */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Horaires */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-4">
                <Calendar className="w-3.5 h-3.5" />
                HORAIRES
              </div>
              <h2 className="font-serif text-4xl text-stone-900 mb-6">Horaires d'ouverture</h2>
              <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
                {SCHEDULE.map((s, i) => (
                  <div key={i} className={`flex items-center justify-between px-6 py-3.5 ${i !== SCHEDULE.length - 1 ? 'border-b border-stone-100' : ''}`}>
                    <span className="text-stone-700 font-medium">{s.day}</span>
                    <span className="text-stone-500 text-sm">{s.slots}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                {[
                  { icon: MapPin, label: 'Adresse', value: '12 cours Alsace-Lorraine, 33000 Bordeaux' },
                  { icon: Phone, label: 'Téléphone', value: '05 56 12 34 56' },
                ].map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-xs text-stone-500 font-medium uppercase">{info.label}</div>
                        <div className="text-stone-900 font-semibold">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carte + réseaux sociaux */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[350px] bg-stone-200">
                <iframe
                  title="Carte"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.58%2C44.82%2C-0.54%2C44.85&layer=mapnik&marker=44.84%2C-0.56"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between p-6 rounded-2xl bg-white border border-stone-200">
                <div>
                  <div className="text-sm font-semibold text-stone-900 mb-1">Suivez-nous</div>
                  <div className="text-xs text-stone-500">Conseils, vidéos et motivation</div>
                </div>
                <a href="#" className="w-12 h-12 rounded-xl bg-emerald-50 hover:bg-emerald-400 flex items-center justify-center transition-colors group">
                  <Instagram className="w-5 h-5 text-emerald-600 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bannière d'appel à l'action */}
      <section className="relative py-20 overflow-hidden bg-emerald-600">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/34756712/pexels-photo-34756712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4">Prêt à commencer ?</h2>
          <p className="text-emerald-50 text-lg mb-8">Votre première séance est offerte. Sans engagement.</p>
          <button
            onClick={() => setSignupOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-all hover:scale-[1.02] shadow-xl"
          >
            <Flame className="w-5 h-5" />
            Réserver mon essai gratuit
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-emerald-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-3xl text-white mb-2">Vitalys Studio</h3>
          <p className="text-emerald-200/50 text-sm mb-6">Pilates · Yoga · HIIT · Renforcement · Bordeaux</p>
          <div className="flex justify-center gap-6 text-sm text-emerald-200/60 mb-6">
            <a href="#cours" className="hover:text-emerald-400 transition-colors">Cours</a>
            <a href="#tarifs" className="hover:text-emerald-400 transition-colors">Tarifs</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Coachs</a>
            <button onClick={() => setSignupOpen(true)} className="hover:text-emerald-400 transition-colors">Inscription</button>
          </div>
          <p className="text-emerald-300/30 text-xs">© 2026 Vitalys Studio · Maquette démo DémoVitrine</p>
        </div>
      </footer>

      {signupOpen && <SignupModal onClose={() => setSignupOpen(false)} />}
    </div>
  );
}

function SignupModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', goal: '' });

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="font-serif text-2xl text-stone-900 mb-2">Inscription envoyée !</h3>
            <p className="text-stone-600 mb-4">Bienvenue chez Vitalys ! On vous contacte très vite pour votre première séance.</p>
            <button onClick={onClose} className="px-6 py-2.5 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-400 transition-colors">
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-serif text-2xl text-stone-900">Essai gratuit</h3>
                <p className="text-stone-500 text-sm mt-0.5">Votre première séance est offerte</p>
              </div>
              <button onClick={onClose} className="text-stone-400 hover:text-stone-900 transition-colors text-xl leading-none">×</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Nom</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                  placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                  placeholder="vous@exemple.fr" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Téléphone</label>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                  placeholder="06 12 34 56 78" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Votre objectif</label>
                <select value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all">
                  <option value="">Sélectionnez...</option>
                  <option>Me remettre en forme</option>
                  <option>Perdre du poids</option>
                  <option>Renforcer mon corps</option>
                  <option>Me détendre / bien-être</option>
                  <option>Performance sportive</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-all hover:scale-[1.01] flex items-center justify-center gap-2">
                <Flame className="w-4 h-4" />
                Réserver mon essai gratuit
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
