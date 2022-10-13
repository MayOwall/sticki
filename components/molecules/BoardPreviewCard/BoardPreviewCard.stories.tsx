import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BoardPreviewCard } from "./BoardPreviewCard"

export default {
  title: "Components/Molecules/BoardPreviewCard",
  component: BoardPreviewCard,
  argTypes: {
    imageLink: {
      defaultValue: "https://i1.sndcdn.com/artworks-CDyMPstbky5qw7oe-NfF8Pg-t240x240.jpg",
    },
    title: {
      defaultValue: "매일 매일 꾸준히 물 마시기",
      control: "text",
    },
    date: {
      defaultValue: "2022.04.18 ~ 2022.05.13",
      control: "text",
    },
    wholeCount: {
      defaultValue: 12,
      control: {
        type: "range",
        min: 5,
        max: 30,
        step: 5,
      },
    },
    currentCount: {
      defaultValue: 5,
      control: {
        type: "range",
        min: 0,
        max: 25,
        step: 5,
      },
    },
  },
} as ComponentMeta<typeof BoardPreviewCard>

export const Default: ComponentStory<typeof BoardPreviewCard> = (args) => {
  return <BoardPreviewCard {...args} />
}
