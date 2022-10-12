import { ComponentStory, ComponentMeta } from "@storybook/react"
import { DashBoardStatus } from "./DashBoardStatus"

export default {
  title: "Components/Organism/DashBoardStatus",
  component: DashBoardStatus,
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
} as ComponentMeta<typeof DashBoardStatus>

export const Default: ComponentStory<typeof DashBoardStatus> = (args) => {
  return <DashBoardStatus {...args} />
}
