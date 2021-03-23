import React, { createContext } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Footer from "./Footer";
import Navigator from "./Navigator";

export const LocaleContext = createContext();

const Layout = ({ children, pageContext, location }) => {
  const { pathname } = location;
  const { locale } = pageContext;

  return (
    <LocaleContext.Provider value={{ locale }}>
      <header>
        <nav>
          <Navigator /> /{" "}
          <Link to={`/pt${pathname}`} hrefLang="pt">
            pt-BR
          </Link>{" "}
          /{" "}
          <Link to={`${pathname.split(locale).pop()}`} hrefLang="en">
            en-US
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
    </LocaleContext.Provider>
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
