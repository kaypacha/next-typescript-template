import styled, { css } from 'styled-components'

import type { DefaultLayoutProps } from 'typings/layouts'
import { Text } from 'components'

export const Main = styled('main')`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;

    > :not(:last-child) {
      margin-bottom: ${theme.spacing(2)};
    }
  `}
`

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props

  return (
    <Main id="main">
      <Text color="white" variant="heading">
        Boilerplate by KayPacha
      </Text>
      {children}
    </Main>
  )
}
