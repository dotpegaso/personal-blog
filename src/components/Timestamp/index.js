import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const Timestamp = ({ dateTime, children }) => (
  <S.Timestamp dateTime={dateTime}>{children}</S.Timestamp>
);

Timestamp.propTypes = {
  dateTime: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Timestamp;
