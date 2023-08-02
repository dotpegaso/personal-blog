import React from "react";
import { useTranslations } from "../../hooks";

import Instagram from "../../images/icons/instagram.svg";
import Linkedin from "../../images/icons/linkedin.svg";
import Avatar from "../../images/icons/avatar.svg";

import * as S from "./styles";

const Footer = () => {
  const { footer_message } = useTranslations();

  return (
    <>
      <S.StyledWave />
      <S.Container>
        <S.SocialWrapper>
          <S.Anchor href="https://linkedin.com/in/dotpegaso" target="_blank">
            <img src={Linkedin} alt="Linkedin logo with white background" />
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
