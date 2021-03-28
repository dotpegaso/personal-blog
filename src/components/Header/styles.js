import styled, { css } from "styled-components/macro";
import { Link } from "gatsby";
import LocalizedLink from "../LocalizedLink";

import { primaryTextColor } from "../../styles/theme";

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
  color: ${primaryTextColor};

  :hover {
    color: var(--constrast);
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
`;

export const StyledLocalizedLink = styled(LocalizedLink)`
  ${sharedLinkStyle}
`;

export const StyledLink = styled(Link)`
  ${sharedLinkStyle}
`;