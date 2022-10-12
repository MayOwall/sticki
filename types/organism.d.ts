export interface ISignFormProps {
  formType: "signUp" | "signIn"
}

export interface IDashBoardStatusProps {
  userName: string
  wholeBoardCount: number
  onGoingBoardCount: number
  completedBoardCount: number
}
