import React, { Component } from 'react';
import { Panel, Well, Label, Button, Glyphicon } from 'react-bootstrap';
import '../index.css';

class ModuleCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="dashboard container">
        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Facility Information</h5>
            <div className="box">
              <Glyphicon glyph="home" />{' '}
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Good Manufacturing Practices</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Hazard Analysis</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Process Preventive Controls</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Allergen Preventive Controls</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Sanitation Preventive Controls</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Supply-Chain Preventive Controls</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Recall Plan</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Reanalysis of Food Safety Plan</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Food Safety Plan Report</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Manage Signatures</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Recordkeeping Procedures</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Important Contacts</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Supporting Documents</h5>
            <div className="box" />
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Add Module</h5>
            <div className="box" />
          </div>
        </Panel>
      </div>
    );
  }
}

export default ModuleCard;
