import { UtensilsCrossed, ShoppingBag, Gamepad2, Dumbbell, ArrowRight, Sparkles, Check, Phone, Mail, MapPin, Star, Zap, Eye, Code2, Rocket, Shield } from 'lucide-react';
import { useState } from 'react';

type View = 'portfolio' | 'restaurant' | 'commerce' | 'loisirs' | 'sport';

interface Props {
  onNavigate: (view: View) => void;
}

const DEMOS = [
  {
    id: 'restaurant' as View,
    name: 'Restaurant / Bar',
    tagline: 'Une carte qui donne faim, une ambiance qui donne envie',
    image: 'https://images.pexels.com/photos/28575445/pexels-photo-28575445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: UtensilsCrossed,
    accent: 'from-amber-500 to-red-600',
    features: ['Menu interactif', 'Réservation en ligne', 'Galerie ambiance', 'Avis clients'],
  },
  {
    id: 'commerce' as View,
    name: 'Commerce / Boutique',
    tagline: 'Vitrine en ligne élégante qui convertit les visiteurs en clients',
    image: 'https://images.pexels.com/photos/5531542/pexels-photo-5531542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: ShoppingBag,
    accent: 'from-rose-500 to-pink-600',
    features: ['Catalogue produits', 'Catégories', 'Promotions', 'Instagram feed'],
  },
  {
    id: 'loisirs' as View,
    name: 'Loisirs / Divertissement',
    tagline: 'L\'expérience et le fun avant tout, avec réservation instantanée',
    image: 'https://images.pexels.com/photos/19191084/pexels-photo-19191084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Gamepad2,
    accent: 'from-cyan-500 to-blue-600',
    features: ['Activités & tarifs', 'Réservation', 'Événements', 'Galerie dynamique'],
  },
  {
    id: 'sport' as View,
    name: 'Sport / Bien-être',
    tagline: 'Motivation et énergie pour attirer et fidéliser les membres',
    image: 'https://images.pexels.com/photos/36833355/pexels-photo-36833355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Dumbbell,
    accent: 'from-emerald-500 to-teal-600',
    features: ['Cours & planning', 'Tarifs abonnements', 'Coachs', 'Inscription'],
  },
];

const STEPS = [
  { icon: Eye, title: 'Analyse', description: 'Compréhension du commerce, de la clientèle et des objectifs.' },
  { icon: Sparkles, title: 'Conception', description: 'Arborescence, structure et expérience utilisateur.' },
  { icon: Code2, title: 'Design', description: 'Maquette graphique personnalisée à l\'identité du commerce.' },
  { icon: Zap, title: 'Développement', description: 'Transformation de la maquette en site fonctionnel.' },
  { icon: Rocket, title: 'Mise en ligne', description: 'Domaine, hébergement et configuration.' },
  { icon: Shield, title: 'Maintenance', description: 'Mises à jour et modifications après livraison.' },
];

const INCLUDED = [
  'Site responsive (mobile, tablette, ordinateur)',
  'Référencement SEO de base',
  'Formulaire de contact fonctionnel',
  'Intégration Google Maps',
  'Liens vers les réseaux sociaux',
  'Bouton d\'appel direct sur mobile',
  'Vitesse de chargement optimisée',
  'Conformité RGPD / cookies',
];

