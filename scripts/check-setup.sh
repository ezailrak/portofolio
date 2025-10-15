#!/bin/bash

echo "🔍 Vérification de la configuration Next.js..."
echo ""

# Vérifier Node.js
echo "📦 Node.js version:"
node -v

# Vérifier pnpm
echo ""
echo "📦 pnpm version:"
pnpm -v

# Vérifier les fichiers de configuration
echo ""
echo "📄 Fichiers de configuration:"
[ -f "package.json" ] && echo "✅ package.json" || echo "❌ package.json manquant"
[ -f "next.config.ts" ] && echo "✅ next.config.ts" || echo "❌ next.config.ts manquant"
[ -f "tailwind.config.ts" ] && echo "✅ tailwind.config.ts" || echo "❌ tailwind.config.ts manquant"
[ -f "tsconfig.json" ] && echo "✅ tsconfig.json" || echo "❌ tsconfig.json manquant"
[ -f "postcss.config.mjs" ] && echo "✅ postcss.config.mjs" || echo "❌ postcss.config.mjs manquant"

# Vérifier la structure
echo ""
echo "📁 Structure du projet:"
[ -d "app" ] && echo "✅ app/" || echo "❌ app/ manquant"
[ -d "components" ] && echo "✅ components/" || echo "❌ components/ manquant"
[ -d "public" ] && echo "✅ public/" || echo "❌ public/ manquant"

# Vérifier les dépendances
echo ""
echo "📦 Dépendances installées:"
[ -d "node_modules" ] && echo "✅ node_modules présent" || echo "❌ Exécutez: pnpm install"

echo ""
echo "✨ Configuration vérifiée !"
echo ""
echo "🚀 Pour démarrer le serveur de développement:"
echo "   pnpm dev"
echo ""


