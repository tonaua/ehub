// PostCSS configuration
//
// Since the project uses ESM modules (package.json contains "type": "module"),
// this configuration file must also use an ES module export. Tailwind CSS v4
// requires the PostCSS plugin to be loaded from `@tailwindcss/postcss`.
// See: https://tailwindcss.com/docs/upgrade-guide#postcss-and-cssnesting

export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}