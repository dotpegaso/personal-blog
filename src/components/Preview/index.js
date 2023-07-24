import React from "react";
import PropTypes from "prop-types";

import LocalizedLink from "../LocalizedLink";

import * as S from "./styles";

const Preview = ({ title, spoiler, path }) => {
  return (
    <S.Container>
      <LocalizedLink to={path}>
        <S.Title>{title}</S.Title>
        <S.Spoiler>{spoiler}</S.Spoiler>
      </LocalizedLink>
    </S.Container>
  );
};

Preview.propTypes = {
  title: PropTypes.string.isRequired,
  spoiler: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Preview;
