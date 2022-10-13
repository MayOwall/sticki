import { ComponentStory, ComponentMeta } from "@storybook/react"
import { OnGoingBoardList } from "./OnGoingBoardList"

const dummyData = [
  {
    title: "제목1",
    date: "2022.02.13",
    wholeCount: 10,
    currentCount: 3,
    imageLink: "https://i1.sndcdn.com/artworks-CDyMPstbky5qw7oe-NfF8Pg-t240x240.jpg",
  },
  {
    title: "제목2",
    date: "2022.02.13",
    wholeCount: 10,
    currentCount: 3,
    imageLink: "https://i1.sndcdn.com/artworks-CDyMPstbky5qw7oe-NfF8Pg-t240x240.jpg",
  },
  {
    title: "제목3",
    date: "2022.02.13",
    wholeCount: 10,
    currentCount: 3,
    imageLink: "https://i1.sndcdn.com/artworks-CDyMPstbky5qw7oe-NfF8Pg-t240x240.jpg",
  },
  {
    title: "제목4",
    date: "2022.02.13",
    wholeCount: 10,
    currentCount: 3,
    imageLink: "https://i1.sndcdn.com/artworks-CDyMPstbky5qw7oe-NfF8Pg-t240x240.jpg",
  },
  {
    title: "제목5",
    date: "2022.02.13",
    wholeCount: 10,
    currentCount: 3,
    imageLink: "https://i1.sndcdn.com/artworks-CDyMPstbky5qw7oe-NfF8Pg-t240x240.jpg",
  },
  {
    title: "제목6",
    date: "2022.02.13",
    wholeCount: 10,
    currentCount: 3,
    imageLink: "https://i1.sndcdn.com/artworks-CDyMPstbky5qw7oe-NfF8Pg-t240x240.jpg",
  },
  {
    title: "제목7",
    date: "2022.02.13",
    wholeCount: 10,
    currentCount: 3,
    imageLink: "https://i1.sndcdn.com/artworks-CDyMPstbky5qw7oe-NfF8Pg-t240x240.jpg",
  },
  {
    title: "제목8",
    date: "2022.02.13",
    wholeCount: 10,
    currentCount: 3,
    imageLink: "https://i1.sndcdn.com/artworks-CDyMPstbky5qw7oe-NfF8Pg-t240x240.jpg",
  },
  {
    title: "제목9",
    date: "2022.02.13",
    wholeCount: 10,
    currentCount: 3,
    imageLink: "https://i1.sndcdn.com/artworks-CDyMPstbky5qw7oe-NfF8Pg-t240x240.jpg",
  },
  {
    title: "제목10",
    date: "2022.02.13",
    wholeCount: 10,
    currentCount: 3,
    imageLink: "https://i1.sndcdn.com/artworks-CDyMPstbky5qw7oe-NfF8Pg-t240x240.jpg",
  },
]

export default {
  title: "Components/Organism/OnGoingBoardList",
  component: OnGoingBoardList,
  argTypes: {
    boardListData: {
      defaultValue: dummyData,
    },
  },
} as ComponentMeta<typeof OnGoingBoardList>

export const Default: ComponentStory<typeof OnGoingBoardList> = (args) => {
  return <OnGoingBoardList {...args} />
}
