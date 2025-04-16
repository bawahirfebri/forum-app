import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginCypress from 'eslint-plugin-cypress';
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { files: ['**/*.{js,mjs,cjs,jsx}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ['**/*.{js,mjs,cjs,jsx}'], plugins: { js }, extends: ['js/recommended'] },
  pluginReact.configs.flat.recommended,
  pluginCypress.configs.recommended,
  daStyle,
  {
    rules: {
      'no-unused-vars': 'off',
      'indent': 'off',
    }
  },
]);