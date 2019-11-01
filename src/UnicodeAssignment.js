let staffSegment = "\uE014";
let ledgerLine = "\uE022";

let stem = "\uE210";
let missing;
let empty;

let barlines = {
  startingBarline: "\uE034",
  finalBarline: "\uE032",
  singleBarline: "\uE030"
};

let timeSignatureCodes = {
  two: "\uE082",
  three: "\uE083",
  four: "\uE084",
  five: "\uE085",
  six: "\uE086",
  seven: "\uE087",
  eight: "\uE088"
};

let accidentalCodes = {
  flat: "\uE260",
  natural: "\uE261",
  sharp: "\uE262"
};

let clefCodes = {
  treble: ["\uE050", "-15px", "0"],
  bass: ["\uE062", "-45px", "15"],
  alto: ["\uE05C", "-30px", "7.5"]
};

let noteheadCodes = {
  sixteenth: "\uE0A4",
  eighth: "\uE0A4",
  quarter: "\uE0A4",
  half: "\uE0A3",
  whole: "\uE0A2"
};

let restCodes = {
  whole: "\uE4E3",
  half: "\uE4E4",
  quarter: "\uE4E5",
  eighth: "\uE4E6",
  sixteenth: "\uE4E7"
};

export {
  staffSegment,
  ledgerLine,
  stem,
  barlines,
  clefCodes,
  missing,
  empty,
  noteheadCodes,
  accidentalCodes,
  timeSignatureCodes,
  restCodes
};
