import React, { Component } from 'react';
import './App.css';

import GetNews from './components/GetNews'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GetNews />



          <a
            className="App-link"
            href="https://emilyjennings.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made by Emily from scratch
          </a>
        </header>


      </div>
    );
  }
}

export default App;
