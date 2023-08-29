import type { Meta, StoryObj } from "@storybook/react"
import { Heading, HeadingProps } from "@drewdev-ui/react"

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
    size: 'md'
  },
} as Meta

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong text',
    as: 'h1'
  },
  argTypes: {
    size: {
      options: [
        'sm',
        'md',
        'lg',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
      ],
      control: {
        type: 'inline-radio'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão, o heading sempre será um `h2`. Mas, podemos alterar isso com a propriedade `as`.'
      }
    }
  }
}
