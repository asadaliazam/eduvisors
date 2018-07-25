import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


import Survey1 from './survey1';
import Survey2 from './survey2';
import Survey3 from './survey3';
import Survey4 from './survey4';

class Survey extends Component {
  constructor () {
    super()
    this.state = {
      isHiddenSurvey1: false
    }
  }



  render() {
    return (
      <div>
          <Survey1/>
          <Survey2 />
          <Survey3 />
          <Survey4 />
      </div>
    );
  }
}

export default Survey;
