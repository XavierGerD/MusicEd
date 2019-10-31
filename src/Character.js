import React from "react";
import { stem, noteheadCodes, clefCodes, barlines } from "./UnicodeAssignment.js";
import { allowDrop, drop } from "./dragAndDrop.js";
import "./Character.css";

let BASE_OFFSET = 52.5;
let PITCH_OFFSETS = {
  C: "67.5",
  D: "60",
  E: "52.5",
  F: "45",
  G: "37.5",
  A: "30",
  B: "22.5"
};

let OCTAVE_SIZE = 52.5;

let Bars = ({ arr, clef, length, index }) => {
  let barLineType;
  if (index < length - 1) {
    barLineType = barlines.singleBarline;
  }
  return (
    <React.Fragment>
      <div className="bar">
        {" "}{arr.map(char => {
          let style;
          if (char.type === "note") {
            return (
              <div className="note">
                {char.pitch.map((pitch, i) => {
                  let octaveMultiplier;
                  switch (clef) {
                    case "treble":
                      octaveMultiplier = char.pitch[i].octave - 3;
                      break;
                    case "bass":
                      octaveMultiplier = char.pitch[i].octave - 1;
                      break;
                    case "alto":
                      octaveMultiplier = char.pitch[i].octave - 2;
                      break;
                  }
                  style = {
                    marginTop:
                      parseInt(clefCodes[clef][2]) + parseInt(PITCH_OFFSETS[char.pitch[i].note]) - octaveMultiplier * OCTAVE_SIZE + "px"
                  };
                  return (
                    <React.Fragment>
                      <div className="noteHead" style={style}>
                        {noteheadCodes[char.code]}
                      </div>
                      <div className="stem" style={style}>
                        {stem}
                      </div>
                    </React.Fragment>
                  );
                })}
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
        })}
      </div>
      <div className="barLineText">
        {barLineType}
      </div>
    </React.Fragment>
  );
};

export default Bars;
