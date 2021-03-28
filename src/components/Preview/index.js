import React, { useContext } from "react";
import PropTypes from "prop-types";

import LocalizedLink from "../LocalizedLink";
import Timestamp from "../Timestamp";

import { humanDate } from "../../utils";
import { LayoutContext } from "../Layout";

import * as S from "./styles";

const Preview = ({ date, title, spoiler, path }) => {
  const { locale } = useContext(LayoutContext);

  return (
    <S.Container>
      <LocalizedLink to={path}>
        <Timestamp dateTime={date}>{humanDate({ date, locale })}</Timestamp>
        <S.Title>{title}</S.Title>
        <S.Spoiler>{spoiler}</S.Spoiler>
      </LocalizedLink>
    </S.Container>
  );
};

Preview.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  spoiler: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Preview;
