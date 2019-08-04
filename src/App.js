import React from 'react';
import './App.css';

import { Chatbox } from "./components/Chatbox";
import { InputBar } from "./components/InputBar";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', eliza: false}
    this.setTextInput = this.setTextInput.bind(this)
  }
  setTextInput(text) {
    var currentText = this.state.text
    if (this.state.eliza) {
      text = 'Eliza: ' + text
    } else {
      text = 'You: ' + text
    }
    if (currentText == '') {
      var newText = text
    } else {
      var newText = currentText + '\n' + text
    }
    this.setState({text: newText, eliza: !this.state.eliza})
  }
  render() {
    var deborahisbeautiful = {
      bottom: "10px",
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
    }
    return (
      <div style={deborahisbeautiful}>
          <Chatbox text={this.state.text}/>
          <InputBar setTextInput={this.setTextInput}/>
      </div>
    );
  }
}

//render(<App />, window.document.getElementById('root'));
