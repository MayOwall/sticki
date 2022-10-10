import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SignInput } from "./SignInput"

export default {
  title: "Components/Molecules/SignInput",
  component: SignInput,
  argTypes: {
    label: {
      defaultValue: "test label",
      control: "text",
    },
    alertContent: {
      defaultValue: "test alert",
      control: "text",
    },
    isAlertVisible: {
      defaultValue: false,
      control: "boolean",
    },
  },
} as ComponentMeta<typeof SignInput>

export const Default: ComponentStory<typeof SignInput> = (args) => {
  return <SignInput {...args} />
}
