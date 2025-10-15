# Guide de Migration Next.js

## ✅ Migration terminée !

Votre portfolio React a été migré avec succès vers Next.js 15.

## 🚀 Démarrage rapide

### 1. Installer les dépendances

```bash
pnpm install
```

### 2. Lancer le serveur de développement

```bash
pnpm dev
```

Le site sera accessible sur http://localhost:3000

### 3. Vérifier que tout fonctionne

- ✅ Navigation smooth scroll
- ✅ Animations Framer Motion
- ✅ Images optimisées
- ✅ Styles Tailwind CSS
- ✅ Composants shadcn/ui

## 📋 Changements effectués

### Structure du projet

**Avant (React)**

```
portfolio/
├── App.tsx
├── components/
└── styles/
```

**Après (Next.js)**

```
portfolio/
├── app/
│   ├── layout.tsx          # Layout avec SEO
│   ├── page.tsx            # Homepage
│   └── globals.css         # Styles globaux
├── components/             # Vos composants (inchangés)
├── public/                 # Assets statiques
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

### Composants modifiés

Tous les composants utilisant Framer Motion ont été marqués avec `'use client'` :

- `Navigation.tsx`
- `Hero.tsx`
- `ProjectsSection.tsx`
- `SkillsSection.tsx`
- `ContactSection.tsx`
- `ProjectCard.tsx`

### Imports mis à jour

- `motion/react` → `framer-motion`
- `ImageWithFallback` → `next/image` (optimisation automatique)

### Configuration

- **Next.js 15** avec App Router
- **Tailwind CSS v3** (stable)
- **shadcn/ui** avec tous les composants UI
- **pnpm** comme gestionnaire de paquets

## 🎨 Styles Tailwind

Les styles sont configurés dans :

- `app/globals.css` - Variables CSS et configuration
- `tailwind.config.ts` - Configuration Tailwind
- `postcss.config.mjs` - Configuration PostCSS

## 🔧 Commandes disponibles

```bash
# Développement
pnpm dev

# Build de production
pnpm build

# Lancer la version de production
pnpm start

# Linting
pnpm lint

# Ajouter un composant shadcn/ui
npx shadcn@latest add [component-name]
```

## 📦 SEO et Métadonnées

Les métadonnées sont configurées dans `app/layout.tsx` :

- Title
- Description
- Keywords
- Open Graph
- Twitter Cards

## 🖼️ Images

Les images sont maintenant optimisées automatiquement avec `next/image` :

- Lazy loading
- Formats optimisés (WebP, AVIF)
- Responsive images
- Placeholders

## ⚠️ Points importants

1. **Client Components** : Les composants avec animations ou hooks doivent avoir `'use client'`
2. **Images externes** : Configurées dans `next.config.ts` pour Unsplash
3. **Tailwind** : Utilise v3 pour la stabilité

## 🚀 Déploiement

### Vercel (recommandé)

```bash
# Connectez votre repo GitHub et Vercel déploiera automatiquement
```

### Build local

```bash
pnpm build
pnpm start
```

## 📝 Prochaines étapes suggérées

- [ ] Ajouter vos vraies images dans `public/`
- [ ] Mettre à jour les liens sociaux (GitHub, LinkedIn)
- [ ] Personnaliser les métadonnées SEO
- [ ] Ajouter un favicon
- [ ] Créer un sitemap.xml
- [ ] Configurer Google Analytics (optionnel)

## 🆘 Résolution de problèmes

### Les styles ne s'appliquent pas

```bash
# Nettoyer et réinstaller
rm -rf node_modules .next
pnpm install
pnpm dev
```

### Erreurs TypeScript

```bash
# Vérifier les types
pnpm build
```

### Erreurs d'imports

Assurez-vous que tous les imports utilisent les alias `@/` :

```typescript
import { Component } from "@/components/Component";
```

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation shadcn/ui](https://ui.shadcn.com)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Framer Motion](https://www.framer.com/motion/)

