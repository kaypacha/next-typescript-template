import { DefaultTheme } from 'styled-components'

type TextVariant = 'heading' | 'subheading' | 'paragraph'

export type FontProperties = {
  fontFamily: keyof DefaultTheme['fontFamily']
  fontSize: keyof DefaultTheme['fontSizes']
  fontWeight: keyof DefaultTheme['fontWeights']
}

type CustomTextProps = {
  color?: keyof DefaultTheme['colors']
  variant: TextVariant
} & Partial<FontProperties>

export type TextProps = React.ComponentPropsWithoutRef<'p'> & CustomTextProps
