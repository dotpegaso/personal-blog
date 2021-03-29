import React from "react";
import CustomLayout from "./wrapPageElement";

export const wrapPageElement = CustomLayout;

const MagicScriptTag = () => {
  const codeToRunOnClient = `
  (function() {
    window.__onThemeChange = function() {};

    function setTheme(newTheme) {
      window.__theme = newTheme;
      preferredTheme = newTheme;
      document.body.className = newTheme;
      window.__onThemeChange(newTheme);
    }

    var preferredTheme;
    try {
      preferredTheme = localStorage.getItem('theme');
    } catch (err) { }

    window.__setPreferredTheme = function(newTheme) {
      setTheme(newTheme);
      try {
        localStorage.setItem('theme', newTheme);
      } catch (err) {}
    }

    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addListener(function(e) {
      window.__setPreferredTheme(e.matches ? 'dark' : 'light')
    });

    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
  })();
  `;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};
