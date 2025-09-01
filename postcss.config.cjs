// postcss.config.js
// ESM-export, omdat package.json "type": "module" bevat.
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // gebruik de Tailwind CSS v4 plugin
    autoprefixer: {},
  },
};
