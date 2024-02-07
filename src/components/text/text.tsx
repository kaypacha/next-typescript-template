import type { FontProperties, TextProps } from 'typings/components'

import { StyledText } from './text.styled'

const variantMap = (variant: TextProps['variant']): FontProperties => {
  if (variant === 'heading') {
    return {
      fontFamily: 'heading',
      fontSize: 600,
      fontWeight: 600,
    }
  }

  if (variant === 'subheading') {
    return {
      fontFamily: 'heading',
      fontSize: 400,
      fontWeight: 500,
    }
  }

  return {
    fontFamily: 'body',
    fontSize: 300,
    fontWeight: 400,
  }
}

export const Text = (props: TextProps) => {
  const { children, color, fontFamily, fontSize, fontWeight, variant, ...rest } = props

  const fontType = variantMap(variant)

  return (
    <StyledText
      color={color || 'black'}
      fontFamily={fontFamily || fontType.fontFamily}
      fontSize={fontSize || fontType.fontSize}
      fontWeight={fontWeight || fontType.fontWeight}
      {...rest}
    >
      {children}
    </StyledText>
  )
}

Text.defaultProps = {
  variant: 'paragraph',
} as TextProps
