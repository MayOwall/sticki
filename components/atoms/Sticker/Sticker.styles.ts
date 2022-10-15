import styled from "@emotion/styled"

interface IContainerProps {
  isVisible: boolean
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  max-width: 10rem;
  height: 100%;
  max-height: 10rem;
  border: 0.3rem solid #8294ff;

  border-radius: 50%;
  background-color: white;

  box-shadow: 0 0.5rem 1rem #00000033;

  opacity: ${({ isVisible }) => (isVisible ? "100%" : "30%")};
`

export const StickerContainer = styled.div<IContainerProps>`
  width: 92%;
  height: 92%;

  border-radius: 50%;

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`
