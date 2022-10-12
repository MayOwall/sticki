import { ComponentStory, ComponentMeta } from "@storybook/react"
import { LinkGrid } from "./LinkGrid"

export default {
  title: "Components/Molecules/LinkGrid",
  component: LinkGrid,
  argTypes: {},
} as ComponentMeta<typeof LinkGrid>

export const Default: ComponentStory<typeof LinkGrid> = (args) => {
  return <LinkGrid {...args} />
}
