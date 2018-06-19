import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';
import Engine from './components/engine';
import Chart from './components/chart';
import ProfileCompletion from './components/profileCompletion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Profile />
        <ProfileCompletion />
        <Engine />
        <Chart />

      </div>
    );
  }
}

export default App;
