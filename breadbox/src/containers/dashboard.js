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
      <div>
        <Header />
        <ModuleCard />
      </div>
    );
  }
}

export default Dashboard;
