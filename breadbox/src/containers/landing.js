/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';

class Landing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Landing;
