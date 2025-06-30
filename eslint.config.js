const { configs } = require('@eslint/js');
const eslintPluginNode = require('eslint-plugin-n');

module.exports = [
  configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        exports: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      n: eslintPluginNode,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'semi': ['error', 'always'],
      'indent': ['error', 2],
    },
  },
];
