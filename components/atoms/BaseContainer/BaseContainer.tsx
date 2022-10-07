import { IBaseCardContainerProps } from "types"
import * as S from "./BaseContainer.styles"

export function BaseContainer({
  width,
  height,
  padding,
  borderRadius,
  backgroundColor,
  children,
}: IBaseCardContainerProps) {
  return (
    <S.Container
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
    >
      {children}
    </S.Container>
  )
}

BaseContainer.defaultProps = {
  width: null,
  height: null,
  padding: 1,
  borderRadius: 1,
  backgroundColor: "white",
}
