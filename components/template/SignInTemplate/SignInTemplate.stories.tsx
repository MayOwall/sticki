import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SignInTemplate } from "./SignInTemplate"

export default {
  title: "Components/Templates/SignInTemplate",
  component: SignInTemplate,
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
} as ComponentMeta<typeof SignInTemplate>

export const Default: ComponentStory<typeof SignInTemplate> = (args) => {
  return <SignInTemplate {...args} />
}
