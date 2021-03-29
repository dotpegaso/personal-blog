import styled, { css } from "styled-components/macro";
import { Link } from "gatsby";
import LocalizedLink from "../LocalizedLink";

import Global from "../../images/icons/global";
import Wings from "../../images/icons/wings";

export const StyledGlobal = styled(Global).attrs({
  fill: "var(--primary)",
})``;

export const StyledWings = styled(Wings).attrs({
  fill: "var(--primary)",
})``;

const sharedLinkStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all ease;
  font-size: 2.6rem;
  text-decoration: none;
  font-family: var(--bold-font);
  gap: 10px;
  width: 200px;
  color: var(--primary);

  :hover {
    color: var(--constrast);
  }

  @media (max-width: 490px) {
    font-size: 1.8rem;
    width: 100%;
    padding: 0 5px;
    justify-content: flex-start;

    > svg {
      margin-right: 5px;
    }
  }
`;

export const Container = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 100px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50vw;
  justify-content: flex-end;

  @media (max-width: 490px) {
    grid-column-gap: 0px;
    width: 100%;
    grid-template-rows: 80px;
    grid-template-columns: 150px 1fr;
  }
`;

export const StyledLocalizedLink = styled(LocalizedLink)`
  ${sharedLinkStyle}
`;

export const StyledLink = styled(Link)`
  ${sharedLinkStyle}
`;
