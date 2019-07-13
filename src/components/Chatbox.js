import React from "react";
import { TextBubble } from "./TextBubble";

const style = {
  border: "3px solid gray",
  width: "400px",
  height: "300px",
  marginTop: "100px",
  overflow: "hidden"
}

export class Chatbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p style={style}>
        {this.props.text}
      </p>
    )
  }
}
