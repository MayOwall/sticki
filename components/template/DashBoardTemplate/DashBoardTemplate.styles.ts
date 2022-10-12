import styled from "@emotion/styled"

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background: linear-gradient(167.94deg, rgba(234, 225, 253) 0%, rgba(179, 191, 255) 100%);
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  height: 100%;
  margin-top: 4rem;

  > div:last-child {
    flex-grow: 1;
  }
`
export const StatusContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 2rem;
`
