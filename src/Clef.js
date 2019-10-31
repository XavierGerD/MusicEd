import { clefCodes } from "./UnicodeAssignment.js";
import React from "react";
import "./Clef.css";

let Clef = ({ clef }) => {
  let style = { marginTop: clefCodes[clef][1] };
  return (
    <div className="clefText" style={style}>
      {clefCodes[clef][0]}
    </div>
  );
};

export default Clef;
