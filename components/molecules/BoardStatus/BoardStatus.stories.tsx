import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BoardStatus } from "./BoardStatus"

export default {
  title: "Components/Molecules/BoardStatus",
  component: BoardStatus,
  argTypes: {
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
} as ComponentMeta<typeof BoardStatus>

export const Default: ComponentStory<typeof BoardStatus> = (args) => {
  return <BoardStatus {...args} />
}
