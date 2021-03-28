import styled from "styled-components/macro";
import { backgroundColor, primaryTextColor } from "../../styles/theme";

export const Container = styled.div`
  transition: 0.2s all ease;
  background-color: ${backgroundColor};
  color: ${primaryTextColor};
`;

export const Children = styled.div`
  min-height: calc(100vh - 560px);
`;
