import React from "react";
import Bars from "./Character.js";
import Clef from "./Clef.js";
import TimeSignature from "./TimeSignature.js";
import System from "./System.js";
import { barlines } from "./UnicodeAssignment.js";
import { KeySignature } from "./KeySignature.js";
import "./Page.css";

let Page = props => {
  let bars = [];
  let ret = [];
  let staffConfig = i => {
    return (
      <div className="staffConfig">
        <div className="barLineText">
          {" "}{barlines.startingBarline}
        </div>
        {<Clef clef={props.state.clef} />}
        {<KeySignature signature={props.state.keySignature} clef={props.state.clef} />}
        {i === 0 ? <TimeSignature signature={props.state.timeSignature} /> : null}
      </div>
    );
  };

  props.state.text.forEach((arr, i) => {
    if (i === 0 || (bars.length === 0 && i > 0)) {
      bars.push(staffConfig(i));
    }
    bars.push(<Bars arr={arr} clef={props.state.clef} length={props.state.text.length} index={i} />);

    if (bars.length === props.state.maxBars) {
      ret.push(<System bars={bars} />);
      bars = [];
    }
    if (i === props.state.text.length - 1) {
      bars.push(
        <div className="barLineText">
          {barlines.finalBarline}
        </div>
      );
      ret.push(<System bars={bars} />);
    }
  });
  return ret;
};

export default Page;
