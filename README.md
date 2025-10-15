# Portfolio - Next.js

Portfolio moderne développé avec Next.js 15, React 19, TypeScript, Tailwind CSS et shadcn/ui.

## 🚀 Stack Technique

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19
- **Styling**: Tailwind CSS v3
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build de production
pnpm build

# Lancer la version de production
pnpm start
```

## 🏗️ Structure du projet

```
portfolio/
├── app/
│   ├── layout.tsx          # Layout principal avec métadonnées SEO
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   ├── Navigation.tsx      # Barre de navigation
│   ├── Hero.tsx            # Section hero
│   ├── ProjectsSection.tsx # Section projets
│   ├── ProjectCard.tsx     # Carte projet
│   ├── SkillsSection.tsx   # Section compétences
│   ├── ContactSection.tsx  # Section contact
│   ├── Footer.tsx          # Footer
│   └── ui/                 # Composants shadcn/ui
├── public/                 # Assets statiques
├── next.config.ts          # Configuration Next.js
├── tailwind.config.ts      # Configuration Tailwind
└── tsconfig.json           # Configuration TypeScript
```

## 🎨 Features

- ✅ Design moderne et responsive
- ✅ Animations fluides avec Framer Motion
- ✅ Optimisation des images avec next/image
- ✅ SEO optimisé avec métadonnées
- ✅ Composants UI réutilisables (shadcn/ui)
- ✅ TypeScript pour la sécurité du code
- ✅ Mode sombre (préconfiguré avec Tailwind)

## 🔧 Configuration

### Métadonnées SEO

Les métadonnées sont configurées dans `app/layout.tsx`. Modifiez-les selon vos besoins :

```typescript
export const metadata: Metadata = {
  title: "Votre Titre",
  description: "Votre Description",
  // ...
};
```

### Images

Placez vos images dans le dossier `public/` et utilisez le composant `next/image` :

```tsx
import Image from 'next/image';

<Image src="/votre-image.jpg" alt="Description" width={800} height={600} />
```

### shadcn/ui

Pour ajouter de nouveaux composants shadcn/ui :

```bash
npx shadcn@latest add [component-name]
```

## 📱 Sections

1. **Hero** - Introduction avec CTA et liens sociaux
2. **Projets** - Grille de cartes projets avec détails
3. **Compétences** - Catégories de compétences avec icônes
4. **Contact** - Cartes de contact avec liens

## 🎯 Performance

- Optimisation automatique des images
- Code splitting automatique
- Server Components par défaut
- Client Components uniquement pour l'interactivité

## 📄 License

MIT

