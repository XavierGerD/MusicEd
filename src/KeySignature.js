import React from "react";
import "./KeySignature.css";
import { accidentalCodes, clefCodes } from "./UnicodeAssignment.js";

const G_MAJOR = {
  type: "sharp",
  size: 1
};
const E_MINOR = G_MAJOR;

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

let sharpKeysignaturePositions = [-1, -0.625, -1.125, -0.75, -0.475, -0.875, -0.5];
let flatKeysignaturePositions = [-0.5, -0.875, -0.475, -0.75, -1.125, -1];

let KeySignature = ({ signature, clef, fontSize }) => {
  let ret = [];
  let accidental;
  let offset = clefCodes[clef].noteOffset;
  if (signature.type === "sharp") {
    accidental = sharpKeysignaturePositions;
  } else {
    accidental = flatKeysignaturePositions;
  }
  for (let i = 0; i < signature.size; i++) {
    let style = { marginTop: accidental[i] * fontSize + parseInt(offset) };
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

export { KeySignature, G_MAJOR, D_MAJOR, A_MAJOR, F_MAJOR, Bb_MAJOR, E_MINOR };
