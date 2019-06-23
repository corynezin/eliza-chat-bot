import React from 'react';
import './App.css';

import { Chatbox } from "./components/Chatbox";
import { InputBar } from "./components/InputBar";

export class App extends React.Component {
  render() {
    var inline = {
      display: "flex",
    }
    return (
      <div className="container">
        <div className="row">
          <div>
            <Chatbox />
          </div>
        </div>
        <div className="row">
          <InputBar />
        </div>
      </div>
    );
  }
}

//render(<App />, window.document.getElementById('root'));
