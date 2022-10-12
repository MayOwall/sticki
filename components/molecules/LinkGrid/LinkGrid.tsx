import Link from "next/link"
import { DashBoardButton } from "components"
import * as S from "./LinkGrid.styles"

export function LinkGrid({ ...props }) {
  return (
    <S.Container>
      <div>
        <Link href="#">
          <DashBoardButton
            title="OnGoing
STICKIES”"
            desc="현재 진행중인 스티키보드를 
          확인하세요"
            backgroundColor="linear-gradient(168.88deg, #C8D0FF 4.71%, #9CABFF 95.63%)"
          />
        </Link>
      </div>
      <div>
        <Link href="#">
          <DashBoardButton
            title="STICKI”
History"
            desc="그동안의 스티키보드 기록들을
          확인 해 볼 수 있어요"
            backgroundColor="linear-gradient(133.61deg, #FFE7DD 2.18%, #FFC7AF 98.43%)"
          />
        </Link>
      </div>
      <div>
        <Link href="#">
          <DashBoardButton
            title="Sticki
Collections"
            desc="지금까지 모은 스티키보드와
          칭찬스티커를 확인할 수 있어요"
            backgroundColor="linear-gradient(132.14deg, #F2D7FF 12.28%, #E2A6FF 87.41%)"
          />
        </Link>
      </div>
      <div>
        <Link href="#">
          <DashBoardButton
            title="Community"
            desc="친구들과 챌린지를 공유하고
응원을 보낼 수 있어요"
            backgroundColor="linear-gradient(162.18deg, #DBD6FF 6.54%, #B7ACFF 93.46%)"
          />
        </Link>
      </div>
    </S.Container>
  )
}
