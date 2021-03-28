import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../styles/global";

import Footer from "../Footer";
import Header from "../Header";

import { getThemeMode } from "../../utils";

import * as S from "./styles";

import "../../styles/typography.css";
import "../../styles/colors.css";
import "../../styles/deckdeckgo.css";

export const LayoutContext = createContext();

const Layout = ({ children, pageContext, location }) => {
  const [theme, setTheme] = useState(getThemeMode());
  const { pathname } = location;
  const { locale } = pageContext;

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <S.Container>
        <GlobalStyles />
        <LayoutContext.Provider value={{ locale, theme, setTheme }}>
          <Header locale={locale} pathname={pathname} />
          <S.Children>{children}</S.Children>
          <Footer />
        </LayoutContext.Provider>
      </S.Container>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    dateFormat: PropTypes.string,
    locale: PropTypes.string,
  }),
  location: PropTypes.shape({
    hash: PropTypes.string,
    host: PropTypes.string,
    hostname: PropTypes.string,
    href: PropTypes.string,
    key: PropTypes.string,
    origin: PropTypes.string,
    pathname: PropTypes.string,
    port: PropTypes.string,
    protocol: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.bool,
  }),
};

Layout.defaultProps = {
  pageContext: {
    locale: "",
  },
  location: {
    pathname: "",
  },
};

export default Layout;
