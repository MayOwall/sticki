import { ComponentStory, ComponentMeta } from "@storybook/react"
import { DashBoardTemplate } from "./DashBoardTemplate"

export default {
  title: "Components/Templates/DashBoardTemplate",
  component: DashBoardTemplate,
  argTypes: {
    userName: {
      defaultValue: "userName",
      control: "text",
    },
    wholeBoardCount: {
      defaultValue: 100,
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 10,
      },
    },
    onGoingBoardCount: {
      defaultValue: 80,
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 10,
      },
    },
    completedBoardCount: {
      defaultValue: 10,
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 10,
      },
    },
  },
} as ComponentMeta<typeof DashBoardTemplate>

export const Default: ComponentStory<typeof DashBoardTemplate> = (args) => {
  return <DashBoardTemplate {...args} />
}
