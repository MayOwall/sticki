import { ComponentStory, ComponentMeta } from "@storybook/react"

import { BaseContainer } from "./BaseContainer"

export default {
  title: "Components/Atoms/BaseContainer",
  component: BaseContainer,
  argTypes: {
    width: {
      defaultValue: null,
      control: "number",
    },
    height: {
      defaultValue: null,
      control: "number",
    },
    padding: {
      defaultValue: 1,
      control: "number",
    },
    borderRadius: {
      defaultValue: 1,
      control: "number",
    },
    backgroundColor: {
      defaultValue: "white",
      control: {
        type: "color",
        presetColors: ["white", "gray", "purple"],
      },
    },
  },
} as ComponentMeta<typeof BaseContainer>

export const Default: ComponentStory<typeof BaseContainer> = (args) => {
  return <BaseContainer {...args} />
}
