import styled from "@emotion/styled"

interface IContainerProps {
  width?: number
  height: number
  backgroundColor: string
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  width: ${({ width }) => (width ? `${width}rem` : "100%")};
  height: ${({ height }) => `${height}rem`};
  padding: 1rem;

  border-radius: 1rem;

  background: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0 0.5rem 1rem rgba(79, 52, 155, 0.2);

  overflow: hidden;
`

export const Title = styled.div`
  width: 100%;

  color: white;

  font-size: 1.25rem;
  font-weight: 700;

  word-break: keep-all;
`

export const Desc = styled.div`
  width: 100%;

  color: white;
  font-size: 0.6rem;

  word-break: keep-all;
`
export const ImageContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  width: 50%;
  max-height: 50%;
  height: 50%;
`
