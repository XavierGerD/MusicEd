import React from "react";
import "./Note.css";
import { stem, noteheadCodes, clefCodes, ledgerLine } from "./UnicodeAssignment.js";

// let PITCH_OFFSETS = {
//   C: "67.5",
//   D: "60",
//   E: "52.5",
//   F: "45",
//   G: "37.5",
//   A: "30",
//   B: "22.5"
// };

// let OCTAVE_SIZE = 52.5;

let findOctave = (pitch, i, clef) => {
  let octaveMultiplier;
  switch (clef) {
    case "treble":
      octaveMultiplier = pitch[i].octave - 3;
      break;
    case "bass":
      octaveMultiplier = pitch[i].octave - 1;
      break;
    case "alto":
      octaveMultiplier = pitch[i].octave - 2;
      break;
    default:
      return;
  }

  return octaveMultiplier;
};

let Note = props => {
  let baseOffset = props.fontSize / 8;
  let pitchOffset = {
    C: baseOffset * 9 + "",
    D: baseOffset * 8 + "",
    E: baseOffset * 7 + "",
    F: baseOffset * 6 + "",
    G: baseOffset * 5 + "",
    A: baseOffset * 4 + "",
    B: baseOffset * 3 + ""
  };
  let octaveSize = props.fontSize / 8 * 7;

  return (
    <div className="note">
      {props.char.pitch.map((pitch, i) => {
        let octaveMultiplier = findOctave(props.char.pitch, i, props.clef);

        let offset =
          parseFloat(clefCodes[props.clef][2]) + parseFloat(pitchOffset[props.char.pitch[i].note]) - octaveMultiplier * octaveSize;
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

        let middleOfStaff = baseOffset * 3 - octaveSize;
        let noteHeadsOffsets = [];
        props.char.pitch.map((arr, j) => {
          let octaveMultiplier = findOctave(props.char.pitch, j, props.clef);
          noteHeadsOffsets.push(
            parseFloat(clefCodes[props.clef][2]) + parseFloat(pitchOffset[props.char.pitch[j].note]) - octaveMultiplier * octaveSize
          );
        });

        let farthestDown = Math.max(...noteHeadsOffsets);
        let farthestUp = Math.min(...noteHeadsOffsets);

        let stemDirection;
        if (Math.abs(farthestDown - middleOfStaff) > Math.abs(farthestUp - middleOfStaff)) {
          stemDirection = "upStem";
        }
        if (Math.abs(farthestDown - middleOfStaff) < Math.abs(farthestUp - middleOfStaff)) {
          stemDirection = "downStem";
        }
        if (Math.abs(farthestDown - middleOfStaff) === Math.abs(farthestUp - middleOfStaff)) {
          stemDirection = "downStem";
        }

        return (
          <React.Fragment>
            {ledgerLines}
            <div className="noteHead" style={style}>
              {noteheadCodes[props.char.code]}
            </div>
            <div className={stemDirection} style={style}>
              {stem}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Note;
