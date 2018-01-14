/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from './header.js';
import '../index.css';
import { Button, Panel, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Facility extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Facility Information</h1>
          <Panel>
            <div className="container">
              <form>
                <FormGroup controlId="formBasicText">
                  <ControlLabel className="formText">Facility/Company Name</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Here is some helpful text</HelpBlock>
                </FormGroup>
                <br />
                <FormGroup controlId="formBasicText">
                  <ControlLabel className="formText">Address</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Here is some helpful text</HelpBlock>
                </FormGroup>
              </form>
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Facility;
