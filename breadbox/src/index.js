import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div className="container">
      <Route exact path="/" component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
