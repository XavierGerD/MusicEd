import React, { Component } from "react";
import "./App.css";
import Page from "./Page.js";
import appText from "./AppText.js";
import { G_MAJOR, D_MAJOR, A_MAJOR, F_MAJOR, Bb_MAJOR } from "./KeySignature.js";

class App extends Component {
  state = {
    title: "Song Without Words",
    fontSize: 60,
    maxBars: 4,
    clef: "treble",
    keySignature: D_MAJOR,
    timeSignature: ["four", "four"],
    text: appText,
    fontInput: "60",
    stavesInput: ""
  };

  fontInput = event => {
    this.setState({ fontInput: event.target.value });
  };

  changeFont = event => {
    event.preventDefault();
    let root = document.getElementById("root");
    let fontSize = parseFloat(this.state.fontInput);
    if (fontSize > 80) {
      fontSize = 80;
    } else if (fontSize < 20) {
      fontSize = 20;
    }
    root.style.setProperty("--music-font-size", fontSize + "px");
    // this.state.fontInput = "";
    this.setState({ fontSize, fontInput: fontSize + "" });
  };

  stavesInput = event => {
    this.setState({ stavesInput: event.target.value });
  };

  changeSize = event => {
    event.preventDefault();
    let maxBars = parseFloat(this.state.stavesInput);
    // this.state.stavesInput = "";
    this.setState({ maxBars });
  };

  render = () => {
    return (
      <div className="container">
        <div className="title">
          {this.state.title}
        </div>
        <div className="score">
          <Page state={this.state} />
        </div>
        <div>
          <form onSubmit={this.changeFont}>
            <input type="number" onChange={this.fontInput} value={this.state.fontInput} />
            <input type="submit" className="submitButton" value="Staff size" />
          </form>
        </div>
        {/* <form onSubmit={this.changeSize}>
            <input type="number" onChange={this.stavesInput} value={this.state.stavesInput} />
            <input type="submit" value="Staves per system" />
          </form> */}
      </div>
    );
  };
}

export default App;
