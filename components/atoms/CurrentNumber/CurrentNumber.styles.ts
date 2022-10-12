import styled from "@emotion/styled"
import { ICurrentNumberProps } from "types"

export const Container = styled.div<ICurrentNumberProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${({ width }) => (width ? `${width}rem` : "4.5rem")};
  height: ${({ width }) => (width ? `${width}rem` : "4.5rem")};
`

export const Title = styled.div`
  height: 2rem;

  color: white;

  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.1rem;

  word-break: keep-all;
`

export const Count = styled.div`
  color: #8294ff;

  font-size: 2rem;
  font-weight: 700;
`
