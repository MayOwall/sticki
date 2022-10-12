import { ComponentStory, ComponentMeta } from "@storybook/react"
import { DashBoardButton } from "./DashBoardButton"

const testImageLink =
  "https://cutewallpaper.org/24/studio-ghibli-png/download-hd-any-transparent-studio-ghibli-photos-and-or-gifs-jiji-kiki-la-petite-sorci%C3%A8re-transparent-png-image-nicepngcom.png"

export default {
  title: "Components/Atoms/DashBoardButton",
  component: DashBoardButton,
  argTypes: {
    title: {
      defaultValue: "test title",
      control: "text",
    },
    desc: {
      defaultValue: "test desc",
      control: "text",
    },
    width: {
      defaultValue: 5,
      control: {
        type: "range",
        min: 1,
        max: 10,
        step: 1,
      },
    },
    height: {
      defaultValue: 10,
      control: {
        type: "range",
        min: 5,
        max: 20,
        step: 2.5,
      },
    },
    backgroundColor: {
      defaultValue: "#B5C0FF",
      control: "color",
    },
    image: {
      defaultValue: testImageLink,
      control: {
        type: "radio",
        options: [testImageLink, undefined],
      },
    },
  },
} as ComponentMeta<typeof DashBoardButton>

export const Default: ComponentStory<typeof DashBoardButton> = (args) => {
  return <DashBoardButton {...args} />
}
