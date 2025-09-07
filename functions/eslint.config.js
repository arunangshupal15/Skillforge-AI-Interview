const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat();

module.exports = [
  js.configs.recommended,  // Basic JavaScript rules
  ...compat.extends('next/core-web-vitals'),  // Compatibly load Next.js config
  // Optional: Add custom rules or ignores
  {
    ignores: ['**/dist/**', '**/node_modules/**'],  // Ignore build folders
    rules: {
      // Your custom rules, e.g., 'no-console': 'warn'
      '@next/next/no-html-link-for-pages': 'off'
    }
  }
];
