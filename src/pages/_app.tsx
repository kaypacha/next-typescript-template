/* eslint-disable filename-rules/match */
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { reset } from 'utils'
import { theme } from 'theme'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
