import styled from "styled-components/macro";

import { primaryTextColor, secondaryTextColor } from "../../styles/theme";

export const Title = styled.h1`
  font-size: 2.8rem;
  margin: 10px 0;
  font-family: var(--bold-font);
  transition: 0.2s all ease;
  color: ${primaryTextColor};
`;

export const Spoiler = styled.p`
  font-size: 1.8rem;
  color: ${secondaryTextColor};
`;

export const Container = styled.article`
  width: 600px;
  height: 100%;
  margin: 60px auto;
  a {
    text-decoration: none !important;
  }

  :hover {
    ${Title} {
      color: var(--constrast);
    }
  }
`;
