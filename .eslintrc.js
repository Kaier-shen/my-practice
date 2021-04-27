module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    // "@vue/typescript/recommended",
    '@vue/prettier'
    // "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    BigInt: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 0,
    'vue/no-unused-components': 0,
    'no-prototype-builtins': 0,
    'vue/no-parsing-error': 0
  }
};
