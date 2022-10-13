import styled from "@emotion/styled"

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5rem;
  height: 5rem;

  border-radius: 2.5rem;

  background-color: #8294ff;
  box-shadow: 0 0.5rem 1rem #4f349b22;

  opacity: 50%;
  transition: opacity ease-in 0.3s;

  :hover {
    opacity: 100%;
  }
`
