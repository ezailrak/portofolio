# 🚀 Démarrage Rapide - Portfolio Next.js

## ✅ Migration terminée avec succès !

Votre portfolio React a été migré vers **Next.js 15** avec shadcn/ui et Tailwind CSS v3.

---

## 📋 Étapes pour démarrer

### 1️⃣ Lancer le serveur de développement

```bash
pnpm dev
```

Le site sera accessible sur **http://localhost:3000**

### 2️⃣ Vérifier que les styles s'appliquent

Ouvrez votre navigateur et vérifiez :

- ✅ La navigation sticky en haut
- ✅ Les animations au scroll (Framer Motion)
- ✅ Les couleurs et le design (Tailwind CSS)
- ✅ Les cartes de projets avec hover effects
- ✅ Les sections responsives

### 3️⃣ Si les styles ne s'affichent pas

```bash
# Nettoyer et redémarrer
rm -rf .next
pnpm dev
```

---

## 🛠️ Commandes utiles

```bash
# Développement
pnpm dev

# Build de production
pnpm build

# Lancer en production
pnpm start

# Vérifier la configuration
./scripts/check-setup.sh
```

---

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── layout.tsx          # Layout + SEO metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Styles Tailwind + variables CSS
├── components/
│   ├── Navigation.tsx      # Barre de navigation
│   ├── Hero.tsx            # Section hero
│   ├── ProjectsSection.tsx # Grille de projets
│   ├── SkillsSection.tsx   # Compétences
│   ├── ContactSection.tsx  # Contact
│   └── ui/                 # Composants shadcn/ui
├── public/                 # Assets statiques
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 🎨 Personnalisation

### Modifier les couleurs

Éditez `app/globals.css` - variables CSS :

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* ... */
}
```

### Ajouter des composants shadcn/ui

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# etc.
```

### Modifier le contenu

- **Hero** : `components/Hero.tsx`
- **Projets** : `components/ProjectsSection.tsx`
- **Compétences** : `components/SkillsSection.tsx`
- **Contact** : `components/ContactSection.tsx`

---

## 🔧 Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **React 19** - Librairie UI
- **TypeScript** - Type safety
- **Tailwind CSS v3** - Styling
- **shadcn/ui** - Composants UI
- **Framer Motion** - Animations
- **pnpm** - Gestionnaire de paquets

---

## 📚 Documentation complète

- [MIGRATION.md](./MIGRATION.md) - Guide complet de migration
- [README.md](./README.md) - Documentation du projet

---

## ⚡ Astuce

Pour vérifier que tout fonctionne :

```bash
pnpm build
```

Si le build réussit, votre application est prête pour la production ! 🎉

---

## 🆘 Problème avec les styles ?

Si les styles Tailwind ne s'appliquent pas :

1. **Vérifiez que le serveur est lancé** : `pnpm dev`
2. **Nettoyez le cache** : `rm -rf .next && pnpm dev`
3. **Vérifiez la console** : Ouvrez les DevTools du navigateur (F12)
4. **Vérifiez que `globals.css` est importé** dans `app/layout.tsx`

Les styles sont définis dans :

- `app/globals.css` → Variables CSS + base Tailwind
- `tailwind.config.ts` → Configuration Tailwind
- Composants → Classes Tailwind inline

---

**Besoin d'aide ?** Consultez [MIGRATION.md](./MIGRATION.md) pour plus de détails.
