module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/no-v-html': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/object-curly-spacing': 'off',
    'vue/script-indent': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error',
    'vue/singleline-html-element-content-newline': 'off',

    semi: [
      'error',
      'always'
    ],
    'space-before-function-paren': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      }
    ],
    'no-array-constructor': 'off',
    'no-useless-constructor': 'off',
    'no-console': 'error',
    'no-debugger': 'error',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true,
      },
    }
  ],
};
