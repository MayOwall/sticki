import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ProgressBar } from "./ProgressBar"

export default {
  title: "Components/Atoms/ProgressBar",
  component: ProgressBar,
  argTypes: {
    percentage: {
      defaultValue: 80,
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof ProgressBar>

export const Default: ComponentStory<typeof ProgressBar> = (args) => {
  return <ProgressBar {...args} />
}
