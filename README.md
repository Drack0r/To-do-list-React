# To-do List React 📝

Une application de gestion de tâches moderne développée avec React et Vite, offrant une interface intuitive pour organiser vos tâches quotidiennes.

## 🚀 Démo en ligne

[Voir la démo](https://your-username.github.io/To-do-list-React/)

## ✨ Fonctionnalités

- ✅ **Ajout de tâches** - Créez facilement de nouvelles tâches
- ✏️ **Marquage complet/incomplet** - Cochez vos tâches terminées
- 🗑️ **Suppression de tâches** - Supprimez les tâches indésirables
- 💾 **Persistance locale** - Vos données sont sauvegardées dans le navigateur
- 🔍 **Validation robuste** - Vérification des doublons, longueur, caractères spéciaux
- 🎨 **Design moderne** - Interface claire avec police Poppins

## 🛠️ Technologies utilisées

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: SCSS avec architecture 7-1
- **Icons**: Font Awesome 7.0.1
- **Fonts**: Google Fonts (Poppins)
- **Déploiement**: GitHub Pages
- **Linting**: ESLint

## 📁 Structure du projet

```
src/
├── components/
│   ├── layout/          # Composants de mise en page
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Layout/
│   ├── tasks/           # Composants liés aux tâches
│   │   ├── Task/
│   │   └── TaskList/
│   └── ui/              # Composants d'interface réutilisables
│       └── Button/
├── helpers/             # Fonctions utilitaires
├── styles/              # Styles SCSS organisés en 7-1
│   ├── abstracts/       # Variables, mixins, keyframes
│   ├── base/            # Reset, global, typography
│   ├── components/      # Styles des composants
│   └── layout/          # Styles de mise en page
├── Page.jsx             # Composant racine
└── main.jsx             # Point d'entrée
```

## 🚀 Installation et utilisation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

1. **Clonez le repository**

   ```bash
   git clone https://github.com/your-username/To-do-list-React.git
   cd To-do-list-React
   ```

2. **Installez les dépendances**

   ```bash
   npm install
   ```

3. **Démarrez le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrez votre navigateur**
   ```
   http://localhost:5173
   ```

### Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎨 Architecture CSS

Le projet utilise l'architecture **7-1 SCSS** pour une organisation maintenable :

- **Abstracts**: Variables, mixins, animations
- **Base**: Reset CSS, styles globaux, typographie
- **Components**: Styles des composants React
- **Layout**: Styles de mise en page (header, footer)

### Méthodologie BEM

Les classes CSS suivent la méthodologie **BEM** (Block Element Modifier) pour une meilleure maintenabilité :

```scss
.task                    // Block
.task__label            // Element
.task__text             // Element
.task--done             // Modifier
```

## 🔧 Fonctionnalités techniques

### Validation des tâches

- Vérification des champs vides
- Détection des doublons (insensible à la casse)
- Validation de longueur (3-100 caractères)
- Filtrage des caractères spéciaux
- Prévention des noms uniquement numériques

### Persistance des données

Les tâches sont automatiquement sauvegardées dans le `localStorage` du navigateur, permettant de conserver vos données entre les sessions.

### Gestion d'état

Utilisation des hooks React natifs :

- `useState` pour la gestion d'état local
- `useEffect` pour la synchronisation avec localStorage

## 🚀 Déploiement

Le projet est configuré pour un déploiement automatique sur GitHub Pages via GitHub Actions :

1. **Push sur la branche `main`**
2. **Build automatique** avec Vite
3. **Déploiement** sur GitHub Pages

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/amazing-feature`)
3. Commitez vos changements (`git commit -m 'feat: add amazing feature'`)
4. Poussez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

### Conventions de commit

Le projet utilise les **Conventional Commits** :

- `feat:` - Nouvelle fonctionnalité
- `fix:` - Correction de bug
- `docs:` - Documentation
- `style:` - Formatage, style
- `refactor:` - Refactoring du code

## 👨‍💻 Auteur

**Antonin Chevolleau**

- GitHub: [Drack0r](https://github.com/Drack0r)

## 🎯 Roadmap

- [ ] Système de notifications UI (remplacer les alerts)
- [ ] Fonctionnalité d'annulation (undo/redo)
- [ ] Filtres et tri des tâches
- [ ] Mode sombre/clair
- [ ] Export/Import des données
- [ ] Catégories de tâches

---

⭐ N'hésitez pas à mettre une étoile si ce projet vous a plu !
