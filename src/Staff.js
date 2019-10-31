import React from "react";
import { staffSegment } from "./UnicodeAssignment.js";

let Staff = ({ music }) => {
  let counter = 5;
  music.text.forEach(elem => {
    counter++;
  });
  counter = Math.ceil(music.keySignature.size / 2) + counter;
  return (
    <React.Fragment>
      {Array.apply(null, Array(counter)).map(spot =>
        <div className="text">
          {staffSegment}
        </div>
      )}
    </React.Fragment>
  );
};

export default Staff;
