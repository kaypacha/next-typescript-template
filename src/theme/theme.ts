import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: '#29AC9C',
    secondary: '#CE546D',
    white: 'white',
    black: 'black',
  },
  spacing: (...args) => {
    return args.map(item => (typeof item === 'string' ? item : `${8 * item}px`)).join(' ')
  },
  fontSizes: {
    100: '10px',
    200: '14px',
    300: '16px',
    400: '20px',
    500: '24px',
    600: '32px',
    700: '48px',
    800: '56px',
    900: '64px',
  },
  fontFamily: {
    heading: 'Arial, sans-serif',
    body: 'Courier New, monospace',
  },
  fontWeights: {
    400: 400,
    500: 500,
    600: 600,
    700: 700,
  },
}
