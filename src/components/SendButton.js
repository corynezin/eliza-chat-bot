import React from "react";

export class SendButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('heyo');
  }
  render() {
    var style = {
      "background-color": "navy",
      "border": "bold",
      "color": "white",
      "width": "50px",
      "padding": "6px 0px",
      "height": "40px",
      "text-align": "center",
      "text-decoration": "bold",
      "display": "inline-block",
      "font-size": "20px",
        }
    return (
      <button style={style} onClick={this.handleClick}>
        >>
      </button>

    )
  }
}
