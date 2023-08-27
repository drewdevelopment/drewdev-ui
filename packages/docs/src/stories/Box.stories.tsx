import type { Meta, StoryObj } from "@storybook/react"
import { Box, BoxProps } from "@drewdev-ui/react"

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento box</span>
      </>
    )
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
