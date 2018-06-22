import React, { Component } from 'react';
import './App.css';


import Costs from './components/cost';
import Profile from './components/profile';
import Engine from './components/engine';
import Chart from './components/chart';
import ProfileCompletion from './components/profileCompletion';
import Snowfall from './components/snowfall';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Costs />
        <Profile />
        <ProfileCompletion />
        <Engine />
        <Chart />
        <Snowfall />
        <div className="Graph"></div>
        
      </div>
    );
  }
}

export default App;
