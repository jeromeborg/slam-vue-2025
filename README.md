# vue-2025

Projet Vue 3 + Vite + Tailwind CSS

## 🚀 Technologies

- **Vue 3** - Framework JavaScript progressif
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first

## 📦 Installation

Les dépendances sont déjà installées. Si vous avez besoin de les réinstaller :

```bash
npm install
```

## 🛠️ Développement

Lancer le serveur de développement :

```bash
npm run dev
```

Le projet sera accessible sur [http://localhost:5173/](http://localhost:5173/)

## 🏗️ Build

Créer une version de production :

```bash
npm run build
```

## 📝 Structure du projet

```
vue-2025/
├── src/
│   ├── assets/          # Ressources statiques
│   ├── components/      # Composants Vue
│   ├── App.vue         # Composant principal
│   ├── main.js         # Point d'entrée
│   └── style.css       # Styles globaux avec Tailwind
├── public/             # Fichiers publics
├── index.html          # Template HTML
├── tailwind.config.js  # Configuration Tailwind
├── postcss.config.js   # Configuration PostCSS
└── vite.config.js      # Configuration Vite
```

## 🎨 Utilisation de Tailwind CSS

Tailwind CSS est configuré et prêt à l'emploi. Vous pouvez utiliser toutes les classes utilitaires directement dans vos composants Vue :

```vue
<template>
  <div class="bg-blue-500 text-white p-4 rounded-lg">
    Hello Tailwind!
  </div>
</template>
```

## 📚 Ressources

- [Documentation Vue 3](https://vuejs.org/)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation Tailwind CSS](https://tailwindcss.com/)
