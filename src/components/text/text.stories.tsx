import type { Meta, StoryObj } from '@storybook/react'

import { numberKeysToString, stringKeysToString } from 'utils'
import { theme } from 'theme'

import { Text } from './text'

export default {
  title: 'Text',
  component: Text,
  args: {
    children: 'Hello World',
  },
  argTypes: {
    color: {
      options: Object.keys(theme.colors),
      control: { type: 'select' },
      table: {
        type: {
          summary: stringKeysToString(Object.keys(theme.colors)),
        },
      },
    },
    fontSize: {
      options: Object.keys(theme.fontSizes),
      control: { type: 'select' },
      table: {
        type: {
          summary: numberKeysToString(Object.keys(theme.fontSizes)),
        },
      },
    },
    fontFamily: {
      options: Object.keys(theme.fontFamily),
      control: { type: 'select' },
      table: {
        type: {
          summary: stringKeysToString(Object.keys(theme.fontFamily)),
        },
      },
    },
    fontWeight: {
      options: Object.keys(theme.fontWeights),
      control: { type: 'select' },
      table: {
        type: {
          summary: numberKeysToString(Object.keys(theme.fontWeights)),
        },
      },
    },
    variant: {
      control: { type: 'select' },
    },
  },
} as Meta<typeof Text>

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {},
}
