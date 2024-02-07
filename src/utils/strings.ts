export const numberKeysToString = (keys: string[]) => {
  return String(keys).split(',').join(' | ')
}

export const stringKeysToString = (keys: string[]) => {
  return String(keys)
    .split(',')
    .map(item => `"${item}"`)
    .join(' | ')
}
