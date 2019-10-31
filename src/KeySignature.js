import React from "react";
import "./KeySignature.css";
import { accidentalCodes, clefCodes } from "./UnicodeAssignment.js";

const G_MAJOR = {
  type: "sharp",
  size: 1
};

const D_MAJOR = {
  type: "sharp",
  size: 2
};

const A_MAJOR = {
  type: "sharp",
  size: 3
};

const F_MAJOR = {
  type: "flat",
  size: 1
};

const Bb_MAJOR = {
  type: "flat",
  size: 2
};

let sharpKeysignaturePositions = [-60, -37.5, -67.5, -45, -22.5, -52.5, -30];
let flatKeysignaturePositions = [-30, -52.5, -22.5, -67.5, -37.5, -60];

let KeySignature = ({ signature, clef }) => {
  let ret = [];
  let accidental;
  let offset = clefCodes[clef][2];
  if (signature.type === "sharp") {
    accidental = sharpKeysignaturePositions;
  } else {
    accidental = flatKeysignaturePositions;
  }
  for (let i = 0; i < signature.size; i++) {
    let style = { marginTop: accidental[i] + parseInt(offset) };
    ret.push(
      <div className="keySignatureText" style={style}>
        {accidentalCodes[signature.type]}
      </div>
    );
  }

  return (
    <div className="keySignature">
      {ret}
    </div>
  );
};

export { KeySignature, G_MAJOR, D_MAJOR, A_MAJOR, F_MAJOR, Bb_MAJOR };
