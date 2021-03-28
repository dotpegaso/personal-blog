import styled from "styled-components/macro";
import iconSun from "../../images/icons/sun.svg";
import iconMoon from "../../images/icons/moon.svg";

export const Container = styled.div`
  height: 130px;
  width: 130px;
  border-radius: 100px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: -70px;
  transition: 0.7s all ease;
  cursor: pointer;

  ${(p) =>
    p.theme === "day"
      ? `
    transform: rotate(180deg);
    :hover {
      transform: rotate(160deg);  
    }
    `
      : `
    transform: rotate(0deg);
    :hover {
      transform: rotate(20deg);  
    }
    `}

  @media (max-width: 490px) {
    width: 120px;
    height: 120px;
    left: 60vw;
    margin: auto;

    ${(p) =>
      p.theme === "day"
        ? `
    transform: rotate(180deg);
    :hover {
      transform: rotate(180deg);  
    }
    `
        : `
    transform: rotate(0deg);
    :hover {
      transform: rotate(0deg);  
    }
    `}
  }
`;

export const Day = styled.div`
  height: 50%;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  background: var(--day-highlight) url(${iconSun}) center no-repeat;
`;

export const Night = styled.div`
  height: 50%;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  background: var(--night-highlight) url(${iconMoon}) center no-repeat;
`;
