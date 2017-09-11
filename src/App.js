import React, { Component } from 'react';

import './App.css';
import Home from './app/components/Home.js'


class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Home />
      </div>
    );
  }
}

export default App;
