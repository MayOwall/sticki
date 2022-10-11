import styled from "@emotion/styled"

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgb(50, 50, 50);
  overflow: auto;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 80vh;
  height: 100%;
  margin: 1rem 0;
  border: 1px solid black;

  background: linear-gradient(167.94deg, rgba(234, 225, 253) 0%, rgba(179, 191, 255) 100%);
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: rgba(179, 191, 255);
    font-size: 0.7rem;
    text-decoration: none;
  }
`
