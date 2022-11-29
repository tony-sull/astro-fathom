module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        rules: {
          indent: ['error', 2],
          'linebreak-style': ['error', 'unix'],
          quotes: ['error', 'single'],
          semi: ['error', 'never'],
        },
      },
    },
  ],
}
