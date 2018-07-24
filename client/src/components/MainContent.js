import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import Costs from './cost';
import Engine from './engine';
import Chart from './chart';
import Register from './form';
import ProfileCompletion from './profileCompletion';
import SchoolProf from './schoolProf';
import CostLiving from './cost_living';
import Snowfall from './snowfall';
import Weather from './weather';
import HomeContent from './HomeContent';
import Survey1 from './survey1';
import Survey2 from './survey2';
import Survey3 from './survey3';
import Survey4 from './survey4';

class MainContent extends Component {

  render() {
    return (
      <div className="Center-Page">
                <Switch>
                      <Route exact path="/" component={HomeContent} />
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
                      <Route path="/survey1" component={Survey1} />
                      <Route path="/survey2" component={Survey2} />
                      <Route path="/survey3" component={Survey3} />
                      <Route path="/survey4" component={Survey4} />
                      <Redirect to="/" />


                </Switch>
      </div>
    );
  }
}

export default MainContent;
