import styled, { css } from "styled-components/macro";

const sharedGridOptions = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: flex-start;
`;

export const Container = styled.div`
  width: 100%;
  margin: 50px 0 0;
  padding: 40px;
  border-radius: 20px;
  background: var(--highlight);
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;

  @media (max-width: 490px) {
    padding: 15px;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 0;
    grid-row-gap: 20px;
    grid-template-columns: 1fr;
  }
`;

export const Disclaimer = styled.div`
  ${sharedGridOptions}
  text-align: left;
  grid-row-gap: 5px;
`;

export const Form = styled.form`
  ${sharedGridOptions}
  text-align: left;
  grid-row-gap: 20px;

  ${(p) =>
    p.isSubscribed &&
    `
    grid-template-rows: 1fr;
  `}
`;

export const Text = styled.p`
  font-size: 1.8rem;

  ${(p) =>
    p.title &&
    `
    font-size: 2.6rem;
    font-family: var(--bold-font);
  `}
`;

export const Submit = styled.button`
  background: var(--constrast);
  border-radius: 6px;
  border: none;
  font-family: var(--bold-font);
  font-size: 1.8rem;
  color: var(--background);
  transition: 0.2s all ease;
  height: 42px;

  :hover {
    cursor: pointer;
    background: var(--button-hover);
  }
`;

export const Input = styled.input`
  height: 42px;
  border-radius: 6px;
  padding: 0 15px;
  border: none;
  background: hsl(0 0% 100%);
  font-size: 1.6rem;
`;
