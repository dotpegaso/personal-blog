import React, { useContext } from "react";
import { useTranslations } from "../../hooks";

import { LayoutContext } from "../Layout";

import Instagram from "../../images/icons/instagram.svg";
import Twitter from "../../images/icons/twitter.svg";
import Avatar from "../../images/icons/avatar.svg";
import Wave from "../../images/wave";

import * as S from "./styles";

// navigate("/confirm");
// https://app.convertkit.com/forms/2147730/subscriptions

const Footer = () => {
  const { footer_message } = useTranslations();
  const { theme } = useContext(LayoutContext);

  function getFillColorByTheme() {
    return {
      day: "#f3f4f5",
      night: "#000",
    }[theme];
  }

  return (
    <>
      <Wave fill={getFillColorByTheme()} />
      <S.Container>
        <S.SocialWrapper>
          <S.Anchor href="https://twitter.com/dotpegaso" target="_blank">
            <img src={Twitter} alt="Twitter logo with pink background" />
          </S.Anchor>

          <S.Avatar src={Avatar} />

          <S.Anchor href="https://instagram.com/dotpegaso" target="_blank">
            <img src={Instagram} alt="Instagram logo with pink background" />
          </S.Anchor>
        </S.SocialWrapper>
        <S.Message>{footer_message}</S.Message>
      </S.Container>
    </>
  );
};

export default Footer;
