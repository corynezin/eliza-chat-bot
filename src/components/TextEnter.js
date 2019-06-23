import React from "react";

const style = {
  border: "2px solid gray",
  width: "350px",
  height: "40px",
  resize: "none"
}

export class TextEnter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    this.setState({value: event.target.value});
    this.props.setTextInput(event.target.value)
  }
  render() {
    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange} style={style}></textarea>
      </div>
    )
  }
}