export default function AgencyPortfolio({ onNavigate }: Props) {
  const [formData, setFormData] = useState({ name: '', email: '', business: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', business: '', message: '' });
    }, 3500);
  };

  return (
    <div className="bg-white">
      {/* Section hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12387869/pexels-photo-12387869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Restaurant élégant"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900/80 to-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-up">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-white/90 text-xs font-medium tracking-wide">Sites vitrines sur-mesure pour commerces</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Donnez à votre commerce<br />
              <span className="italic text-amber-400">la vitrine</span> qu'il mérite
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Je crée des sites internet modernes et professionnels pour restaurants, boutiques,
              salles de sport et lieux de divertissement. Découvrez ci-dessous des maquettes
              concrètes, prêtes à être adaptées à votre activité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <button
                onClick={() => {
                  document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-xl transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-400/20"
              >
                Voir les maquettes démo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Barre de statistiques */}
      <section className="bg-stone-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '4', label: 'Maquettes démo prêtes' },
            { value: '100%', label: 'Sur-mesure' },
            { value: '7', label: 'Étapes d\'accompagnement' },
            { value: '24/7', label: 'Support post-livraison' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-1">{stat.value}</div>
              <div className="text-sm text-stone-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vitrine des maquettes */}
      <section id="demos" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-4">
              <Eye className="w-3.5 h-3.5" />
              DÉMONSTRATIONS
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-4">
              Des maquettes pour chaque type de commerce
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Cliquez sur une maquette pour la découvrir en plein écran.
              Chaque site est un exemple réel de ce que votre commerce pourrait avoir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {DEMOS.map((demo, i) => {
              const Icon = demo.icon;
              return (
                <button
                  key={demo.id}
                  onClick={() => onNavigate(demo.id)}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 text-left hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={demo.image}
                      alt={demo.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${demo.accent} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-stone-900" />
                    </div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                      <ArrowRight className="w-4 h-4 text-stone-900 -rotate-45" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-stone-900 mb-2">{demo.name}</h3>
                    <p className="text-stone-600 text-sm mb-4">{demo.tagline}</p>
                    <div className="flex flex-wrap gap-2">
                      {demo.features.map((f) => (
                        <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Étapes du processus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold mb-4">
              <Zap className="w-3.5 h-3.5" />
              MA MÉTHODE
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-4">
              De l'idée à la mise en ligne
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Un accompagnement complet, à chaque étape de votre projet.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="relative p-6 rounded-2xl bg-stone-50 border border-stone-200/50 hover:border-amber-300 hover:shadow-lg transition-all group"
                >
                  <div className="absolute top-4 right-4 text-5xl font-black text-stone-200 group-hover:text-amber-200 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-stone-900 group-hover:bg-amber-400 transition-colors flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg text-stone-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-4">
              Ce qui est inclus dans chaque projet
            </h2>
            <p className="text-lg text-stone-400">
              Tous les éléments essentiels pour un site vitrine professionnel.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-black" />
                </div>
                <span className="text-white/90 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-4">
                <Mail className="w-3.5 h-3.5" />
                CONTACT
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-4">
                Parlons de votre projet
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                Vous avez un commerce et vous souhaitez un site vitrine ?
                Décrivez-moi votre activité et je vous recontacte sous 24h avec une proposition adaptée.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-200">
                  <div className="w-10 h-10 rounded-lg bg-stone-900 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Téléphone</div>
                    <div className="text-stone-900 font-semibold">06 12 34 56 78</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-200">
                  <div className="w-10 h-10 rounded-lg bg-stone-900 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Email</div>
                    <div className="text-stone-900 font-semibold">contact@demovitrine.fr</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-200">
                  <div className="w-10 h-10 rounded-lg bg-stone-900 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Zone d'intervention</div>
                    <div className="text-stone-900 font-semibold">France entière — à distance</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-200">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-stone-900 mb-2">Message envoyé !</h3>
                  <p className="text-stone-600">Je vous recontacte sous 24h.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Nom complet</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-stone-900"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-stone-900"
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Type de commerce</label>
                    <select
                      required
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-stone-900"
                    >
                      <option value="">Sélectionnez...</option>
                      <option>Restaurant / Bar</option>
                      <option>Commerce / Boutique</option>
                      <option>Loisirs / Divertissement</option>
                      <option>Sport / Bien-être</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Votre projet</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all text-stone-900 resize-none"
                      placeholder="Parlez-moi de votre commerce et de vos besoins..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-xl transition-all hover:scale-[1.01] hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Envoyer ma demande
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-stone-950 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-xs">
                DV
              </span>
              <span className="text-white font-bold">DémoVitrine</span>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-white/60 text-sm ml-2">Sites vitrines pour commerces</span>
            </div>
            <p className="text-white/40 text-sm">© 2026 DémoVitrine. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
