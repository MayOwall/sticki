import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Sticker } from "./Sticker"

export default {
  title: "Components/Atoms/Sticker",
  component: Sticker,
  argTypes: {
    stickerType: {
      defaultValue:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA4MjlfMTk4%2FMDAxNTAzOTg3MjkwNzc3.8ffgvFFg2nUkLBVzHBBAm9SGvuVYIe3X1Q5jAkvSi9wg.xs6Chd_YbCDPVUNCyj7LyNSdvEY7fzC4yrLdDVirFzwg.JPEG.g-clef%2FIMG_9031.jpg&type=sc960_832",
      control: "text",
    },
    isVisible: {
      defaultType: true,
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Sticker>

export const Default: ComponentStory<typeof Sticker> = (args) => {
  return (
    <div style={{ width: 100, height: 100 }}>
      <Sticker {...args} />
    </div>
  )
}
