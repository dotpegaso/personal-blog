import styled, { css } from "styled-components/macro";
import { highlightColor } from "../../styles/theme";

const sharedAlignment = css`
  justify-self: center;
`;

export const Container = styled.footer`
  position: relative;
  height: 200px;
  background: ${highlightColor};
`;

export const SocialWrapper = styled.div`
  width: 250px;
  height: 150px;
  margin: -5px auto 0;
  display: grid;
  grid-template-columns: 50px 150px 50px;
  align-items: center;
  justify-content: center;
`;

export const Anchor = styled.a`
  ${sharedAlignment}
`;

export const Avatar = styled.img`
  ${sharedAlignment}
  width: 100px;
`;

export const Message = styled.p`
  font-size: 1.6rem;
  text-align: center;

  @media (max-width: 490px) {
    width: 60%;
    margin: -10px auto 0;
  }
`;
