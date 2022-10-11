import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SignUpTemplate } from "./SignUpTemplate"

export default {
  title: "Components/Templates/SignUpTemplate",
  component: SignUpTemplate,
  argTypes: {
    formType: {
      defaultValue: "signIn",
      control: {
        type: "radio",
        options: ["signIn", "signUp"],
      },
    },
    isAlertVisible: {
      defaultValue: false,
      control: "boolean",
    },
  },
} as ComponentMeta<typeof SignUpTemplate>

export const Default: ComponentStory<typeof SignUpTemplate> = (args) => {
  return <SignUpTemplate {...args} />
}
