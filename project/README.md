# DémoVitrine — Portfolio de maquettes de sites vitrines pour commerces

## Présentation

**DémoVitrine** est une application web interactive conçue pour les indépendants qui proposent des sites vitrines à des commerçants (restaurants, boutiques, salles de sport, lieux de divertissement).

L'application contient :

1. **Une page d'accueil / portfolio** — présente vos services, votre méthode de travail et un formulaire de contact pour les prospects
2. **Quatre maquettes démo complètes** — prêtes à être montrées à des clients pour leur dire : « Voici à quoi votre site pourrait ressembler »

---

## Les 4 maquettes démo

### 1. Restaurant / Bar — « Le Jardin Gourmand »

Maquette de site pour un restaurant gastronomique.

| Section | Contenu |
|---------|---------|
| Hero | Photo plein écran, nom du restaurant, bouton « Réserver » |
| Barre d'infos | Horaires, adresse, téléphone, bar à vins |
| À propos | Histoire du restaurant, photo du chef, statistiques |
| Carte / Menu | Menu interactif avec onglets (Entrées, Plats, Desserts) |
| Galerie | Photos des plats et de l'ambiance |
| Avis clients | Témoignages avec notes étoilées |
| Contact | Adresse, téléphone, horaires, carte Google Maps, réseaux sociaux |
| Réservation | Fenêtre popup avec formulaire (nom, téléphone, date, heure, nombre de couverts) |

**Couleurs** : ambre / pierre foncée (ambiance chaleureuse et élégante)
**Police** : Playfair Display (titres) + Inter (texte)

---

### 2. Commerce / Boutique — « Maison Camélia »

Maquette de site pour une boutique de prêt-à-porter féminin.

| Section | Contenu |
|---------|---------|
| Barre promo | Livraison offerte, retours gratuits |
| Hero | Photo de la boutique, nom, description |
| Avantages | Livraison, retours, paiement sécurisé, magasin |
| Promotions | Bannières pour nouvelle collection et soldes |
| Catalogue | Grille de produits filtrable par catégorie (Vestes, Robes, Chaussures, Accessoires...) |
| Produits | Favoris cliquables, badges (Nouveau / Promo), prix barrés |
| Vue produit | Fenêtre détaillée avec choix de tailles, description, avis |
| Instagram | Feed de photos Instagram |
| Contact | Adresse, téléphone, horaires, carte, réseaux sociaux |

**Couleurs** : rose / bordeaux (ambiance chic et féminine)
**Police** : Playfair Display + Inter

---

### 3. Loisirs / Divertissement — « PlayZone Lille »

Maquette de site pour un complexe de loisirs (bowling, laser game, arcade).

| Section | Contenu |
|---------|---------|
| Hero | Photo plein écran, nom, bouton « Réserver » |
| Statistiques | Nombre d'activités, visiteurs, tournois, jours d'ouverture |
| Activités | Cartes pour Bowling, Laser Game, Arcade, Billard (prix, durée, joueurs) |
| Formules | 3 forfaits (Découverte, Fun & Games, Anniversaire) avec liste d'inclusions |
| Événements | Liste des soirées et tournois à venir avec dates |
| Galerie | Photos de l'ambiance et des activités |
| Contact | Adresse, téléphone, horaires, carte, réseaux sociaux |
| Réservation | Fenêtre popup (nom, téléphone, date, activité, nombre de personnes) |

**Couleurs** : cyan / bleu nuit (ambiance dynamique et néon)
**Police** : Playfair Display + Inter

---

### 4. Sport / Bien-être — « Vitalys Studio »

Maquette de site pour un studio de sport (Pilates, yoga, HIIT, renforcement).

| Section | Contenu |
|---------|---------|
| Hero | Photo du studio, nom, bouton « Essai gratuit », témoignages membres |
| Statistiques | Membres actifs, disciplines, coachs, jours d'ouverture |
| Cours | Cartes pour Pilates, Yoga, HIIT, Renforcement (niveau, durée, coach, créneaux) |
| Coachs | Profils avec photo et spécialité |
| Tarifs | 3 abonnements (Découverte, Premium, Coaching) avec liste d'avantages |
| Horaires | Tableau des horaires d'ouverture jour par jour |
| Contact | Adresse, téléphone, carte, Instagram |
| CTA final | Bannière « Prêt à commencer ? » avec essai gratuit |
| Inscription | Fenêtre popup (nom, email, téléphone, objectif sportif) |

**Couleurs** : émeraude / vert teal (ambiance énergique et bien-être)
**Police** : Playfair Display + Inter

---

## Page d'accueil — Portfolio de l'indépendant

La page d'accueil sert de vitrine pour vos services. Elle contient :

