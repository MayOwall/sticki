import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Greeting } from "./Greeting"

export default {
  title: "Components/Atoms/Greeting",
  component: Greeting,
  argTypes: {
    userName: {
      defaultValue: "username",
      control: "text",
    },
  },
} as ComponentMeta<typeof Greeting>

export const Default: ComponentStory<typeof Greeting> = (args) => {
  return <Greeting {...args} />
}
