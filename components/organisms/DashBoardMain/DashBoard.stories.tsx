import { ComponentStory, ComponentMeta } from "@storybook/react"
import { DashBoardMain } from "./DashBoardMain"

export default {
  title: "Components/Organism/DashBoardMain",
  component: DashBoardMain,
  argTypes: {},
} as ComponentMeta<typeof DashBoardMain>

export const Default: ComponentStory<typeof DashBoardMain> = (args) => {
  return <DashBoardMain {...args} />
}
