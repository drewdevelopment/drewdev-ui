import type { Meta, StoryObj } from "@storybook/react"
import { Text, TextProps } from "@drewdev-ui/react"

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non molestiae illum recusandae commodi pariatur aut. Ratione laboriosam amet temporibus qui, a tempora error repudiandae cumque vero quisquam! Blanditiis, fugiat esse.',
  },
} as Meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
