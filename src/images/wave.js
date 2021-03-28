import React from "react";

const Wave = ({ fill }) => (
  <svg width="100%" height="200px" fill="none">
    <path
      fill={fill || "black"}
      d="
          M0 67
          C 273,183
            822,-40
            2700.00,106 

          V 359 
          H 0 
          V 67
          Z"
    >
      <animate
        repeatCount="indefinite"
        fill={fill || "black"}
        attributeName="d"
        dur="15s"
        values="
            M0 77 
            C 473,283
              822,-40
              3840,116 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              3840,136 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              3840,120 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              3840,116 

            V 359 
            H 0 
            V 67 
            Z
            "
      ></animate>
    </path>
  </svg>
);

export default Wave;
