import React from 'react';
import ReactDOM from 'react-dom';
import './rod.css';
import './sam.css';
import './everything.css';
import App from './components/App';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
