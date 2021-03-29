import React from "react";

import ThemeWheel from "../ThemeWheel";

import * as S from "./styles";

const Header = ({ locale, pathname }) => {
  function getLocalePath() {
    return (
      {
        en: `/pt${pathname}`,
        pt: `${pathname.split(locale).pop()}`,
      }[locale] || ""
    );
  }

  return (
    <S.Container as="header">
      <ThemeWheel />

      <S.StyledLocalizedLink to="/">
        <S.StyledWings />
        dotpegaso
      </S.StyledLocalizedLink>

      <S.StyledLink hrefLang={locale} to={getLocalePath()}>
        <S.StyledGlobal />
        {locale}
      </S.StyledLink>
    </S.Container>
  );
};

export default Header;
