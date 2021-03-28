import styled from "styled-components/macro";
import iconAnchor from "../../images/icons/anchor.svg";

import {
  primaryTextColor,
  secondaryTextColor,
  inlineCodeBackgroundColor,
  highlightColor,
} from "../../styles/theme";

export const Container = styled.article`
  max-width: 675px;
  height: 100%;
  margin: 60px auto 0;
  text-align: center;

  @media (max-width: 490px) {
    margin: 40px auto 0;
    width: 100%;
    padding: 0 15px;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 10px 0;
  font-family: var(--bold-font);
  transition: 0.2s all ease;
  color: ${primaryTextColor};
`;

export const Body = styled.p`
  text-align: left;
  margin-top: 70px;
  font-size: 1.9rem;
  line-height: 1.6;
  color: ${secondaryTextColor};
`;

export const Anchor = styled.a`
  color: ${primaryTextColor};
  text-decoration: none;
  padding: 0 20px 2px 0;
  background-image: url(${iconAnchor});
  background-repeat: no-repeat;
  background-position: center right 2.5px;

  :hover {
    border-bottom: 0.5px solid ${secondaryTextColor};
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 32px;

  @media (max-width: 490px) {
    margin-bottom: 20px;
  }
`;

export const ShortCode = styled.code`
  background: ${inlineCodeBackgroundColor};
  border-radius: 2px;
  padding: 2px 6px;
`;

export const Emphasis = styled.em`
  color: var(--constrast);
  font-family: var(--bold-font);
`;

export const Strong = styled.strong`
  color: ${primaryTextColor};
`;

export const OrdernedList = styled.ol`
  margin-left: 20px;

  @media (max-width: 490px) {
    margin-left: 30px;
    margin-bottom: 20px;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 10px;

  ::marker {
    font-family: var(--bold-font);
    color: var(--constrast);
  }
`;

export const Blockquote = styled.blockquote`
  margin: 40px 1.75rem 40px -1.75rem;
  padding: 20px 1.5rem 20px 1.5rem;
  border-left: 0.5rem solid;
  border-left-color: inherit;
  opacity: 0.7;
  background: ${highlightColor};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 490px) {
    margin: 40px auto;
  }

  ${OrdernedList} {
    margin-left: 35px;
  }

  ${Strong} {
    font-family: var(--bold-font);
  }
`;
