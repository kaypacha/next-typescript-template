const modules = [
  'typings',
  'tests',
  'hooks',
  'components',
  'static',
  'utils',
  'pages',
  'theme',
  'views',
  'layouts',
]
const assets = ['^.+\\.css$', '^assets', '^static', '^public']

const dependencies = [
  // React package - types
  '^react\\u0000$',
  // Dependencies - types
  `^(?!${modules.join('|')})@?\\w.*\\u0000$`,
  // Side effect
  '^\\u0000',
  // React package
  '^react$',
  // Dependencies
  `^(?!${modules.join('|')})@?\\w`,
]

const internalTypings = [...modules].map(module => `^typings/${module}`)

const internalModules = [...modules.slice(1)].map(module => `^${module}`)

const internalModulesTypes = [...internalModules].map(
  internalModule => `${internalModule}.*\\u0000$`
)

const internal = [
  // Fist category
  ...internalTypings,
  // Second category
  ...internalModulesTypes,
  // Third category
  ...internalModules,
]

const relatives = [
  // Parent imports. Put `..` last.
  '^\\.\\.(?!/?$).*\\u0000$',
  '^\\.\\./?$.*\\u0000$',
  '^\\.\\.(?!/?$)',
  '^\\.\\./?$',
  // Other relative imports. Put same-folder imports and `.` last.
  '^\\./(?=.*/)(?!/?$).*\\u0000$',
  '^\\.(?!/?$).*\\u0000$',
  '^\\./?$.*\\u0000$',
  '^\\./(?=.*/)(?!/?$)',
  '^\\.(?!/?$)',
  '^\\./?$',
]

const groups = [
  // First group
  assets,
  // Second group
  dependencies,
  // Third group
  internal,
  // Fourth group
  relatives,
]

module.exports = {
  plugins: ['@typescript-eslint', 'filename-rules', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ['index.ts'],
      rules: {
        '@typescript-eslint/padding-line-between-statements': 'off',
      },
    },
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // storybook
    'storybook/default-exports': 'off',
    // eslint
    'object-curly-spacing': ['warn', 'always'],
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'max-params': ['error', 3],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    'no-restricted-exports': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'padding-line-between-statements': 'off',
    // note you must disable the base rule as it can report incorrect errors
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['import', 'case', 'default'],
        next: ['import', 'case', 'default'],
      },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/prefer-default-export': 'off',
    // file names
    'filename-rules/match': [2, 'kebab-case'],
    // React eslint
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    // import
    'simple-import-sort/imports': ['error', { groups }],
  },
}