- **Hero** — Accroche principale avec boutons « Voir les maquettes » et « Demander un devis »
- **Statistiques** — Nombre de maquettes, sur-mesure, étapes, support
- **Vitrine des démos** — 4 cartes cliquables avec aperçu de chaque maquette
- **Méthode en 6 étapes** — Analyse, Conception, Design, Développement, Mise en ligne, Maintenance
- **Ce qui est inclus** — Liste complète (responsive, SEO, formulaire, Google Maps, réseaux sociaux, RGPD...)
- **Contact** — Coordonnées + formulaire de demande de devis (nom, email, type de commerce, message)
- **Footer** — Logo, étoiles, copyright

---

## Navigation

Une barre noire fixe en haut de l'écran permet de naviguer entre toutes les vues :

| Bouton | Vue |
|--------|-----|
| Accueil | Page portfolio de l'indépendant |
| Restaurant | Maquette restaurant / bar |
| Commerce | Maquette commerce / boutique |
| Loisirs | Maquette loisirs / divertissement |
| Sport | Maquette sport / bien-être |

Sur mobile, un menu hamburger déplie la navigation.

Quand vous êtes sur une maquette démo, un badge jaune « Maquette démo » s'affiche en haut avec un bouton « Retour » pour revenir à l'accueil.

---

## Structure des fichiers

```
src/
├── App.tsx                    → Application principale + barre de navigation
├── main.tsx                   → Point d'entrée React
├── index.css                  → Styles globaux (Tailwind + animations)
├── types.ts                   → Types TypeScript partagés
└── pages/
    ├── AgencyPortfolio.tsx    → Page d'accueil / portfolio
    ├── RestaurantDemo.tsx     → Maquette restaurant / bar
    ├── CommerceDemo.tsx       → Maquette commerce / boutique
    ├── LoisirsDemo.tsx        → Maquette loisirs / divertissement
    └── SportDemo.tsx          → Maquette sport / bien-être
```

---

## Technologies utilisées

| Technologie | Rôle |
|-------------|------|
| React 18 | Framework JavaScript pour l'interface |
| TypeScript | Typage statique du code |
| Vite | Outil de build et serveur de développement |
| Tailwind CSS | Framework CSS pour le design |
| Lucide React | Bibliothèque d'icônes |
| Pexels | Photos professionnelles libres de droits |

---

## Comment personnaliser les maquettes

### Changer le nom d'un commerce

Dans chaque fichier de maquette, recherchez le nom dans la section Hero. Par exemple, pour le restaurant :

- Fichier : `src/pages/RestaurantDemo.tsx`
- Rechercher : `Le Jardin Gourmand`
- Remplacer par le nom de votre client

### Changer les couleurs

Chaque maquette utilise une palette de couleurs propre. Modifiez les classes Tailwind dans le fichier correspondant :

| Maquette | Couleurs principales | Classes Tailwind |
|----------|---------------------|-------------------|
| Restaurant | Ambre / pierre | `amber-400`, `stone-900` |
| Commerce | Rose / bordeaux | `rose-950`, `rose-600` |
| Loisirs | Cyan / bleu nuit | `cyan-400`, `slate-950` |
| Sport | Émeraude / vert | `emerald-400`, `emerald-950` |

### Changer les photos

Les photos proviennent de Pexels. Pour les remplacer, échangez les URLs dans les tableaux `GALLERY`, `PRODUCTS` ou directement dans les balises `<img>` de chaque maquette.

### Changer le texte

Tous les textes (descriptions, menus, tarifs, avis, horaires) sont en français et directement modifiables dans le code de chaque page.

### Changer les coordonnées

Dans chaque maquette, les coordonnées (adresse, téléphone, email, horaires) se trouvent dans la section Contact. Modifiez-les directement dans le code.

---

## Formulaires interactifs

Chaque maquette contient des formulaires fonctionnels :

| Maquette | Formulaire | Champs |
|----------|-----------|--------|
| Restaurant | Réservation | Nom, téléphone, date, heure, nombre de couverts |
| Commerce | Vue produit | Choix de la taille, ajout au panier, favoris |
| Loisirs | Réservation | Nom, téléphone, date, activité, nombre de personnes |
| Sport | Inscription | Nom, email, téléphone, objectif sportif |
| Accueil | Contact | Nom, email, type de commerce, message |

Tous les formulaires affichent un message de confirmation après envoi simulé.

---

## Installation et lancement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire la version de production
npm run build

# Vérifier le typage TypeScript
npm run typecheck
```

Le serveur de développement se lance automatiquement. L'application est accessible dans le navigateur.

---

## Comment utiliser cette application pour démarcher des clients

1. **Montrez la page d'accueil** — Expliquez votre méthode et ce qui est inclus
2. **Cliquez sur la maquette correspondante** — Si le prospect est restaurateur, ouvrez la maquette restaurant
3. **Naviguez dans la maquette** — Montrez le menu, la galerie, la réservation, les avis
4. **Expliquez la personnalisation** — Dites que tout sera adapté à son identité (couleurs, logo, photos, textes)
5. **Recueillez sa demande** — Utilisez le formulaire de contact de la page d'accueil

---

## Licence

Projet créé pour démonstration. Toutes les photos proviennent de Pexels (libres de droits).
© 2026 DémoVitrine
