import React from "react";
import { barlines, restCodes } from "./UnicodeAssignment.js";
import { allowDrop, drop } from "./dragAndDrop.js";
import Note from "./Note.js";
import "./Bar.css";

let Bar = ({ arr, clef, length, index }) => {
  let barLineType;
  if (index < length - 1) {
    barLineType = barlines.singleBarline;
  } else {
    barLineType = barlines.finalBarline;
  }
  return (
    <React.Fragment>
      <div className="bar">
        {" "}{arr.map(char => {
          let style;
          if (char.type === "note") {
            return <Note char={char} clef={clef} />;
          }
          if (char.type === "rest") {
            style = { marginTop: "-30px" };
            return (
              <div className="note" style={style}>
                <div className="noteHead">
                  {restCodes[char.code]}
                </div>
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

export default Bar;
