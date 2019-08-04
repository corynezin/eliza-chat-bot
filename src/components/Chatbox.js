import React from "react";
import { TextBubble } from "./TextBubble";

const style = {
  border: "2px solid gray",
  width: "100%",
  height: "400px",
  overflow: "hidden",
  whiteSpace: "pre"
}

export class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
    this.addTextInput = this.addTextInput.bind(this)
  }
  addTextInput(text) {
    this.setState({text: this.state.text + '<br>' + text})
    console.log(this.state)
  }
  render() {
    return (
      <p style={style}>
        {this.props.text}
      </p>
    )
  }
}
