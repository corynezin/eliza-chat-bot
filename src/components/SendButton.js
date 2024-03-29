import React from "react";

export class SendButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clickButton()
  }
  render() {
    var style = {
      "background-color": "navy",
      "border": "none",
      "color": "white",
      "width": "50px",
      "padding": "8px 0px",
      "text-align": "center",
      "text-decoration": "none",
      "display": "inline-block",
      "font-size": "16px",
    }
    return (
      <button style={style} onClick={this.handleClick}>
        Send
      </button>
    )
  }
}
