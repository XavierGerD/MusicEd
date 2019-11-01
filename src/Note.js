import React from "react";
import "./Note.css";
import { stem, noteheadCodes, clefCodes, ledgerLine } from "./UnicodeAssignment.js";

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

let Note = props => {
  return (
    <div className="note">
      {props.char.pitch.map((pitch, i) => {
        let octaveMultiplier;
        switch (props.clef) {
          case "treble":
            octaveMultiplier = props.char.pitch[i].octave - 3;
            break;
          case "bass":
            octaveMultiplier = props.char.pitch[i].octave - 1;
            break;
          case "alto":
            octaveMultiplier = props.char.pitch[i].octave - 2;
            break;
          default:
            return;
        }
        let offset =
          parseFloat(clefCodes[props.clef][2]) + parseFloat(PITCH_OFFSETS[props.char.pitch[i].note]) - octaveMultiplier * OCTAVE_SIZE;
        let style = {
          marginTop: offset + "px"
        };

        let ledgerLines = [];
        if (offset >= 15) {
          let numberOfLedgers = Math.floor(offset / 15);
          for (let i = 0; i < numberOfLedgers; i++) {
            let ledgerOffset = { marginTop: (i + 1) * 15 + "px" };
            ledgerLines.push(
              <div className="ledgerLine" style={ledgerOffset}>
                {ledgerLine}
              </div>
            );
          }
        }

        return (
          <React.Fragment>
            {ledgerLines}
            <div className="noteHead" style={style}>
              {noteheadCodes[props.char.code]}
            </div>
            <div className="stem" style={style}>
              {stem}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Note;
