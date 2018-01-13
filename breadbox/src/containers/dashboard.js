/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
