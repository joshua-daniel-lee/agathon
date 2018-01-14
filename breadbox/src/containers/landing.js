/*jshint esversion: 6 */
import React, { Component, Jumbotron, Button } from 'react';
import Header from './header.js';

class Landing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="jumbotron">
            <h1 class="display-3 logo font">breadbox</h1>
            <h2 class="display-3">The fastest way to FSMA compliance</h2>
            <p class="lead">
              breadbox lets you secure, share and edit all your files from anywhere.
            </p>
            <hr class="my-4" />
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Learn More About FSMA
            </a>
          </div>
          <div className="features container">
            <h1>info</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
