import Image from "next/image"
import { BaseContainer } from "components"
import * as S from "./BoardPreviewCard.styles"
import { IBoardPreviewCardProps } from "types"

export function BoardPreviewCard({
  imageLink,
  title,
  date,
  wholeCount,
  currentCount,
  ...props
}: IBoardPreviewCardProps) {
  return (
    <BaseContainer padding="1rem">
      <S.Container>
        <S.ImageContainer>
          <Image
            src={imageLink}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: 8 }}
            alt={`${title} image`}
          />
        </S.ImageContainer>
        <S.MidContainer>
          <S.Title>{title}</S.Title>
          <S.Date>{date}</S.Date>
        </S.MidContainer>
        <S.Status>{`${currentCount} / ${wholeCount}`}</S.Status>
      </S.Container>
    </BaseContainer>
  )
}
