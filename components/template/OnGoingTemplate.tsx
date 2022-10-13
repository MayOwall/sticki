import { PageTitle, OnGoingBoardList, BottomNavBar } from "components"
import * as S from "./OnGoingTemplate.styles"
import { IOnGoingBoardListProps } from "types"

export function OnGoingTemplate({ boardListData, ...props }: IOnGoingBoardListProps) {
  return (
    <S.Container style={{ ...props }}>
      <PageTitle title='OnGoing Stickies"' desc="현재 진행중인 스티키보드를 확인하세요" />
      <OnGoingBoardList boardListData={boardListData} />
      <BottomNavBar />
    </S.Container>
  )
}
