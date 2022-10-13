import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;

  width: 100%;
  height: 10vh;
  min-height: 6rem;
`

export const ImageContainer = styled.div`
  flex-shrink: 0;
  position: relative;

  width: 10vh;
  min-width: 6rem;
  height: 100%;
`

export const MidContainer = styled.div`
  flex-grow: 1;

  width: 1rem;
  flex-grow: 1;
`

export const Title = styled.div`
  width: 100%;

  font-size: 1.4rem;
  font-weight: 700;
  word-break: keep-all;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Date = styled.div`
  color: lightgray;

  font-size: 1.3rem;
  font-weight: 300;
`

export const Status = styled.div`
  flex-shrink: 0;

  color: #b5c0ff;

  font-weight: 900;
`
