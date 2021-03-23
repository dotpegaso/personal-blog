import React from "react";
import LocalizedLink from "./LocalizedLink";
import { useTranslations } from "../hooks";

const Navigator = () => {
  const { home } = useTranslations();

  return (
    <>
      <LocalizedLink to="/">{home}</LocalizedLink>
    </>
  );
};

export default Navigator;
