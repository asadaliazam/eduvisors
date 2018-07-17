import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Costs from './cost';
import Profile from './profile';
import Engine from './engine';
import Chart from './chart';
import Register from './form';
import ProfileCompletion from './profileCompletion';
import SchoolProf from './schoolProf';
import CostLiving from './cost_living';
import FieldStudy from './field_study';
import Selector from './selector';
import Snowfall from './snowfall';
import Weather from './weather';
import Survey1 from './survey1';
import App from './App';
import HomeContent from './HomeContent';



class MainContent extends Component {


  render() {
    return (
      <div className="wrapper">
                <Switch>

                      <Route path="/chart" component={Chart} />
                      <Route path="/cost" component={Costs} />
                      <Route path="/engine" component={Engine} />
                      <Route path="/form" component={Register} />
                      <Route path="/profileCompletion" component={ProfileCompletion} />
                      <Route path="/cost_living" component={CostLiving} />
                      <Route path="/snowfall/:province/:type" component={Snowfall} />
                      <Route path="/weather/:province" component={Weather} />
                      <Route path="/survey" component={Survey1} />
                      <Route path="/schoolProf/:schoolID" component={SchoolProf} />
                      <Route path="/HomeContent" component={HomeContent} />

                </Switch>
      </div>
    );
  }
}

export default MainContent;
