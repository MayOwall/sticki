import { ComponentStory, ComponentMeta } from "@storybook/react"
import { CreateBoardButton } from "./CreateBoardButton"

export default {
  title: "Components/Atoms/CreateBoardButton",
  component: CreateBoardButton,
  argTypes: {},
} as ComponentMeta<typeof CreateBoardButton>

export const Default: ComponentStory<typeof CreateBoardButton> = (args) => {
  return <CreateBoardButton {...args} />
}
