import styled, { css } from "styled-components/macro";
import iconAnchor from "../../images/icons/anchor.svg";

const listStyle = css`
  margin-left: 20px;

  @media (max-width: 490px) {
    margin-left: 30px;
    margin-bottom: 20px;
  }
`;

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
  color: var(--primary);
`;

export const Body = styled.p`
  text-align: left;
  margin-top: 70px;
  font-size: 1.9rem;
  line-height: 1.6;
  color: var(--secondary);

  @media (max-width: 490px) {
    font-size: 1.7rem;
  }
`;

export const Anchor = styled.a`
  color: var(--primary);
  text-decoration: none;
  padding: 0 20px 2px 0;
  background-image: url(${iconAnchor});
  background-repeat: no-repeat;
  background-position: center right 2.5px;

  :hover {
    border-bottom: 0.5px solid var(--secondary);
  }

  @media (max-width: 490px) {
    border-bottom: 0.5px solid var(--secondary);
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 32px;

  @media (max-width: 490px) {
    margin-bottom: 20px;
  }
`;

export const ShortCode = styled.code`
  background: var(--code-background);
  border-radius: 2px;
  padding: 2px 6px;
`;

export const Emphasis = styled.em`
  color: var(--constrast);
  font-family: var(--bold-font);
`;

export const Strong = styled.strong`
  color: var(--primary);
`;

export const UnorderedList = styled.ul`
  ${listStyle}
`;

export const OrdernedList = styled.ol`
  ${listStyle}
`;

export const ListItem = styled.li`
  margin-bottom: 10px;

  ::marker {
    font-family: var(--bold-font);
    color: var(--constrast);
  }
`;

export const Header2 = styled.h2`
  margin-bottom: 30px;
`;

export const Blockquote = styled.blockquote`
  margin: 40px auto;
  padding: 20px 1.5rem 20px 1.5rem;
  border-left: 0.5rem solid;
  border-left-color: inherit;
  opacity: 0.7;
  background: var(--highlight);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  ${OrdernedList} {
    margin-left: 35px;
  }

  ${Strong} {
    font-family: var(--bold-font);
  }

  ${Paragraph} {
    margin-bottom: 18px;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;
