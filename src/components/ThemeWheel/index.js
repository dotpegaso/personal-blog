import React, { useContext } from "react";

import { LayoutContext } from "../Layout";

import * as S from "./styles";

const ThemeWheel = () => {
  const { theme, setTheme } = useContext(LayoutContext);

  function handleSetTheme() {
    return {
      day: "night",
      night: "day",
    }[theme];
  }

  return (
    <S.Container onClick={() => setTheme(handleSetTheme)} theme={theme}>
      <S.Day />
      <S.Night />
    </S.Container>
  );
};

export default ThemeWheel;
