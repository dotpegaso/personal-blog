import React, { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

import GlobalStyles from "../../styles/global";

import Footer from "../Footer";
import Header from "../Header";

import * as S from "./styles";

import "../../styles/deckdeckgo.css";

export const LayoutContext = createContext();

const Layout = ({ children, pageContext, location }) => {
  const [theme, setTheme] = useState(undefined);
  const { pathname } = location;
  const { locale } = pageContext;

  const isDarkMode = theme === "dark";

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.Container>
      <GlobalStyles />
      <LayoutContext.Provider
        value={{
          locale,
          theme,
          setTheme: () =>
            window.__setPreferredTheme(isDarkMode ? "light" : "dark"),
        }}
      >
        <Header locale={locale} pathname={pathname} />
        <S.Children>{children}</S.Children>
        <Footer />
      </LayoutContext.Provider>
    </S.Container>
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
