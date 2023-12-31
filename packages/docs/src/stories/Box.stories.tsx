import type { Meta, StoryObj } from "@storybook/react"
import { Box, BoxProps, Text } from "@drewdev-ui/react"

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta

export const Primary: StoryObj<BoxProps> = {}
