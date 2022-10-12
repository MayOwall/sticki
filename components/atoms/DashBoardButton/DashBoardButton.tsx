import { IDashBoardButtonProps } from "types"
import * as S from "./DashBoardButton.styles"

export function DashBoardButton({
  title,
  desc,
  width,
  height,
  image,
  ...props
}: IDashBoardButtonProps) {
  return <S.Container>DashBoardButton</S.Container>
}
