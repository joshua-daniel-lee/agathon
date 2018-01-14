/*jshint esversion: 6 */
import React, { Component, Jumbotron, Button, Glyphicon } from 'react';
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
              breadbox lets you secure, share and edit all your files from anywhere
            </p>
            <hr class="my-4" />
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Learn More About FSMA
            </a>
          </div>
          <div className="features container">
            <div className="call">
              <div className="container">
                <h1 className="glyphicon glyphicon-grain" />
                <h2 class="display-3">Key Management</h2>
                <p class="lead">
                  Take ownership over your encryption keys while delivering the same simple and
                  secure end-user experience that everyone gets from Box.
                </p>
                <hr class="my-4" />
              </div>
            </div>
            <div className="call">
              <div className="container">
                <h1 className="glyphicon glyphicon-certificate" />
                <h2 class="display-3">Governance</h2>
                <p class="lead">
                  Meet all your organization’s security requirements and compliance standards.
                  Breadbox supports global customers with FSMA documentation requirements.
                </p>
                <hr class="my-4" />
              </div>
            </div>
            <div className="call">
              <div className="container">
                <h1 className="glyphicon glyphicon-ok" />
                <h2 class="display-3">Visibility and Control</h2>
                <p class="lead">
                  Easily manage access and sharing policies and effectively govern your corporate
                  data, all while minimizing the risk of data loss through full visibility and
                  central management of content, security, policy and provisioning.
                </p>
                <hr class="my-4" />
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Landing;
