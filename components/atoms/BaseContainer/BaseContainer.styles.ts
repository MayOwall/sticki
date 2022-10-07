import styled from "@emotion/styled"
import { IBaseCardContainerProps } from "types"

export const Container = styled.div<IBaseCardContainerProps>`
  width: ${({ width }) => (width ? `${width}rem` : "fit-content")};
  height: ${({ height }) => (height ? `${height}rem` : "fit-content")};
  padding: ${({ padding }) => padding}rem;
  border-radius: ${({ borderRadius }) => borderRadius}rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0 0.5rem 1rem #4f349b33;
`
