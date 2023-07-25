/* eslint-env node */
module.exports = {
  root: true,
  "env": {
    "node": true,
    "browser": true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  globals: {
    MAIN_WINDOW_VITE_DEV_SERVER_URL: 'readonly',
    MAIN_WINDOW_VITE_NAME: 'readonly'
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
