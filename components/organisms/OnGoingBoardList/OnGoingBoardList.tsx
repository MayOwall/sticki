import { BoardPreviewCard } from "components"
import * as S from "./OnGoingBoardList.styles"
import { IOnGoingBoardListProps } from "types"

export function OnGoingBoardList({ boardListData, ...props }: IOnGoingBoardListProps) {
  return (
    <S.Container style={{ ...props }}>
      {boardListData.length ? (
        boardListData.map(({ title, date, wholeCount, currentCount, imageLink }, idx) => (
          <BoardPreviewCard
            key={`${title}${idx}`}
            title={title}
            date={date}
            wholeCount={wholeCount}
            currentCount={currentCount}
            imageLink={imageLink}
          />
        ))
      ) : (
        <S.Announce> 생성된 스티키 보드가 없어요 🥲 </S.Announce>
      )}
    </S.Container>
  )
}
