import { IDashBoardButtonProps } from "types"
import Image from "next/image"
import * as S from "./DashBoardButton.styles"

export function DashBoardButton({
  title,
  desc,
  image,
  backgroundColor,
  ...props
}: IDashBoardButtonProps) {
  return (
    <S.Container backgroundColor={backgroundColor}>
      <S.Title>{title}</S.Title>
      {desc ? <S.Desc>{desc}</S.Desc> : null}
      {image ? (
        <S.ImageContainer>
          <Image src={image} layout="fill" alt={`${title} image`} />
        </S.ImageContainer>
      ) : null}
    </S.Container>
  )
}
