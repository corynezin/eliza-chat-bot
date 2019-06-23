import React from "react";

export class TextBubble extends React.Component {
  style() {
    return ({
      border: "2px solid gray",
      width: "300px",
      height: "20px",
      borderRadius: "20px",
      margin: "5px",
      align: "center",
      float: this.props.align
    })
  }

  render() {
    return (
      <div>
        <p style={this.style()}></p>
      </div>
    )
  }
}

