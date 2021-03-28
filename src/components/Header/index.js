import React, { useContext } from "react";

import ThemeWheel from "../ThemeWheel";
import { LayoutContext } from "../Layout";

import Wings from "../../images/icons/wings";
import Global from "../../images/icons/global";

import * as S from "./styles";

const Header = ({ locale, pathname }) => {
  const { theme } = useContext(LayoutContext);

  function getLocalePath() {
    return (
      {
        en: `/pt${pathname}`,
        pt: `${pathname.split(locale).pop()}`,
      }[locale] || ""
    );
  }

  function getFillColorByTheme() {
    return {
      day: "#000",
      night: "#FFF",
    }[theme];
  }

  return (
    <S.Container as="header">
      <ThemeWheel />

      <S.StyledLocalizedLink to="/">
        <Wings fill={getFillColorByTheme()} />
        dotpegaso
      </S.StyledLocalizedLink>

      <S.StyledLink hrefLang={locale} to={getLocalePath()}>
        <Global fill={getFillColorByTheme()} />
        {locale}
      </S.StyledLink>
    </S.Container>
  );
};

export default Header;
