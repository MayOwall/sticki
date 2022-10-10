import styled from "@emotion/styled"

interface IAlertProps {
  isAlertVisible: boolean
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: inherit;
`

export const Label = styled.label`
  color: #b5c0ff;

  font-size: 0.9rem;
  font-weight: 700;
`

export const Input = styled.input`
  display: block;

  width: 100%;
  height: 2rem;

  border: none;
  border-bottom: 2px solid #b5c0ff;

  font-size: 1.1rem;

  :focus {
    outline: none;
  }
`
export const IconContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 1.2rem;

  opacity: 50%;

  :hover {
    opacity: 100%;
  }
`

export const Alert = styled.div<IAlertProps>`
  padding-top: 0.3rem;

  font-size: 0.75rem;
  font-weight: 500;
  color: #ffb5b5;

  visibility: ${({ isAlertVisible }) => (isAlertVisible ? "visible" : "hidden")};
`
