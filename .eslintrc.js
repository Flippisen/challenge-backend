module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'require-jsdoc': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': 'off',
    'linebreak-style': 'off',
    'max-len': ['error', { 'code': 140 }],
  },
};
