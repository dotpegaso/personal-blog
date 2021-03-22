import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => (
  <>
    <header>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>A fun footer</p>
    </footer>
  </>
);

export default Layout;
