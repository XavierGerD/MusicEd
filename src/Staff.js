import React from "react";
import { staffSegment } from "./UnicodeAssignment.js";
import "./Staff.css";

let Staff = ({ music }) => {
  return (
    <div className="systemStaff">
      {staffSegment}
    </div>
  );
};

export default Staff;
