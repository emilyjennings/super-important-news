import React, { Component } from 'react';
import './App.css';

import AppContainer from './components/AppContainer'

//this is the root component for this App. It loads the App Container component where all the other components are traced to.

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppContainer />
        </header>

      </div>
    );
  }
}

export default App;
