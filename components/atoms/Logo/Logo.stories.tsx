import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Logo } from "./Logo"

export default {
  title: "Components/Atoms/Logo",
  component: Logo,
  argTypes: {
    width: {
      defaultValue: undefined,
      control: "number",
    },
  },
} as ComponentMeta<typeof Logo>

export const Default: ComponentStory<typeof Logo> = (args) => {
  return <Logo {...args} />
}
