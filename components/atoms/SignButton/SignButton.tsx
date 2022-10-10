import { ISignButtonProps } from "types/atom"
import * as S from "./SignButton.styles"

export function SignButton({ content, width, color, backgroundColor }: ISignButtonProps) {
  return (
    <S.Container width={width} color={color} backgroundColor={backgroundColor}>
      {content}
    </S.Container>
  )
}

SignButton.defaultProps = {
  content: "test",
  width: 18,
  backgroundColor: "linear-gradient(167.94deg, #EAE1FD 0%, #B3BFFF 100%)",
  color: "black",
}
