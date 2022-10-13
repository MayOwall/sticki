import * as S from "./PageTitle.styles"
import { IPageTitleProps } from "types"

export function PageTitle({ title, desc, ...props }: IPageTitleProps) {
  return (
    <S.Container style={{ ...props }}>
      <S.Title>{title}</S.Title>
      <S.Desc>{desc}</S.Desc>
    </S.Container>
  )
}
