import { CurrentNumber } from "components"
import * as S from "./BoardStatus.styles"
import { IBoardStatusProps } from "types"

export function BoardStatus({
  wholeBoardCount,
  onGoingBoardCount,
  completedBoardCount,
  ...props
}: IBoardStatusProps) {
  return (
    <S.Container>
      <CurrentNumber title="전체 스티커보드" count={wholeBoardCount} />
      <CurrentNumber title="진행중인 스티커보드" count={onGoingBoardCount} />
      <CurrentNumber title="완료한 스티커보드" count={completedBoardCount} />
    </S.Container>
  )
}
