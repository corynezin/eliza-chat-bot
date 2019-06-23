import React from "react";

const style = {
  border: "2px solid gray",
  width: "350px",
  height: "40px",
  resize: "none"
}

export class TextEnter extends React.Component {
  render() {
    return (
      <div>
        <textarea style={style}></textarea>
      </div>
    )
  }
}
