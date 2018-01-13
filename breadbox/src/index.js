import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './containers/landing.js';
import Dashboard from './containers/dashboard.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div className="container">
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  </Router>,
  document.getElementById('root')
);
