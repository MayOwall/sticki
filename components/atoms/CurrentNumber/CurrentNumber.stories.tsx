import { ComponentStory, ComponentMeta } from "@storybook/react"
import { CurrentNumber } from "./CurrentNumber"

export default {
  title: "Components/Atoms/CurrentNumber",
  component: CurrentNumber,
  argTypes: {
    title: {
      defaultValue: "test title",
      control: "text",
    },
    count: {
      defaultValue: 1,
      control: {
        type: "range",
        min: 0,
        max: 10,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof CurrentNumber>

export const Default: ComponentStory<typeof CurrentNumber> = (args) => {
  return <CurrentNumber {...args} />
}
