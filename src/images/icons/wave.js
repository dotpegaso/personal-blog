import React from "react";

const Wave = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="198">
    <path
      fill={fill || "orange"}
      d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z"
      transform="matrix(-1 0 0 1 1600 0)"
    />
  </svg>
);

export default Wave;
