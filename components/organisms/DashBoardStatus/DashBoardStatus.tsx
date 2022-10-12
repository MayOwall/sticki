import { Greeting, Icon, BoardStatus } from "components"
import Link from "next/link"
import * as S from "./DashBoardStatus.styles"

import { IDashBoardStatusProps } from "types"

export function DashBoardStatus({
  userName,
  wholeBoardCount,
  onGoingBoardCount,
  completedBoardCount,
  ...props
}: IDashBoardStatusProps) {
  return (
    <S.Container style={{ ...props }}>
      <Greeting userName={userName} />
      <BoardStatus
        wholeBoardCount={wholeBoardCount}
        onGoingBoardCount={onGoingBoardCount}
        completedBoardCount={completedBoardCount}
      />
      <S.LogoutIconContainer>
        <Link href="#">
          <Icon name="logoutIcon" width={2} alt="logoutButton" />
        </Link>
      </S.LogoutIconContainer>
    </S.Container>
  )
}
