import React from "react";
import { stem, noteheadCodes, clefCodes } from "./UnicodeAssignment.js";
import { allowDrop, drop } from "./dragAndDrop.js";
import "./Character.css";

let BASE_OFFSET = 52.5;
let PITCH_OFFSETS = {
  D: "7.5",
  E: "0",
  F: "-7.5",
  G: "-15",
  A: "-22.5",
  B: "-30",
  C: "-37.5"
};
let OCTAVE_SIZE = 52.5;

let Character = ({ char, clef }) => {
  let style = { marginTop: parseInt(clefCodes[clef][2]) + parseInt(PITCH_OFFSETS[char.pitch]) + "px" };
  if (char.type === "note") {
    return (
      <div className="characterText" style={style}>
        {noteheadCodes[char.code]}
        {stem}
      </div>
    );
  }
  if (char.type === "missing") {
    style = { marginTop: "53px" };
    return <div onDrop={event => drop(event)} onDragOver={event => allowDrop(event)} className="missingNote" style={style} />;
  }
  if (char.type === "empty") {
    return <div className="empty" style={style} />;
  }
  return (
    <div className="characterText" style={style}>
      {char.code}
    </div>
  );
};

export default Character;
