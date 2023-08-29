import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarProps } from "@drewdev-ui/react"

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/drewdevelopment.png',
    alt: 'Andrew Gerez'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}
