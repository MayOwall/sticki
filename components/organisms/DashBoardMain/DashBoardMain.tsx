import { LinkGrid } from "components"
import * as S from "./DashBoardMain.styles"

export function DashBoardMain({ ...props }) {
  return (
    <S.Container style={{ ...props }}>
      <LinkGrid />
    </S.Container>
  )
}
