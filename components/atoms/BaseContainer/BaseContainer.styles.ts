import styled from "@emotion/styled"
import { IBaseCardContainerProps } from "types"

export const Container = styled.div<IBaseCardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: ${({ width }) => (width ? `${width}rem` : "fit-content")};
  height: ${({ height }) => (height ? `${height}rem` : "fit-content")};
  padding: ${({ padding }) => (padding ? padding : "2rem 1rem")};
  border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius}rem` : "2rem")};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "white")};
  box-shadow: 0 0.5rem 1rem #4f349b33;
`
