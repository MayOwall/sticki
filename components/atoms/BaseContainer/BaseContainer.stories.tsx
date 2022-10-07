import { ComponentStory, ComponentMeta } from "@storybook/react"

import { BaseContainer } from "./BaseContainer"

export default {
  title: "Components/Atoms/BaseContainer",
  component: BaseContainer,
  argTypes: {},
} as ComponentMeta<typeof BaseContainer>

export const Default: ComponentStory<typeof BaseContainer> = (args) => {
  return <BaseContainer {...args} />
}
