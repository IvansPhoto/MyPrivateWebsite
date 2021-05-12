module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    quotes: [1, 'single', 'avoid-escape'],
    'prettier/prettier': ['error', { printWidth: 120 }],
  },
}
