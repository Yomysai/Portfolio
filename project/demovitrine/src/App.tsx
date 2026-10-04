import { useState, useEffect } from 'react';
import { Home, UtensilsCrossed, ShoppingBag, Gamepad2, Dumbbell, ArrowLeft } from 'lucide-react';
import AgencyPortfolio from '@/pages/AgencyPortfolio';
import RestaurantDemo from '@/pages/RestaurantDemo';
import CommerceDemo from '@/pages/CommerceDemo';
import LoisirsDemo from '@/pages/LoisirsDemo';
import SportDemo from '@/pages/SportDemo';

type View = 'portfolio' | 'restaurant' | 'commerce' | 'loisirs' | 'sport';

const NAV_ITEMS: { id: View; label: string; icon: typeof Home }[] = [
  { id: 'portfolio', label: 'Accueil', icon: Home },
  { id: 'restaurant', label: 'Restaurant', icon: UtensilsCrossed },
  { id: 'commerce', label: 'Commerce', icon: ShoppingBag },
  { id: 'loisirs', label: 'Loisirs', icon: Gamepad2 },
  { id: 'sport', label: 'Sport', icon: Dumbbell },
];

export default function App() {
  const [view, setView] = useState<View>('portfolio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [view]);

  return (
    <div className="min-h-screen bg-white">
      {/* Barre de navigation supérieure */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={() => setView('portfolio')}
              className="flex items-center gap-2 text-white font-bold text-sm tracking-tight"
            >
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-xs">
                DV
              </span>
              <span className="hidden sm:inline">DémoVitrine</span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const active = view === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setView(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      active
                        ? 'bg-white text-black'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              <div className="space-y-1">
                <div className={`w-5 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`w-5 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-5 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-white/10 bg-black/95 px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = view === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-white text-black'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        )}
      </div>

      {/* Contenu des maquettes */}
      <main className="pt-14">
        {view === 'portfolio' && <AgencyPortfolio onNavigate={setView} />}
        {view === 'restaurant' && <RestaurantWrapper onBack={() => setView('portfolio')} />}
        {view === 'commerce' && <CommerceWrapper onBack={() => setView('portfolio')} />}
        {view === 'loisirs' && <LoisirsWrapper onBack={() => setView('portfolio')} />}
        {view === 'sport' && <SportWrapper onBack={() => setView('portfolio')} />}
      </main>
    </div>
  );
}

function RestaurantWrapper({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative">
      <DemoBadge label="Maquette démo — Restaurant / Bar" onBack={onBack} />
      <RestaurantDemo />
    </div>
  );
}

function CommerceWrapper({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative">
      <DemoBadge label="Maquette démo — Commerce / Boutique" onBack={onBack} />
      <CommerceDemo />
    </div>
  );
}

function LoisirsWrapper({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative">
      <DemoBadge label="Maquette démo — Loisirs / Divertissement" onBack={onBack} />
      <LoisirsDemo />
    </div>
  );
}

function SportWrapper({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative">
      <DemoBadge label="Maquette démo — Sport / Bien-être" onBack={onBack} />
      <SportDemo />
    </div>
  );
}

function DemoBadge({ label, onBack }: { label: string; onBack: () => void }) {
  return (
    <div className="fixed top-14 left-1/2 -translate-x-1/2 z-40 px-4 py-1.5 bg-amber-400/95 backdrop-blur-sm rounded-b-xl shadow-lg">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-black/70 hover:text-black text-xs font-semibold transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Retour
        </button>
        <span className="w-px h-3 bg-black/20" />
        <span className="text-black text-xs font-bold">{label}</span>
      </div>
    </div>
  );
}
