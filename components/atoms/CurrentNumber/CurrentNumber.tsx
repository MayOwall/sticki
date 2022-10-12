import { ICurrentNumberProps } from "types"
import * as S from "./CurrentNumber.styles"

export function CurrentNumber({ width, title, count, ...props }: ICurrentNumberProps) {
  return (
    <S.Container width={width} title={title} count={count}>
      {title ? <S.Title>{title}</S.Title> : null}
      <S.Count>{count}</S.Count>
    </S.Container>
  )
}
