import type { Meta, StoryObj } from "@storybook/react"
import { Text, TextProps } from "@drewdev-ui/react"

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non molestiae illum recusandae commodi pariatur aut. Ratione laboriosam amet temporibus qui, a tempora error repudiandae cumque vero quisquam! Blanditiis, fugiat esse.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl'
      ],
      control: {
        type: 'inline-radio',
      }
    },
  }
} as Meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
