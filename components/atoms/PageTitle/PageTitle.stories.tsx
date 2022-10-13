import { ComponentStory, ComponentMeta } from "@storybook/react"
import { PageTitle } from "./PageTitle"

export default {
  title: "Components/Atoms/PageTitle",
  component: PageTitle,
  argTypes: {
    title: {
      defaultValue: "OnGoing STICKIES",
      control: "text",
    },
    desc: {
      defaultValue: "현재 진행중인 스티키보드를 확인하세요",
      control: "text",
    },
  },
} as ComponentMeta<typeof PageTitle>

export const Default: ComponentStory<typeof PageTitle> = (args) => {
  return <PageTitle {...args} />
}
