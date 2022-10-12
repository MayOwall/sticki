import { DashBoardStatus, DashBoardMain } from "components"
import * as S from "./DashBoardTemplate.styles"
import { IDashBoardStatusProps } from "types"

export function DashBoardTemplate({
  userName,
  wholeBoardCount,
  onGoingBoardCount,
  completedBoardCount,
  ...props
}: IDashBoardStatusProps) {
  return (
    <S.Background>
      <S.Container style={{ ...props }}>
        <S.StatusContainer>
          <DashBoardStatus
            userName={userName}
            wholeBoardCount={wholeBoardCount}
            onGoingBoardCount={onGoingBoardCount}
            completedBoardCount={completedBoardCount}
          />
        </S.StatusContainer>
        <DashBoardMain />
      </S.Container>
    </S.Background>
  )
}
