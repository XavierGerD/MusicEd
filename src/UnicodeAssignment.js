let staffSegment = "\uE014";

let stem = "\uE210";
let blackNoteHead = "\uE0A4";
let timeSignatureFour = "\uE084";
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

export {
  staffSegment,
  stem,
  blackNoteHead,
  barlines,
  clefCodes,
  timeSignatureFour,
  missing,
  empty,
  noteheadCodes,
  accidentalCodes,
  timeSignatureCodes
};
