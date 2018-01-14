import React, { Component } from 'react';
import { Panel, Well, Label, Button, Glyphicon } from 'react-bootstrap';
import '../index.css';

class ModuleCard extends Component {
  constructor() {
    super();
  }

  redirectFacility(e) {
    window.location.href = '/facility';
  }

  redirectDocuments(e) {
    window.location.href = '/documents';
  }

  render() {
    return (
      <div className="dashboard container">
        <Panel className="card" onClick={this.redirectFacility.bind(this)}>
          <div className="container">
            <h5 className="moduleHeading">Facility Information</h5>
            <div className="box">
              <Glyphicon glyph="home" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Good Manufacturing Practices</h5>
            <div className="box">
              <Glyphicon glyph="leaf" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Hazard Analysis</h5>
            <div className="box">
              <Glyphicon glyph="ban-circle" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Process Preventive Controls</h5>
            <div className="box">
              <Glyphicon glyph="bell" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Allergen Preventive Controls</h5>
            <div className="box">
              <Glyphicon glyph="eye-open" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Sanitation Preventive Controls</h5>
            <div className="box">
              <Glyphicon glyph="alert" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Supply-Chain Preventive Controls</h5>
            <div className="box">
              <Glyphicon glyph="globe" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Recall Plan</h5>
            <div className="box">
              <Glyphicon glyph="retweet" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Reanalysis of Food Safety Plan</h5>
            <div className="box">
              <Glyphicon glyph="repeat" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Food Safety Plan Report</h5>
            <div className="box">
              <Glyphicon glyph="folder-open" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Manage Signatures</h5>
            <div className="box">
              <Glyphicon glyph="pencil" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Recordkeeping Procedures</h5>
            <div className="box">
              <Glyphicon glyph="inbox" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Important Contacts</h5>
            <div className="box">
              <Glyphicon glyph="comment" />
            </div>
          </div>
        </Panel>

        <Panel className="card" onClick={this.redirectDocuments.bind(this)}>
          <div className="container">
            <h5 className="moduleHeading">Supporting Documents</h5>
            <div className="box">
              <Glyphicon glyph="list" />
            </div>
          </div>
        </Panel>

        <Panel className="card">
          <div className="container">
            <h5 className="moduleHeading">Add Module</h5>
            <div className="box">
              <Glyphicon glyph="plus" />
            </div>
          </div>
        </Panel>
      </div>
    );
  }
}

export default ModuleCard;
