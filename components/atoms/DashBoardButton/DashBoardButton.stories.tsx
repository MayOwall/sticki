import { ComponentStory, ComponentMeta } from "@storybook/react"
import { DashBoardButton } from "./DashBoardButton"

export default {
  title: "Components/Atoms/DashBoardButton",
  component: DashBoardButton,
  argTypes: {},
} as ComponentMeta<typeof DashBoardButton>

export const Default: ComponentStory<typeof DashBoardButton> = (args) => {
  return <DashBoardButton {...args} />
}
