module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      'eslint-import-resolver-typescript': true,
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    createDefaultProgram: true,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      globalReturn: true,
    },
    project: './tsconfig.eslint.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/button-has-type': [0],
    'no-use-before-define': 'off',
    'import/no-cycle': [0],
    'import/no-duplicates': [0],
    'no-plusplus': [0],
    'react/jsx-props-no-spreading': [0],
    'no-param-reassign': [0],
    'jsx-a11y/no-static-element-interactions': [0],
  },
};
