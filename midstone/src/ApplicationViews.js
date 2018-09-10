import React, { Component } from 'react';
import logo from './components/NavBar/utripn.png';
import './App.css';

export default class ApplicationViews extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="utripn.png" alt="logo" />
        </header>

      </div>
    );
  }
}


