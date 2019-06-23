import React from "react";
import { TextEnter } from "./TextEnter.js";
import { SendButton } from "./SendButton.js";

export class InputBar extends React.Component {
  render() {
    var inline ={
      display: "flex"
    }
    return (
      <div style={inline}>
        <TextEnter style={inline}/>
        <SendButton style={inline}/>
      </div>
    )
  }
}
