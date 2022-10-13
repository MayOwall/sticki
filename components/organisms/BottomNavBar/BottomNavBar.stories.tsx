import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BottomNavBar } from "./BottomNavBar"

export default {
  title: "Components/Organism/BottomNavBar",
  component: BottomNavBar,
  argTypes: {},
} as ComponentMeta<typeof BottomNavBar>

export const Default: ComponentStory<typeof BottomNavBar> = (args) => {
  return <BottomNavBar {...args} />
}
