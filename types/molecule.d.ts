export interface ISignInputProps {
  labelContent: string
  alertContent: string
  isAlertVisible: boolean
}

export interface IBoardStatusProps {
  wholeBoardCount: number
  onGoingBoardCount: number
  completedBoardCount: number
}

export interface IBoardPreviewCardProps {
  imageLink: string
  title: string
  date: string
  wholeCount: number
  currentCount: number
}
