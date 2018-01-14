/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from './header.js';
import ModuleCard from './moduleCard.js';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <Header />
        <ModuleCard />
      </div>
    );
  }
}

export default Dashboard;
