import React, { useContext } from "react";

import { LayoutContext } from "../Layout";

import * as S from "./styles";

const ThemeWheel = () => {
  const { setTheme } = useContext(LayoutContext);

  return (
    <S.Container onClick={setTheme}>
      <S.Day />
      <S.Night />
    </S.Container>
  );
};

export default ThemeWheel;
