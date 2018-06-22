import React, { Component } from 'react';
import './App.css';


import Costs from './components/cost';
import Profile from './components/profile';
import Engine from './components/engine';
import Chart from './components/chart';
import ProfileCompletion from './components/profileCompletion';
import Snowfall from './components/snowfall';
import SchoolProfile from './components/schoolProfile';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Costs />
        <Profile />
        <ProfileCompletion />
        <SchoolProfile />
        <Engine />
        <Chart />
        <Snowfall />
        <div className="Graph"></div>

      </div>
    );
  }
}

export default App;
