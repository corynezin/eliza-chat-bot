import React from "react";
import { TextEnter } from "./TextEnter.js";
import { SendButton } from "./SendButton.js";

export class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
    this.setTextInput = this.setTextInput.bind(this)
    this.clickButton = this.clickButton.bind(this)
  }
  setTextInput(text) {
    this.state.text = text
  }
  clickButton() {
    this.props.setTextInput(this.state.text)
  }
  render() {
    var inline ={
      display: "flex"
    }
    return (
      <div style={inline}>
        <TextEnter style={inline} setTextInput={this.setTextInput}/>
        <SendButton style={inline} clickButton={this.clickButton}/>
      </div>
    )
  }
}
