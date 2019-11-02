import React from "react";
import Bar from "./Bar.js";
import Clef from "./Clef.js";
import TimeSignature from "./TimeSignature.js";
import System from "./System.js";
import { barlines } from "./UnicodeAssignment.js";
import { KeySignature } from "./KeySignature.js";
import "./Page.css";

let determineClef = hand => {
  let clef;
  if (hand === 0) {
    clef = "treble";
  } else {
    clef = "bass";
  }
  return clef;
};

let Page = props => {
  let staves = [];
  let bars = [];
  let ret = [];
  let notes = props.state.text.notes;
  let instrument = props.state.text.instrument;
  let staffConfig = (index, hand) => {
    let clef;
    if (instrument === "piano") {
      clef = determineClef(hand);
    }
    return (
      <div className="staffConfig">
        <div className="barLineText">
          {" "}{barlines.startingBarline}
        </div>
        {<Clef clef={clef} fontSize={props.state.fontSize} />}
        {<KeySignature signature={props.state.keySignature} clef={clef} fontSize={props.state.fontSize} />}
        {index === 0 ? <TimeSignature signature={props.state.timeSignature} /> : null}
      </div>
    );
  };

  notes[0].forEach(() => {
    bars.push([]);
  });

  notes.forEach((barArray, j) => {
    barArray.forEach((arr, i) => {
      let clef;
      if (instrument === "piano") {
        clef = determineClef(i);
      }
      if (j === 0 || (bars[i].length === 0 && j > 0)) {
        bars[i].push(staffConfig(j, i));
      }
      bars[i].push(<Bar arr={barArray[i]} clef={clef} length={notes.length} index={j} state={props.state} />);
      if (bars[i].length === props.state.maxBars) {
        staves.push(<System bars={bars[i]} />);
        bars[i] = [];
      }
      if (j === notes.length - 1 && bars[i].length !== 0) {
        staves.push(<System bars={bars[i]} />);
      }
      if (staves.length === notes[0].length) {
        ret.push(
          <div className="systemBox">
            {staves}
          </div>
        );
        staves = [];
      }
    });
  });

  return ret;
};

export default Page;
