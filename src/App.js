import React, { Component } from 'react';
import './App.css';

import GetNews from './components/GetNews'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <GetNews />

        </header>


      </div>
    );
  }
}

export default App;
