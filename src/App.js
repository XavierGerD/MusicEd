import React, { Component } from "react";
import "./App.css";
import { allowDrop, drop, drag } from "./dragAndDrop";
// import "./fonts/woff/Bravura.woff";

let staffSegment = "\uE014";
let startingBarline = "\uE034";
let finalBarline = "\uE032"
let stem = "\uE210"
let blackNoteHead = "\uE0A4"
let singleBarline = "\uE030"
let sharpSymbol = "\uE262"
let solClef = "\uE050"
let timeSignatureFour = "\uE084"
let missing;
let empty;

let Clef = ({ clef }) => {
let style = { marginTop: clef.offset}
return <div className="clefText" style={style}>{clef.code}</div>
}

let KeySignature = ({signature}) => {
  let sharpKeysignaturePositions = [-60, -37, -37]
  let ret = []
  if (signature.type === "sharps") {
    for (let i = 0; i < signature.size; i++) {
      let style = { marginTop: sharpKeysignaturePositions[i]}
      ret.push( <div className="keySignatureText" style={style}>{sharpSymbol}</div>)
    }
  }
  return <div className="keySignature">{ret}</div>
}

let TimeSignature = ({signature}) => {
  let top = signature.numeratorCode
  let bottom = signature.denominatorCode
  return (<div className="timeSignatureBox">
    <div className="timeSignatureTextTop">{top}</div>
    <div className="timeSignatureTextBottom">{bottom}</div>
  </div>)
}

let Staff = ({ music }) => {
  let counter = 0;
  music.text.forEach(elem => {
    counter = elem.width + counter;
  });
  counter = music.clef.width + counter
  counter = music.keySignature.width + counter
  counter = music.timeSignature.width + counter
  return (
    <>
      {Array.apply(null, Array(counter)).map(spot =>
        <div className="text">
          {staffSegment}
        </div>
      )}
    </>
  );
};

let Characters = ({ char }) => {
  let style = { marginTop: char.offset}
      if (char.code === blackNoteHead) {
        return (<div className="text" style={style}>
          {char.code}{stem}
      </div>
      )
      }
      if (char.type === "missing") {
        return (<div onDrop={event => drop(event)} onDragOver={event => allowDrop(event)} className="missingNote" style={style}>
    </div>)
      }
      if (char.type === "empty") {
        return (<div className="empty" style={style}>
    </div>)
      } 
      return (<div className="text" style={style}>
        {char.code}
      </div>
  );
};

class App extends Component {
  state = {
    clef: { type: "clef", code: solClef, width: 2, offset: "-15px" },
    keySignature: { type: "sharps", code: sharpSymbol, size: 2, width: 3},
    timeSignature: { type: "timesig", numeratorCode: timeSignatureFour, denominatorCode: timeSignatureFour, width: 1},
    text: [
      { type: "note", code: blackNoteHead, width: 1, pitch: "D", offset: "7px" },
      { type: "note", code: blackNoteHead, width: 1, pitch: "F", offset: "-7px" },
      { type: "note", code: blackNoteHead, width: 1, pitch: "A", offset: "-22px" },
      { type: "missing", code: missing, width: 1, pitch: "NONE", offset: "53px" },
      { type: "barline", code: singleBarline, width: 1, offset: "0px" },
      { type: "missing", code: missing, width: 1, pitch: "NONE", offset: "53px" },
      { type: "empty", code: empty, width: 1, pitch: "NONE", offset: "53px" },
      { type: "note", code: blackNoteHead, width: 1, pitch: "D", offset: "7px" },
      { type: "note", code: blackNoteHead, width: 1, pitch: "F", offset: "-7px" }
    ]
  };

  render = () => {
    return (
      <div className="container">
        
        <div className="staff">
          {<Staff music={this.state} />}
        </div>
        
        <div className="symbols">
        <div className="barLineText"> {startingBarline}</div>
        {<Clef clef={this.state.clef}/>}
        {<KeySignature signature={this.state.keySignature}/>}
        {<TimeSignature signature={this.state.timeSignature}/>}
          {this.state.text.map(char => {
            
            return <Characters char={char} />
          })
          } 
          
          <div className="text"> {finalBarline}
          </div>
        </div>
      </div>
    );
  };
}

export default App;
