module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.+(js|ts|tsx)': ['eslint "**/*.{js,ts,tsx}"', 'prettier --write "**/*.{js,ts,tsx}"'],
  '**/*.+(ts|tsx)': () =>
    'jest --watchAll=false --coverage --forceExit --detectOpenHandles --env=jsdom --colors',
}
