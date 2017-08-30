import React, { Component } from 'react';

import './App.css';
import Toolbar from './components/Toolbar.js'
import Messages from './components/Messages.js'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Toolbar />
        <Messages />
      </div>
    );
  }
}

export default App;
