import * as S from "./ProgressBar.styles"
import { IProgressBarProps } from "types"

export function ProgressBar({ percentage, ...props }: IProgressBarProps) {
  return (
    <S.Container style={{ ...props }}>
      <S.Border></S.Border>
      <S.ProgressBar percentage={percentage}></S.ProgressBar>
    </S.Container>
  )
}
