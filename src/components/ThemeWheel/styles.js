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
  transition: 0.3s all ease;
  cursor: pointer;
  transform: var(--theme-wheel-transform);

  @media (max-width: 490px) {
    width: 120px;
    height: 120px;
    left: 60vw;
    margin: auto;
  }
`;

export const Day = styled.div`
  height: 50%;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  background: var(--highlight) url(${iconSun}) center no-repeat;
`;

export const Night = styled.div`
  height: 50%;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  background: var(--highlight) url(${iconMoon}) center no-repeat;
`;
