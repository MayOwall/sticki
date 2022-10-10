import styled from "@emotion/styled"
import { ISignButtonProps } from "types/atom"

export const Container = styled.button<ISignButtonProps>`
  width: ${({ width }) => (width ? `${width}rem` : "100%")};
  height: 3rem;
  border: none;
  border-radius: 1.5rem;
  color: ${({ color }) => (color ? color : "white")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "linear-gradient(167.94deg, #EAE1FD 0%, #B3BFFF 100%)"};
  font-size: 1.1rem;
  font-weight: 700;
  opacity: 70%;
  transition: opacity, ease-in, 0.3s;

  :hover {
    opacity: 100%;
  }
`
