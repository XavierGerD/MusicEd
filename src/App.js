import React, { Component } from "react";
import "./App.css";
import Character from "./Character.js";
import Clef from "./Clef.js";
import TimeSignature from "./TimeSignature.js";
import Staff from "./Staff.js";
import { KeySignature, G_MAJOR, D_MAJOR, A_MAJOR, F_MAJOR, Bb_MAJOR } from "./KeySignature.js";
import { allowDrop, drop, drag } from "./dragAndDrop";

let staffSegment = "\uE014";
let startingBarline = "\uE034";
let finalBarline = "\uE032";
let singleBarline = "\uE030";

class App extends Component {
  state = {
    clef: "treble",
    keySignature: A_MAJOR,
    timeSignature: ["four", "four"],

    // { type: "timesig", numeratorCode: timeSignatureFour, denominatorCode: timeSignatureFour, width: 1 },
    text: [
      { type: "note", code: "quarter", pitch: "A" },
      { type: "note", code: "quarter", pitch: "C" },
      { type: "note", code: "quarter", pitch: "A" },
      { type: "note", code: "quarter", pitch: "G" },
      // { type: "missing", code: missing, pitch: "NONE" },
      { type: "barline", code: singleBarline },
      { type: "note", code: "quarter", pitch: "A" },
      // { type: "missing", code: missing, pitch: "NONE" }
      { type: "note", code: "quarter", pitch: "C" },
      ,
      // { type: "empty", code: empty, pitch: "NONE" },
      { type: "note", code: "quarter", pitch: "G" },
      { type: "note", code: "quarter", pitch: "A" }
    ]
  };

  render = () => {
    return (
      <div className="container">
        <div className="staff">
          {<Staff music={this.state} />}
        </div>

        <div className="symbols">
          <div className="staffConfig">
            <div className="barLineText">
              {" "}{startingBarline}
            </div>
            {<Clef clef={this.state.clef} />}
            {<KeySignature signature={this.state.keySignature} clef={this.state.clef} />}
            {<TimeSignature signature={this.state.timeSignature} />}
          </div>
          {this.state.text.map(char => {
            return <Character char={char} clef={this.state.clef} />;
          })}
          <div className="lastStaffSegment">
            <div className="text">
              {staffSegment}
            </div>
            <div className="text">
              {finalBarline}
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
