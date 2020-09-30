module.exports = {
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "arrow-parens": 0,
    "camelcase": 0,
    'comma-dangle': ['error', 'never'],
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "quotes": [2, "single",{ "avoidEscape": true }],
    "linebreak-style": 0,
    "max-len": [0, { "code": 120 }],
    "no-multiple-empty-lines": 0,
    "no-underscore-dangle": "off",
    "no-unused-expressions": 0,
    "no-unused-vars": "warn",
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    "react/jsx-no-target-blank": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": "warn",
    "react/prop-types": "warn",
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
  },
};
