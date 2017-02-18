import React, { Component } from 'react';
import logo from '../logo.svg';
import IndexForm from './IndexForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bucket Questions!</h2>
          <IndexForm/>
        </div>
      </div>
    );
  }
}

export default App;
