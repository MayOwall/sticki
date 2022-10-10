import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SignForm } from "./SignForm"

export default {
  title: "Components/Organism/SignForm",
  component: SignForm,
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
} as ComponentMeta<typeof SignForm>

export const Default: ComponentStory<typeof SignForm> = (args) => {
  return <SignForm {...args} />
}
