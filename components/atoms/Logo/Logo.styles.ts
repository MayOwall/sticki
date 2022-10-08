import styled from "@emotion/styled"
import { ILogoProps } from "types"

export const Container = styled.div<ILogoProps>`
  width: ${({ width }) => (width ? `${width}rem` : `6.5rem`)};
  height: ${({ width }) => (width ? `${width * 0.31}rem` : `2rem`)};
  border: 1px solid black;
`
