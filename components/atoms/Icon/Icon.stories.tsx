import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Icon } from "./Icon"

export default {
  title: "Components/Atoms/Icon",
  component: Icon,
  argTypes: {
    name: {
      defaultValue: "inputDeleteButton",
      control: "select",
      options: ["inputDeleteButton"],
    },
    width: {
      defaultValue: 3,
      control: {
        type: "range",
        min: 1,
        max: 15,
        step: 1,
      },
    },
    alt: {
      defaultValue: "storybook test icon",
    },
  },
} as ComponentMeta<typeof Icon>

export const Default: ComponentStory<typeof Icon> = (args) => {
  return <Icon {...args} />
}
