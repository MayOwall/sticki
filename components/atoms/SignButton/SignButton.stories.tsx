import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SignButton } from "./SignButton"

export default {
  title: "Components/Atoms/SignButton",
  component: SignButton,
  argTypes: {
    content: {
      defaultValue: "test",
      control: "text",
    },
    width: {
      defaultValue: 18,
      control: {
        type: "range",
        min: 5,
        max: 30,
        step: 5,
      },
    },
    color: {
      defaultValue: "white",
      control: {
        type: "color",
        presetColors: ["white", "blue", "orange", "purple"],
      },
    },
    backgroundColor: {
      defaultValue: "linear-gradient(to bottom, #EAE1FD 0%, #B3BFFF 100%)",
      control: {
        type: "color",
        presetColors: ["black", "gray", "purple", "yellow"],
      },
    },
  },
} as ComponentMeta<typeof SignButton>

export const Default: ComponentStory<typeof SignButton> = (args) => {
  return <SignButton {...args} />
}
