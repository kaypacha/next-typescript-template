// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      white: string
      black: string
    }
    spacing: (...args: (string | number)[]) => string
    fontSizes: {
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }
    fontFamily: {
      heading: string
      body: string
    }
    fontWeights: {
      400: number
      500: number
      600: number
      700: number
    }
  }
}
