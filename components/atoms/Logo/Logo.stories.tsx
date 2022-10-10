import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Logo } from "./Logo"

export default {
  title: "Components/Atoms/Logo",
  component: Logo,
  argTypes: {
    width: {
      defaultValue: undefined,
      control: { type: "range", min: 1, max: 15, step: 1 },
    },
  },
} as ComponentMeta<typeof Logo>

export const Default: ComponentStory<typeof Logo> = (args) => {
  return <Logo {...args} />
}
