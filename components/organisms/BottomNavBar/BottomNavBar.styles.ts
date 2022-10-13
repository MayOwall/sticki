import styled from "@emotion/styled"

export const Container = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 5rem;
  padding: 1rem;

  background-color: white;

  border-top: 1px solid #b5c0ff;

  > div {
    opacity: 70%;
    transition: opacity ease-in 0.3s;

    :hover {
      opacity: 100%;
    }
  }
`
