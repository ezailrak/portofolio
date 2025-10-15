# Ticket de Refactoring : Migration React vers Next.js

**Date de création** : 2025-10-13  
**Date de complétion** : 2025-10-13  
**Type** : Refactoring  
**Statut** : ✅ Terminé  
**Priorité** : Haute

---

## 1. Contexte et Objectif

### Situation actuelle

- Application React standalone avec Tailwind CSS
- Composants : Navigation, Hero, ProjectsSection, SkillsSection, ContactSection, Footer
- Bibliothèques utilisées : Framer Motion, lucide-react, shadcn/ui
- Structure simple sans routing

### Objectif de la migration

Transformer le portfolio en application Next.js 15 (App Router) pour :

- **Performance** : Server-Side Rendering (SSR) et Static Site Generation (SSG)
- **SEO** : Meilleur référencement naturel grâce au SSR
- **Optimisation** : Images optimisées automatiquement avec next/image
- **Structure** : Architecture scalable avec App Router
- **Developer Experience** : Hot reload amélioré, TypeScript first-class

---

## 2. Périmètre technique

### Composants à migrer

- ✅ App.tsx → app/page.tsx
- ✅ Navigation.tsx → components/Navigation.tsx
- ✅ Hero.tsx → components/Hero.tsx
- ✅ ProjectsSection.tsx → components/ProjectsSection.tsx
- ✅ SkillsSection.tsx → components/SkillsSection.tsx
- ✅ ContactSection.tsx → components/ContactSection.tsx
- ✅ Footer.tsx → components/Footer.tsx
- ✅ ProjectCard.tsx → components/ProjectCard.tsx
- ✅ Tous les composants UI (shadcn/ui)

### Configuration nécessaire

- ✅ Next.js 15 avec App Router
- ✅ TypeScript
- ✅ Tailwind CSS v4 (dernière version)
- ✅ Framer Motion (compatible Next.js)
- ✅ Configuration ESLint pour Next.js
- ✅ next.config.ts

### Fichiers de configuration

```
portfolio/
├── next.config.ts
├── tsconfig.json
├── package.json
├── tailwind.config.ts
├── postcss.config.js
├── app/
│   ├── layout.tsx (root layout)
│   ├── page.tsx (homepage)
│   └── globals.css
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── figma/
│   └── ui/
└── public/
    └── (assets)
```

---

## 3. Tâches détaillées

### Phase 1 : Initialisation Next.js

- [ ] Créer la configuration Next.js (next.config.ts)
- [ ] Configurer package.json avec les dépendances Next.js
- [ ] Configurer TypeScript (tsconfig.json)
- [ ] Configurer Tailwind CSS v4
- [ ] Configurer ESLint pour Next.js

### Phase 2 : Structure App Router

- [ ] Créer app/layout.tsx (root layout avec metadata)
- [ ] Créer app/page.tsx (homepage)
- [ ] Migrer globals.css vers app/globals.css
- [ ] Configurer les métadonnées SEO

### Phase 3 : Migration des composants

- [ ] Migrer tous les composants existants (client components si nécessaire)
- [ ] Adapter les imports pour Next.js
- [ ] Vérifier la compatibilité Framer Motion
- [ ] Assurer le bon fonctionnement des composants UI

### Phase 4 : Optimisations

- [ ] Remplacer les balises `<img>` par `<Image>` de Next.js
- [ ] Configurer les métadonnées pour le SEO
- [ ] Ajouter favicon et métadonnées Open Graph
- [ ] Optimiser les performances (lazy loading, etc.)

### Phase 5 : Tests et validation

- [ ] Tester toutes les sections du portfolio
- [ ] Vérifier les animations Framer Motion
- [ ] Valider la responsivité
- [ ] Tester le build de production
- [ ] Vérifier les performances (Lighthouse)

---

## 4. Dépendances principales

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "latest",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5",
    "eslint": "^9",
    "eslint-config-next": "^15.0.0"
  }
}
```

---

## 5. Points d'attention

### Framer Motion

- Composants avec animations → ajouter `'use client'` en haut
- Vérifier la compatibilité des animations avec SSR

### Tailwind CSS

- Migration vers Tailwind v4 si nécessaire
- Conserver la configuration des couleurs custom

### Images

- Identifier toutes les images utilisées
- Les placer dans le dossier `public/`
- Utiliser `next/image` pour l'optimisation

### SEO

- Configurer les metadata dans layout.tsx et page.tsx
- Ajouter Open Graph et Twitter Cards
- Configurer sitemap.xml et robots.txt

---

## 6. Critères de validation

- ✅ L'application Next.js compile sans erreur
- ✅ Toutes les sections s'affichent correctement
- ✅ Les animations Framer Motion fonctionnent
- ✅ Le design est identique à la version React
- ✅ Les métadonnées SEO sont configurées
- ✅ Le build de production réussit (`npm run build`)
- ✅ Score Lighthouse > 90 sur tous les critères

---

## 7. Estimation

**Complexité** : Moyenne  
**Temps estimé** : 2-3 heures  
**Risques** : Faible (migration straightforward)

---

## 8. Notes et observations

- Préserver l'architecture actuelle des composants
- Garder la même structure UI/UX
- Profiter de la migration pour optimiser les performances
- Ajouter les fonctionnalités Next.js (metadata, sitemap, etc.)

---

**Dernière mise à jour** : 2025-10-13
