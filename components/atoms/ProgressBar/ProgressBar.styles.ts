import styled from "@emotion/styled"
import { IProgressBarProps } from "types"

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 2rem;
`

export const Border = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid black;
  border-radius: 0.5rem;
  z-index: 10;
`

export const ProgressBar = styled.div<IProgressBarProps>`
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;

  width: ${({ percentage }) => `${percentage - 1}%`};
  height: 1.6rem;

  border: 1px solid white;
  border-radius: 0.5rem;

  background-color: blue;
`
