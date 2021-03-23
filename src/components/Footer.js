import React from "react";
import { useTranslations } from "../hooks";

const Footer = () => {
  const { footer } = useTranslations();

  return <h5>{footer}</h5>;
};

export default Footer;
