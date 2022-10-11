import { ISignButtonProps } from "types/atom"
import * as S from "./SignButton.styles"

export function SignButton({ content, width, color, backgroundColor }: ISignButtonProps) {
  return (
    <S.Container width={width} color={color} backgroundColor={backgroundColor}>
      {content}
    </S.Container>
  )
}
