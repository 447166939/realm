module.exports = {
  extends: ['expo', 'prettier', 'plugin:react-hooks/recommended', 'plugin:react-native/all'],
  plugins: ['simple-import-sort', 'react-native', 'prettier', 'react-hooks'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react-native/no-color-literals': 'off',
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)',
      },
    ],
    'react/display-name': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', 'recoil'],
              // Internal packages.
              ['@components/*', '@hooks/*', '@views/*', '@store/*', '@utils/*', '@type/*'],
              // Side effect imports.
              ['^\\u0000'],
              ['@assets/*'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$', '^.+\\.?(json)$'],
            ],
          },
        ],
        'react-native/no-raw-text': ['error', { skip: ['ThemedText','ButtonText'] }],
      },
    },
  ],
};
