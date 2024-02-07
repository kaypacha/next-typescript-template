import styled, { css } from 'styled-components'

import type { TextProps } from 'typings/components'

export const StyledText = styled('p').withConfig({
  shouldForwardProp: prop =>
    prop !== 'color' &&
    prop !== 'fontFamily' &&
    prop !== 'fontSize' &&
    prop !== 'fontWeight' &&
    prop !== 'fontSize',
})<Omit<TextProps, 'variant'>>`
  ${({ color, fontFamily, fontWeight, fontSize, theme }) => css`
    color: ${theme.colors[color]};
    text-decoration: none;
    line-height: 1.5;
    font-family: ${theme.fontFamily[fontFamily]};
    font-weight: ${theme.fontWeights[fontWeight]};
    font-size: ${theme.fontSizes[fontSize]};
  `}
`
