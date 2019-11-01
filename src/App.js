import React, { Component } from "react";
import "./App.css";
import Page from "./Page.js";
import appText from "./AppText.js";
import { G_MAJOR, D_MAJOR, A_MAJOR, F_MAJOR, Bb_MAJOR } from "./KeySignature.js";

class App extends Component {
  state = {
    maxBars: 4,
    clef: "treble",
    keySignature: D_MAJOR,
    timeSignature: ["four", "four"],
    text: appText
  };

  render = () => {
    return (
      <div className="container">
        <Page state={this.state} />
      </div>
    );
  };
}

export default App;
