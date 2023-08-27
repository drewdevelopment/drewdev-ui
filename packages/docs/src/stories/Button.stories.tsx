import type { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonProps } from "@drewdev-ui/react"

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Drew UI',
  },
} as Meta

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big'
  },
}
