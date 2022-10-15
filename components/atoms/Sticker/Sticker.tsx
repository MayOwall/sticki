import Image from "next/image"
import * as S from "./Sticker.styles"
import { IStickerProps } from "types"

export function Sticker({ stickerType, isVisible, ...props }: IStickerProps) {
  return (
    <S.Container isVisible={isVisible} style={{ ...props }}>
      <S.StickerContainer isVisible={isVisible}>
        <Image
          src={stickerType}
          layout="fill"
          objectFit="contain"
          style={{ borderRadius: "50%" }}
          alt="sticker"
        />
      </S.StickerContainer>
    </S.Container>
  )
}
