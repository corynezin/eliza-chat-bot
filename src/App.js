import React from 'react';
import './App.css';

import { Chatbox } from "./components/Chatbox";
import { InputBar } from "./components/InputBar";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
    this.setTextInput = this.setTextInput.bind(this)
  }
  setTextInput(text) {
    var currentText = this.state.text
    if (currentText == '') {
      var newText = text
    } else {
      var newText = currentText + '\n' + text
    }
    this.setState({text: newText})
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <Chatbox text={this.state.text}/>
          </div>
        </div>
        <div className="row">
          <InputBar setTextInput={this.setTextInput}/>
        </div>
      </div>
    );
  }
}

//render(<App />, window.document.getElementById('root'));
