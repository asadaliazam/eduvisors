import React, { Component } from 'react';
import '../styles/main.css';

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
import SchoolProfile from './schoolProfile';
import CostLiving from './cost_living';
import FieldStudy from './field_study';
import Selector from './selector';
import Snowfall from './snowfall';
import Survey from './survey';

class MainContent extends Component {
  render() {
    return (
      <div className="wrapper">
          <aside>
              <Profile />
          </aside>
          <main>
                <Switch>
                  <Route path="/chart" component={Chart} />
                  <Route path="/cost" component={Costs} />
                  <Route path="/engine" component={Engine} />
                  <Route path="/form" component={Register} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/profileCompletion" component={ProfileCompletion} />
                  <Route path="/schoolProfile" component={SchoolProfile} />
                  <Route path="/cost_living" component={CostLiving} />
                  <Route path="/selector" component={Selector} />
                  <Route path="/snowfall/:province/:type" component={Snowfall} />
                  <Route path="/survey" component={Survey} />
                </Switch>
          </main>
      </div>
    );
  }
}

export default MainContent;
