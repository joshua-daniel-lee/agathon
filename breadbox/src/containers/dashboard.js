/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from './header.js';
import ModuleCard from './moduleCard.js';
import Footer from './footer.js';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <ModuleCard />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
