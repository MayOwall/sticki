import styled from "@emotion/styled"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10.5rem 5.5rem auto;
  gap: 1rem;

  width: 22.5rem;
  height: 24.5rem;

  > div:nth-of-type(1) {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  > div:nth-of-type(2) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
  }

  > div:nth-of-type(3) {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  > div:nth-of-type(4) {
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
  }
`
